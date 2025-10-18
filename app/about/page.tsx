import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import ModeToggle from "@/components/ModeToggle";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Rust",
    "Python",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "AI CHEF",
      duration: "Jun 2025 - Aug 2025",
      description:
        "Learned modern web development practices and contributed to client projects.",
    },
  ];

  const education = [
    {
      name: "Indian Institute of Information Technology, Kalyani",
      course: "B. Tech. | Computer Science and Engineering (CSE)",
      duration: "Aug 2023 - Present",
      grade: "CGPA: 9.5/10",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <nav className="flex items-center justify-center border rounded-full mt-5 gap-1">
        <Navbar />
        <ModeToggle />
      </nav>

      <main className="flex-1 container mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl max-w-xl text-muted-foreground mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="col-span-1">
            <CardHeader className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-centr">
                <Image
                  src={"/mefr.jpg"}
                  width={512}
                  height={512}
                  alt="avatar"
                  className="rounded-full"
                />
              </div>
              <CardTitle>Srijan Dhak</CardTitle>
              <CardDescription>Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Kalyani, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Available for work</span>
              </div>
              <div className="flex gap-2 pt-4">
                <Link href={"/cv/Srijan_Dhak_CV.pdf"} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </Link>
                <Link href={"mailto:srijandhak04@gmail.com"}>
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href={"https://github.com/srijxnnn"}>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href={"https://linkedin.com/in/srijandhak"}>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a passionate full-stack developer with the experience
                  of building modern web applications. I love turning complex
                  problems into simple, beautiful, and intuitive solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I believe in
                  continuous learning and staying up-to-date with the latest
                  industry trends.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My goal is to create applications that not only meet
                  requirements but exceed expectations in terms of user
                  experience, performance, and maintainability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{job.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{edu.name}</CardTitle>
                      <CardDescription className="text-lg">
                        {edu.course}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end justify-center gap-2">
                      <Badge variant="outline">{edu.duration}</Badge>
                      <Badge variant="secondary">{edu.grade}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/projects">View My Work</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      <Particles className="-z-50 fixed inset-0 h-full w-full" />
    </div>
  );
};

export default AboutPage;
