import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useI18n } from '@/contexts/I18nContext';

const navLinks = [
  { key: 'home', href: '#hero' },
  { key: 'book', href: '#book' },
  { key: 'experience', href: '#experience' },
  { key: 'tech', href: '#tech' },
  { key: 'contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="pixel-font text-sm font-bold text-foreground hover:text-primary transition-colors"
        >
          IA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              {t(`nav.${link.key}`) as string}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden pixel-btn"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container-wide py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono py-2"
              >
                {t(`nav.${link.key}`) as string}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
