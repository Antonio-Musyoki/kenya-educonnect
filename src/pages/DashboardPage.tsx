import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navigation } from '@/components/ui/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Profile {
  id: string;
  full_name: string;
  role: string;
  avatar_url?: string;
  bio?: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
  price: number;
  level: string;
  category: string;
  is_published: boolean;
  created_at: string;
}

interface Enrollment {
  id: string;
  progress: number;
  enrolled_at: string;
  course: Course;
}

export const DashboardPage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchUserData();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (data) {
      setProfile(data);
    }
  };

  const fetchUserData = async () => {
    if (!user) return;

    try {
      // Get user profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileData?.role === 'teacher') {
        // Fetch courses for teachers
        const { data: coursesData } = await supabase
          .from('courses')
          .select('*')
          .eq('instructor_id', profileData.id)
          .order('created_at', { ascending: false });

        setCourses(coursesData || []);
      } else {
        // Fetch enrollments for students
        const { data: enrollmentsData } = await supabase
          .from('enrollments')
          .select(`
            *,
            course:courses(*)
          `)
          .eq('student_id', profileData.id)
          .order('enrolled_at', { ascending: false });

        setEnrollments(enrollmentsData || []);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  const isTeacher = profile?.role === 'teacher';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {profile?.full_name || user?.email}!
          </h1>
          <p className="text-muted-foreground">
            {isTeacher ? 'Manage your courses and track student progress' : 'Continue your learning journey'}
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isTeacher ? 'Total Courses' : 'Enrolled Courses'}
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isTeacher ? courses.length : enrollments.length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isTeacher ? 'Published Courses' : 'Completed'}
              </CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isTeacher 
                  ? courses.filter(c => c.is_published).length 
                  : enrollments.filter(e => e.progress === 100).length
                }
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isTeacher ? 'Total Students' : 'In Progress'}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isTeacher 
                  ? '0' // TODO: Calculate total enrollments
                  : enrollments.filter(e => e.progress > 0 && e.progress < 100).length
                }
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Progress
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isTeacher 
                  ? '85%' // TODO: Calculate teacher stats
                  : enrollments.length > 0 
                    ? Math.round(enrollments.reduce((acc, e) => acc + e.progress, 0) / enrollments.length) + '%'
                    : '0%'
                }
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue={isTeacher ? "courses" : "enrolled"} className="w-full">
          <TabsList>
            {isTeacher ? (
              <>
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
              </>
            ) : (
              <>
                <TabsTrigger value="enrolled">My Courses</TabsTrigger>
                <TabsTrigger value="browse">Browse Courses</TabsTrigger>
              </>
            )}
          </TabsList>

          {isTeacher ? (
            <>
              <TabsContent value="courses" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <Link to="/create-course">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Course
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            course.is_published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {course.is_published ? 'Published' : 'Draft'}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ${course.price}
                          </span>
                        </div>
                        <Link to={`/course/${course.id}/edit`}>
                          <Button variant="outline" className="w-full">
                            Edit Course
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="students">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Student Analytics</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Coming Soon</CardTitle>
                      <CardDescription>
                        Student analytics and progress tracking will be available here.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>
            </>
          ) : (
            <>
              <TabsContent value="enrolled" className="space-y-6">
                <h2 className="text-2xl font-bold">My Learning</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrollments.map((enrollment) => (
                    <Card key={enrollment.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{enrollment.course.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {enrollment.course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{enrollment.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${enrollment.progress}%` }}
                            />
                          </div>
                        </div>
                        <Link to={`/course/${enrollment.course.id}/learn`}>
                          <Button className="w-full">
                            {enrollment.progress === 0 ? 'Start Learning' : 'Continue'}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="browse">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Browse Courses</h2>
                  <Link to="/courses">
                    <Button>View All Courses</Button>
                  </Link>
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
};