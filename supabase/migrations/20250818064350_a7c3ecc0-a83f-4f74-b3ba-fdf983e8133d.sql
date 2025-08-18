-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'teacher', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  instructor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  price DECIMAL(10,2) DEFAULT 0,
  level TEXT NOT NULL DEFAULT 'beginner' CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  category TEXT NOT NULL,
  duration_hours INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create lessons table
CREATE TABLE public.lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  video_type TEXT DEFAULT 'youtube' CHECK (video_type IN ('youtube', 'vimeo', 'direct')),
  duration_minutes INTEGER DEFAULT 0,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_preview BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quizzes table
CREATE TABLE public.quizzes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  passing_score INTEGER DEFAULT 70,
  time_limit_minutes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quiz questions table
CREATE TABLE public.quiz_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  question_type TEXT NOT NULL DEFAULT 'multiple_choice' CHECK (question_type IN ('multiple_choice', 'true_false', 'short_answer')),
  options JSONB, -- Array of options for multiple choice
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  progress DECIMAL(5,2) DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(student_id, course_id)
);

-- Create lesson progress table
CREATE TABLE public.lesson_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE,
  watch_time_seconds INTEGER DEFAULT 0,
  UNIQUE(student_id, lesson_id)
);

-- Create quiz attempts table
CREATE TABLE public.quiz_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  score DECIMAL(5,2),
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  answers JSONB NOT NULL, -- Store student answers
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for courses
CREATE POLICY "Anyone can view published courses" ON public.courses FOR SELECT USING (is_published = true OR instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Teachers can create courses" ON public.courses FOR INSERT WITH CHECK (instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid() AND role = 'teacher'));
CREATE POLICY "Teachers can update their own courses" ON public.courses FOR UPDATE USING (instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Teachers can delete their own courses" ON public.courses FOR DELETE USING (instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

-- Create RLS policies for lessons
CREATE POLICY "Users can view lessons of published courses or their own courses" ON public.lessons FOR SELECT USING (
  course_id IN (
    SELECT id FROM public.courses 
    WHERE is_published = true 
    OR instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);
CREATE POLICY "Teachers can manage lessons of their courses" ON public.lessons FOR ALL USING (
  course_id IN (
    SELECT id FROM public.courses 
    WHERE instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);

-- Create RLS policies for quizzes
CREATE POLICY "Users can view quizzes of accessible lessons" ON public.quizzes FOR SELECT USING (
  lesson_id IN (
    SELECT l.id FROM public.lessons l
    JOIN public.courses c ON l.course_id = c.id
    WHERE c.is_published = true 
    OR c.instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);
CREATE POLICY "Teachers can manage quizzes of their lessons" ON public.quizzes FOR ALL USING (
  lesson_id IN (
    SELECT l.id FROM public.lessons l
    JOIN public.courses c ON l.course_id = c.id
    WHERE c.instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);

-- Create RLS policies for quiz questions
CREATE POLICY "Users can view questions of accessible quizzes" ON public.quiz_questions FOR SELECT USING (
  quiz_id IN (
    SELECT q.id FROM public.quizzes q
    JOIN public.lessons l ON q.lesson_id = l.id
    JOIN public.courses c ON l.course_id = c.id
    WHERE c.is_published = true 
    OR c.instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);
CREATE POLICY "Teachers can manage questions of their quizzes" ON public.quiz_questions FOR ALL USING (
  quiz_id IN (
    SELECT q.id FROM public.quizzes q
    JOIN public.lessons l ON q.lesson_id = l.id
    JOIN public.courses c ON l.course_id = c.id
    WHERE c.instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);

-- Create RLS policies for enrollments
CREATE POLICY "Students can view their own enrollments" ON public.enrollments FOR SELECT USING (student_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Students can enroll in courses" ON public.enrollments FOR INSERT WITH CHECK (student_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Teachers can view enrollments for their courses" ON public.enrollments FOR SELECT USING (
  course_id IN (
    SELECT id FROM public.courses 
    WHERE instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);

-- Create RLS policies for lesson progress
CREATE POLICY "Students can view and update their own progress" ON public.lesson_progress FOR ALL USING (student_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Teachers can view progress for their courses" ON public.lesson_progress FOR SELECT USING (
  lesson_id IN (
    SELECT l.id FROM public.lessons l
    JOIN public.courses c ON l.course_id = c.id
    WHERE c.instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);

-- Create RLS policies for quiz attempts
CREATE POLICY "Students can view and create their own attempts" ON public.quiz_attempts FOR ALL USING (student_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Teachers can view attempts for their quizzes" ON public.quiz_attempts FOR SELECT USING (
  quiz_id IN (
    SELECT q.id FROM public.quizzes q
    JOIN public.lessons l ON q.lesson_id = l.id
    JOIN public.courses c ON l.course_id = c.id
    WHERE c.instructor_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
  )
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON public.lessons FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_quizzes_updated_at BEFORE UPDATE ON public.quizzes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data ->> 'role', 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for new user profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();