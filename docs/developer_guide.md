# AMPLIFY LABS - DEVELOPER HANDOFF
## Quick Reference Guide

---

## 🎨 COLORS (Copy-Paste)

```css
/* Primary Colors */
--black: #000000;
--white: #FFFFFF;
--cyan: #00F0FF;

/* Secondary Colors */
--gray: #808080;
--light-gray: #F5F5F5;
--dark-gray: #1A1A1A;
```

**Visual Preview:**
```
████████  #000000 (Black) - Primary text, logo, backgrounds
████████  #FFFFFF (White) - Backgrounds, text on dark
████████  #00F0FF (Electric Cyan) - CTAs, links, accents
████████  #808080 (Gray) - Secondary text
████████  #F5F5F5 (Light Gray) - Subtle backgrounds
```

**Usage:**
- **Black:** Main text, headings, logo
- **White:** Page backgrounds, text on black
- **Cyan:** Call-to-action buttons, links, highlights (use sparingly!)
- **Gray:** Supporting text, captions
- **Light Gray:** Section backgrounds, cards

---

## 🔤 TYPOGRAPHY

**Font:** Outfit (Google Fonts)

```html
<!-- Import this in <head> -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
/* CSS Font Setup */
body {
  font-family: 'Outfit', -apple-system, system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
}
```

**Type Scale:**

| Element | Size (Desktop) | Weight | Line Height |
|---------|---------------|---------|-------------|
| H1 (Hero) | 72px | Bold (700) | 1.1 |
| H2 (Section) | 48px | Bold (700) | 1.2 |
| H3 (Subsection) | 32px | SemiBold (600) | 1.3 |
| H4 (Card Title) | 24px | SemiBold (600) | 1.4 |
| Body Large | 20px | Regular (400) | 1.6 |
| Body | 16px | Regular (400) | 1.6 |
| Small | 14px | Regular (400) | 1.5 |

**Mobile Sizes:**
- H1: 48px
- H2: 36px
- H3: 28px
- H4: 22px
- Body: 16px

---

## 🔘 BUTTONS

**Primary Button (Main CTA):**
```css
.btn-primary {
  background: #00F0FF;
  color: #000000;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #00D4E6;
  transform: scale(1.02);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: #000000;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
  border: 2px solid #000000;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #000000;
  color: #FFFFFF;
}
```

**Ghost Button (on dark backgrounds):**
```css
.btn-ghost {
  background: transparent;
  color: #FFFFFF;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: #FFFFFF;
  color: #000000;
}
```

---

## 📦 CARDS

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}
```

**Featured Card (with glow):**
```css
.card-featured {
  background: #000000;
  color: #FFFFFF;
  border: 2px solid #00F0FF;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 40px rgba(0,240,255,0.3);
}
```

---

## 📝 FORMS

**Input Field:**
```css
.input {
  width: 100%;
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 8px;
  padding: 14px 16px;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #00F0FF;
  box-shadow: 0 0 0 3px rgba(0,240,255,0.1);
}
```

**Label:**
```css
.label {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
  display: block;
}
```

---

## 🎨 LOGO

**Text Logo:**
```
AMPLIFY LABS
```

**Font:** Outfit Bold
**Letter Spacing:** -0.02em
**All Caps:** Yes

**Minimum Size:**
- Digital: 120px width
- Mobile: 100px width

**Files Needed:**
1. `amplify-labs-logo-black.svg` (for light backgrounds)
2. `amplify-labs-logo-white.svg` (for dark backgrounds)
3. `favicon.ico` (16x16, 32x32, 48x48)

**Logo should be:**
- Simple text wordmark
- Black on white backgrounds
- White on black/dark backgrounds
- No special effects (no shadows, gradients, outlines)

---

## 📐 SPACING & LAYOUT

**Spacing Scale:**
```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-2xl: 64px;
--spacing-3xl: 80px;
--spacing-4xl: 120px;
```

**Section Padding:**
- Desktop: 80px top/bottom, 48px left/right
- Mobile: 48px top/bottom, 24px left/right

**Container Max Width:** 1280px

**Content Max Width:** 680px (for text-heavy content)

**Grid Gaps:**
- Cards: 24px
- Features: 32px
- Sections: 64px

---

## 🌐 NAVIGATION

**Desktop Nav:**
```css
.navbar {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  height: 80px;
  padding: 0 48px;
  border-bottom: 1px solid #E5E5E5;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-link {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #00F0FF;
}
```

**Mobile Nav:**
- Height: 64px
- Padding: 0 24px
- Hamburger menu transforms to X
- Full-screen menu overlay

---

## 🎭 EFFECTS & SHADOWS

**Shadows:**
```css
/* Small (cards) */
box-shadow: 0 4px 6px rgba(0,0,0,0.05);

/* Medium (hover) */
box-shadow: 0 12px 24px rgba(0,0,0,0.1);

/* Large (modals) */
box-shadow: 0 24px 48px rgba(0,0,0,0.15);

/* Glow (cyan accent) */
box-shadow: 0 0 40px rgba(0,240,255,0.3);
```

**Border Radius:**
```css
/* Small (buttons, inputs) */
border-radius: 8px;

/* Medium (cards) */
border-radius: 16px;

/* Full (pills, badges) */
border-radius: 9999px;
```

**Transitions:**
```css
/* Fast (buttons, links) */
transition: all 0.2s ease;

/* Normal (cards, hover effects) */
transition: all 0.3s ease;
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */

/* Mobile (default) */
/* 0px - 640px */

/* Tablet */
@media (min-width: 641px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Desktop styles */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Large screen styles */
}
```

---

## 🎨 EXAMPLE SECTIONS

### Hero Section
```html
<section style="background: #000000; padding: 120px 48px; text-align: center;">
  <h1 style="color: #FFFFFF; font-size: 72px; font-weight: 700; line-height: 1.1; margin-bottom: 24px;">
    Amplify Your Growth,<br>Not Your Workload
  </h1>
  <p style="color: #FFFFFF; font-size: 20px; line-height: 1.6; margin-bottom: 48px; max-width: 680px; margin-left: auto; margin-right: auto;">
    AI-powered marketing automation for medspas and e-commerce brands.
  </p>
  <button style="background: #00F0FF; color: #000000; padding: 16px 32px; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer;">
    Book Your Discovery Call
  </button>
</section>
```

### Feature Section
```html
<section style="background: #FFFFFF; padding: 80px 48px;">
  <h2 style="font-size: 48px; font-weight: 700; text-align: center; margin-bottom: 64px;">
    How It Works
  </h2>
  
  <!-- Feature cards grid here -->
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1280px; margin: 0 auto;">
    
    <div style="background: #FFFFFF; border: 1px solid #E5E5E5; border-radius: 16px; padding: 32px;">
      <div style="width: 48px; height: 48px; background: #00F0FF; border-radius: 8px; margin-bottom: 16px;"></div>
      <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 12px;">Feature Title</h3>
      <p style="color: #808080; font-size: 16px; line-height: 1.6;">Feature description goes here.</p>
    </div>
    
    <!-- Repeat for other features -->
    
  </div>
</section>
```

### CTA Section
```html
<section style="background: linear-gradient(135deg, #000000 0%, #00F0FF 100%); padding: 80px 48px; text-align: center;">
  <h2 style="color: #FFFFFF; font-size: 48px; font-weight: 700; margin-bottom: 24px;">
    Ready to Get Started?
  </h2>
  <p style="color: #FFFFFF; font-size: 20px; margin-bottom: 32px;">
    Book a 15-minute discovery call. Zero pressure, pure value.
  </p>
  <button style="background: #FFFFFF; color: #000000; padding: 16px 32px; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer;">
    Schedule Your Call
  </button>
</section>
```

---

## ✅ QUICK CHECKLIST FOR DEVELOPER

- [ ] Import Outfit font from Google Fonts
- [ ] Set up CSS variables for colors
- [ ] Create logo SVG files (black and white versions)
- [ ] Build responsive navigation
- [ ] Implement button styles (primary, secondary, ghost)
- [ ] Create card component with hover effect
- [ ] Set up form input styles with focus states
- [ ] Add proper spacing/padding to sections
- [ ] Ensure mobile responsiveness (test on 375px, 768px, 1024px, 1440px)
- [ ] Add smooth transitions to interactive elements
- [ ] Create favicon
- [ ] Optimize for performance (lazy load images, minify CSS/JS)
- [ ] Test accessibility (keyboard navigation, color contrast)

---

## 🚀 PRIORITY ORDER

**Phase 1 (MVP - Ship ASAP):**
1. Logo (simple text version)
2. Basic typography (Outfit font)
3. Color scheme applied
4. Primary button style
5. Hero section
6. One CTA section
7. Mobile responsive

**Phase 2 (Polish):**
1. Navigation with sticky header
2. Card components
3. Form styles
4. Hover effects
5. Smooth transitions
6. Additional sections

**Phase 3 (Enhancement):**
1. Animations
2. Gradient backgrounds
3. Glow effects
4. Advanced interactions
5. Performance optimization

---

## 📞 QUESTIONS?

Contact: hello@amplifylabs.io

**This is everything you need to build the Amplify Labs website.**

Keep it simple, keep it clean, keep it black and cyan. 🚀
