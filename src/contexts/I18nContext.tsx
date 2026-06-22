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
      role: 'Especialista em IA e Automação de Processos',
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
      skillsTitle: 'Competências & Stack',
      ctaLinkedIn: 'Ver Perfil Completo',
    },
    tech: {
      sectionTitle: 'Ecossistema de Soluções',
      subtitle: 'Stack tecnológico focado em produtividade e escalabilidade',
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
      description: 'Desenvolvo integrações ERP e soluções Power BI que transformam dados transacionais em dashboards estratégicos, KPIs e insights acionáveis. Trabalho com mapeamento de processos, automação ETL, modelagem de dados e governança para criar inteligência confiável a partir de sistemas financeiros, comerciais e logísticos.',
      bullet1: 'Conexão de ERPs financeiros, fiscais e operacionais com fontes externas.',
      bullet2: 'Modelos tabulares e data marts em Power BI para relatórios gerenciais.',
      bullet3: 'Pipelines ETL automatizados e governança de qualidade de dados.',
      bullet4: 'Entrega de métricas e KPIs acionáveis para decisões rápidas.',
    },
    contact: {
      sectionTitle: 'Vamos Conversar',
      subtitle: 'Transforme sua operação com arquitetura e automação',
      whatsappCta: 'Fale no WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Ribeirão das Neves, MG',
    },
    bio: 'Arquiteto de software com mais de 7 anos de experiência, especializado em reduzir custos operacionais através de automação e arquitetura robusta.',
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
      role: 'AI & Process Automation Specialist',
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
      skillsTitle: 'Skills & Stack',
      ctaLinkedIn: 'View Full Profile',
    },
    tech: {
      sectionTitle: 'Solutions Ecosystem',
      subtitle: 'Technology stack focused on productivity and scalability',
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
      subtitle: 'Data Science and BI applied to operational intelligence',
      description: 'I design ERP integrations and Power BI solutions that turn transactional business data into strategic dashboards, KPIs and actionable insights. My work combines process mapping, ETL automation, data modeling and governance to create reliable intelligence from financial, sales and logistics systems.',
      bullet1: 'Conexão de ERPs financeiros, fiscais e operacionais com fontes externas.',
      bullet2: 'Modelos tabulares e data marts em Power BI para relatórios gerenciais.',
      bullet3: 'Pipelines ETL automatizados e governança de qualidade de dados.',
      bullet4: 'Entrega de métricas e KPIs acionáveis para decisões rápidas.',
    },
    contact: {
      sectionTitle: "Let's Talk",
      subtitle: 'Transform your operation with architecture and automation',
      whatsappCta: 'Message on WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Ribeirão das Neves, MG, Brazil',
    },
    bio: 'Software architect with over 7 years of experience, specialized in reducing operational costs through automation and robust architecture.',
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
