# Auburn — Modern Next.js Restaurant Website

A faithful, modern re-creation of the Squarespace **Auburn** template built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** scroll animations.

---

## 🌟 Features & Animations

- **Scroll-Triggered Animations (`Framer Motion`)**:
  - **Parallax Backgrounds**: Hero banners and visual breaks (`Eat Together`, `THE KITCHEN`) feature smooth parallax scroll physics.
  - **Staggered Card Reveals**: Features, menu items, and location cards reveal progressively as you scroll down.
  - **Fade-Up Typography**: Headings and descriptions animate into view smoothly using cubic-bezier easing.
  - **Interactive Image Zoom**: Photography subtly scales up on entrance and reacts smoothly on hover.
  - **Interactive Expandable Articles**: News stories feature animated expand/collapse for full reads.
  - **Animated Navigation Header**: Transparent header that transitions into a frosted-glass dark navigation bar on scroll with an active route indicator.
  - **Slide-In Mobile Drawer**: Spring-animated mobile menu drawer with touch-friendly navigation.
  - **Real-Time Booking Experience**: Interactive table reservation form with instant visual confirmation feedback.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with global navbar, footer, typography
│   ├── page.tsx           # Home page
│   ├── menu/page.tsx      # All 27 authentic Thai dishes & categories
│   ├── reservations/page.tsx # Table booking & private dining specs
│   ├── news/page.tsx      # 4 articles with animated expander
│   ├── locations/page.tsx # Multi-location breakdown & media inquiries
│   └── globals.css        # Tailwind directives and custom scrollbar
├── components/
│   ├── Navbar.tsx         # Sticky frosted navigation + mobile drawer
│   ├── Footer.tsx         # Pre-footer locations + copyright & social links
│   ├── Hero.tsx           # Hero section with parallax scroll effect
│   └── ScrollAnimation.tsx# Reusable Framer Motion animation primitives
├── auburn-template-spec.md# Full technical & design specification
└── package.json
```

---

## 🚀 Running the App

The Next.js development server is currently running at:
👉 **[http://localhost:3000](http://localhost:3000)**

### Available Scripts

- **`npm run dev`**: Starts development server on port 3000
- **`npm run build`**: Creates an optimized production build
- **`npm run start`**: Starts production server
