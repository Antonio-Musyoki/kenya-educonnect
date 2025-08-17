import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number (Optional)
                </label>
                <Input id="phone" placeholder="+254 700 123 456" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select 
                  id="subject" 
                  className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a subject</option>
                  <option value="tutor-inquiry">Finding a Tutor</option>
                  <option value="tutor-application">Becoming a Tutor</option>
                  <option value="course-inquiry">Course Information</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you..."
                  rows={6}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">hello@teachershubkenya.co.ke</div>
                    <div className="text-sm text-muted-foreground">support@teachershubkenya.co.ke</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">+254 700 123 456</div>
                    <div className="text-sm text-muted-foreground">+254 733 456 789</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <div className="text-sm text-muted-foreground">
                      Teachers Hub Kenya<br />
                      Westlands Office Park<br />
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Support Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Support</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center & FAQs
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="text-lg font-semibold text-foreground mb-3">Emergency Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For urgent matters outside business hours, please call our emergency line:
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">+254 722 URGENT</div>
                <div className="text-xs text-muted-foreground">Available 24/7 for critical issues</div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">How do I find a qualified tutor?</h4>
                <p className="text-sm text-muted-foreground">
                  Use our search filters to find tutors by subject, curriculum, location, and availability. All our tutors are verified and rated by previous students.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">How much do tutoring sessions cost?</h4>
                <p className="text-sm text-muted-foreground">
                  Rates vary by tutor experience and subject. Most sessions range from KES 1,500 to KES 3,500 per hour. You can see each tutor's rate on their profile.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can I get a refund if I'm not satisfied?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer a satisfaction guarantee. If you're not happy with your first session, we'll refund your payment or help you find a different tutor.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">How do I become a tutor on your platform?</h4>
                <p className="text-sm text-muted-foreground">
                  Click "Become a Tutor" and complete our application process. You'll need to provide qualifications, experience details, and pass our verification process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-muted-foreground">
                  We accept M-PESA, PayPal, Visa, Mastercard, and bank transfers. All payments are secure and processed through encrypted channels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you offer online or in-person tutoring?</h4>
                <p className="text-sm text-muted-foreground">
                  Both! Many tutors offer flexible options including online sessions via video calls and in-person meetings at convenient locations.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};