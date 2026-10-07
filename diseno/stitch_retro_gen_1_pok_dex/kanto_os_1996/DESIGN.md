---
name: Kanto OS 1996
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e7bcba'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#303030'
  outline: '#ad8885'
  outline-variant: '#5d3f3e'
  surface-tint: '#ffb3b0'
  primary: '#ffb3b0'
  on-primary: '#68000f'
  primary-container: '#dc0a2d'
  on-primary-container: '#ffeeed'
  inverse-primary: '#bf0024'
  secondary: '#74d1ff'
  on-secondary: '#003548'
  secondary-container: '#199bcb'
  on-secondary-container: '#002e3f'
  tertiary: '#7ddb88'
  on-tertiary: '#003912'
  tertiary-container: '#1e7f38'
  on-tertiary-container: '#cfffce'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#930019'
  secondary-fixed: '#c1e8ff'
  secondary-fixed-dim: '#74d1ff'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d67'
  tertiary-fixed: '#99f8a2'
  tertiary-fixed-dim: '#7ddb88'
  on-tertiary-fixed: '#002108'
  on-tertiary-fixed-variant: '#00531e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Space Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Space Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system translates the industrial aesthetic of the iconic late-90s handheld field encyclopedia into a hyper-tactile, responsive digital interface. It bridges physical industrial engineering with digital retro computing. The visual language balances heavy injection-molded plastics, physical bevels, mechanical actuation, and phosphor/LCD matrix displays.

### Design Movements & Visual Language
- **Tactile Skeuomorphism & Industrial Hardware:** Physical chassis modeling featuring 45° chamfers, parting lines, injection-molded plastic texturing, matte micro-finishes, and mechanical spring resistance on tactile inputs.
- **Retro Dot-Matrix LCD:** Displays simulate high-contrast 2-bit reflective LCD panels, featuring visible subpixel grids, faint horizontal scanline artifacts, dark emerald pixel response lag, and backplate drop-shadowing.
- **Chunky Hardware Ergonomics:** Asymmetric handheld layout logic with functional chrome hinges, directional cross-pads, circular action triggers, speaker slot vents, and jeweled optical lenses.

### Emotional Response & Target Audience
The interface evokes tactile nostalgia, industrial reliability, and field-ready durability. It is tailored for enthusiasts, archival collectors, and retro-futuristic digital applications requiring authentic, weighty, and deliberate physical feedback.

## Colors

The color system derives directly from the injection-molded plastics and optoelectronic components of late-20th-century field hardware.

### Primary Chassis Tones
- **Chassis Crimson (`#DC0A2D`):** The primary saturation of the outer casing, formulated to balance matte sheen under direct light.
- **Deep Bevel Shadow (`#8B0000`):** Applied to inner rim chamfers, recessed wells, and lower bevel lip drops.
- **Specular Ridge (`#FF3B56`):** Crisp 1px highlight applied to top and left exterior edges to simulate ambient zenith lighting.
- **Undercut Crimson (`#C00D0D`):** Mid-tone shadow utilized along parting lines and hinge seams.

### Optoelectronic & Lens Elements
- **Sensor Dome Cyan (`#30A7D7`):** The core emissive core of the oversized primary cyclops sensor light.
- **Sensor Deep Cobalt (`#195B8C`):** Base perimeter of the concave optical lens.
- **Glint White (`#FFFFFF`):** High-specularity pinhead reflection fixed at the upper 315° coordinate of the dome.
- **Trio Indicator Lights:**
  - **Status Red (`#E53935`):** Alert/Power indicator with high-density jewel casing.
  - **Status Amber (`#FFB300`):** Processing/Cache indicator.
  - **Status Green (`#51AD60`):** Sync/Ready indicator.

### LCD Matrix Canvas
- **LCD Field Bright (`#98CB98`):** The active background matrix of the green/cyan monochrome dot-matrix display.
- **LCD Ink Shadow (`#1E392A`):** The high-opacity off-state segment and pixel value used for text, raster art, and charts.
- **LCD Ghost Tone (`#87B887`):** 8% opacity ghost traces representing unlit matrix nodes.

### Hardware Neutrals & Keypad Tones
- **D-Pad Basalt (`#232323`):** Directional pad and bezel frame neutral.
- **Keypad Cobalt (`#2980B9`):** 10-key tactile number matrix buttons.
- **Action Gold (`#F1C40F`):** Recessed secondary circular trigger buttons.

## Typography

Typography enforces the aesthetic constraints of embedded 8-bit firmware. Monospaced character grids replicate hardware character generators (ROM-based glyphs).

### Font Selections
- **Primary Display & Data (`Space Mono`):** Geometric, mechanical, and slightly condensed, Space Mono provides the physical weight of fixed-pitch displays without sacrificing legibility on modern dense canvases.
- **System Labels & Hardware Markings (`JetBrains Mono`):** Clean, crisp, code-oriented glyphs reserved for chassis markings, hardware telemetry, memory addresses, and sub-labels.

### Typographic Rules
- **All-Caps Enforcement:** Structural titles, status readouts, indexed field names, and numerical units must be styled in `UPPERCASE` to emulate retro system kernels.
- **Fixed Width Alignment:** Tabular numbers (`font-variant-numeric: tabular-nums`) must be active across all tables, lists, and comparative telemetry readouts.
- **Subpixel Shading:** Text rendered on the LCD screen should utilize the ink color `#1E392A` accompanied by an imperceptible 1px drop blur of `#1E392A20` to mimic phosphor decay.

## Layout & Spacing

The layout is grounded in a handheld physical hardware chassis. It treats the viewport as a pocketable electronic unit with fixed bezel ergonomics, tactile button arrays, and recessed visual display modules.

### Grid & Compositional Rhythm
- **Dual-Pane Physical Metaphor:** On desktop (`>= 1024px`), the layout opens like the unhinged Pokédex into two symmetrical physical halves: Left Pane (Primary LCD viewscreen, indicator array, directional control) and Right Pane (Secondary sub-display, 10-key membrane grid, detailed stats readout).
- **Single Chassis Stack:** On mobile (`< 768px`) and tablet (`768px - 1023px`), the chassis collapses to a single focused vertical module, stacking the active CRT/LCD monitor on top and physical button controllers below.
- **Hardware Margin Isolation:** The outer chassis maintains an unbreakable `margin` perimeter to separate plastic edge fillets from the display viewport edge.

### Responsive Breakpoints
- **Compact Handheld (`< 768px`):** Single column, 4-unit button grid, screen padding constrained to `space-sm`.
- **Expanded Dual-Panel (`>= 1024px`):** Fixed 2-column layout joined by a rendered central cylindrical hinge component.

## Elevation & Depth

Visual depth is achieved through physical skeuomorphism and industrial beveling rather than soft ambient shadows.

### Light Directionality & Angle
All bevels, highlights, and hardware cast shadows adhere to a fixed primary light source situated at **315° (top-left)**.

### Depth Archetypes
1. **Recessed Wells (LCD Monitor & Lens Frames):**
   - Inner shadows create deep plastic housings: `inset 3px 3px 6px #8B0000, inset -2px -2px 4px #FF3B5633`.
   - The screen bezel sits 4mm recessed below the main crimson front-plate.
2. **Tactile Extrusions (D-Pad, Buttons, Hinges):**
   - High-relief extruded components feature dual-tone boundary borders: top/left highlight edge, bottom/right heavy undercut: `box-shadow: 0 4px 0 #151515, 0 6px 8px rgba(0, 0, 0, 0.4)`.
3. **Engraved & Slotted Details (Speaker Grilles):**
   - 1px crisp horizontal cuts using a dark top line (`#8B0000`) and light bottom refraction line (`#FF3B5680`).
4. **Jeweled Dome Reflexion:**
   - Multi-stage radial gradients produce the spherical glass curvature of the large cyclops eye, combining interior glow with sharp exterior ring steps.

## Shapes

The form language is driven by injection molding requirements: gentle corner fillets combined with sharp, geometric mechanical cutouts.

### Corner Treatments
- **Chassis Shell:** Outer corners use subtle, robust rounding (`roundedness: 1`, `4px - 8px`) to convey thick, pocketable ABS plastic.
- **Viewport Frame:** Features the signature asymmetric diagonal bevel cut at the bottom-left corner (45-degree angle cutout), exposing the dual-tone gray bezel frame underneath.
- **Physical Controls:**
  - **D-Pad:** Orthogonal cross with sharp center cross-sections and 2px rounded outer tips.
  - **Action Triggers:** Perfect circles (`50%` radius) set inside matching circular depressed wells.
  - **Keypad Matrix:** Crisp rectangular pills with subtle 2px edge relief.

## Components

### 1. Viewport Monitor (The Screen)
- **Housing:** A neutral gray (`#dedede`) plastic bezel with an asymmetric 45° cut on the bottom-left corner, featuring two circular red status LEDs at the top and an engraved speaker grille at the bottom.
- **Display Glass:** `#98CB98` background with an overlaid micro-grid pattern (CSS repeating linear gradients) that replicates dot-matrix LCD panels.
- **Text & Visuals:** Monospace characters in ink tone `#1E392A`. Images render with 1-bit or 2-bit dithered styling.

### 2. Physical Buttons & Controllers
- **Directional Pad (D-Pad):** Solid `#232323` cross with a centered circular concave depression, micro-directional arrows embossed on each arm, and active states that depress by `2px` via CSS transform while reducing bottom shadow thickness.
- **Keypad Matrix (Tactile Blue Buttons):** An array of 10 rectangular keys colored in `#2980B9`, framed with `#195B8C` undercuts. Active click states compress the key depth.
- **Action Triggers:** Dual yellow circular buttons (`#F1C40F`) offset at an angle, recessed inside a subtle crimson indentation.

### 3. Indicator Lamps & Sensors
- **Cyclops Dome Light:** Large circular sensor with a 4px polished chrome rim (`#C0C0C0`), deep blue interior gradient, and an off-center white glare glint (`#FFFFFF`) at the top-left. It pulses with a subtle radial glow when operations execute.
- **Trio Light Cluster:** Three micro-jeweled indicator LEDs (Red, Amber, Green) arranged horizontally, framed in metallic recessed bezels.

### 4. Cards & Data Readouts
- **Stats Card:** Structured as a printed index card within the LCD panel. Uses crisp 2px solid `#1E392A` borders, dotted divider lines, and segmented horizontal progress bars (progress bars rendered as discrete pixel blocks, e.g., `■■■■■□□□`).
- **Data Table:** Alternating striped rows using `#98CB98` and `#8CBF8C`, displaying labels, attributes, and categorical data in uppercase monospaced text.

### 5. Input Fields & Form Controls
- **Monochrome Text Input:** Rendered as an inverted LCD block (`#1E392A` background with `#98CB98` text) featuring a flashing solid square block cursor.
- **Checkboxes & Radios:** Handcrafted mechanical checkboxes represented by `[ ]` and `[X]`, and radio selectors indicated by `( )` and `(*)`.