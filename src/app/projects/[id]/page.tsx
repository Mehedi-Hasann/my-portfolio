import { projects } from "@/data/projects";
import CTA from "@/components/case-study/CTA";
import FeatureCard from "@/components/case-study/FeatureCard";
import Hero from "@/components/case-study/Hero";
import Section from "@/components/case-study/Section";
import TechBadge from "@/components/case-study/TechBadge";
import TwoColumn from "@/components/case-study/TwoColumn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/case-study/ImageSlider";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  
  if (!project) {
    return {
      title: "Project Not Found | Mehedi Hasan",
    };
  }

  return {
    title: `${project.title} — Case Study | Mehedi Hasan`,
    description: project.subtitle,
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 space-y-32">
        <Hero
          title={project.title}
          subtitle={project.subtitle}
          liveLink={project.liveLink}
          githubFrontend={project.githubFrontend}
          githubBackend={project.githubBackend}
        />

        {/* Mockup Section - Image Slider */}
        <ImageSlider images={project.images} />

        <Section title="Overview">
          <div className="space-y-6 max-w-4xl">
            {project.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <TwoColumn
          leftTitle="The Challenges"
          rightTitle="The Solution"
          leftItems={project.challenges}
          rightItems={project.solutions}
        />

        <Section title="Architecture & Tech Stack">
          <div className="space-y-10">
            <p className="max-w-3xl">
              I chose a modern, high-performance stack to ensure scalability and
              developer productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </Section>

        <Section title="Core Capabilities">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.capabilities.map((cap, idx) => (
              <FeatureCard key={idx} title={cap.title} desc={cap.desc} />
            ))}
          </div>
        </Section>

        {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
          <Section title="Key Engineering Decisions">
            <div className="space-y-6 max-w-4xl">
              {project.engineeringDecisions.map((decision, idx) => (
                <p key={idx}>{decision}</p>
              ))}
            </div>
          </Section>
        )}

        <CTA
          liveLink={project.liveLink}
          githubFrontend={project.githubFrontend}
          githubBackend={project.githubBackend}
        />
      </div>

      <Footer />
    </main>
  );
}
