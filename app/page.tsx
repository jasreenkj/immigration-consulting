import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Leo Star Immigration</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="#contact">Book Consultation</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Journey to Canada Starts Here!
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Leo Star Immigration provides expert guidance for all your
                    Canadian immigration needs. Let us help you navigate the
                    path to your new life in Canada.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#services">Our Services</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">
                      Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                alt="Canadian landscape with maple leaf"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=800"
                width="800"
              />
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Immigration Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer comprehensive immigration services tailored to your
                  specific needs and goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Express Entry</CardTitle>
                  <CardDescription>
                    Federal Skilled Worker Program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Profile creation and submission</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>CRS score optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Document preparation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Application submission</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Provincial Nominee</CardTitle>
                  <CardDescription>Provincial Nominee Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Provincial program selection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Eligibility assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Application preparation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Nomination support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Family Sponsorship</CardTitle>
                  <CardDescription>Spouse, Children, Parents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Sponsorship eligibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Relationship documentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Application filing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Interview preparation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Leo Star Immigration
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 10 years of experience in Canadian immigration, our
                  team of licensed consultants is dedicated to providing
                  personalized immigration solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                      Licensed RCIC Consultants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">High Success Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="font-medium">Multilingual Services</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Contact Our Team</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Leo Star Immigration Team"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our clients who successfully immigrated to Canada
                  with our help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Client"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg?height=40&width=40"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-semibold">Rajesh Patel</div>
                        <div className="text-sm text-muted-foreground">
                          Express Entry, 2023
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Leo Star Immigration made my Express Entry application
                      process smooth and stress-free. Their attention to detail
                      and expert guidance helped me secure PR status in just 6
                      months."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Client"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg?height=40&width=40"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-semibold">Maria Rodriguez</div>
                        <div className="text-sm text-muted-foreground">
                          Family Sponsorship, 2022
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I was able to sponsor my parents thanks to Leo Star
                      Immigration. Their team was compassionate and professional
                      throughout the entire process. We're now happily reunited
                      in Canada."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Client"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg?height=40&width=40"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-semibold">Ahmed Hassan</div>
                        <div className="text-sm text-muted-foreground">
                          Provincial Nominee, 2023
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The team at Leo Star helped me navigate the complex PNP
                      process. Their knowledge of provincial programs was
                      impressive, and they found the perfect pathway for my
                      skills and experience."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Client"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg?height=40&width=40"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-semibold">Li Wei</div>
                        <div className="text-sm text-muted-foreground">
                          Study Permit, 2022
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Getting my study permit was easier than I expected thanks
                      to Leo Star Immigration. They guided me through each step
                      and helped me prepare for my new academic journey in
                      Canada."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to start your Canadian immigration journey? Contact us for
                a free consultation.
              </p>
              <div className="space-y-4 py-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Immigration Avenue, Toronto, ON M5V 2K6</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (416) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>info@leostarimmigration.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 bg-background p-6 rounded-lg shadow-sm">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Free Immigration Assessment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and our team will contact you within
                  24 hours.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name">First name</label>
                    <input
                      id="first-name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name">Last name</label>
                    <input
                      id="last-name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service">Immigration Service</label>
                  <select
                    id="service"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    <option value="express-entry">Express Entry</option>
                    <option value="provincial-nominee">
                      Provincial Nominee Program
                    </option>
                    <option value="family-sponsorship">
                      Family Sponsorship
                    </option>
                    <option value="study-permit">Study Permit</option>
                    <option value="work-permit">Work Permit</option>
                    <option value="business-immigration">
                      Business Immigration
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us about your immigration goals"
                    rows={4}
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Leo Star Immigration</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 Leo Star Immigration. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
