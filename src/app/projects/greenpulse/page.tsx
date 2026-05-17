import CTA from "@/components/case-study/CTA";
import FeatureCard from "@/components/case-study/FeatureCard";
import Hero from "@/components/case-study/Hero";
import Section from "@/components/case-study/Section";
import TechBadge from "@/components/case-study/TechBadge";
import TwoColumn from "@/components/case-study/TwoColumn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/case-study/ImageSlider";

export const metadata = {
  title: "Green Pulse — Case Study | Mehedi Hasan",
  description:
    "A deep dive into the architecture and engineering behind Green Pulse — a full-stack environmental community platform with challenges, progress tracking, and role-based admin dashboards.",
};

export default function GreenPulseCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 space-y-32">
        <Hero
          title="Green Pulse"
          subtitle="A full-stack environmental community platform featuring interactive eco-challenges, member progress tracking, and a robust multi-role admin system."
          liveLink="https://green-pulse-frontend.vercel.app/"
          githubLink="https://github.com/Mehedi-Hasann/green-pulse-frontend"
        />

        {/* Mockup Section - Image Slider */}
        <ImageSlider
          images={[
            { src: "/greenpulse.png", alt: "Home Page" },
            { src: "/gp_challenges.png", alt: "Challenges Page" },
            { src: "/gp_about.png", alt: "About Page" },
          ]}
        />

        <Section title="Overview">
          <div className="space-y-6 max-w-4xl">
            <p>
              Green Pulse is a community-driven environmental platform designed
              to motivate individuals to take real-world eco-friendly actions.
              Users can browse, join, and complete sustainability challenges —
              earning points and tracking their environmental impact over time.
            </p>
            <p>
              The platform is backed by a robust, role-based architecture that
              serves three distinct audiences: Members who engage with
              challenges, Admins who manage platform content, and Super Admins
              who oversee the entire operation with analytics and user
              management capabilities.
            </p>
            <p>
              The project was deployed with a decoupled architecture — the
              Next.js frontend is hosted on Vercel and the Express.js + Prisma
              backend is deployed on Render, communicating via a secure REST
              API.
            </p>
          </div>
        </Section>

        <TwoColumn
          leftTitle="The Challenges"
          rightTitle="The Solution"
          leftItems={[
            "Implementing secure, multi-role authentication for Members, Admins, and Super Admins",
            "Building a dynamic challenge system with real-time submission and approval workflows",
            "Visualizing platform-wide analytics in an intuitive admin dashboard",
            "Managing file uploads (profile images, challenge proofs) in a production environment",
            "Ensuring stable deployment across two separate cloud providers (Vercel + Render)",
          ]}
          rightItems={[
            "Implemented JWT-based auth with role-specific middleware and protected routes in Next.js",
            "Built a full submission lifecycle: member submits → admin reviews → super admin approves",
            "Integrated Recharts for interactive data visualizations across admin dashboards",
            "Used FormData-based API calls to handle file uploads securely with Express.js",
            "Resolved Prisma client output path issues and configured tsup for a stable production CJS build",
          ]}
        />

        <Section title="Architecture & Tech Stack">
          <div className="space-y-10">
            <p className="max-w-3xl">
              Green Pulse uses a modern, decoupled full-stack architecture.
              Next.js powers the frontend with App Router for nested layouts and
              server-side data fetching, while the backend is a standalone
              Express.js API built with TypeScript and Prisma ORM, deployed
              independently on Render.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Next.js 15",
                "TypeScript",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Prisma ORM",
                "JWT Auth",
                "Recharts",
                "Tailwind CSS",
                "Framer Motion",
                "Zod",
                "TanStack Query",
                "Vercel",
                "Render",
              ].map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </Section>

        <Section title="Core Capabilities">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Multi-Role Access Control"
              desc="Granular role-based access for Members, Admins, and Super Admins — each with dedicated dashboards, sidebars, and API permission layers."
            />
            <FeatureCard
              title="Eco-Challenge System"
              desc="Members can browse, join, and submit proof of completion for eco-challenges. Admins review and approve submissions through a streamlined workflow."
            />
            <FeatureCard
              title="Admin Analytics Dashboard"
              desc="Super Admins get an at-a-glance view of platform activity with Recharts visualizations for user growth, challenge completions, and submission trends."
            />
            <FeatureCard
              title="Member Progress Tracking"
              desc="Members track their earned points, completed challenges, and overall environmental impact through a personalized dashboard."
            />
            <FeatureCard
              title="File Upload Support"
              desc="Challenge submission proofs and profile images are handled via secure FormData uploads, processed by the Express.js backend."
            />
            <FeatureCard
              title="Production-Ready Deployment"
              desc="Frontend on Vercel with edge-optimized delivery and backend on Render with a TypeScript-compiled CJS bundle and live PostgreSQL database."
            />
          </div>
        </Section>

        <Section title="Key Engineering Decisions">
          <div className="space-y-6 max-w-4xl">
            <p>
              One of the most technically involved aspects of the project was
              resolving Prisma&apos;s custom output path configuration in a
              bundled TypeScript production build. By configuring{" "}
              <code className="bg-on-surface/10 px-2 py-0.5 rounded text-sm font-mono">
                tsup
              </code>{" "}
              to treat the Prisma client as external and setting the correct{" "}
              <code className="bg-on-surface/10 px-2 py-0.5 rounded text-sm font-mono">
                NODE_PATH
              </code>{" "}
              on Render, the backend achieved a stable, production-grade CJS
              output.
            </p>
            <p>
              The submission approval workflow introduced real-world state
              management challenges — solved by using TanStack Query with
              optimistic cache invalidation, ensuring the UI stays in sync with
              the backend without full page reloads.
            </p>
            <p>
              Role-based routing in Next.js 15 was implemented via a{" "}
              <code className="bg-on-surface/10 px-2 py-0.5 rounded text-sm font-mono">
                proxy.ts
              </code>{" "}
              middleware (replacing the deprecated{" "}
              <code className="bg-on-surface/10 px-2 py-0.5 rounded text-sm font-mono">
                middleware.ts
              </code>{" "}
              pattern), guarding all dashboard routes based on the decoded JWT
              role claim.
            </p>
          </div>
        </Section>

        <CTA
          liveLink="https://green-pulse-frontend.vercel.app/"
          githubLink="https://github.com/Mehedi-Hasann/green-pulse-frontend"
        />
      </div>

      <Footer />
    </main>
  );
}
