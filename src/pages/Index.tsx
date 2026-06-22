import { resumeData } from '@/data/resumeData';
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
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Database,
  Workflow,
  Code2,
  Server,
  FileCode,
};

const Index = () => {
  const { t } = useI18n();

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
            <a href="#book">
              <Button className="pixel-btn bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3">
                <BookOpen className="h-4 w-4 mr-2" />
                {t('hero.ctaBook') as string}
              </Button>
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section id="book" className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="order-2 md:order-1">
              <div className="pixel-card bg-card p-4 max-w-sm mx-auto">
                <div className="overflow-hidden rounded">
                  <img
                    src="/capa.png"
                    alt={resumeData.book.title}
                    className="w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="pixel-font text-xs text-muted-foreground">por Iago Alves</p>
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

      {/* Experience Section */}
      <section id="experience" className="section-padding">
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

          {/* Featured Experience - Current Role */}
          <Card className="pixel-card bg-card border-2 mb-8 max-w-3xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    {t('experience.currentRole') as string}
                  </h3>
                  <p className="text-lg text-primary">
                    {t('experience.currentCompany') as string}
                  </p>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                  2024 - Presente
                </Badge>
              </div>

              <div className="space-y-3 mt-6">
                {[
                  t('experience.achievement1') as string,
                  t('experience.achievement2') as string,
                  t('experience.achievement3') as string,
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(142,76%,36%)] mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Previous Experience Timeline */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resumeData.experiences.slice(1).map((exp, idx) => (
              <Card
                key={idx}
                className="pixel-card bg-card hover:border-primary transition-colors"
              >
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {exp.period}
                  </Badge>
                  <h4 className="font-bold text-sm mb-1">{exp.role}</h4>
                  <p className="text-xs text-muted-foreground">{exp.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://${resumeData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="pixel-btn">
                <Linkedin className="h-4 w-4 mr-2" />
                {t('experience.ctaLinkedIn') as string}
              </Button>
            </a>
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
                      <h4 className="font-bold text-sm mb-1">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {t(`tech.${tech.name.toLowerCase().replace(/[/.\s]/g, '')}`) as string || tech.description}
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
              ERP & Power BI
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
              className="pixel-card bg-card p-4 hover:border-primary transition-colors group"
            >
              <Mail className="h-5 w-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary" />
              <span className="text-xs font-mono">{t('contact.email') as string}</span>
            </a>
            <a
              href={`https://${resumeData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-card bg-card p-4 hover:border-primary transition-colors group"
            >
              <Linkedin className="h-5 w-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary" />
              <span className="text-xs font-mono">{t('contact.linkedin') as string}</span>
            </a>
            <a
              href={`https://${resumeData.github}`}
              target="_blank"
              rel="noopener noreferrer"
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
            © 2024 {resumeData.name}. {t('hero.role') as string}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Index;
