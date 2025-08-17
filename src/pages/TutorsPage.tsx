import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin, Clock, BookOpen, CheckCircle } from "lucide-react";

const tutors = [
  {
    id: 1,
    name: "Dr. Sarah Mwangi",
    subjects: ["Mathematics", "Physics"],
    curriculum: ["CBC", "IGCSE"],
    rating: 4.9,
    reviews: 127,
    hourlyRate: 2500,
    location: "Nairobi",
    availability: "Available",
    verified: true,
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1494790108755-2616c0e69d6e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "James Kiprotich",
    subjects: ["Chemistry", "Biology"],
    curriculum: ["CBC", "8-4-4"],
    rating: 4.8,
    reviews: 89,
    hourlyRate: 2200,
    location: "Eldoret",
    availability: "Available",
    verified: true,
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Grace Wanjiku",
    subjects: ["English", "Kiswahili"],
    curriculum: ["CBC", "IGCSE", "IB"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 2000,
    location: "Nakuru",
    availability: "Busy",
    verified: true,
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    subjects: ["Computer Studies", "Mathematics"],
    curriculum: ["CBC", "IGCSE"],
    rating: 4.7,
    reviews: 73,
    hourlyRate: 2800,
    location: "Mombasa",
    availability: "Available",
    verified: true,
    experience: "5 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export const TutorsPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tutor
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our verified tutors and find the perfect match for your learning needs.
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="p-6 mb-8">
          <div className="grid lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by subject or name..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="sciences">Sciences</SelectItem>
                <SelectItem value="kiswahili">Kiswahili</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Curriculum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cbc">CBC</SelectItem>
                <SelectItem value="igcse">IGCSE</SelectItem>
                <SelectItem value="ib">IB</SelectItem>
                <SelectItem value="8-4-4">8-4-4</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nairobi">Nairobi</SelectItem>
                <SelectItem value="mombasa">Mombasa</SelectItem>
                <SelectItem value="kisumu">Kisumu</SelectItem>
                <SelectItem value="nakuru">Nakuru</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Results */}
        <div className="grid lg:grid-cols-2 gap-6">
          {tutors.map((tutor) => (
            <Card key={tutor.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex space-x-4">
                <div className="relative">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {tutor.verified && (
                    <CheckCircle className="absolute -bottom-1 -right-1 h-6 w-6 text-success bg-background rounded-full" />
                  )}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{tutor.name}</h3>
                    <p className="text-sm text-muted-foreground">{tutor.experience} experience</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="font-medium">{tutor.rating}</span>
                      <span className="text-sm text-muted-foreground">({tutor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{tutor.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-foreground">Subjects: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tutor.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Curriculum: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tutor.curriculum.map((curr) => (
                          <Badge key={curr} variant="outline" className="text-xs">
                            {curr}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-foreground">
                        KES {tutor.hourlyRate.toLocaleString()}/hr
                      </div>
                      <div className={`flex items-center space-x-1 text-sm ${
                        tutor.availability === 'Available' ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        <Clock className="h-3 w-3" />
                        <span>{tutor.availability}</span>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button variant="hero" size="sm" disabled={tutor.availability !== 'Available'}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">Load More Tutors</Button>
        </div>
      </div>
    </div>
  );
};