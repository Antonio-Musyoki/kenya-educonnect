import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MessageCircle, 
  CreditCard, 
  GraduationCap,
  UserPlus,
  Upload,
  DollarSign,
  Star
} from "lucide-react";

const studentSteps = [
  {
    icon: Search,
    step: "1",
    title: "Search & Discover",
    description: "Browse verified tutors by subject, curriculum, location, and availability. Use filters to find the perfect match."
  },
  {
    icon: MessageCircle,
    step: "2", 
    title: "Connect & Communicate",
    description: "Chat with tutors, review their profiles, and schedule your first lesson. Ask questions and set expectations."
  },
  {
    icon: CreditCard,
    step: "3",
    title: "Book & Pay Securely",
    description: "Book lessons and pay safely using M-PESA, PayPal, or card payments. All transactions are protected."
  },
  {
    icon: GraduationCap,
    step: "4",
    title: "Learn & Succeed",
    description: "Attend your lessons, track progress, and achieve your academic goals with expert guidance."
  }
];

const tutorSteps = [
  {
    icon: UserPlus,
    step: "1",
    title: "Create Your Profile",
    description: "Sign up and create a comprehensive profile showcasing your qualifications, experience, and teaching style."
  },
  {
    icon: Upload,
    step: "2",
    title: "Get Verified",
    description: "Upload your credentials and complete our verification process to build trust with potential students."
  },
  {
    icon: MessageCircle,
    step: "3",
    title: "Connect with Students",
    description: "Receive booking requests, communicate with students, and schedule lessons that fit your availability."
  },
  {
    icon: DollarSign,
    step: "4",
    title: "Earn & Grow",
    description: "Teach students, sell courses, and build your reputation while earning a stable income."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Teachers Hub{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Whether you're looking for a tutor or want to become one, 
            our platform makes it easy to connect and succeed.
          </p>
        </div>

        {/* Tabs for Students vs Tutors */}
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="students" className="text-base">For Students</TabsTrigger>
            <TabsTrigger value="tutors" className="text-base">For Tutors</TabsTrigger>
          </TabsList>

          <TabsContent value="students">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {studentSteps.map((step, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < studentSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg">
                Find Your Perfect Tutor
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="tutors">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tutorSteps.map((step, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < tutorSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="secondary" size="lg">
                Start Teaching Today
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Success Story */}
        <div className="mt-20">
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/5 border-primary/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground italic">
                  "Teachers Hub Kenya helped me find the perfect Chemistry tutor for my KCSE preparation. 
                  My grades improved from C+ to A- in just 3 months!"
                </blockquote>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">Sarah Mwangi</div>
                  <div className="text-sm text-muted-foreground">Alliance Girls High School</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground italic">
                  "As a tutor, this platform has been amazing. I've earned over KES 150,000 
                  in my first 6 months while helping students achieve their dreams."
                </blockquote>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">Dr. James Kiprotich</div>
                  <div className="text-sm text-muted-foreground">Mathematics Tutor</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Success Rate</div>
                <div className="text-muted-foreground">
                  Students see grade improvements within 3 months
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};