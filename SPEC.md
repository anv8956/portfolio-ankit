# Engineer Portfolio Website Specification

## 1. Project Overview

**Project Name:** Engineer Portfolio  
**Type:** Personal Portfolio Website  
**Core Functionality:** A professional, mobile-first portfolio website for engineers to showcase their skills, projects, experience, and certifications.  
**Target Users:** Engineering professionals (Software, Mechanical, Electronics) seeking employment or showcasing their work.

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections:**
1. Navbar (sticky)
2. Hero Section
3. About Section
4. Skills Section
5. Projects Section
6. Experience Section
7. Certifications Section
8. Resume Section
9. Contact Section
10. Footer

**Responsive Breakpoints:**
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px

### Visual Design

**Color Palette (Light Mode):**
- Primary: `#0f172a` (Deep Navy)
- Secondary: `#1e293b` (Slate)
- Accent: `#06b6d4` (Cyan)
- Accent Secondary: `#f59e0b` (Amber)
- Background: `#f8fafc` (Off-white)
- Card Background: `#ffffff`
- Text Primary: `#0f172a`
- Text Secondary: `#64748b`
- Border: `#e2e8f0`

**Color Palette (Dark Mode):**
- Primary: `#f8fafc`
- Secondary: `#cbd5e1`
- Accent: `#22d3ee` (Cyan)
- Accent Secondary: `#fbbf24` (Amber)
- Background: `#0f172a`
- Card Background: `#1e293b`
- Text Primary: `#f8fafc`
- Text Secondary: `#94a3b8`
- Border: `#334155`

**Typography:**
- Headings: "Sora", sans-serif (Google Fonts)
- Body: "DM Sans", sans-serif (Google Fonts)
- Hero Name: 3.5rem (mobile: 2.5rem)
- Section Titles: 2.5rem (mobile: 1.75rem)
- Body Text: 1rem
- Small Text: 0.875rem

**Spacing System:**
- Section Padding: 100px 0 (mobile: 60px 0)
- Container Max Width: 1200px
- Card Padding: 24px
- Gap (Grid): 24px

**Visual Effects:**
- Box Shadow (Cards): `0 4px 20px rgba(0, 0, 0, 0.08)`
- Box Shadow (Hover): `0 8px 30px rgba(6, 182, 212, 0.15)`
- Border Radius (Cards): 16px
- Border Radius (Buttons): 8px
- Transition: all 0.3s ease

### Components

**Navbar:**
- Fixed position, backdrop-filter blur
- Logo (Engineer's name) on left
- Navigation links on right (desktop)
- Hamburger menu on mobile
- Active state: accent color underline

**Hero Section:**
- Split layout (text left, image right) on desktop
- Stacked on mobile
- Animated gradient background
- Floating geometric shapes
- CTA buttons with hover effects

**Skills Section:**
- Grid layout (4 columns desktop, 2 tablet, 1 mobile)
- Skill cards with icons
- Progress bars for proficiency levels
- Category tabs (Technical, Tools, Soft Skills)

**Projects Section:**
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Card with image, title, description, tech tags
- Hover: scale up, shadow increase
- Links: GitHub, Live Demo

**Experience Section:**
- Vertical timeline design
- Alternating left/right on desktop
- Single column on mobile
- Timeline connector line with dots

**Certifications Section:**
- Grid layout (4 columns desktop, 2 tablet, 1 mobile)
- Card with certification badge/icon, title, issuer, date

**Contact Section:**
- Two-column layout (form + info) on desktop
- Stacked on mobile
- Form fields with floating labels
- Social media icons

**Footer:**
- Three columns (Logo/About, Quick Links, Social)
- Copyright at bottom

---

## 3. Functionality Specification

### Core Features

**Navigation:**
- Smooth scroll to sections on click
- Active section highlighting in navbar
- Mobile hamburger menu toggle
- Navbar background change on scroll

**Dark Mode Toggle:**
- Toggle button in navbar
- LocalStorage persistence
- Smooth color transitions

**Animations:**
- Fade-in on scroll (Intersection Observer)
- Hero text staggered animation
- Skill bars animate on view
- Card hover effects
- Button hover/active states

**Contact Form:**
- Client-side validation
- Submit button with loading state
- Success/error message display

**Responsive Behavior:**
- Mobile menu overlay
- Adjusted font sizes
- Stacked layouts
- Touch-friendly buttons (min 44px)

### User Interactions

1. Click nav link → Smooth scroll to section
2. Click hamburger → Slide-in mobile menu
3. Click dark mode toggle → Switch theme
4. Hover on cards → Scale and shadow effect
5. Submit contact form → Validation + feedback
6. Scroll page → Elements fade in, navbar changes

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Navbar is sticky and has blur effect
- [ ] Hero section displays name, title, tagline, photo placeholder, CTAs
- [ ] About section has personal introduction and background
- [ ] Skills section shows categorized skills with progress indicators
- [ ] Projects section displays 3+ project cards with hover effects
- [ ] Experience timeline shows 2+ entries with proper styling
- [ ] Certifications display in grid with cards
- [ ] Resume section has download button
- [ ] Contact form is functional with validation
- [ ] Footer has social links and navigation
- [ ] Dark mode toggle works correctly
- [ ] All sections are responsive across breakpoints

### Functionality Checkpoints
- [ ] Smooth scrolling works for all nav links
- [ ] Mobile menu opens/closes properly
- [ ] Dark mode persists on page reload
- [ ] Animations trigger on scroll
- [ ] Contact form validates inputs
- [ ] All external links work
- [ ] Page loads without errors

---

## 5. File Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── SPEC.md
```

---

## 6. Sample Content

**Engineer Info:**
- Name: Alex Johnson
- Title: Software Engineer
- Tagline: "Building innovative solutions through code and creativity"

**Skills:**
- Programming: JavaScript, Python, C++, Java
- Web: HTML, CSS, React, Node.js
- Tools: Git, Docker, AWS, Figma
- Soft: Leadership, Communication, Problem-solving

**Projects:**
1. Smart Home Dashboard - IoT web application
2. Machine Learning Classifier - Python ML project
3. E-Commerce Platform - Full-stack web app

**Experience:**
1. Software Engineer @ TechCorp (2022-Present)
2. Junior Developer @ StartupXYZ (2020-2022)

**Certifications:**
1. AWS Certified Solutions Architect
2. Google Cloud Professional Developer
