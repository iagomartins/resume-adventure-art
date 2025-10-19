export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  phone: string;
  summary: string;
  mainSkills: string[];
  certifications: string[];
  experiences: Experience[];
}

export const resumeData: ResumeData = {
  name: "Iago Martins",
  title: "Software Engineer | React Native",
  location: "Belo Horizonte, Minas Gerais, Brasil",
  email: "iago.mart.metal@gmail.com",
  linkedin: "linkedin.com/in/iaamartins",
  phone: "+55 31 99522-8964",
  summary: "Desenvolvedor de software com mais de 6 anos de experiência em React Native, React.js, C#, .NET, TypeScript e Vue.js. Experiência em desenvolvimento full-stack, análise de dados e segurança cibernética.",
  mainSkills: [
    "React Native",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "C# .NET",
    "PHP & MySQL",
    "Firebase",
    "Azure",
  ],
  certifications: [
    "Intro to Game Development",
    "HTML Fundamentals",
    "Web Development with PHP and MySQL",
    "Introduction to Vue.js",
    "Learn Python Programming by Making a Game",
  ],
  experiences: [
    {
      company: "MyDose App",
      role: "Mobile Developer",
      period: "Aug 2025 - Present",
      location: "Marina del Rey, CA, USA",
      description: "Desenvolvimento e manutenção do app MyDose com React Native. Gerenciamento de Firebase e Cloud Functions. App de wellness gamificado.",
    },
    {
      company: "DATORA",
      role: "Development Analyst",
      period: "Jul 2024 - May 2025",
      location: "Nova Lima, MG, Brasil",
      description: "Análise de dados e automação no Azure. Desenvolvimento de APIs e portais em C# .NET. Implementação de segurança cibernética.",
    },
    {
      company: "BigBang Digital",
      role: "Full Stack Developer",
      period: "Jul 2022 - Jul 2024",
      location: "Belo Horizonte, MG",
      description: "Desenvolvimento full-stack de sistema de consórcio. Metodologia SCRUMBAN. Padrões de desenvolvimento orientados a objetos.",
    },
    {
      company: "Big Shop Ecommerce",
      role: "Full Stack Developer",
      period: "Nov 2020 - Jun 2022",
      location: "Belo Horizonte, MG",
      description: "Construção de sites com Vue.js, Quasar Framework e PHP. Desenvolvimento de marketplace com funcionalidades para afiliados.",
    },
    {
      company: "Martins Software",
      role: "Lead Game Designer",
      period: "Jun 2021 - Aug 2021",
      location: "Belo Horizonte, MG",
      description: "Desenvolvimento de videogame educacional sobre Covid-19 com Unity C#. Responsável por design, código e planejamento.",
    },
    {
      company: "Trick27 Studios",
      role: "Game Tester",
      period: "May 2021 - Jun 2021",
      location: "Belo Horizonte, MG",
      description: "Testes de qualidade e sugestões de melhorias para desenvolvimento de jogos.",
    },
    {
      company: "Agência Life",
      role: "Front End Developer",
      period: "Sep 2019 - Aug 2020",
      location: "Belo Horizonte, MG",
      description: "Desenvolvimento front-end de websites e aplicações web.",
    },
  ],
};
