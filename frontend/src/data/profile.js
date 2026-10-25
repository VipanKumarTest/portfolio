export const PROFILE = {
  name: "Vipan Kumar",
  email: "vipankumar7607@gmail.com",
  role: "Software Engineer",
  company: "Sardeck Services Pvt. Ltd.",
  client: "Intradiem (US)",
  socials: [
    { label: "GitHub", href: "https://github.com/VipanKumar01" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vipankumar01" },
    { label: "Twitter", href: "https://twitter.com/VipanKumar01" },
    { label: "Instagram", href: "https://www.instagram.com/vipan_singh9" },
  ],
};

export const CAREER_START = new Date(2024, 7, 1);

export const yearsOfExperience = () => {
  const yrs = (Date.now() - CAREER_START.getTime()) / (365.25 * 864e5);
  return (Math.floor(yrs * 10) / 10).toFixed(1);
};

export const IMPACT = [
  { value: "300K+", label: "Daily users on Intradiem", note: "Microservices for a US workforce automation platform — real-time agent activity, scheduling & workflows", featured: true },
  { value: "30–50%", label: "Faster API response times", note: "Reduced latency across production endpoints" },
  { value: "1000+", label: "Concurrent users", note: "Systems scaled to handle real load" },
  { value: "60–70%", label: "Batch performance gain", note: "Improved batch job throughput" },
  { value: "VAPT", label: "Compliant security", note: "Enterprise-grade security implemented" },
];

export const SKILLS = [
  { id: "backend", title: "Backend Engineering", lead: "Java Spring Boot", level: "Expert", items: ["Spring Security", "JWT & OAuth2", "Microservices", "SAGA Pattern", "Spring Batch", "GraphQL"], span: "lg:col-span-7 lg:row-span-2" },
  { id: "messaging", title: "Messaging & Caching", items: ["Apache Kafka", "RabbitMQ", "Redis"], span: "lg:col-span-5" },
  { id: "databases", title: "Databases", items: ["MySQL", "MS SQL Server", "Firebase", "Supabase"], span: "lg:col-span-5" },
  { id: "frontend", title: "Frontend & Mobile", items: ["React.js", "React Native (Expo)", "Tailwind CSS", "JavaScript", "HTML/CSS"], span: "lg:col-span-4" },
  { id: "cloud", title: "DevOps & Cloud", items: ["Docker", "Azure (VMs, DB, Networking)", "AWS S3", "GitLab CI/CD", "Linux"], span: "lg:col-span-4" },
  { id: "security", title: "Security & Testing", items: ["VAPT (OWASP)", "Burp Suite", "JMeter", "AES Encryption", "HMAC Validation", "SonarQube"], span: "lg:col-span-4" },
  { id: "tools", title: "Tools & Workflow", items: ["Git / GitLab", "Postman", "Razorpay", "HikariCP"], span: "lg:col-span-12" },
];

const GH = "https://github.com/VipanKumar01";

export const PROJECTS = [
  { id: "intradiem", title: "Intradiem Application", type: "company", cat: "Workforce Automation", tool: "Sardeck · for Intradiem (US)", hue: "#54f446", to: "/work/intradiem", cta: "Read case study", desc: "Workforce automation platform for real-time agent activity monitoring, schedule management and automated workflow execution at enterprise scale." },
  { id: "benepik-plus", title: "Benepik Plus", type: "company", cat: "Secure Payments", tool: "Benepik", hue: "#64ffda", to: "/work/benepik-plus", cta: "Read case study", desc: "Robust authentication, authorization, API encryption and scalable transaction workflows for secure monetary operations." },
  { id: "benepik-clients", title: "Benepik Client Projects", type: "company", cat: "Microservices & SSO", tool: "Benepik", hue: "#ffb547", desc: "Scalable Spring Boot microservices with SSO-based authentication, centralising user access across enterprise client applications." },
  { id: "maktub", title: "Maktub", type: "design", cat: "UI/UX Design", tool: "Figma", hue: "#54f446", href: "https://www.figma.com/design/xsCw34jZPmiMnzenJjdnMo/Maktub", cta: "Open in Figma" },
  { id: "ecommerce", title: "E-Commerce WebApp", type: "web", cat: "Web Development", tool: "ACME", hue: "#64ffda", href: GH, cta: "View on GitHub" },
  { id: "live-ai", title: "Live AI Interview", type: "mobile", cat: "Mobile Development", tool: "React Native", hue: "#f2f1ec", href: GH, cta: "View on GitHub" },
  { id: "ai-prep", title: "AI Interview Prep", type: "mobile", cat: "Mobile Development", tool: "React Native", hue: "#54f446", href: GH, cta: "View on GitHub" },
  { id: "amazon", title: "Amazon Clone", type: "mobile", cat: "Mobile Development", tool: "React Native", hue: "#ffb547", href: GH, cta: "View on GitHub" },
  { id: "react-android", title: "React Android", type: "mobile", cat: "Mobile Development", tool: "React Native", hue: "#64ffda", href: GH, cta: "View on GitHub" },
  { id: "netreach", title: "Netreach", type: "design", cat: "UI/UX Design", tool: "Figma", hue: "#9db4ff", href: GH, cta: "View on GitHub" },
  { id: "travel-magic", title: "Travel Magic", type: "design", cat: "UI/UX Design", tool: "Figma", hue: "#ff7a59", href: "https://www.figma.com/design/aKyzbt61VIkIIe1YZl8VcW/Travel-Magic?node-id=0-1&t=uagMvnTQoRgRcw8B-1", cta: "Open in Figma" },
  { id: "cynthia", title: "Creative Portfolio", type: "web", cat: "Frontend", tool: "Live site", hue: "#f2f1ec", href: "https://cynthiaugwutemp.netlify.app/", cta: "Visit live site" },
  { id: "shopping", title: "Google Shopping", type: "web", cat: "Frontend", tool: "Live site", hue: "#ffb547", href: "https://shopping-google.netlify.app/", cta: "Visit live site" },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "company", label: "Company" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Android" },
  { id: "design", label: "Figma" },
];

export const BATCH_RESULT = {
  headline: "60–70%",
  label: "Better batch processing performance",
  scale: 170,
  before: { label: "Before · single-threaded", value: "Baseline", bar: 100 },
  after: { label: "After · multithreaded", value: "+60–70%", bar: 165 },
  note: "Batch throughput relative to the single-threaded baseline, after moving independent tasks onto a parallel worker pool.",
};

export const EXPERIENCE = [
  { role: "Software Engineer", org: "Sardeck Services Pvt. Ltd.", client: "Client: Intradiem (US)", href: null, when: "Current", text: "Working on Intradiem microservices for a scalable workforce automation platform supporting 300K+ daily users — real-time agent activity, scheduling and workflow management. Implemented multithreading in batch processing for parallel task execution, and built dynamic event scheduling for flexible, event-driven background processing." },
  { role: "Software Developer", org: "Benepik Technology", href: "https://benepik.com/", when: "Previous", text: "Built Spring Boot microservices and SSO-based authentication for enterprise client applications, and hardened Benepik Plus with authentication, authorization, API encryption and secure transaction workflows." },
  { role: "Master of Computer Applications", org: "MCA", href: null, when: "2023 — 2025", text: "Post-graduate degree in computer applications." },
  { role: "Bachelor of Computer Applications", org: "BCA", href: null, when: "2020 — 2023", text: "Undergraduate degree in computer applications." },
];

export const MARQUEE = ["Spring Boot", "Microservices", "Kafka", "Redis", "React.js", "React Native", "Docker", "Azure", "GraphQL", "VAPT"];
