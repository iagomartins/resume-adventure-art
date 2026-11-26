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
  title: "Cientista de Dados, CTO & CEO na Tech Arte",
  location: "Belo Horizonte, MG, Brasil",
  email: "iagomartinsgamedesign@gmail.com",
  linkedin: "linkedin.com/in/iaamartins",
  github: "github.com/iagomartins",
  phone: "+55 31 98575-9601",
  summary:
    "Cientista de dados e líder técnico com mais de 7 anos de experiência, especializado em modelagem estatística, pipelines analíticos e redução de custos operacionais via inteligência preditiva. Atualmente CTO na Capital BH Consórcios (liderando modelagem de dados históricos de assembleias e atribuição de mídia) e Fundador & CEO na Tech Arte Agência Digital (arquitetando ecossistemas de BI e SaaS multi-tenant).",
  bio: "Cientista de dados especializado em modelagem estatística, telemetria de conversão e engenharia de dados aplicada à tomada de decisão executiva e redução de custos operacionais.",
  mainSkills: [
    "Data Science & Estatística Aplicada",
    "SQL & Modelagem Relacional (PostgreSQL)",
    "Python (Pandas, NumPy, Scripting)",
    "Pipelines ETL & Automação (n8n)",
    "Business Intelligence (CAC, LTV, Churn)",
    "Telemetria de Funil & Análise de Conversão",
    "Modelos de Atribuição de Mídia Paga",
    "Inteligência Artificial & LLMs",
    "Supabase & Engenharia de Dados",
    "Power BI & Visualização de Dados",
    "Arquitetura Multi-tenant & SaaS",
    "SEO Técnico Baseado em Evidências",
    "React.js / Next.js",
    "TypeScript",
    "Node.js",
    "DevOps & Vercel",
  ],
  certifications: [
    "Data Science & Statistical Modeling",
    "PostgreSQL Advanced Modeling & Performance",
    "Automação de Processos e Pipelines ETL com n8n",
    "Supabase & Relational Data Engineering",
    "Arquitetura de Soluções AWS",
  ],
  currentRoles: [
    {
      company: "Capital BH Consórcios",
      role: "CTO",
      period: "abr 2026 - Presente",
      location: "Belo Horizonte, MG · Remoto",
      description:
        "Como CTO, lidero a inteligência analítica e a infraestrutura de dados da vertical financeira. Aplico modelagem estatística em dados históricos de assembleias para tomada de decisão preditiva de lances, implemento telemetria avançada de funil e modelos de atribuição multitoque de tráfego pago (Meta/Google Ads), convertendo dados transacionais em patrimônio e receita previsível.",
      highlights: [
        "Análise estatística e preditiva de dados históricos de assembleias para otimização de lances",
        "Engenharia de dados e modelagem de CRM proprietário com pipelines automatizados de telemetria",
        "Modelos de atribuição de mídia paga (Meta Ads & Google Ads) e análise de cohort de conversão",
        "Arquitetura analítica escalável, integração de modelos de IA e governança de dados end-to-end",
      ],
    },
    {
      company: "Tech Arte Agência Digital",
      role: "CEO",
      companyUrl: "https://techarte.dev",
      period: "2026 - Presente",
      location: "Belo Horizonte, MG · Remoto",
      description:
        "Fundador e CEO da Tech Arte, estúdio de software e inteligência digital. Arquiteto ecossistemas analíticos e plataformas SaaS multi-tenant orientadas a dados, desenvolvendo pipelines de BI em tempo real para monitoramento de unit economics (CAC, LTV, Churn, Ticket Médio), sistemas de rastreamento comportamental para recuperação automatizada de carrinhos e SEO técnico fundamentado em evidências empíricas.",
      highlights: [
        "Modelagem relacional e particionamento de dados multi-tenant em PostgreSQL e Supabase",
        "Pipelines de Business Intelligence em tempo real para métricas de negócio (CAC, LTV, Churn, Ticket Médio)",
        "Rastreamento de padrões comportamentais e automação preditiva de recuperação de carrinhos e leads",
        "Engenharia de Growth e SEO técnico fundamentado em evidências empíricas de indexação e performance",
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
        "Estruturação de pipelines de dados transacionais e telemetria de tráfego pago, alinhando infraestrutura técnica à maximização estatística do ROI de aquisição e padronização arquitetural de produtos.",
      highlights: [
        "Otimização de pipelines de dados para atribuição e maximização de ROI em tráfego pago",
        "Padronização de arquitetura orientada a dados e design modular",
        "Engenharia de dados na infraestrutura de captação e qualificação de clientes",
      ],
    },
    {
      company: "MyDose App",
      role: "Senior Software Engineer",
      period: "2024 - 2025",
      location: "Remoto (USA)",
      description:
        "Engenharia de dados e telemetria em app de bem-estar gamificado. Modelagem de métricas de engajamento, retenção de usuários e pipelines de eventos em tempo real.",
      highlights: [
        "Modelagem de dados no Firebase e Cloud Functions para análise de engajamento",
        "Telemetria de comportamento do usuário e algoritmos de pontuação de gamificação",
        "Pipelines automatizados de retenção orientados a gatilhos comportamentais",
      ],
    },
    {
      company: "DATORA",
      role: "Senior Software Engineer",
      period: "2023 - 2024",
      location: "Nova Lima, MG",
      description:
        "Arquitetura em nuvem Azure e engenharia de dados em larga escala. Desenvolvimento de pipelines de processamento ETL e APIs analíticas empresariais.",
      highlights: [
        "Pipelines de integração e processamento de grandes volumes de dados no Azure",
        "Automação ETL para suporte a relatórios gerenciais e operacionais",
        "Desenvolvimento de APIs robustas em C# .NET para consumo analítico de dados",
      ],
    },
    {
      company: "BigBang Digital",
      role: "Senior Full Stack Developer",
      period: "2019 - 2024",
      location: "Belo Horizonte, MG",
      description:
        "Modelagem de dados relacionais e desenvolvimento de sistemas para o mercado de consórcios, garantindo integridade transacional, relatórios analíticos e auditoria estatística.",
      highlights: [
        "Modelagem de banco de dados relacional para operações financeiras de consórcio",
        "Implementação de consultas analíticas SQL e relatórios gerenciais de vendas",
        "Mentoria técnica em boas práticas de manipulação e integridade de dados",
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
      name: "Python",
      description: "Data Science, automação estatística e manipulação de dados",
      icon: "Sparkles",
    },
    {
      name: "PostgreSQL",
      description: "Modelagem relacional, particionamento e consultas analíticas avançadas",
      icon: "Database",
    },
    {
      name: "Supabase",
      description: "BaaS relacional com PostgreSQL, triggers e funções vetoriais",
      icon: "Database",
    },
    {
      name: "Power BI",
      description: "Dashboards executivos, modelagem DAX e análise de cohort/unit economics",
      icon: "Database",
    },
    {
      name: "n8n",
      description: "Automação de pipelines ETL, webhooks e sincronização de dados",
      icon: "Workflow",
    },
    {
      name: "Inteligência Artificial",
      description: "Modelos preditivos, engenharia de prompt e integração de LLMs para dados",
      icon: "Sparkles",
    },
    {
      name: "React / Next.js",
      description: "Interfaces modernas e responsivas para aplicações e dashboards",
      icon: "Code2",
    },
    {
      name: "Node.js",
      description: "APIs e microsserviços de alta performance para processamento de dados",
      icon: "Server",
    },
    {
      name: "ERP",
      description: "Integrações analíticas entre sistemas operacionais e financeiros",
      icon: "Workflow",
    },
    {
      name: "TypeScript",
      description: "Desenvolvimento type-safe para aplicações analíticas robustas",
      icon: "FileCode",
    },
    {
      name: "DevOps & Vercel",
      description: "CI/CD, deploy contínuo e infraestrutura escalável em nuvem",
      icon: "Rocket",
    },
  ],
};

const resumeDataEn: ResumeData = {
  name: "Iago Martins",
  title: "Data Scientist, CTO & CEO at Tech Arte",
  location: "Belo Horizonte, MG, Brazil",
  email: "iagomartinsgamedesign@gmail.com",
  linkedin: "linkedin.com/in/iaamartins",
  github: "github.com/iagomartins",
  phone: "+55 31 98575-9601",
  summary:
    "Data scientist and tech leader with over 7 years of experience, specialized in statistical modeling, analytical pipelines, and operational cost reduction via predictive intelligence. Currently CTO at Capital BH Consórcios (spearheading assembly historical data modeling and paid attribution) and Founder & CEO at Tech Arte Agência Digital (architecting multi-tenant SaaS and BI ecosystems).",
  bio: "Data scientist specialized in statistical modeling, conversion telemetry, and data engineering focused on executive decision-making and operational cost reduction.",
  mainSkills: [
    "Data Science & Applied Statistics",
    "SQL & Relational Modeling (PostgreSQL)",
    "Python (Pandas, NumPy, Scripting)",
    "ETL Pipelines & Automation (n8n)",
    "Business Intelligence (CAC, LTV, Churn)",
    "Funnel Telemetry & Conversion Analytics",
    "Paid Media Attribution Modeling",
    "Artificial Intelligence & LLMs",
    "Supabase & Data Engineering",
    "Power BI & Data Visualization",
    "Multi-tenant & SaaS Architecture",
    "Evidence-based Technical SEO",
    "React.js / Next.js",
    "TypeScript",
    "Node.js",
    "DevOps & Vercel",
  ],
  certifications: [
    "Data Science & Statistical Modeling",
    "PostgreSQL Advanced Modeling & Performance",
    "Process Automation & ETL Pipelines with n8n",
    "Supabase & Relational Data Engineering",
    "AWS Solutions Architecture",
  ],
  currentRoles: [
    {
      company: "Capital BH Consórcios",
      role: "CTO",
      period: "Apr 2026 - Present",
      location: "Belo Horizonte, MG · Remote",
      description:
        "As CTO, I spearhead analytical intelligence and data infrastructure across the financial vertical. I apply statistical modeling to historical consortium assembly data for predictive bid decision-making, deploy advanced conversion funnel telemetry, and design multi-touch paid media attribution models (Meta/Google Ads), translating transactional data into predictable revenue.",
      highlights: [
        "Statistical and predictive analysis of historical assembly data for bid optimization",
        "Data engineering and proprietary CRM data modeling with automated telemetry pipelines",
        "Paid media attribution modeling (Meta/Google Ads) and cohort conversion analysis",
        "Scalable analytical architecture, AI model integration, and end-to-end data governance",
      ],
    },
    {
      company: "Tech Arte Agência Digital",
      role: "CEO",
      companyUrl: "https://techarte.dev",
      period: "2026 - Present",
      location: "Belo Horizonte, MG · Remote",
      description:
        "Founder and CEO of Tech Arte, a software and digital intelligence studio. I architect analytical ecosystems and data-driven multi-tenant SaaS platforms, engineering real-time BI pipelines to monitor unit economics (CAC, LTV, Churn, AOV), behavioral tracking engines for automated cart recovery, and evidence-based technical SEO.",
      highlights: [
        "Relational data modeling and multi-tenant data partitioning in PostgreSQL and Supabase",
        "Real-time Business Intelligence pipelines for core unit economics (CAC, LTV, Churn, AOV)",
        "Behavioral pattern tracking and data-driven automation for abandoned cart and lead recovery",
        "Growth engineering and technical SEO grounded in empirical indexing and performance analysis",
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
        "Structuring transactional data pipelines and paid traffic telemetry, aligning technical infrastructure with statistical ROI maximization in acquisition and modular product architecture.",
      highlights: [
        "Data pipeline optimization for paid traffic attribution and ROI maximization",
        "Standardization of data-driven architecture and modular design",
        "Data engineering across customer acquisition and qualification infrastructure",
      ],
    },
    {
      company: "MyDose App",
      role: "Senior Software Engineer",
      period: "2024 - 2025",
      location: "Remote (USA)",
      description:
        "Data engineering and telemetry for a gamified wellness app. Modeling engagement metrics, user retention analysis, and real-time event pipelines.",
      highlights: [
        "Data modeling with Firebase and Cloud Functions for engagement analytics",
        "User behavior telemetry and gamification scoring algorithms",
        "Automated retention pipelines driven by behavioral event triggers",
      ],
    },
    {
      company: "DATORA",
      role: "Senior Software Engineer",
      period: "2023 - 2024",
      location: "Nova Lima, MG",
      description:
        "Azure cloud architecture and large-scale data engineering. Developing ETL processing pipelines and enterprise analytical APIs.",
      highlights: [
        "Data integration and ETL processing pipelines in Azure cloud",
        "Data automation for operational and executive reporting",
        "Robust API development in C# .NET for high-throughput analytical consumption",
      ],
    },
    {
      company: "BigBang Digital",
      role: "Senior Full Stack Developer",
      period: "2019 - 2024",
      location: "Belo Horizonte, MG",
      description:
        "Relational data modeling and systems development for the consortium market, ensuring transactional integrity, analytical reporting, and statistical auditability.",
      highlights: [
        "Relational database modeling for financial consortium operations",
        "Implementation of analytical SQL queries and executive sales dashboards",
        "Technical mentorship on data integrity and database optimization",
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
      name: "Python",
      description: "Data Science, statistical automation and data wrangling",
      icon: "Sparkles",
    },
    {
      name: "PostgreSQL",
      description: "Relational data modeling, partitioning and advanced analytical queries",
      icon: "Database",
    },
    {
      name: "Supabase",
      description: "Relational BaaS with PostgreSQL, triggers and vector functions",
      icon: "Database",
    },
    {
      name: "Power BI",
      description: "Executive dashboards, DAX data modeling and unit economics/cohort analysis",
      icon: "Database",
    },
    {
      name: "n8n",
      description: "ETL pipeline automation, webhooks and continuous data synchronization",
      icon: "Workflow",
    },
    {
      name: "Artificial Intelligence",
      description: "Predictive models, prompt engineering and LLM data pipeline integrations",
      icon: "Sparkles",
    },
    {
      name: "React / Next.js",
      description: "Modern and responsive user interfaces for analytical applications and dashboards",
      icon: "Code2",
    },
    {
      name: "Node.js",
      description: "High-performance APIs and microservices for data processing",
      icon: "Server",
    },
    {
      name: "ERP",
      description: "Analytical integrations between operational and financial enterprise systems",
      icon: "Workflow",
    },
    {
      name: "TypeScript",
      description: "Type-safe development for robust enterprise and analytical solutions",
      icon: "FileCode",
    },
    {
      name: "DevOps & Vercel",
      description: "CI/CD, continuous deployment and scalable cloud infrastructure",
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
