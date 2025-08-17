import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  UserCheck, 
  ShoppingBag, 
  Briefcase, 
  Star, 
  Shield, 
  CreditCard,
  Search,
  GraduationCap,
  MapPin
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Verified Tutors",
    description: "All tutors are thoroughly vetted with qualifications verified and references checked.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: ShoppingBag,
    title: "Course Marketplace",
    description: "Purchase high-quality courses, materials, and resources from expert educators.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Briefcase,
    title: "Teaching Jobs",
    description: "Access exclusive teaching opportunities and job postings across Kenya.",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Search,
    title: "Smart Matching",
    description: "Find tutors by subject, curriculum (CBC, IGCSE, IB), location, and availability.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe transactions with M-PESA, PayPal, and card payment integration.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description: "Make informed decisions with authentic reviews from verified students.",
    color: "text-success",
    bgColor: "bg-success/10"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Quality Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student seeking excellent tutoring, a parent looking for the best education for your child, 
            or an educator wanting to share your expertise - we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
              <div className="space-y-4">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Features Highlight */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">100% Secure</h3>
              </div>
              <p className="text-muted-foreground">
                All transactions are protected with bank-level security. Your data and payments are completely safe.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Expert Quality</h3>
              </div>
              <p className="text-muted-foreground">
                Learn from qualified educators with proven track records and verified credentials.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-success/5 to-success/10 border-success/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-success" />
                <h3 className="text-2xl font-bold text-foreground">Kenya-Wide</h3>
              </div>
              <p className="text-muted-foreground">
                Connect with tutors across all counties in Kenya, from Nairobi to Mombasa and beyond.
              </p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};