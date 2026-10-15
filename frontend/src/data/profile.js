export const PROFILE = {
  name: "Vipan Kumar",
  email: "vipankumar7607@gmail.com",
  role: "Software Developer",
  company: "Benepik Technology",
  socials: [
    { label: "GitHub", href: "https://github.com/VipanKumar01" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vipankumar01" },
    { label: "Twitter", href: "https://twitter.com/VipanKumar01" },
    { label: "Instagram", href: "https://www.instagram.com/vipan_singh9" },
  ],
};

export const IMPACT = [
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
  { id: "web", label: "Web" },
  { id: "mobile", label: "Android" },
  { id: "design", label: "Figma" },
];

export const EXPERIENCE = [
  { role: "Software Developer", org: "Benepik Technology", href: "https://benepik.com/", when: "Current", text: "Building secure, scalable and user-focused applications — backend systems in Spring Boot with React.js and React Native on the front." },
  { role: "Assistant Programmer", org: "Exertica", href: "https://exertica.com/", when: "Previous", text: "Designed and developed digital solutions across web and backend systems." },
  { role: "Master of Computer Applications", org: "MCA", href: null, when: "Education", text: "Post-graduate degree in computer applications." },
];

export const MARQUEE = ["Spring Boot", "Microservices", "Kafka", "Redis", "React.js", "React Native", "Docker", "Azure", "GraphQL", "VAPT"];
