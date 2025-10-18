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
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import { Particles } from "@/components/ui/shadcn-io/particles";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and shadcn/ui. Features dark mode, smooth animations, and particle effects.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/srijxnnn/srijxn",
    live: "https://srijxn.vercel.app",
    featured: true,
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <nav className="flex items-center justify-center border rounded-full mt-5 gap-1">
        <Navbar />
        <ModeToggle />
      </nav>

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            A collection of projects I&apos;ve built using modern technologies and
            best practices.
          </p>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group max-w-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    width={1280}
                    height={720}
                    alt="project"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="mb-2 rounded-full">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/srijxnnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </main>
      <Footer />

      <Particles className="-z-50 fixed inset-0 h-full w-full" />
    </div>
  );
};

export default ProjectsPage;
