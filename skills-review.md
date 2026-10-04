# Skills & Tools UI review

Scope: Skills section only. Next.js 16 / React 19, plain CSS, existing simple-icons. No added dependency, animation library or theme toggle. Existing light palette is retained.

Direction: a fullstack developer's toolkit within the existing cream/orange portfolio. ENERGY 2 / RHYTHM 2 / MOTION 2 within this section. The existing section rhythm stays unchanged.

## Decisions

- Six categories express the existing skills, rather than adding technologies from the illustrative list as unverified expertise. The original skillGroups remain the data source; HTML and CSS are individually labeled.
- Three desktop columns, two tablet columns and one mobile column give each technology enough reading space. The 1366×768 desktop section remains one viewport; narrower layouts grow with content.
- Georgia headings and DM Sans content follow the adjacent sections. Cream backgrounds, orange category symbols and 16px panel corners match existing surfaces.
- Monochrome technology logos preserve identity without introducing a competing color palette. General concepts and Auth.js use semantic symbols when the installed package has no corresponding logo.
- Warm corner gradients and modest hover shadows distinguish category boundaries. Chip lift and icon scale acknowledge pointer exploration without hiding information or implying a button action.
- One-time viewport entry animation introduces each category. Reduced-motion disables entry animation and hover movement. Content remains visible without JavaScript or IntersectionObserver.

## Delivery gate

- PASS R-02: new visible copy has no em dashes.
- PASS R-03: checked 320, 390, 768, 1100 and 1366px; no horizontal overflow.
- PASS R-17, R-18, R-36, R-38: counts derive from arrays; existing skills preserved; no testimonials or unverified claims added.
- PASS R-23, R-24: existing technology logos and requested category symbols; navigation and other sections unchanged.
- PASS R-25: dark text on white/cream and existing dark orange accents; logos use dark ink for legibility.
- PASS R-26, R-27, R-28, R-32, R-34: semantic lists present static skill information without dead buttons, unnecessary tab stops, hidden hover content, loading states or an invented theme switch.
- PASS R-33: edits made directly in source with apply_patch.
- PASS R-35: production build passed; viewport screenshots inspected; all 35 chips have SVG icons; hover measured at translateY(-2px); reduced-motion transition duration is 0s.
- PASS R-37: explicit user direction and scoped visual decisions recorded above.
- PASS R-01, R-04, R-06, R-07, R-08, R-09, R-10, R-12, R-13, R-14, R-19, R-22: restrained gradient and motion serve category recognition; category icons represent their content; typography follows adjacent sections; no new patterns, badges, glass or illustrations.
- PASS liveliness: headline remains the focal point; category spacing separates groups; orange accents and rounded cream panels preserve the existing identity; motion is finite and optional.
- PASS C-1 through C-5, R-05, R-11, R-15, R-16, R-20, R-21, R-29, R-30, R-31: decisions follow user scope and real skill data; existing site identity preserved; no new unrelated sections or unsupported functionality.

Evidence: tmp/skills-new-{1366,1100,768,390,320}.png. Existing original-reference contrast exceptions elsewhere on the site are outside this change.

Regression verification: all five existing Playwright tests passed against the production build on port 3003 (9.7s), including history tabs, carousel, contact draft and mobile navigation. The development-server run had interaction timing failures; production validation passed without changing those components. Production animation check observed six entry animations and zero running animations after completion.
