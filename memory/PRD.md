# KNDP Agency Website — PRD

## Original Problem Statement
Build the KNDP agency website. Clean, modern startup look; white + baby blue colors; hero "We Build Whatever You Need" with given subheading; DO NOT mention AI anywhere. Pages: Home (hero, what we do, why KNDP, CTA), Services (8 offerings incl. custom tools & automations), Portfolio (coming-soon placeholder), About (founder story/mission), Contact (form + email placeholder + calendar/booking link placeholder). Full-stack with contact form saved to database only.

## Architecture
- Frontend: React 19 single-page layout (no routes). One continuous scroll: Hero → Services → Portfolio → About → Contact. Sticky stacked panel transitions between sections (framer-motion scale/dim), scroll-spy navbar + footer smooth-scroll via Lenis, animated hero background (grid, drifting blobs, mouse-parallax shapes), word-masked headlines, animated counters, magnetic buttons, custom cursor ring, editorial marquee, sonner toasts.
- Backend: FastAPI (`/api` prefix). POST /api/contact (save message), GET /api/contact (list messages), GET /api/ health.
- Database: MongoDB via MONGO_URL/DB_NAME, collection `contact_messages` (uuid ids, ISO timestamps).

## Implemented
- 2026-08-19: All sections with award-style art direction: kinetic masked hero, animated hero background, stacked sticky panels, bento grids, numbered manifesto chapters, editorial marquee, giant dark footer.
- 2026-08-19: Working contact form (service chips, validation, toast feedback) saving to MongoDB.
- 2026-08-19: Portfolio filled with 6 realistic placeholder project cards (images, tags, "In progress" badges) keeping the coming-soon framing.
- 2026-08-19: Converted from 5 routed pages to a single-page continuous scroll with section smooth-scroll nav and scroll-spy active states.
- 2026-08-19: Fixed stacked-panel clipping — panels measure their height and only pin after all content has scrolled through.
- 2026-08-19: Trust & conversion pass — hero stats (projects/2h reply promise/4w delivery), promise chips ("Free estimate · Reply within 2 hours · You own everything"), all primary CTAs changed to "Get a Free Estimate", new FAQ accordion panel (5 Q&As) between About and Contact, 2-hour response line near CTAs.
- No "AI" mentioned anywhere on the site.

## User Personas
- Prospective client (SMB owner): browses services, submits project enquiry.
- Founder/owner: reads submissions via GET /api/contact (no admin UI yet).

## Implemented (2026-08-19)
- All 5 pages with award-style art direction: kinetic masked hero reveal, parallax hero image, bento grids, numbered manifesto chapters, editorial marquee, giant dark footer with KNDP wordmark.
- Working contact form (service chips, validation, toast feedback) saving to MongoDB.
- Mobile responsive nav with animated menu. All interactive elements carry data-testid.
- No "AI" mentioned anywhere on the site.

## Prioritized Backlog
- P0: Admin view for contact submissions (protected page or basic auth).
- P1: Email notification on new enquiry (Resend integration).
- P1: Real booking calendar link (Cal.com/Calendly) replacing placeholder.
- P2: Real portfolio case studies once projects exist.
- P2: Blog/insights section, SEO metadata expansion.

## Next Tasks
1. Add lightweight admin login to view enquiries in-browser.
2. Wire Resend email notifications for new contact messages.
3. Swap booking placeholder for real scheduling link.
