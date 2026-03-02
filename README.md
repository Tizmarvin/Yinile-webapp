# Yinile Medico Legal Website

## Project overview
This project is a responsive marketing and lead-generation website for Yinile Medico Legal.  
It presents the organisation's services, operating model, and contact channels in a professional format for legal-sector clients.

The site is designed to:
- communicate credibility and service scope clearly;
- guide users through key business sections quickly;
- convert interested visitors through a secure contact form.

## Target audience
- attorneys and law firms;
- claim administrators;
- clients seeking medico-legal assessment services.

## Key features
- responsive layout for desktop, tablet, and mobile devices;
- sticky navigation with smooth section scrolling and active-link feedback;
- services section with visual overlays and hover detail;
- arrangements slider with manual controls and timed auto-advance;
- contact form integrated with Web3Forms;
- basic anti-spam hardening on contact submissions.

## Tech stack
- React 19
- Vite 6
- CSS (component-scoped stylesheets)
- `react-scroll` for in-page navigation
- Web3Forms API for form delivery

## Engineering decisions
- **React + Vite**: chosen for fast local iteration, simple deployment, and maintainable component structure.
- **Component-scoped CSS files**: used to keep styling concerns close to each UI component.
- **`react-scroll` navigation**: used to provide smooth movement between sections and clearer user orientation on single-page content.
- **Client-side form integration**: chosen for speed of delivery; acknowledged security trade-off documented below.

## Architecture summary
The app follows a compositional, section-based structure:
- `App.jsx` orchestrates section order and anchor targets.
- `Navbar` handles sticky state, mobile menu behaviour, and section navigation.
- `Hero`, `Services`, `About`, `Arrangements`, `Contact`, and `Footer` encapsulate page content.
- `Arrangements` manages local slider state and timed transitions.
- `Contact` manages async submission state, validation messaging, and anti-spam checks.

## Security and reliability
Implemented:
- environment-based key configuration via `VITE_WEB3FORMS_ACCESS_KEY`;
- hidden honeypot field on contact form;
- minimum fill-time check before submit;
- submission cooldown window;
- disabled button state while requests are in-flight;
- error handling for failed API/network requests.

Important note:
- this is a frontend application, so runtime keys are still visible in the browser.
- if a key is exposed, rotate it immediately in Web3Forms.

Recommended hosting security headers:
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Strict-Transport-Security`

## Performance notes
- production build succeeds and outputs optimised static assets;
- current image assets are high-resolution and could be further compressed for faster first load on slower networks;
- next step: generate WebP/AVIF variants and serve responsive image sizes.

## Accessibility and UX notes
- touch targets were adjusted for small-screen usability;
- responsive breakpoints were added for major components;
- next step: run a formal accessibility audit (keyboard flow, contrast checks, landmark structure, and ARIA review).

## Local setup
1. Install dependencies:
   `npm install`
2. Create a `.env` file from `.env.example`.
3. Add your Web3Forms key:
   `VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here`
4. Start development server:
   `npm run dev`

## Available scripts
- `npm run dev` - starts local development server.
- `npm run build` - builds production files into `dist/`.
- `npm run preview` - previews the production build locally.
- `npm run lint` - runs ESLint checks.

## Deployment
1. Ensure `.env` contains a valid `VITE_WEB3FORMS_ACCESS_KEY`.
2. Build production assets:
   `npm run build`
3. Deploy the contents of `dist/` to your host (for example Netlify, Vercel, or static hosting on cloud storage/CDN).
4. Configure security headers on the hosting platform.

## Quality checklist before go-live
- [ ] Web3Forms key rotated and valid
- [ ] Build passes (`npm run build`)
- [ ] Lint passes (`npm run lint`)
- [ ] Mobile navigation verified on real device widths
- [ ] Contact form submit tested end-to-end
- [ ] Security headers configured on hosting

## Roadmap
- move contact submission behind a lightweight server endpoint to avoid exposing a third-party key in client code;
- add automated tests for core UI flows and form behaviour;
- optimise image delivery with modern formats and lazy loading;
- add analytics and event tracking for section engagement and form conversions;
- complete an accessibility compliance pass.
