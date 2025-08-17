import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Play, Clock, Users, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Complete KCSE Mathematics Mastery",
    instructor: "Dr. Sarah Mwangi",
    rating: 4.9,
    students: 1247,
    duration: "12 hours",
    price: 4500,
    originalPrice: 6000,
    category: "Mathematics",
    level: "KCSE",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
    description: "Master all KCSE mathematics topics with comprehensive video lessons and practice tests."
  },
  {
    id: 2,
    title: "CBC Grade 7 Science Fundamentals",
    instructor: "James Kiprotich",
    rating: 4.8,
    students: 892,
    duration: "8 hours",
    price: 3200,
    originalPrice: 4000,
    category: "Science",
    level: "CBC",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop",
    description: "Build strong foundations in CBC science with hands-on experiments and clear explanations."
  },
  {
    id: 3,
    title: "IGCSE English Literature Excellence",
    instructor: "Grace Wanjiku",
    rating: 4.9,
    students: 654,
    duration: "15 hours",
    price: 5500,
    originalPrice: 7000,
    category: "English",
    level: "IGCSE",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
    description: "Excel in IGCSE English Literature with detailed text analysis and exam techniques."
  },
  {
    id: 4,
    title: "IB Chemistry Complete Guide",
    instructor: "Ahmed Hassan",
    rating: 4.7,
    students: 423,
    duration: "20 hours",
    price: 7200,
    originalPrice: 9000,
    category: "Chemistry",
    level: "IB",
    image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=300&h=200&fit=crop",
    description: "Comprehensive IB Chemistry course covering all syllabus requirements with lab simulations."
  },
  {
    id: 5,
    title: "Kiswahili Mastery for All Levels",
    instructor: "Fatuma Ochieng",
    rating: 4.8,
    students: 789,
    duration: "10 hours",
    price: 3800,
    originalPrice: 4500,
    category: "Kiswahili",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop",
    description: "Master Kiswahili grammar, literature, and composition for all curriculum levels."
  },
  {
    id: 6,
    title: "Computer Studies & Programming",
    instructor: "David Mukwana",
    rating: 4.9,
    students: 1156,
    duration: "18 hours",
    price: 6500,
    originalPrice: 8000,
    category: "Computer Studies",
    level: "CBC/IGCSE",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop",
    description: "Learn programming fundamentals, algorithms, and computer applications for modern curricula."
  }
];

export const CoursesPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Expert{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from Kenya's top educators with comprehensive courses designed for success.
          </p>
        </div>

        {/* Search & Stats */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-2 p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search courses..." className="pl-10" />
            </div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-1">2,000+</div>
            <div className="text-sm text-muted-foreground">Courses Available</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-secondary mb-1">50,000+</div>
            <div className="text-sm text-muted-foreground">Students Enrolled</div>
          </Card>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="hero" size="sm">All Courses</Button>
          <Button variant="outline" size="sm">Mathematics</Button>
          <Button variant="outline" size="sm">Sciences</Button>
          <Button variant="outline" size="sm">Languages</Button>
          <Button variant="outline" size="sm">CBC</Button>
          <Button variant="outline" size="sm">IGCSE</Button>
          <Button variant="outline" size="sm">IB</Button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm" className="bg-background/90 hover:bg-background">
                    <Play className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {course.level}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="text-sm text-muted-foreground">
                  by <span className="font-medium text-foreground">{course.instructor}</span>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-foreground">
                        KES {course.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        KES {course.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-success font-medium">
                      Save {Math.round((1 - course.price / course.originalPrice) * 100)}%
                    </div>
                  </div>
                  <Button variant="hero" size="sm">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">Load More Courses</Button>
        </div>
      </div>
    </div>
  );
};