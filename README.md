# Memento Toolkit Landing Page

A modern, responsive Web3 landing page built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a complete migration from a Vite.js JavaScript application to Next.js with TypeScript, featuring a sophisticated dark mode implementation and comprehensive Web3 toolkit presentation.

## 🚀 Project Overview

This landing page serves as the primary marketing site for **Memento Toolkit**, an all-in-one Web3 development platform. The site demonstrates:

- **Modern Web3 branding** with sophisticated gradient designs
- **Complete toolkit showcase** including smart contract deployment, wallet integration, and payment solutions
- **Professional service presentation** with metrics, features, and client testimonials
- **Seamless user experience** with smooth animations and interactive elements

## ✨ Key Features

### 🎨 Design & UI

- **Sophisticated gradient system** with consistent blue-purple branding
- **Advanced dark mode** with custom color scheme and smooth transitions
- **Responsive design** optimized for all devices and screen sizes
- **Interactive animations** including floating elements, pulse effects, and hover transitions
- **Professional typography** with carefully selected font weights and spacing

### 🛠 Technical Excellence

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with custom utilities and design system
- **Shadcn/ui** components for consistent UI elements
- **Smooth scroll navigation** with anchor links to page sections

### 🌙 Advanced Dark Mode

- **Custom color variables** for seamless theme switching
- **Sophisticated background gradients** in dark mode
- **Optimized text contrast** for accessibility
- **Persistent theme preference** with localStorage
- **Smooth transitions** between light and dark themes

### 📱 User Experience

- **Sticky navigation** with scroll effects
- **Smooth section scrolling** with proper offset handling
- **Interactive cards** with hover effects and animations
- **Gradient text effects** that work in both themes
- **Optimized performance** with Next.js optimization features

## 🔄 Migration Journey: Vite.js → Next.js

This project represents a complete migration from a Vite.js JavaScript application to Next.js with TypeScript. Here's what was involved:

### 📋 Migration Checklist

#### 1. **Framework Migration**

```bash
# From Vite.js
npm create vite@latest my-project -- --template vanilla

# To Next.js 15
npx create-next-app@latest my-project --typescript --tailwind --eslint --app
```

#### 2. **TypeScript Integration**

- ✅ Migrated all `.js` files to `.tsx`
- ✅ Added comprehensive type definitions
- ✅ Configured `tsconfig.json` for Next.js
- ✅ Implemented strict TypeScript settings

#### 3. **Routing System**

```javascript
// Before (Vite.js - Client-side routing)
import { BrowserRouter, Routes, Route } from "react-router-dom";

// After (Next.js App Router)
// app/page.tsx - File-based routing system
export default function Home() {
  return <main>...</main>;
}
```

#### 4. **Component Structure**

```typescript
// Before (JavaScript)
const Component = ({ title, description }) => {
  return <div>...</div>;
};

// After (TypeScript)
interface ComponentProps {
  title: string;
  description: string;
}

const Component = ({ title, description }: ComponentProps) => {
  return <div>...</div>;
};
```

#### 5. **Styling Migration**

- ✅ Maintained Tailwind CSS configuration
- ✅ Migrated custom CSS variables
- ✅ Updated Tailwind config for Next.js
- ✅ Integrated Shadcn/ui components

#### 6. **Build System**

```json
// Before (Vite.js)
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

// After (Next.js)
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### 🛠 Migration Challenges & Solutions

#### **Challenge 1: Hydration Issues**

**Problem**: Server-client mismatch with dynamic values

```javascript
// Problematic code
style={{
  left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
  top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
}}
```

**Solution**: Pre-computed static values

```javascript
// Fixed code
const PARTICLE_POSITIONS = [0, 60, 120, 180, 240, 300].map((angle) => ({
  angle,
  left: Math.round((50 + 42 * Math.cos((angle * Math.PI) / 180)) * 100) / 100,
  top: Math.round((50 + 42 * Math.sin((angle * Math.PI) / 180)) * 100) / 100,
}));
```

#### **Challenge 2: Shadcn/ui Integration**

**Problem**: Import conflicts during migration

```bash
Error: Package subpath './ui/tailwind.config' is not defined
```

**Solution**: Proper Shadcn/ui setup for Next.js

```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ... rest of config
};
```

#### **Challenge 3: Dark Mode Implementation**

**Problem**: Complex dark mode with custom colors
**Solution**: CSS variables with class-based theme switching

```css
:root {
  --dark-bg-primary: #0b081a;
  --dark-bg-secondary: #0f0b20;
  --dark-bg-tertiary: #131024;
}

.dark-mode {
  /* Custom dark mode styles */
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd memento-toolkit-landing
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
memento-toolkit-landing/
├── app/
│   ├── components/           # React components
│   │   ├── Navbar.tsx       # Navigation with theme toggle
│   │   ├── HeroSection.tsx  # Main hero section
│   │   ├── MetricsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── EmpoweringSection.tsx
│   │   ├── PaymentSolutions.tsx
│   │   ├── WalletAndNewsletterSection.tsx
│   │   ├── ContactAndFooter.tsx
│   │   └── ThemeToggle.tsx  # Dark mode toggle
│   ├── globals.css          # Global styles & dark mode
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Design System

### Color Palette

- **Primary Gradient**: Blue (#3b82f6) to Purple (#9333ea)
- **Dark Mode**: Custom dark palette with purple tints
- **Text**: High contrast ratios for accessibility

### Typography

- **Font**: Inter (CSS variable: `--font-inter`)
- **Weights**: 400, 500, 600, 700
- **Scale**: Responsive typography with Tailwind utilities

### Components

- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Subtle shadows with hover animations
- **Navigation**: Smooth scroll with section anchors

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the excellent framework
- **Tailwind CSS** for the utility-first CSS framework
- **Shadcn/ui** for beautiful React components
- **Lucide React** for consistent iconography

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
