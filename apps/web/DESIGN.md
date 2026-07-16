---
name: Team BIR
description: Dark, industrial corporate site for a family of six Tennessee businesses.
colors:
  bg: "#161F31"
  surface: "#1E293E"
  border: "#2C3854"
  text: "#fafafa"
  muted: "#7B7B84"
  accent: "#F2BB2C"
  accent-hover: "#FAD357"
  accent-dim: "#D39C12"
  teal: "#1A5F70"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.5rem, 10vw, 9rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.01em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.65rem"
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  md: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  section-y: "5rem to 8rem (py-20 to py-32)"
  container-max: "1280px"
  container-px: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "rgba(255,255,255,0.8)"
    rounded: "{rounded.none}"
  card:
    backgroundColor: "rgba(30,41,62,0.4)"
    rounded: "{rounded.xl}"
    padding: "32px"
---

# Design System: Team BIR

## 1. Overview

**Creative North Star: "The Eagle's Ridge"**

Team BIR's site is built around the hero eagle image — dark, elevated, watchful. The system is a near-black navy (#0f1521) canvas with a single amber-gold accent (#E8B020) doing almost all of the color work: CTAs, hover glows, stat numerals, section labels. Everything else stays deliberately restrained — flat surfaces, no drop shadows, glass blur used only on the sticky nav — so the gold reads as a signal, not decoration.

The system explicitly rejects a generic small-business look: no stock-photo cards, no cookie-cutter contractor-site layout, no corporate-cold sterility, and no bright SaaS/startup gradients-and-bounce energy. This is a working Tennessee company's site — bold and industrial, not polished-for-polish's-sake.

**Key Characteristics:**
- One dominant accent color (amber gold) against a near-black navy base
- Flat surfaces; depth comes from glow and blur, not shadow
- Sharp-edged primary buttons (0 radius) against otherwise rounded cards
- Uppercase, wide-tracked monospace for labels and numerals
- Condensed, heavyweight display type for headlines

## 2. Colors

The palette is restrained: one dark navy base, one gold accent, one muted teal held in reserve for secondary use.

### Primary
- **Beacon Gold** (#F2BB2C): The single accent. CTAs, hover states, stat numerals, section labels, focus rings. Pushed richer twice now at the client's request for more gold presence, plus a few previously near-invisible gold hairlines (nav border, stats-bar border) bumped from 10% to 20% opacity. Still deliberately sparing — its rarity is what makes it read as a signal.
- **Beacon Gold Hover** (#FAD357): Lighter gold for hover/active states on accent elements.
- **Dim Gold** (#D39C12): Deepest step of the gold ramp, used in gradients (e.g. stat numeral fill) and low-emphasis gold text.

### Secondary
- **Deep Teal** (#1A5F70): Reserved secondary accent, kept unchanged at the client's explicit request; used lightly and inconsistently across sub-sites, not yet a load-bearing part of the system.

### Neutral
- **Deep Night Navy** (#161F31): Primary background across the entire site. Brightened one step from the original near-black while holding the same navy hue.
- **Slate Surface** (#1E293E): Card and section backgrounds, one step up from the base.
- **Steel Border** (#2C3854): Dividers, card borders, input borders.
- **Off-White** (#fafafa): Primary text color.
- **Muted Slate** (#7B7B84): Secondary/muted text, de-emphasized copy.

### Named Rules
**The One-Signal Rule.** Gold is the only color that means "act here." It never appears as pure decoration — if something is gold, it's a CTA, a stat, or an active/hover state.

## 3. Typography

**Display Font:** Barlow Condensed (weights 600–800), with sans-serif fallback
**Body Font:** Barlow (weights 300–600), with sans-serif fallback
**Label/Mono Font:** JetBrains Mono, with monospace fallback

**Character:** Condensed, heavyweight display type reads industrial and compressed; Barlow body keeps prose legible and unfussy; JetBrains Mono is reserved for small, uppercase, wide-tracked labels that feel technical rather than decorative.

### Hierarchy
- **Display** (800, `clamp(3.5rem, 10vw, 9rem)`, line-height 0.9, letter-spacing -0.01em): Hero headlines only.
- **Headline** (800, size varies by section, line-height 0.95, letter-spacing 0.01em): All h1–h4 outside the hero.
- **Body** (400 default, 300–600 range): Paragraph copy, nav links, button labels. Cap prose at 65–75ch.
- **Label** (JetBrains Mono, ~0.6–0.65rem, letter-spacing 0.2–0.3em, uppercase): Footer column headers, nav eyebrow ("Knoxville & Dandridge, Tennessee"), copyright line.

### Named Rules
**The Condensed-Only Rule.** Display and headline type is always Barlow Condensed at heavy weight (600+). Body copy is never condensed — the contrast between the two is what gives headlines their industrial weight.

## 4. Elevation

The system is flat, not layered. There are no conventional drop shadows on cards or surfaces at rest; depth is conveyed instead through background-layer contrast (bg → surface → border), backdrop blur on the sticky nav, and a soft amber glow that appears only on accent hover states.

### Shadow Vocabulary
- **Accent glow** (`box-shadow: 0 0 28px rgba(232,176,32,0.3)`): Appears on primary-button hover only.
- **Nav elevation** (`box-shadow: 0 4px 32px rgba(0,0,0,0.4)` + `backdrop-filter: blur(20px) saturate(140%)`): Applied to the sticky nav once scrolled.

### Named Rules
**The Glow-Not-Shadow Rule.** Depth is earned through motion/state (hover glow, scroll-triggered nav blur), never present as ambient shadow at rest.

## 5. Components

### Buttons
- **Shape:** Sharp corners, 0 radius (`rounded: none`) — the one deliberately un-rounded element in an otherwise rounded system.
- **Primary:** Solid gold background (#E8B020), navy text, glow + lighter-gold background on hover.
- **Outline:** Transparent background, `border border-white/20`, text brightens and border tints gold on hover.
- **Ghost:** Muted text, brightens to full white on hover, no border.
- **Focus:** 2px gold focus ring (`focus-visible:ring-2 ring-accent`).

### Cards
- **Corner Style:** `rounded-xl` (12px) — the standard card radius across the site.
- **Background:** `bg-surface/40` translucent slate over the page background.
- **Border:** `border border-white/[0.07]`, brightening to gold-tinted on hover.
- **Shadow Strategy:** None at rest; see Elevation.
- **Internal Padding:** 32px (`p-8`).

### Inputs / Fields
- **Style:** `border-border`, `bg-bg`, `rounded-lg` (8px) — one of the few places a mid-size radius is used instead of the sharp/xl extremes.
- **Focus:** Gold ring (`focus:ring-2 ring-accent`).

### Navigation
- **Style:** Fixed top bar; transparent gradient at rest, glass blur + subtle border once scrolled. Nav links are muted white, brightening on hover; the Contact link is styled as a small solid-gold button (`0` radius) rather than a text link.
- **Mobile:** Slide-down glass drawer, animated hamburger icon.

### Footer
- **Style:** Near-black background (`#0b101a`), a single gold hairline (`.gold-line`) at the top. Column headers use the mono/uppercase/tracked label style; links are muted white brightening to gold on hover.

## 6. Do's and Don'ts

### Do:
- **Do** keep gold (#E8B020) reserved for CTAs, hover states, and numerals — one signal color, used sparingly.
- **Do** pair condensed heavyweight display type with a non-condensed body font for contrast.
- **Do** use flat surfaces with glow-on-hover instead of ambient drop shadows.
- **Do** use the sharp/0-radius treatment specifically on primary buttons; use `rounded-xl` for cards and `rounded-lg` for inputs.

### Don't:
- **Don't** use stock photography, generic icon-in-a-circle card grids, or a cookie-cutter contractor-site layout — the explicit anti-reference is a generic small-business template.
- **Don't** soften the palette toward a sterile, corporate-cold enterprise look, or brighten it toward a flashy SaaS/startup aesthetic (gradient blobs, bouncy motion).
- **Don't** add drop shadows to cards or surfaces at rest; depth comes from layered background tone and hover glow only.
- **Don't** introduce a second accent color at meaningful surface area — teal stays a minor, occasional secondary, not a co-equal accent.
