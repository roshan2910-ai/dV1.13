INSIDE TRACK — ENHANCED INTERACTIVE EDITION

Included additions:
- Three selectable colour themes: White Chocolate, Dutch White and Old Lace.
- Persistent light/dark mode switch (moon/sun control).
- Rotating homepage highlights carousel with next/previous, dots and pause controls.
- Animated announcement ticker on the homepage.
- Subtle reveal-on-scroll motion for selected content cards and sections.
- Dismissible visitor information popup about supporting the museum mission.
  The popup does not collect money; online donations are not enabled.
- Reduced-motion support for visitors who prefer less animation.

Run:
1. Extract this folder.
2. Keep all files together.
3. Open index.html or serve the folder through your static hosting provider.

Checks performed:
- All JavaScript files pass Node syntax checks.
- Local HTML href/src references resolve to files in this folder.
- Theme selector, display-mode toggle, carousel, ticker and visitor notice scripts are included.

Production status:
This is an enhanced source package, not a fully production-tested live deployment.
Please test on your actual hosting domain and target devices. Supabase credentials, secure admin
authentication, database/RLS/storage policies, HTTPS and backups remain deployment requirements.
The existing Admin Dashboard still uses browser localStorage and is not secure multi-user access control.


RESPONSIVE DESIGN UPDATE
- Added a responsive layout layer for mobile phones, tablets, laptops and wide screens.
- Added fluid content widths, flexible card grids, responsive carousel layout and touch-friendly controls.
- Added horizontal scrolling for wide data tables instead of allowing the page to overflow.
- Added narrow-screen handling for the theme selector, notices, forms and modals.
- Includes reduced-motion handling for accessibility.

Compatibility target: modern browsers on Android, iOS/iPadOS, Windows and macOS.
This is responsive CSS source work; real-device/browser testing is still recommended before launch.


TOP APPEARANCE CONTROLS UPDATE
- The colour theme selector is fixed at the TOP-RIGHT of every page.
- Choose White Chocolate, Dutch White or Old Lace to change the site's colour palette.
- Use the moon button to enable dark mode; it changes to a sun button for light mode.
- Theme and display mode are saved in the browser and persist while navigating pages.
- Controls adapt for narrow mobile screens.
- Colour and background transitions are animated.


TOP STRIP PLACEMENT UPDATE
- Moved the colour theme selector and dark/light mode toggle into the same top strip as "Preserving Journalism • 1993–2026".
- Controls now sit within the top bar layout rather than floating over the page/header.
- On narrow screens, controls wrap onto a second line within the top strip to prevent overlap.


ORIGINAL COLOUR OPTION ADDED
The colour selector now has four options:
1. Original — the first website's white, near-black and burgundy/red palette
   (#FFFFFF, #151515, #A51F2B; original grey #D9D9D9).
2. White Chocolate
3. Dutch White
4. Old Lace
Dark Mode remains a separate moon/sun toggle and works with all four palettes.


ORIGINAL THEME GREY REFINEMENT
- The Original palette now uses layered neutral greys across the page background,
  alternating section backgrounds, card borders, subtle shadows and secondary text.
- White cards and burgundy accents are retained to preserve the original identity.
- This refinement applies only to the Original theme; the other three palettes remain unchanged.


UNIFIED SITE-WIDE EDITORIAL COLOUR SYSTEM
A single coordinated palette has been applied across the landing page, Archive,
Journalists, Exhibitions, Research and Admin:
- Warm white / White Chocolate for primary content surfaces
- Charcoal for typography and top navigation bands
- Burgundy for links, active states and primary actions
- Balanced grey for borders, dividers and secondary text
- Dutch White for alternating section backgrounds
- Old Lace for the overall page canvas
The existing dark-mode toggle remains available. Existing theme selector labels
remain in place, but all light-theme choices now use this unified editorial palette
so the site remains visually consistent from page to page.


CONTRAST AND READABILITY FIX
- Added explicit light-mode text colours for headings, paragraphs, cards, metadata,
  forms, navigation bands and footer content.
- Added explicit dark-mode foreground/background colours for headings, body copy,
  cards, tables, forms, links, notices and footer content.
- Improved placeholder and secondary text contrast.
- This is a source-level CSS correction. Please verify all pages in both modes
  in a browser and check any custom status badges or third-party embeds.


SINGLE FIXED BRAND PALETTE UPDATE
- Removed the colour theme selector from all pages.
- The website now uses one consistent palette throughout:
  White / warm White Chocolate (#FFFCF7), Charcoal (#292725),
  Burgundy (#8F2633), Grey (#D6D2CC), Dutch White (#F2F4EF),
  and Old Lace (#FDF5E6).
- The colour palette is fixed across the landing page, archive, journalists,
  exhibitions, research and admin pages.
- The separate dark/light mode toggle is retained in the top strip.


FULL STATIC QA / REPAIR PASS
- Corrected appearance-toggle placement detection for both homepage (.top-bar-content)
  and inner pages (.topbar-inner / .topbar .container).
- Consolidated final light/dark text and surface contrast rules.
- Checked all 8 JavaScript files with Node syntax validation.
- Checked all 6 CSS files for balanced braces.
- Checked all 6 HTML pages for duplicate IDs and missing local href/src references.
- Static QA passed. Real-device browser testing and production backend verification
  are still required; see the handover notes.
KNOWN LIMITATIONS THAT ARE NOT FIXED BY FRONT-END QA:
- Admin dashboard uses browser localStorage, not secure server-side authentication/database.
- Historical entries are explicitly demonstration/unverified placeholders and require fact-checking.
- External fonts/images need network access.
