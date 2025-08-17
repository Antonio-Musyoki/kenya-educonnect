import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import heroEducation from "@/assets/hero-education.jpg";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect with Kenya's{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Best Tutors
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Quality education starts with great teachers. Find verified tutors, purchase expert courses, and discover teaching opportunities across Kenya.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">5,000+</div>
                  <div className="text-sm text-muted-foreground">Verified Tutors</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">2,000+</div>
                  <div className="text-sm text-muted-foreground">Courses Available</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Find a Tutor
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Become a Tutor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Trusted by leading institutions:</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                <span>University of Nairobi</span>
                <span>•</span>
                <span>Strathmore University</span>
                <span>•</span>
                <span>Alliance High School</span>
                <span>•</span>
                <span>Brookhouse School</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroEducation}
                alt="Teachers Hub Kenya - Quality Education"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary to-secondary-light rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full opacity-15 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};