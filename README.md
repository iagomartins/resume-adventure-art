# Resume Adventure Art 🎮

An interactive, gamified portfolio website that transforms your professional resume into an engaging adventure game experience. Navigate through different zones representing your skills, experience, and achievements while controlling a pixelated character with smooth animations.

## 🎯 Project Overview

This project combines modern web development with retro gaming aesthetics to create a unique portfolio presentation. Instead of a traditional static resume, visitors explore your professional journey through an interactive game world where each zone represents different aspects of your career.

### Key Features

- **🎮 Interactive Game World**: Navigate through zones representing different resume sections
- **👾 Pixel Art Character**: Animated sprite character with directional movement and frame cycling
- **🎨 Retro Gaming Aesthetics**: Pixel-perfect rendering with scanline effects and glowing UI elements
- **📱 Responsive Design**: Works seamlessly across desktop and mobile devices
- **⚡ Smooth Animations**: Canvas-based sprite animation system for fluid character movement
- **🎯 Zone-based Navigation**: Explore Skills, Experience, Certifications, and more

## 🛠️ Technologies Used

### Core Framework

- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.8.3** - Type-safe JavaScript for better development experience
- **Vite 5.4.19** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React** - Beautiful, customizable icons
- **CSS Custom Properties** - Dynamic theming and animations

### Animation & Graphics

- **HTML5 Canvas** - Custom sprite animation system
- **CSS Animations** - Smooth transitions and effects
- **Pixel Art Rendering** - Crisp, pixel-perfect graphics
- **Frame-based Animation** - 3-frame sprite cycling for character movement

### Routing & State Management

- **React Router DOM 6.30.1** - Client-side routing
- **React Hooks** - useState, useEffect, useCallback, useMemo, useRef
- **Custom Hooks** - Reusable state logic

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🎮 Game Mechanics

### Character Movement

- **WASD/Arrow Keys**: Control character movement
- **Diagonal Movement**: Smooth 8-directional movement with quadrant-based animations
- **Sprite Animation**: 3-frame animation cycles for each direction
- **Canvas Rendering**: High-performance sprite rendering

### Zone System

- **Skills Zone**: Showcases technical abilities and technologies
- **Experience Zone**: Displays work history and career progression
- **Certifications Zone**: Highlights professional certifications
- **Completion Zone**: Final destination with contact information

### Visual Effects

- **Scanline Effect**: Retro CRT monitor aesthetic
- **Glow Effects**: Purple and cyan glowing elements
- **Pixelated Rendering**: Crisp, pixel-perfect graphics
- **Smooth Transitions**: Fluid movement and UI animations

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
│   └── ui/                 # shadcn/ui components
├── data/
│   └── resumeData.ts       # Resume data and interfaces
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
├── pages/
│   ├── Game.tsx            # Main game component
│   ├── MainMenu.tsx        # Landing page
│   ├── Index.tsx           # Home page
│   └── NotFound.tsx        # 404 page
├── assets/
│   ├── character.png       # Character sprite (legacy)
│   ├── iago_pixel.png      # Main character sprite sheet
│   ├── game-bg.png         # Game background
│   └── menu-bg.png         # Menu background
└── main.tsx                # Application entry point
```

## 🎨 Customization

### Adding Your Own Data

Edit `src/data/resumeData.ts` to customize:

- Personal information
- Skills and technologies
- Work experience
- Certifications
- Contact details

### Sprite Animation

The character uses a sprite sheet with:

- **Dimensions**: 146×313 pixels per frame
- **Layout**: 4 rows × 3 columns (12 total frames)
- **Animation**: 3 frames per direction
- **Directions**: Left-Down, Left-Up, Right-Down, Right-Up

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update CSS variables in `src/index.css` for color schemes
- Customize animations in component styles

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch
3. Custom domain support available

### Other Platforms

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any Static Host**: Build with `npm run build` and upload `dist` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Iago Martins**

- Software Engineer | React Native Developer
- Location: Belo Horizonte, Minas Gerais, Brasil
- Email: iagomartinsgamedesign@gmail.com
- LinkedIn: [linkedin.com/in/iaamartins](https://linkedin.com/in/iaamartins)
- GitHub: [github.com/iaamartins](https://github.com/iaamartins)

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible primitives
- **Lucide** for the icon set
- **Tailwind CSS** for the utility-first approach
- **React** and **TypeScript** communities for excellent tooling

---

_Built with ❤️ using React, TypeScript, and a passion for creative web development_
