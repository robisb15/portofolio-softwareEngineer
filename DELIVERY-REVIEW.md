# Delivery gate: Next.js portfolio

Direction: preserve the six supplied HTML sections, cream/orange identity, large condensed hero type, cutout portrait, circular About photo, career tabs, horizontal project cards, software strip and contact panel. ENERGY 2 / RHYTHM 2 / MOTION 1. Body font is locally bundled DM Sans; Barlow Condensed preserves the hero; Georgia preserves section headings. Layout spacing keeps each desktop section within one screen. Colorful project surfaces separate screenshots, and technology icons identify CV skills. The original hero orb, glow and coil preserve the explicitly requested reference instead of introducing new imagery.

## Hard gate

- PASS R-02: new UI copy uses no em dash.
- PASS R-03: no horizontal page overflow at widths 320, 390, 640, 768, 900, 1024, 1366 and 1440; 390px screenshots reviewed. Long mobile sections remain scrollable.
- PASS R-17: experience claim comes from CV; project count is the nine actual sourced entries.
- PASS R-18: no testimonials or invented people.
- PASS R-23: supplied portrait and source-site screenshots only; reference motifs retained.
- PASS R-24: navigation uses the six existing IDs; CV endpoint and nine image endpoints returned HTTP 200.
- PASS R-25: retained text palette has at least 5.4:1 accent/background, 5.96:1 muted/background and 14.04:1 main/background in the source theme checks. Inputs use the previously measured 3.38:1 border, 5.36:1 placeholder and 5.84:1 primary-button pairing. Brand marks include dark text labels.
- PASS R-26: career tabs switch; all eight Next and Prev steps exercised; carousel keyboard arrow works; menu opens/closes/navigates; form prepares draft; download creates a text file; dialog closes with button/Escape and returns focus.
- PASS R-27: initial form, invalid/whitespace input and ready draft states tested. No asynchronous data submission; project and CV data are rendered from local files.
- PASS R-28: no FAQ.
- PASS R-32: semantic controls, visible focus, keyboard tabs and Escape tested; carousel offers buttons and keyboard input.
- PASS R-33: executable source edited directly through apply_patch.
- PASS R-34: one consistent light theme matching the source, no nonfunctional theme toggle.
- PASS R-35: production build and TypeScript check passed; 5/5 Playwright tests passed; all six desktop and mobile sections visually reviewed.
- PASS R-36: no invented performance, security or availability claims.
- PASS R-37: user-provided HTML is the design direction; existing during-mode choice retained.
- PASS R-38: placeholder companies, skills, photos and project descriptions replaced with CV/source content.

## Purpose gate

- PASS R-01: original warm hero lighting and orange accent preserve reference identity; no unrelated gradients.
- PASS R-04: technology icons come from Simple Icons and directly label CV technologies.
- PASS R-06: display font matches header reference; serif headings match skills/contact/experience; body prioritizes readability.
- PASS R-07: flat warm backgrounds separate original sections; no generic grid wallpaper.
- PASS R-08: arrows identify outbound links, download and carousel direction.
- PASS R-09: project tags contain source technology/category labels, no promotional badges.
- PASS R-10: no glassmorphism.
- PASS R-12: screenshot shadow separates website image from colored backing; other panels remain flat.
- PASS R-13: glow is confined to the original hero portrait lighting.
- PASS R-14: each layout follows its distinct original section purpose.
- PASS R-19: hover feedback and native smooth scroll only, reduced-motion supported.
- PASS R-22: real supplied photo and genuine screenshots instead of generated illustrations.

## Liveliness

- PASS explicit dials: ENERGY 2 / RHYTHM 2 / MOTION 1.
- PASS consistency: strong hero, varied but calm section layouts, restrained interaction motion.
- PASS focal points: one major heading per screen.
- PASS whitespace: compact card spacing versus spacious section containers.
- PASS accent: burnt orange connects headings and primary actions.
- PASS identity: original warm palette, serif titles and condensed hero remain recognizable.
- PASS design read: direction recorded before final delivery; source HTML was explicitly designated by user.

## Craftsmanship

- PASS C-1/R-31: reasons for typography, color, imagery, spacing and layouts recorded above.
- PASS C-2: no empty action controls; email URI verified, external email delivery remains user-controlled.
- PASS C-3: exactly the six requested source sections.
- PASS C-4: build/typecheck/browser tests pass; mobile content allowed to grow rather than clip.
- PASS C-5: personal data from CV, project data from recorded website snapshot.
- PASS R-05: section compositions follow original references.
- PASS R-11: compact form/history corners versus rounded project cards and primary links reflect their original functions.
- PASS R-15: specific project, CV and email actions.
- PASS R-16: plain descriptions; no invented marketing claims.
- PASS R-20: personal portrait and original reference identity retained.
- PASS R-21: light theme requested through existing references.
- PASS R-29: cream/white/ink/orange core, original project backing colors and brand icons as content accents.
- PASS R-30: no unrelated popular-product clone.

## Evidence and limits

### Motion and draggable carousel — 2026-10-04

- PASS: mouse dragging moves the native horizontal project carousel and snaps to cards on release. Browser check measured 810px after dragging and 1620px after Next. Drag suppresses accidental link navigation; native touch scrolling and existing keyboard controls remain available.
- PASS: section entry uses one-time IntersectionObserver/Web Animations transitions with content visible before hydration. Reduced motion skips entrance animations and disables added hover transforms; no dependency added. Homepage hero unchanged.
- Purpose: finite entrance motion establishes reading order; small CTA/image hover movement gives pointer feedback. No looping motion or autoplay. Production build passed.

### Contact and footer reference update — 2026-10-04

- PASS: Work with Me follows the supplied two-column reference: contact channels on the left and a vertically arranged form on a warm neutral panel on the right. Existing draft/email/download behavior is retained.
- PASS: footer follows the supplied oversized-type composition, using the portfolio's warm orange family, a restrained circle background, real contact/location data, collaboration CTA and return-to-top link. No fictitious office addresses, phone numbers or business hours were added.
- PASS: production build succeeds; desktop contact remains 768px at 1366×768. Browser checks at 1366, 390 and 320px show no horizontal overflow or oversized footer text. Screenshots: tmp/contact-refresh-{1366,390,320}.png and tmp/footer-refresh-{1366,390,320}.png.
- Design reasons: Space Grotesk unifies section headings; Barlow Condensed mirrors the reference's large footer statement and existing hero typography. Cream form surfaces, orange icons and established pill CTAs retain the portfolio identity. Inputs retain persistent labels, visible focus and validation. Decorative elements are hidden from assistive technology; all information remains visible without hover. Existing delivery checks otherwise remain applicable.

### Compact project detail — 2026-10-04

- PASS: user-requested one-screen editorial composition replaces the long case-study view. Left column contains title, summary, feature list, verified technologies and live link; right column contains the original screenshot with a lightbox. Bottom previous/next navigation is retained.
- PASS: measured page height equals viewport at 1366×768 and 1280×720; no horizontal overflow at those widths or 390px. Mobile expands vertically to keep content legible. Hero and homepage styling remain unchanged.
- PASS: production build generates all nine project routes. Typography, warm surfaces, orange accent, rounded image framing and existing buttons retain the portfolio identity. No fake additional screenshots, invented data or dependencies were added. Visual evidence: tmp/compact-project-{1366,1280,390}.png.
- Layout and spacing follow the user's supplied compact reference; one screenshot is shown because only one source image exists per project. Existing full case-study data is preserved for future edits. Reduced-motion and native-dialog keyboard behavior remain available.

### Shared section typography — 2026-10-04

- PASS: section h2 headings now use the existing locally hosted Space Grotesk 700 through a shared CSS token. Browser computed styles verified every homepage section heading and case-study section heading.
- PASS: the homepage hero remains Barlow Condensed; its layout and styles were not edited. Desktop 1366px and mobile 390px checks found no horizontal overflow.
- Reason: the user explicitly requested section typography to match About Me, while preserving the hero.

### Project case studies — 2026-10-04

- PASS: nine dynamic slug routes, per-project metadata, 404 for unknown slugs, homepage links, cross-project navigation and keyboard-accessible screenshot dialogs are implemented. The existing eight-test suite reported passed in test-results/.last-run.json.
- Existing colors, Georgia project titles, shared section-heading font, DM Sans body text, rounded cards and button styles are reused. No extra package was installed. Layouts adapt from two columns to one; reduced-motion removes hover transitions.
- Project summaries, features and needs are editorial expansions of reference/portfolio-source.html. Descriptions do not claim measured improvements or a historical manual workflow. Unknown years, roles, repository links, challenges, process, contributions and architecture are omitted; their optional data fields and rendering components are ready for verified information.
- One original screenshot per project is used without fabricating additional screens. Technology data is shown only where explicitly recorded in the source. Base project records are enriched by image key rather than duplicated.
- PASS: real content, no invented metrics or testimonials; existing navigation targets retained; dialog focus and Escape behavior tested; no extra theme, animation dependency or decorative background introduced. Hover movement serves screenshot exploration and project navigation. Existing light theme follows the user's reference. ENERGY 2 / RHYTHM 2 / MOTION 1.

### Reference restoration — 2026-10-03

- About heading follow-up PASS: Space Grotesk 700 is bundled locally as explicitly requested. The existing section eyebrow, orange second line, heading scale and spacing now match the other section headings. Body typography remains unchanged. Build passed; browser checks at 1366, 390 and 320px confirmed the font family and no horizontal overflow. Desktop About remains 768px tall at 1366×768. Evidence: `tmp/about-space-{1366,390,320}.png`. Typography choice and accent styling follow the user's direction; previous delivery checks otherwise remain applicable.

- Services restoration PASS: hero left-side copy reads “Web, Mobile & API” and “Frontend, backend, hingga deployment.” This restores the requested service summary using skills already recorded in the CV. Desktop 1366×768 and mobile 390×844 rendered successfully without horizontal overflow; mobile placement uses the space between the heading and portrait. Existing reference styling and all other controls remain unchanged. Evidence: `tmp/hero-services-{1366,390}.png`.

- Follow-up PASS: removed both photo selectors and their upload state. Added a centered name above the hero heading and grouped the right-side name with its Software Engineer subtitle; separate positioning prevents the previous text collision. Desktop 1366×768 and mobile 390×844 browser checks show zero horizontal overflow, no file inputs, and the centered name above the heading. Build passed. Screenshots: `tmp/hero-identity-{1366,390}.png`. Original typography and palette are retained to follow the supplied reference.

- Header and About Me now use `components/reference-sections.tsx` and its scoped stylesheet, restoring ornaments, original typography, portrait frames, photo selectors, About cards, and CV button from the original HTML.
- Real profile data, portrait and CV are retained. Decorative positions account for the fixed navigation; desktop sections retain viewport sizing and mobile content can grow.
- The user's explicit request for original styling takes precedence over palette recommendations: the original white-on-yellow CV button is restored and is not claimed to meet AA contrast.
- Production build and all five Playwright tests passed. Photo selection, CV download and portfolio navigation were also checked manually. Screenshots: `tmp/header-restored.png` and `tmp/about-restored.png`.

- All sections measure exactly 768px at 1366x768; also 720px at 1280x720 and 1366x720, and 768px at 1024x768.
- At 390x844, About, Experience and Contact exceed one viewport to preserve readable text and reachable controls; other sections remain 844px.
- HTML backup checksums match all six originals. Root originals remain intact.
- External project/social URLs follow source/CV. Live availability of each external service and mail application sending were not asserted or modified.
- Browser screenshots: tmp/{hero,about,experience,projects,skills,contact}-{desktop,mobile}.png.
