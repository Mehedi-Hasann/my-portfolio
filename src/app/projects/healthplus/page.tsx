import CTA from "@/components/case-study/CTA";
import FeatureCard from "@/components/case-study/FeatureCard";
import Hero from "@/components/case-study/Hero";
import Section from "@/components/case-study/Section";
import TechBadge from "@/components/case-study/TechBadge";
import TwoColumn from "@/components/case-study/TwoColumn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/case-study/ImageSlider";
import Image from "next/image";

export default function MediStoreCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 space-y-32">
        <Hero
          title="HealthPlus Family"
          subtitle="An enterprise-grade online medicine shop with role-based access for Customers, Sellers, and Admins."
          liveLink="https://medi-store-one.vercel.app/"
          githubLink="https://github.com/Mehedi-Hasann/MediStore-Frontend"
        />

        {/* Mockup Section - Image Slider */}
        <ImageSlider 
          images={[
            { src: "/home.png", alt: "Home Page" },
            { src: "/shop.png", alt: "Shop Page" },
            { src: "/about.png", alt: "About Page" },
            { src: "/category.png", alt: "Category Page" },
            { src: "/contact.png", alt: "Contact Page" },
          ]}
        />

        <Section title="Overview">
          <div className="space-y-6 max-w-4xl">
            <p>
              HealthPlus (MediStore) is a comprehensive pharmaceutical e-commerce solution built to streamline the process of buying and selling medications online. The platform bridges the gap between authorized sellers and customers, providing a secure, regulated, and user-friendly environment.
            </p>
            <p>
              The project was born out of the need for a centralized, reliable digital marketplace for healthcare products, ensuring that users can access essential medicines with confidence while sellers have robust tools to manage their inventory.
            </p>
          </div>
        </Section>

        <TwoColumn
          leftTitle="The Challenges"
          rightTitle="The Solution"
          leftItems={[
            "Handling sensitive medical product data securely",
            "Complex role-based permissions (Admin vs Seller vs Customer)",
            "Real-time inventory management and order tracking",
            "Secure payment processing with transaction verification",
            "Managing large-scale relational data with PostgreSQL"
          ]}
          rightItems={[
            "Implemented JWT-based authentication with high security standards",
            "Developed a robust RBAC system with middleware protection",
            "Integrated Stripe for seamless, encrypted payment flows",
            "Utilized Prisma ORM for type-safe, efficient database queries",
            "Built a responsive, accessible UI with Next.js and Tailwind CSS"
          ]}
        />

        <Section title="Architecture & Tech Stack">
          <div className="space-y-10">
            <p className="max-w-3xl">
              I chose a modern, high-performance stack to ensure scalability and developer productivity. The frontend leverages Next.js for its superior SEO and performance, while the backend utilizes Express for its flexibility.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Prisma ORM",
                "Stripe API",
                "JWT Auth",
                "Better Auth",
                "Tailwind CSS",
                "Framer Motion",
                "Zod",
                "TanStack Query"
              ].map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </Section>

        <Section title="Core Capabilities">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Role-Based Dashboard" 
              desc="Dedicated interfaces for Admins (system control), Sellers (inventory management), and Customers (shopping experience)." 
            />
            <FeatureCard 
              title="Secure Checkout" 
              desc="Integrated Stripe payment gateway with webhook support for real-time order confirmation and security." 
            />
            <FeatureCard 
              title="Inventory Tracking" 
              desc="Sellers can easily add, update, and track stock levels with automated alerts and category management." 
            />
            <FeatureCard 
              title="Order History" 
              desc="Complete transparency for customers with detailed order tracking, invoice generation, and status updates." 
            />
            <FeatureCard 
              title="Type-Safe API" 
              desc="End-to-end type safety using TypeScript and Zod validation, reducing runtime errors and improving reliability." 
            />
            <FeatureCard 
              title="Modern UX" 
              desc="Blazing fast navigation with Next.js App Router and smooth, premium animations using Framer Motion." 
            />
          </div>
        </Section>

        <CTA 
          liveLink="https://medi-store-one.vercel.app/" 
          githubLink="https://github.com/Mehedi-Hasann/MediStore-Frontend" 
        />
      </div>

      <Footer />
    </main>
  );
}