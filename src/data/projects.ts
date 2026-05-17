export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  tags: string[];
  image: string;
  liveLink: string;
  githubFrontend: string;
  githubBackend?: string;
  images: { src: string; alt: string }[];
  overview: string[];
  challenges: string[];
  solutions: string[];
  techStack: string[];
  capabilities: { title: string; desc: string }[];
  engineeringDecisions?: string[];
}

export const projects: Project[] = [
  {
    id: "healthplus",
    title: "HealthPlus Family",
    subtitle:
      "An enterprise-grade online medicine shop with role-based access for Customers, Sellers, and Admins.",
    desc: "An enterprise-grade online medicine shop with role-based access for Customers, Sellers, and Admins.",
    color: "from-blue-600 to-cyan-400",
    tags: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Better Auth", "Stripe"],
    image: "/home.png",
    liveLink: "https://medi-store-one.vercel.app/",
    githubFrontend: "https://github.com/Mehedi-Hasann/MediStore-Frontend",
    images: [
      { src: "/home.png", alt: "Home Page" },
      { src: "/shop.png", alt: "Shop Page" },
      { src: "/about.png", alt: "About Page" },
      { src: "/category.png", alt: "Category Page" },
      { src: "/contact.png", alt: "Contact Page" },
    ],
    overview: [
      "HealthPlus (MediStore) is a comprehensive pharmaceutical e-commerce solution built to streamline the process of buying and selling medications online. The platform bridges the gap between authorized sellers and customers, providing a secure, regulated, and user-friendly environment.",
      "The project was born out of the need for a centralized, reliable digital marketplace for healthcare products, ensuring that users can access essential medicines with confidence while sellers have robust tools to manage their inventory.",
    ],
    challenges: [
      "Handling sensitive medical product data securely",
      "Complex role-based permissions (Admin vs Seller vs Customer)",
      "Real-time inventory management and order tracking",
      "Secure payment processing with transaction verification",
      "Managing large-scale relational data with PostgreSQL",
    ],
    solutions: [
      "Implemented JWT-based authentication with high security standards",
      "Developed a robust RBAC system with middleware protection",
      "Integrated Stripe for seamless, encrypted payment flows",
      "Utilized Prisma ORM for type-safe, efficient database queries",
      "Built a responsive, accessible UI with Next.js and Tailwind CSS",
    ],
    techStack: [
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
      "TanStack Query",
    ],
    capabilities: [
      {
        title: "Role-Based Dashboard",
        desc: "Dedicated interfaces for Admins (system control), Sellers (inventory management), and Customers (shopping experience).",
      },
      {
        title: "Secure Checkout",
        desc: "Integrated Stripe payment gateway with webhook support for real-time order confirmation and security.",
      },
      {
        title: "Inventory Tracking",
        desc: "Sellers can easily add, update, and track stock levels with automated alerts and category management.",
      },
      {
        title: "Order History",
        desc: "Complete transparency for customers with detailed order tracking, invoice generation, and status updates.",
      },
      {
        title: "Type-Safe API",
        desc: "End-to-end type safety using TypeScript and Zod validation, reducing runtime errors and improving reliability.",
      },
      {
        title: "Modern UX",
        desc: "Blazing fast navigation with Next.js App Router and smooth, premium animations using Framer Motion.",
      },
    ],
  },
  {
    id: "greenpulse",
    title: "Green Pulse",
    subtitle:
      "A full-stack environmental community platform featuring interactive eco-challenges, member progress tracking, and a robust multi-role admin system.",
    desc: "A comprehensive environmental community platform featuring interactive challenges, user progress tracking and robust administrative dashboards.",
    color: "from-green-600 to-emerald-400",
    tags: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Recharts"],
    image: "/greenpulse.png",
    liveLink: "https://green-pulse-frontend.vercel.app/",
    githubFrontend: "https://github.com/Mehedi-Hasann/green-pulse-frontend",
    githubBackend: "https://github.com/Mehedi-Hasann/green_pulse_backend",
    images: [
      { src: "/greenpulse.png", alt: "Home Page" },
      { src: "/gp_challenges.png", alt: "Challenges Page" },
      { src: "/leaderboard.png", alt: "Leaderboard Page" },
    ],
    overview: [
      "Green Pulse is a community-driven environmental platform designed to motivate individuals to take real-world eco-friendly actions. Users can browse, join, and complete sustainability challenges — earning points and tracking their environmental impact over time.",
      "The platform is backed by a robust, role-based architecture that serves three distinct audiences: Members who engage with challenges, Admins who manage platform content, and Super Admins who oversee the entire operation with analytics and user management capabilities.",
      "The project was deployed with a decoupled architecture — the Next.js frontend is hosted on Vercel and the Express.js + Prisma backend is deployed on Render, communicating via a secure REST API.",
    ],
    challenges: [
      "Implementing secure, multi-role authentication for Members, Admins, and Super Admins",
      "Building a dynamic challenge system with real-time submission and approval workflows",
      "Visualizing platform-wide analytics in an intuitive admin dashboard",
      "Managing file uploads (profile images, challenge proofs) in a production environment",
      "Ensuring stable deployment across two separate cloud providers (Vercel + Render)",
    ],
    solutions: [
      "Implemented JWT-based auth with role-specific middleware and protected routes in Next.js",
      "Built a full submission lifecycle: member submits → admin reviews → super admin approves",
      "Integrated Recharts for interactive data visualizations across admin dashboards",
      "Used FormData-based API calls to handle file uploads securely with Express.js",
      "Resolved Prisma client output path issues and configured tsup for a stable production CJS build",
    ],
    techStack: [
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
    ],
    capabilities: [
      {
        title: "Multi-Role Access Control",
        desc: "Granular role-based access for Members, Admins, and Super Admins — each with dedicated dashboards, sidebars, and API permission layers.",
      },
      {
        title: "Eco-Challenge System",
        desc: "Members can browse, join, and submit proof of completion for eco-challenges. Admins review and approve submissions through a streamlined workflow.",
      },
      {
        title: "Admin Analytics Dashboard",
        desc: "Super Admins get an at-a-glance view of platform activity with Recharts visualizations for user growth, challenge completions, and submission trends.",
      },
      {
        title: "Member Progress Tracking",
        desc: "Members track their earned points, completed challenges, and overall environmental impact through a personalized dashboard.",
      },
      {
        title: "File Upload Support",
        desc: "Challenge submission proofs and profile images are handled via secure FormData uploads, processed by the Express.js backend.",
      },
      {
        title: "Production-Ready Deployment",
        desc: "Frontend on Vercel with edge-optimized delivery and backend on Render with a TypeScript-compiled CJS bundle and live PostgreSQL database.",
      },
    ],
    engineeringDecisions: [
      "One of the most technically involved aspects of the project was resolving Prisma's custom output path configuration in a bundled TypeScript production build. By configuring `tsup` to treat the Prisma client as external and setting the correct `NODE_PATH` on Render, the backend achieved a stable, production-grade CJS output.",
      "The submission approval workflow introduced real-world state management challenges — solved by using TanStack Query with optimistic cache invalidation, ensuring the UI stays in sync with the backend without full page reloads.",
      "Role-based routing in Next.js 15 was implemented via a `proxy.ts` middleware (replacing the deprecated `middleware.ts` pattern), guarding all dashboard routes based on the decoded JWT role claim.",
    ],
  },
];
