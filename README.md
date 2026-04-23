# Iago Alves - CTO & Arquiteto de Soluções Digitais 🎯

Portfólio profissional em formato de landing page de alta performance, focado em autoridade técnica. Apresenta trajetória como CTO, arquitetura de soluções e o livro "O Exército de Um Soldado" sobre escalabilidade empresarial.

## 🎯 Project Overview

Este projeto transforma um portfólio tradicional em uma experiência digital moderna e minimalista, combinando estética pixel art discreta com design enterprise. O foco é apresentar autoridade técnica como CTO e arquiteto de soluções, destacando automação, redução de custos e arquitetura robusta.

### Key Features

- **� Design Enterprise Minimalista**: Estética pixel art aplicada em bordas, ícones e botões
- **🌓 Dark/Light Mode**: Tema alternável com greyscale como base
- **� Internacionalização (i18n)**: Suporte bilíngue PT-BR/EN com troca dinâmica
- **📱 Landing Page de Alta Performance**: Scroll suave e navegação intuitiva
- **⚡ SEO Otimizado**: Estrutura semântica e metadata completa
- **📚 Destaque para Livro**: Seção dedicada ao "O Exército de Um Soldado"
- **💬 CTA WhatsApp**: Botão flutuante para contato direto

## 🛠️ Technologies Used

### Core Framework

- **React 18.3.1** - UI library com hooks e functional components
- **TypeScript 5.8.3** - Type safety e DX aprimorada
- **Vite 5.4.19** - Build tool rápido e dev server

### UI & Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Componentes acessíveis e de alta qualidade
- **Radix UI** - Primitives headless para acessibilidade
- **Lucide React** - Ícones customizáveis
- **next-themes** - Gerenciamento de temas dark/light

### Internacionalização

- **Context API** - Sistema de tradução com React Context
- **JSON-based translations** - Traduções estruturadas PT-BR/EN
- **Dynamic language switching** - Troca sem recarregar página

### Routing & State Management

- **React Router DOM 6.30.1** - Client-side routing
- **React Hooks** - useState, useEffect, useCallback, useMemo

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixing
- **TypeScript ESLint** - TS-specific linting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd resume-adventure-art
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── LanguageSwitcher.tsx   # Dropdown de troca de idioma
│   ├── Navbar.tsx             # Navegação fixa responsiva
│   ├── ThemeProvider.tsx      # Provider do next-themes
│   ├── ThemeToggle.tsx        # Botão dark/light mode
│   └── WhatsAppButton.tsx     # CTA flutuante e inline
├── contexts/
│   └── I18nContext.tsx     # Contexto de internacionalização
├── data/
│   └── resumeData.ts       # Dados do CTO, livro e tech stack
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
├── pages/
│   ├── Index.tsx           # Landing page principal
│   └── NotFound.tsx        # 404 page
├── index.css               # Tema greyscale + dark mode
├── App.tsx                 # Root com providers
└── main.tsx                # Entry point

public/
├── capa.png                # Capa do livro
├── iago_bamaq.png          # Foto de perfil
└── favicon*                # Favicons
```

## 🎨 Customization

### Adding Your Own Data

Edit `src/data/resumeData.ts` to customize:

- Personal information (nome, título, bio)
- Work experience com highlights
- Tech stack com ícones
- Informações do livro (título, sinopse, Amazon URL)
- Contact details

### Internacionalização

Adicione novas chaves em `src/contexts/I18nContext.tsx`:

```typescript
const translations = {
  'pt-BR': { yourKey: 'valor' },
  'en': { yourKey: 'value' }
}
```

Use no componente: `t('yourKey')`

### Styling

- Tema greyscale em `src/index.css` com variáveis CSS
- Classes utilitárias: `.pixel-btn`, `.pixel-card`, `.pixel-border`
- Dark mode automático via `next-themes`
- Fonte Inter para body, Press Start 2P para headings

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch
3. Custom domain support available

### Other Platforms

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any Static Host**: Build with `npm run build` and upload `dist` folder

## 👨‍💻 Author

**Iago Alves**

- CTO & Arquiteto de Soluções Digitais
- Especialista em automação e redução de custos operacionais
- Autor do livro "O Exército de Um Soldado: Estratégias de Escalabilidade para Empreendedores"
- Localização: Ribeirão das Neves, MG, Brasil
- Email: iagomartinsgamedesign@gmail.com
- LinkedIn: [linkedin.com/in/iaamartins](https://linkedin.com/in/iaamartins)
- WhatsApp: [wa.me/5531985759601](https://wa.me/5531985759601)

## 📚 Sobre o Livro

**"O Exército de Um Soldado"** - Disponível na [Amazon](https://www.amazon.com.br/dp/B0DYBKP9M9)

Um guia prático para empreendedores que desejam escalar seus negócios sem depender exclusivamente de contratações em massa. Aprenda a construir sistemas robustos, processos eficientes e uma arquitetura tecnológica que cresce com seu negócio.

> "Escala não é sobre pessoas, é sobre sistemas."

## 🙏 Acknowledgments

- **shadcn/ui** - Component library
- **Radix UI** - Accessible primitives
- **Lucide** - Icon set
- **Tailwind CSS** - Utility-first CSS
- **next-themes** - Theme management
- **React & TypeScript** communities

---

_Built with precision using React, TypeScript, and enterprise-grade architecture principles_
