import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, DollarSign, Building, Clock } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Mathematics Teacher",
    school: "Alliance High School",
    location: "Nairobi",
    type: "Full-time",
    salary: "KES 80,000 - 120,000",
    postedDate: "2 days ago",
    subjects: ["Mathematics", "Further Mathematics"],
    level: "High School",
    requirements: ["Bachelor's in Mathematics/Education", "5+ years experience", "TSC certification"],
    description: "We are seeking a passionate mathematics teacher to join our team and inspire students in advanced mathematics concepts."
  },
  {
    id: 2,
    title: "CBC Science Teacher (Grade 4-6)",
    school: "Brookhouse School",
    location: "Nairobi",
    type: "Full-time",
    salary: "KES 60,000 - 90,000",
    postedDate: "1 week ago",
    subjects: ["Integrated Science", "STEM"],
    level: "Primary",
    requirements: ["Bachelor's in Science/Education", "CBC training", "Creative teaching methods"],
    description: "Join our dynamic team to teach science using innovative methods and hands-on learning approaches."
  },
  {
    id: 3,
    title: "English Literature Teacher",
    school: "Starehe Boys Centre",
    location: "Nairobi",
    type: "Full-time",
    salary: "KES 70,000 - 100,000",
    postedDate: "3 days ago",
    subjects: ["English Literature", "Creative Writing"],
    level: "High School",
    requirements: ["Master's in English/Literature", "IGCSE/IB experience preferred", "Strong communication skills"],
    description: "Teach English Literature to motivated students and help them develop critical thinking and writing skills."
  },
  {
    id: 4,
    title: "Computer Studies Teacher",
    school: "Technical Institute - Mombasa",
    location: "Mombasa",
    type: "Part-time",
    salary: "KES 40,000 - 60,000",
    postedDate: "5 days ago",
    subjects: ["Computer Studies", "Programming", "Digital Literacy"],
    level: "Technical",
    requirements: ["Bachelor's in Computer Science/IT", "Programming experience", "Technical certification"],
    description: "Teach computer studies and programming to technical students with focus on practical skills development."
  },
  {
    id: 5,
    title: "Kiswahili Teacher",
    school: "Moi Girls High School",
    location: "Eldoret",
    type: "Full-time",
    salary: "KES 55,000 - 80,000",
    postedDate: "1 day ago",
    subjects: ["Kiswahili", "Literature"],
    level: "High School",
    requirements: ["Bachelor's in Kiswahili/Education", "Native speaker preferred", "Cultural knowledge"],
    description: "Inspire students to appreciate Kiswahili language and literature while maintaining high academic standards."
  },
  {
    id: 6,
    title: "Chemistry Lab Instructor",
    school: "University of Nairobi",
    location: "Nairobi",
    type: "Contract",
    salary: "KES 90,000 - 130,000",
    postedDate: "4 days ago",
    subjects: ["Chemistry", "Laboratory Skills"],
    level: "University",
    requirements: ["Master's in Chemistry", "Lab safety certification", "Research experience"],
    description: "Supervise chemistry laboratory sessions and guide undergraduate students in practical experiments."
  }
];

export const JobsPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Teaching{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exciting teaching positions across Kenya and advance your educational career.
          </p>
        </div>

        {/* Search & Quick Stats */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-2 p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search job titles, schools, or subjects..." className="pl-10" />
            </div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Active Jobs</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-secondary mb-1">150+</div>
            <div className="text-sm text-muted-foreground">Schools Hiring</div>
          </Card>
        </div>

        {/* Filter Options */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <select className="w-full border-none bg-transparent text-sm focus:outline-none">
              <option>All Locations</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
              <option>Kisumu</option>
              <option>Eldoret</option>
            </select>
          </Card>
          <Card className="p-4">
            <select className="w-full border-none bg-transparent text-sm focus:outline-none">
              <option>All Job Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Temporary</option>
            </select>
          </Card>
          <Card className="p-4">
            <select className="w-full border-none bg-transparent text-sm focus:outline-none">
              <option>All Levels</option>
              <option>Primary</option>
              <option>High School</option>
              <option>University</option>
              <option>Technical</option>
            </select>
          </Card>
          <Card className="p-4">
            <select className="w-full border-none bg-transparent text-sm focus:outline-none">
              <option>All Subjects</option>
              <option>Mathematics</option>
              <option>Sciences</option>
              <option>Languages</option>
              <option>Arts</option>
            </select>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="space-y-6 mb-12">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{job.school}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.postedDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="secondary">{job.type}</Badge>
                      <Badge variant="outline">{job.level}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-foreground">Subjects: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {job.subjects.map((subject) => (
                          <Badge key={subject} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Requirements: </span>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center space-x-2 text-lg font-bold text-foreground mb-2">
                      <DollarSign className="h-5 w-5 text-success" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="hero" className="w-full">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Save Job
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground text-center lg:text-left">
                    Posted {job.postedDate}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Job Alerts CTA */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Never Miss an Opportunity</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Set up job alerts and get notified when new teaching positions matching your preferences are posted.
          </p>
          <Button variant="hero" size="lg">
            Create Job Alert
          </Button>
        </Card>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">Load More Jobs</Button>
        </div>
      </div>
    </div>
  );
};