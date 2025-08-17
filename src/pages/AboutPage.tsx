import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Users, Award, BookOpen } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Teachers Hub Kenya
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform education in Kenya by connecting exceptional teachers 
            with eager learners, creating opportunities for growth, and building a stronger educational ecosystem.
          </p>
        </div>

        {/* Our Story */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-accent/10 to-primary/5">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2023, Teachers Hub Kenya emerged from a simple observation: Kenya has incredible 
                  educators, but connecting them with students who need their expertise was challenging.
                </p>
                <p>
                  Our founders, experienced educators themselves, recognized the need for a platform that 
                  would bridge this gap while maintaining the highest standards of quality and trust.
                </p>
                <p>
                  Today, we're proud to serve thousands of students, parents, and teachers across Kenya, 
                  facilitating meaningful educational connections and supporting academic success at every level.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">5,000+</div>
                <div className="text-sm text-muted-foreground">Verified Tutors</div>
              </Card>
              <Card className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">50,000+</div>
                <div className="text-sm text-muted-foreground">Students Served</div>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-8 w-8 text-success mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">47</div>
                <div className="text-sm text-muted-foreground">Counties Served</div>
              </Card>
            </div>
          </div>
        </Card>

        {/* Our Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to quality education in Kenya by connecting exceptional teachers 
              with learners, providing a trusted platform for educational excellence, and empowering 
              educators to share their knowledge and earn sustainable livelihoods.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A Kenya where every learner has access to exceptional education, every teacher can 
              thrive professionally, and educational opportunities are limitless regardless of 
              geographic or economic barriers.
            </p>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">
                We maintain the highest standards in everything we do, from tutor verification to platform security.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Community</h4>
              <p className="text-sm text-muted-foreground">
                We believe in building strong educational communities that support and uplift each other.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-success" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                We continuously innovate to improve the learning and teaching experience for all users.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Accessibility</h4>
              <p className="text-sm text-muted-foreground">
                We make quality education accessible to all, breaking down barriers to learning.
              </p>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <Card className="p-8 mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-foreground">Michael Wanjiku</h4>
              <p className="text-sm text-muted-foreground mb-2">CEO & Co-Founder</p>
              <p className="text-xs text-muted-foreground">
                Former Mathematics teacher with 15 years experience in Kenya's education sector.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c0e69d6e?w=150&h=150&fit=crop&crop=face"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-foreground">Grace Muthoni</h4>
              <p className="text-sm text-muted-foreground mb-2">CTO & Co-Founder</p>
              <p className="text-xs text-muted-foreground">
                Technology leader passionate about using tech to transform education in Africa.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Head of Education"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-foreground">Dr. James Kiprotich</h4>
              <p className="text-sm text-muted-foreground mb-2">Head of Education</p>
              <p className="text-xs text-muted-foreground">
                Education PhD with expertise in curriculum development and teacher training.
              </p>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Headquarters</div>
                    <div className="text-sm text-muted-foreground">Westlands, Nairobi, Kenya</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">+254 700 123 456</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">hello@teachershubkenya.co.ke</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Support Hours</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM EAT</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold text-foreground mb-4">Ready to Get Started?</h4>
              <p className="text-muted-foreground mb-6">
                Join thousands of students and teachers who are already part of the Teachers Hub Kenya community.
              </p>
              <div className="space-y-3">
                <Button variant="hero" size="lg" className="w-full lg:w-auto">
                  Find a Tutor
                </Button>
                <div className="text-sm text-muted-foreground">or</div>
                <Button variant="outline" size="lg" className="w-full lg:w-auto">
                  Become a Tutor
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};