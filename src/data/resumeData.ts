export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
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
  experiences: Experience[];
  book: BookInfo;
  techStack: TechStack[];
}

export const resumeData: ResumeData = {
  name: "Iago Alves",
  title: "CTO & Arquiteto de Soluções Digitais",
  location: "Ribeirão das Neves, MG, Brasil",
  email: "iagomartinsgamedesign@gmail.com",
  linkedin: "linkedin.com/in/iaamartins",
  github: "github.com/iaamartins",
  phone: "+55 31 98575-9601",
  summary:
    "Arquiteto de software com mais de 7 anos de experiência, especializado em reduzir custos operacionais através de automação e arquitetura robusta. Atualmente CTO na Capital BH Consórcios, liderando a transformação digital e desenvolvimento de soluções proprietárias.",
  bio: "Arquiteto de software com mais de 7 anos de experiência, especializado em reduzir custos operacionais através de automação e arquitetura robusta.",
  mainSkills: [
    "Arquitetura de Software",
    "React / Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "n8n Automation",
    "Cloud Solutions",
  ],
  certifications: [
    "Arquitetura de Soluções AWS",
    "Automação de Processos com n8n",
    "Supabase Expert",
    "Advanced React Patterns",
    "PostgreSQL Performance",
  ],
  experiences: [
    {
      company: "Capital BH Consórcios",
      role: "CTO",
      period: "2024 - Presente",
      location: "Belo Horizonte, MG",
      description:
        "Liderança técnica e arquitetura de soluções digitais para empresa de consórcios. Responsável pela transformação digital e otimização de processos operacionais.",
      highlights: [
        "Criação de CRM proprietário para gestão de vendas",
        "Automação completa de propostas e documentação com n8n",
        "Redução de 60% nos custos operacionais",
        "Implementação de arquitetura serverless com Supabase",
      ],
    },
    {
      company: "MyDose App",
      role: "Senior Software Engineer",
      period: "2023 - 2024",
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
      period: "2022 - 2023",
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
      period: "2020 - 2022",
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
    coverImage: "/book-cover.png",
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
      name: "TypeScript",
      description: "Type-safe development",
      icon: "FileCode",
    },
  ],
};
