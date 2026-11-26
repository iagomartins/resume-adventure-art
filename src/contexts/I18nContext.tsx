import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'pt-BR' | 'en';

interface Translations {
  [key: string]: string | Translations;
}

const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      book: 'O Livro',
      experience: 'Experiência',
      tech: 'Tecnologias',
      erp: 'ERP & Power BI',
      contact: 'Contato',
    },
    hero: {
      role: 'Cientista de Dados',
      tagline: 'Escala não é sobre pessoas, é sobre sistemas.',
      ctaBook: 'Conheça Meu Livro',
      ctaContact: 'Fale Comigo',
    },
    book: {
      sectionTitle: 'O Exército de Um Soldado',
      subtitle: 'Estratégias de Escalabilidade para Empreendedores',
      synopsis: 'Um guia prático para empreendedores que desejam escalar seus negócios sem depender exclusivamente de contratações em massa. Aprenda a construir sistemas robustos, processos eficientes e uma arquitetura tecnológica que cresce com seu negócio.',
      ctaAmazon: 'Comprar na Amazon',
    },
    experience: {
      sectionTitle: 'Experiência Profissional',
      skillsTitle: 'Competências & Stack Analítica',
      ctaLinkedIn: 'Ver Perfil Completo',
    },
    tech: {
      sectionTitle: 'Ecossistema Analítico & Soluções',
      subtitle: 'Stack tecnológico focado em modelagem estatística, automação de dados e escalabilidade',
      supabase: 'Backend-as-a-Service com PostgreSQL',
      n8n: 'Automação de workflows e integrações',
      reactnextjs: 'Interfaces modernas e responsivas',
      nodejs: 'APIs e microserviços de alta performance',
      postgresql: 'Banco de dados relacional robusto',
      powerbi: 'Dashboards e relatórios analíticos empresariais',
      erp: 'Integrações entre sistemas operacionais e financeiros',
      typescript: 'Type-safe development',
    },
    erp: {
      sectionTitle: 'ERP Integrations & Power BI',
      subtitle: 'Ciência de dados e Inteligência de Negócios aplicadas à operação',
      description: 'Desenvolvo integrações ERP e soluções analíticas em Power BI que transformam dados transacionais em modelos preditivos, dashboards estratégicos e KPIs acionáveis. Trabalho com mapeamento de processos, automação ETL, modelagem dimensional e governança para criar inteligência confiável a partir de sistemas financeiros, comerciais e logísticos.',
      bullet1: 'Conexão e ingestão de dados de ERPs financeiros, fiscais e operacionais com fontes externas.',
      bullet2: 'Modelos dimensionais, DAX avançado e data marts em Power BI para relatórios gerenciais.',
      bullet3: 'Pipelines ETL automatizados e governança de qualidade e integridade de dados.',
      bullet4: 'Telemetria em tempo real e métricas de unit economics para decisões ágeis.',
    },
    contact: {
      sectionTitle: 'Vamos Conversar',
      subtitle: 'Transforme sua operação com inteligência de dados, estatística e automação',
      whatsappCta: 'Fale no WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Belo Horizonte, MG',
    },
    bio: 'Cientista de dados especializado em modelagem estatística, telemetria de conversão e engenharia de dados aplicada à tomada de decisão executiva e redução de custos operacionais.',
  },
  en: {
    nav: {
      home: 'Home',
      book: 'The Book',
      experience: 'Experience',
      tech: 'Tech Stack',
      erp: 'ERP & Power BI',
      contact: 'Contact',
    },
    hero: {
      role: 'Data Scientist',
      tagline: 'Scale is not about people, it is about systems.',
      ctaBook: 'Discover My Book',
      ctaContact: 'Get in Touch',
    },
    book: {
      sectionTitle: 'The Army of One Soldier',
      subtitle: 'Scalability Strategies for Entrepreneurs',
      synopsis: 'A practical guide for entrepreneurs who want to scale their businesses without relying solely on mass hiring. Learn how to build robust systems, efficient processes, and a technology architecture that grows with your business.',
      ctaAmazon: 'Buy on Amazon',
    },
    experience: {
      sectionTitle: 'Professional Experience',
      skillsTitle: 'Skills & Analytical Stack',
      ctaLinkedIn: 'View Full Profile',
    },
    tech: {
      sectionTitle: 'Analytical Ecosystem & Solutions',
      subtitle: 'Technology stack focused on statistical modeling, data automation, and scalability',
      supabase: 'Backend-as-a-Service with PostgreSQL',
      n8n: 'Workflow and integration automation',
      reactnextjs: 'Modern and responsive interfaces',
      nodejs: 'High-performance APIs and microservices',
      postgresql: 'Robust relational database',
      powerbi: 'Business analytics dashboards and reports',
      erp: 'Operational and financial system integrations',
      typescript: 'Type-safe development',
    },
    erp: {
      sectionTitle: 'ERP Integrations & Power BI',
      subtitle: 'Data Science and BI applied to operational decision-making',
      description: 'I design ERP integrations and Power BI analytical solutions that turn transactional business data into predictive models, strategic dashboards, KPIs, and actionable insights. My work combines process mapping, ETL automation, dimensional modeling, and data governance to extract reliable statistical intelligence from financial, sales, and logistics systems.',
      bullet1: 'Connection and ingestion of financial, fiscal, and operational ERP data with external sources.',
      bullet2: 'Dimensional data models, advanced DAX, and data marts in Power BI for executive reporting.',
      bullet3: 'Automated ETL pipelines and strict data quality governance.',
      bullet4: 'Real-time telemetry and unit economics metrics for rapid decision-making.',
    },
    contact: {
      sectionTitle: "Let's Talk",
      subtitle: 'Transform your operation with data intelligence, statistics, and automation',
      whatsappCta: 'Message on WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Belo Horizonte, MG, Brazil',
    },
    bio: 'Data scientist specialized in statistical modeling, conversion telemetry, and data engineering focused on executive decision-making and operational cost reduction.',
  },
} as const;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string | Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt-BR');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'pt-BR' ? 'en' : 'pt-BR';
    setLanguage(newLang);
  }, [language, setLanguage]);

  const t = useCallback(
    (key: string): string | Translations => {
      const keys = key.split('.');
      let value: unknown = translations[language];

      for (const k of keys) {
        if (typeof value === 'object' && value !== null && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }

      return value as string | Translations;
    },
    [language]
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export type TranslationKey = keyof typeof translations['pt-BR'] | keyof typeof translations['en'];
