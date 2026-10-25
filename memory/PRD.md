# PRD — Vipan Kumar Portfolio

## Original problem statement
"I want to create a award wining portfolio website for me that should be award wining website. I have already a portfolio website for me but now i want to make it as award wining website which showcase my work perfectly. use my details from my provided code file I just attach a page with chat you can refer all the related knowledge about me pick all the information and use it to create portfolio. it is naccessory to add skills"

## User choices
- Style: both light Swiss minimal and dark bold editorial, so dark sections alternate with off-white Swiss sections
- Placeholder visuals for now, real images, photo and resume to be added later
- Working contact form (saved to the database) plus an email link

## Architecture
- React (CRA) with framer-motion, Lenis smooth scrolling and Tailwind. Components live in src/components/site/*, and content lives in src/data/profile.js
- FastAPI backend: POST /api/contact saves messages to MongoDB (contact_messages)

## Implemented (2026-10-15)
- Preloader with a 0→100 counter and a two-colour curtain lift
- Hero with masked line-by-line name reveal, scroll parallax, rotating word, a 3D mouse-tilt code card and a rotating "Hire me" badge
- Slow, tilted lime marquee
- Impact grid (light section)
- Filterable works index with a hover preview that follows the cursor; phones get the visuals inline
- Skills bento covering every skill
- About and experience timeline
- Contact form with toasts and a copy-email button
- Footer with a live IST clock
- VK monogram logo, also used as the SVG favicon

## Update (2026-10-25)
- Current role is now Software Engineer at Sardeck Services Pvt. Ltd. (client Intradiem, US); Benepik moved to previous role; Exertica removed
- Hero overline changed to "Backend Engineer — Spring Boot"; hero shows years of experience, calculated from 1 Aug 2024 and rounded down to one decimal
- Added 3 company projects at the top of Works plus a "Company" filter; added a 300K+ users impact tile
- Education: MCA 2023–2025 and BCA 2020–2023
- Lenis smooth scrolling tuned; marquee and badge now animate even when the device has reduced motion turned on; badge text wraps evenly around the arrow
- Footer name now fits at every width; header name now shows on phones too

## Backlog
- P0: Real project screenshots, profile photo and resume PDF
- P1: Project case-study pages; GitHub links for each project
- P2: Admin inbox for contact messages; email notifications
