import { useI18n, type Language } from '@/contexts/I18nContext';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  companyUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface BookInfo {
  title: string;
  subtitle: string;
  amazonUrl: string;
  coverImage: string;
}

export interface TechStack {
  name: string;
  description: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;
  summary: string;
  bio: string;
  mainSkills: string[];
  certifications: string[];
  currentRoles: Experience[];
  experiences: Experience[];
  book: BookInfo;
  techStack: TechStack[];
}

const resumeDataPtBR: ResumeData = {
  name: "Iago Martins",
  title: "CTO, CEO e Arquiteto de Software",
  location: "Belo Horizonte, MG, Brasil",
  email: "iagomartinsgamedesign@gmail.com",
  linkedin: "linkedin.com/in/iaamartins",
  github: "github.com/iagomartins",
  phone: "+55 31 98575-9601",
  summary:
    "Arquiteto de software com mais de 7 anos de experiência, especializado em reduzir custos operacionais através de automação e arquitetura robusta. Atualmente CTO na Capital BH Consórcios e Fundador & CEO na Tech Arte Agência Digital.",
  bio: "Arquiteto de software com mais de 7 anos de experiência, especializado em reduzir custos operacionais através de automação e arquitetura robusta.",
  mainSkills: [
    "Arquitetura de Software",
    "Design Patterns",
    "White-Label SaaS",
    "Sistemas Multi-tenant",
    "React.js / Next.js",
    "Vue.js / Pinia",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Serviços Web RESTful",
    "DevOps & Vercel",
    "Automação de Processos (n8n)",
    "Inteligência Artificial",
    "Engenharia de Prompt",
    "Segurança da Informação",
    "Business Intelligence / Power BI",
    "UI/UX & Design System",
    "Growth & SEO Técnico",
  ],
  certifications: [
    "Arquitetura de Soluções AWS",
    "Automação de Processos com n8n",
    "Supabase Expert",
    "Advanced React Patterns",
    "PostgreSQL Performance",
  ],
  currentRoles: [
    {
      company: "Capital BH Consórcios",
      role: "CTO",
      period: "abr 2026 - Presente",
      location: "Belo Horizonte, MG · Remoto",
      description:
        "Como CTO, traduzo a complexidade tecnológica em inteligência de mercado e eficiência operacional. Lidero a vertical de tecnologia focada em escalar resultados, unindo arquitetura de soluções robustas à automação estratégica de vendas e marketing — transformando leads em patrimônio.",
      highlights: [
        "Sistemas proprietários de CRM e geradores de propostas inteligentes",
        "Automação estratégica de vendas e marketing (Lead Gen)",
        "Arquitetura de software escalável e implementação de IA",
        "Gestão de tecnologia, DevOps e liderança técnica end-to-end",
      ],
    },
    {
      company: "Tech Arte Agência Digital",
      role: "CEO",
      companyUrl: "https://techarte.dev",
      period: "2026 - Presente",
      location: "Belo Horizonte, MG · Remoto",
      description:
        "Fundador e CEO da Tech Arte, estúdio de software e agência digital focada na construção de plataformas SaaS White-Label, sistemas multi-tenant e ecossistemas digitais de alta conversão sob medida para empresas em escala.",
      highlights: [
        "Arquitetura nativa White-Label e Multi-tenant (SaaS escalável)",
        "Desenvolvimento de plataformas E-commerce, CRMs e painéis administrativos",
        "Automação operacional sob medida e integrações via APIs/Webhooks",
        "Engenharia de Growth, SEO técnico e infraestrutura focada em ROI",
      ],
      ctaText: "Visitar techarte.dev ↗",
      ctaUrl: "https://techarte.dev",
    },
  ],
  experiences: [
    {
      company: "Capital BH Consórcios",
      role: "Arquiteto de Soluções Digitais",
      period: "jan 2026 - abr 2026",
      location: "Belo Horizonte, MG",
      description:
        "Gestão de tecnologia end-to-end, responsável por toda a stack tecnológica da empresa — da manutenção da infraestrutura à implementação de novas soluções de software.",
      highlights: [
        "Liderança técnica em Growth, otimizando pipelines de dados para maximizar o ROI de tráfego pago",
        "Padronização e Design System com Flat Design e arquitetura modular",
        "Coordenação da infraestrutura de aquisição de clientes",
      ],
    },
    {
      company: "MyDose App",
      role: "Senior Software Engineer",
      period: "2024 - 2025",
      location: "Remoto (USA)",
      description:
        "Arquitetura e liderança técnica de app de wellness gamificado. Definição de stack tecnológico e automação de processos.",
      highlights: [
        "Arquitetura de backend com Firebase e Cloud Functions",
        "Implementação de sistema de gamificação",
        "Automação de notificações e lembretes",
      ],
    },
    {
      company: "DATORA",
      role: "Senior Software Engineer",
      period: "2023 - 2024",
      location: "Nova Lima, MG",
      description:
        "Arquitetura de soluções em nuvem Azure, automação de processos e desenvolvimento de APIs empresariais.",
      highlights: [
        "Design de arquitetura em nuvem Azure",
        "Automação de processos de dados",
        "Desenvolvimento de APIs em C# .NET",
      ],
    },
    {
      company: "BigBang Digital",
      role: "Senior Full Stack Developer",
      period: "2019 - 2024",
      location: "Belo Horizonte, MG",
      description:
        "Desenvolvimento full-stack de sistema de consórcio com foco em arquitetura escalável e boas práticas.",
      highlights: [
        "Arquitetura de sistema de consórcio",
        "Implementação de metodologia SCRUMBAN",
        "Mentoria de desenvolvedores júnior",
      ],
    },
  ],
  book: {
    title: "O Exército de Um Soldado",
    subtitle: "Estratégias de Escalabilidade para Empreendedores",
    amazonUrl: "https://www.amazon.com.br/dp/B0DYBKP9M9",
    coverImage: "/capa.png",
  },
  techStack: [
    {
      name: "Supabase",
      description: "Backend-as-a-Service com PostgreSQL",
      icon: "Database",
    },
    {
      name: "n8n",
      description: "Automação de workflows e integrações",
      icon: "Workflow",
    },
    {
      name: "React / Next.js",
      description: "Interfaces modernas e responsivas",
      icon: "Code2",
    },
    {
      name: "Vue.js / Nuxt.js",
      description: "Interfaces modernas e responsivas",
      icon: "Code2",
    },
    {
      name: "Node.js",
      description: "APIs e microserviços de alta performance",
      icon: "Server",
    },
    {
      name: "PostgreSQL",
      description: "Banco de dados relacional robusto",
      icon: "Database",
    },
    {
      name: "Power BI",
      description: "Dashboards e relatórios analíticos empresariais",
      icon: "Database",
    },
    {
      name: "ERP",
      description: "Integrações entre sistemas operacionais e financeiros",
      icon: "Workflow",
    },
    {
      name: "TypeScript",
      description: "Type-safe development",
      icon: "FileCode",
    },
    {
      name: "Inteligência Artificial",
      description: "Implementação de IA e Engenharia de Prompt",
      icon: "Sparkles",
    },
    {
      name: "DevOps & Vercel",
      description: "CI/CD, deploy contínuo e infraestrutura escalável",
      icon: "Rocket",
    },
  ],
};

const resumeDataEn: ResumeData = {
  name: "Iago Martins",
  title: "CTO, CEO and Software Architect",
  location: "Belo Horizonte, MG, Brazil",
  email: "iagomartinsgamedesign@gmail.com",
  linkedin: "linkedin.com/in/iaamartins",
  github: "github.com/iagomartins",
  phone: "+55 31 98575-9601",
  summary:
    "Software architect with over 7 years of experience, specialized in reducing operational costs through automation and robust architecture. Currently CTO at Capital BH Consórcios and Founder & CEO at Tech Arte Agência Digital.",
  bio: "Software architect with over 7 years of experience, specialized in reducing operational costs through automation and robust architecture.",
  mainSkills: [
    "Software Architecture",
    "Design Patterns",
    "White-Label SaaS",
    "Multi-tenant Systems",
    "React.js / Next.js",
    "Vue.js / Pinia",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "RESTful Web Services",
    "DevOps & Vercel",
    "Process Automation (n8n)",
    "Artificial Intelligence",
    "Prompt Engineering",
    "Information Security",
    "Business Intelligence / Power BI",
    "UI/UX & Design System",
    "Growth & Technical SEO",
  ],
  certifications: [
    "AWS Solutions Architecture",
    "Process Automation with n8n",
    "Supabase Expert",
    "Advanced React Patterns",
    "PostgreSQL Performance",
  ],
  currentRoles: [
    {
      company: "Capital BH Consórcios",
      role: "CTO",
      period: "Apr 2026 - Present",
      location: "Belo Horizonte, MG · Remote",
      description:
        "As CTO, I translate technological complexity into market intelligence and operational efficiency. I lead the technology vertical focused on scaling results, combining robust solution architecture with strategic sales and marketing automation — turning leads into assets.",
      highlights: [
        "Proprietary CRM systems and intelligent proposal generators",
        "Strategic sales and marketing automation (Lead Gen)",
        "Scalable software architecture and AI implementation",
        "Technology management, DevOps and end-to-end technical leadership",
      ],
    },
    {
      company: "Tech Arte Agência Digital",
      role: "CEO",
      companyUrl: "https://techarte.dev",
      period: "2026 - Present",
      location: "Belo Horizonte, MG · Remote",
      description:
        "Founder and CEO of Tech Arte, a software studio and digital agency focused on building White-Label SaaS platforms, multi-tenant systems, and high-conversion digital ecosystems tailored for scaling businesses.",
      highlights: [
        "Native White-Label and Multi-tenant architecture (scalable SaaS)",
        "Development of E-commerce platforms, CRMs, and admin dashboards",
        "Custom operational automation and API/Webhook integrations",
        "Growth engineering, technical SEO, and ROI-driven infrastructure",
      ],
      ctaText: "Visit techarte.dev ↗",
      ctaUrl: "https://techarte.dev",
    },
  ],
  experiences: [
    {
      company: "Capital BH Consórcios",
      role: "Digital Solutions Architect",
      period: "Jan 2026 - Apr 2026",
      location: "Belo Horizonte, MG",
      description:
        "End-to-end technology management, responsible for the company's entire tech stack — from infrastructure maintenance to the implementation of new software solutions.",
      highlights: [
        "Technical leadership in Growth, optimizing data pipelines to maximize paid traffic ROI",
        "Standardization and Design System with Flat Design and modular architecture",
        "Coordination of the customer acquisition infrastructure",
      ],
    },
    {
      company: "MyDose App",
      role: "Senior Software Engineer",
      period: "2024 - 2025",
      location: "Remote (USA)",
      description:
        "Architecture and technical leadership of a gamified wellness app. Tech stack definition and process automation.",
      highlights: [
        "Backend architecture with Firebase and Cloud Functions",
        "Implementation of a gamification system",
        "Automation of notifications and reminders",
      ],
    },
    {
      company: "DATORA",
      role: "Senior Software Engineer",
      period: "2023 - 2024",
      location: "Nova Lima, MG",
      description:
        "Azure cloud solutions architecture, process automation and development of enterprise APIs.",
      highlights: [
        "Azure cloud architecture design",
        "Data process automation",
        "API development in C# .NET",
      ],
    },
    {
      company: "BigBang Digital",
      role: "Senior Full Stack Developer",
      period: "2019 - 2024",
      location: "Belo Horizonte, MG",
      description:
        "Full-stack development of a consortium system focused on scalable architecture and best practices.",
      highlights: [
        "Consortium system architecture",
        "Implementation of the SCRUMBAN methodology",
        "Mentoring of junior developers",
      ],
    },
  ],
  book: {
    title: "The Army of One Soldier",
    subtitle: "Scalability Strategies for Entrepreneurs",
    amazonUrl: "https://www.amazon.com.br/dp/B0DYBKP9M9",
    coverImage: "/capa.png",
  },
  techStack: [
    {
      name: "Supabase",
      description: "Backend-as-a-Service with PostgreSQL",
      icon: "Database",
    },
    {
      name: "n8n",
      description: "Workflow and integration automation",
      icon: "Workflow",
    },
    {
      name: "React / Next.js",
      description: "Modern and responsive interfaces",
      icon: "Code2",
    },
    {
      name: "Vue.js / Nuxt.js",
      description: "Modern and responsive interfaces",
      icon: "Code2",
    },
    {
      name: "Node.js",
      description: "High-performance APIs and microservices",
      icon: "Server",
    },
    {
      name: "PostgreSQL",
      description: "Robust relational database",
      icon: "Database",
    },
    {
      name: "Power BI",
      description: "Business analytics dashboards and reports",
      icon: "Database",
    },
    {
      name: "ERP",
      description: "Operational and financial system integrations",
      icon: "Workflow",
    },
    {
      name: "TypeScript",
      description: "Type-safe development",
      icon: "FileCode",
    },
    {
      name: "Artificial Intelligence",
      description: "AI implementation and Prompt Engineering",
      icon: "Sparkles",
    },
    {
      name: "DevOps & Vercel",
      description: "CI/CD, continuous deployment and scalable infrastructure",
      icon: "Rocket",
    },
  ],
};

export const resumeData: Record<Language, ResumeData> = {
  'pt-BR': resumeDataPtBR,
  en: resumeDataEn,
};

export function useResumeData(): ResumeData {
  const { language } = useI18n();
  return resumeData[language];
}
