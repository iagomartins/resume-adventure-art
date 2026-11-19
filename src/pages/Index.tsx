import { useResumeData } from '@/data/resumeData';
import { useI18n } from '@/contexts/I18nContext';
import { Navbar } from '@/components/Navbar';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Database,
  Workflow,
  Code2,
  Server,
  FileCode,
  ExternalLink,
  Linkedin,
  Github,
  Mail,
  MapPin,
  BookOpen,
  CheckCircle,
  Sparkles,
  Rocket,
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Database,
  Workflow,
  Code2,
  Server,
  FileCode,
  Sparkles,
  Rocket,
};

const Index = () => {
  const { t } = useI18n();
  const resumeData = useResumeData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container-tight text-center">
          {/* Profile Photo */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden pixel-border ring-4 ring-background">
              <img
                src="/iago_bamaq.png"
                alt={resumeData.name}
                width={160}
                height={160}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <Badge
            variant="outline"
            className="pixel-border mb-6 px-4 py-2 text-xs font-mono"
          >
            {t('hero.role') as string}
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            {resumeData.name}
          </h1>

          <p className="pixel-font text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            "{t('hero.tagline') as string}"
          </p>

          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('bio') as string}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#book" aria-label="Ir para seção do livro O Exército de um Soldado">
              <Button className="pixel-btn bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3">
                <BookOpen className="h-4 w-4 mr-2" />
                {t('hero.ctaBook') as string}
              </Button>
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="pixel-border mb-4 px-3 py-1 text-xs font-mono"
            >
              EXPERIÊNCIA
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('experience.sectionTitle') as string}
            </h2>
          </div>

          {/* Featured Experiences - Dual Current Roles (CTO + CEO) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
            {resumeData.currentRoles.map((role, idx) => (
              <Card key={idx} className="pixel-card bg-card border-2 h-full flex flex-col">
                <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{role.role}</h3>
                      {role.companyUrl ? (
                        <a
                          href={role.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${role.company} (abre em nova guia)`}
                          className="inline-flex items-center gap-1.5 text-lg text-primary hover:underline hover:opacity-80 transition-all font-medium group"
                        >
                          <span>{role.company}</span>
                          <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                        </a>
                      ) : (
                        <p className="text-lg text-primary">{role.company}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        {role.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="mt-1 sm:mt-0 w-fit shrink-0">
                      {role.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mt-4 leading-relaxed">{role.description}</p>

                  <div className="space-y-3 mt-6">
                    {(role.highlights ?? []).map((achievement, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[hsl(142,76%,36%)] mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {role.ctaText && role.ctaUrl && (
                    <div className="mt-auto pt-6 border-t border-border/40">
                      <a
                        href={role.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${role.ctaText} (abre em nova guia)`}
                        className="inline-flex items-center text-sm font-mono text-primary hover:underline hover:opacity-80 transition-all group font-semibold"
                      >
                        <span>{role.ctaText}</span>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Previous Experience Timeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {resumeData.experiences.map((exp, idx) => (
              <Card
                key={idx}
                className="pixel-card bg-card hover:border-primary transition-colors flex flex-col justify-between"
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <Badge variant="outline" className="mb-3 text-xs w-fit">
                    {exp.period}
                  </Badge>
                  <h3 className="font-bold text-sm mb-1">{exp.role}</h3>
                  <p className="text-xs text-muted-foreground mt-auto">{exp.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills & Stack */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-center text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">
              {t('experience.skillsTitle') as string}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {resumeData.mainSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="pixel-border px-3 py-1 text-xs font-mono hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://${resumeData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Iago Martins (abre em nova guia)"
            >
              <Button variant="outline" className="pixel-btn">
                <Linkedin className="h-4 w-4 mr-2" />
                {t('experience.ctaLinkedIn') as string}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section id="book" className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="order-2 md:order-1">
              <div className="pixel-card bg-card p-4 max-w-sm mx-auto">
                <div className="overflow-hidden rounded">
                  <img
                    src="/capa.png"
                    alt={resumeData.book.title}
                    width={400}
                    height={600}
                    className="w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="pixel-font text-xs text-muted-foreground">por {resumeData.name}</p>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="order-1 md:order-2">
              <Badge
                variant="outline"
                className="pixel-border mb-4 px-3 py-1 text-xs font-mono"
              >
                LIVRO
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('book.sectionTitle') as string}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('book.subtitle') as string}
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {t('book.synopsis') as string}
              </p>
              <a
                href={resumeData.book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('book.ctaAmazon')} na Amazon (abre em nova guia)`}
              >
                <Button className="pixel-btn bg-[hsl(24,100%,50%)] text-white hover:bg-[hsl(24,100%,40%)]">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t('book.ctaAmazon') as string}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="pixel-border mb-4 px-3 py-1 text-xs font-mono"
            >
              TECNOLOGIAS
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('tech.sectionTitle') as string}
            </h2>
            <p className="text-muted-foreground">
              {t('tech.subtitle') as string}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resumeData.techStack.map((tech, idx) => {
              const IconComponent = iconMap[tech.icon] || Database;
              return (
                <Card
                  key={idx}
                  className="pixel-card bg-card hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{tech.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ERP & Power BI Section */}
      <section id="erp" className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="pixel-border mb-4 px-3 py-1 text-xs font-mono"
            >
              ERP &amp; Power BI
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('erp.sectionTitle') as string}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('erp.subtitle') as string}
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            <Card className="pixel-card bg-card border-2">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t('erp.description') as string}
                </p>
                <div className="grid gap-3 mt-6 sm:grid-cols-2">
                  {[
                    t('erp.bullet1') as string,
                    t('erp.bullet2') as string,
                    t('erp.bullet3') as string,
                    t('erp.bullet4') as string,
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[hsl(142,76%,36%)] mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-tight text-center">
          <Badge
            variant="outline"
            className="pixel-border mb-4 px-3 py-1 text-xs font-mono"
          >
            CONTATO
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t('contact.sectionTitle') as string}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('contact.subtitle') as string}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <a
              href={`mailto:${resumeData.email}`}
              aria-label={`Email para ${resumeData.name}: ${resumeData.email}`}
              className="pixel-card bg-card p-4 hover:border-primary transition-colors group"
            >
              <Mail className="h-5 w-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary" />
              <span className="text-xs font-mono">{t('contact.email') as string}</span>
            </a>
            <a
              href={`https://${resumeData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${resumeData.name} (abre em nova guia)`}
              className="pixel-card bg-card p-4 hover:border-primary transition-colors group"
            >
              <Linkedin className="h-5 w-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary" />
              <span className="text-xs font-mono">{t('contact.linkedin') as string}</span>
            </a>
            <a
              href={`https://${resumeData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${resumeData.name} (abre em nova guia)`}
              className="pixel-card bg-card p-4 hover:border-primary transition-colors group"
            >
              <Github className="h-5 w-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary" />
              <span className="text-xs font-mono">{t('contact.github') as string}</span>
            </a>
            <div className="pixel-card bg-card p-4">
              <MapPin className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
              <span className="text-xs font-mono">{t('contact.location') as string}</span>
            </div>
          </div>

          <WhatsAppButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-wide text-center">
          <p className="pixel-font text-xs text-muted-foreground">
            © 2026 {resumeData.name}. {t('hero.role') as string}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Index;
