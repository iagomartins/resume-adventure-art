import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/contexts/I18nContext';

const WHATSAPP_NUMBER = '5531985759601';
const WHATSAPP_MESSAGE = {
  'pt-BR': 'Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
  en: 'Hello! I saw your portfolio and would like to discuss an opportunity.',
};

interface WhatsAppButtonProps {
  variant?: 'default' | 'floating' | 'outline';
  className?: string;
}

export function WhatsAppButton({ variant = 'default', className = '' }: WhatsAppButtonProps) {
  const { language, t } = useI18n();

  const message = encodeURIComponent(WHATSAPP_MESSAGE[language]);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 group ${className}`}
      >
        <Button
          className="h-14 w-14 rounded-full bg-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,30%)] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-background border border-border px-3 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {t('contact.whatsappCta') as string}
        </span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button
        className={`pixel-btn ${
          variant === 'outline'
            ? 'bg-transparent border-[hsl(142,76%,36%)] text-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,36%)] hover:text-white'
            : 'bg-[hsl(142,76%,36%)] text-white hover:bg-[hsl(142,76%,30%)]'
        }`}
      >
        <MessageCircle className="h-4 w-4 mr-2" />
        {t('contact.whatsappCta') as string}
      </Button>
    </a>
  );
}
