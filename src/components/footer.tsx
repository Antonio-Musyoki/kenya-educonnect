import { Button } from "@/components/ui/button";
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-background" />
                </div>
                <span className="text-xl font-bold">Teachers Hub Kenya</span>
              </div>
              <p className="text-background/80 leading-relaxed">
                Connecting Kenya's best educators with learners nationwide. 
                Quality education starts with great teachers.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Find Tutors</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Browse Courses</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Teaching Jobs</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Become a Tutor</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">How it Works</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Subjects */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Popular Subjects</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Mathematics</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">English</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sciences</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Kiswahili</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Computer Studies</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Business Studies</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-background/80">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-background/80">+254 700 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-background/80">hello@teachershubkenya.co.ke</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-md bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                  />
                  <Button variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Teachers Hub Kenya. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Cookie Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};