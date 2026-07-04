---
name: Kinetic Enterprise
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 24px
  margin: 32px
  max-width: 1440px
---

## Brand & Style

The design system is engineered for high-density HR management, prioritizing utility, clarity, and administrative efficiency. The brand personality is **reliable, systematic, and transparent**, aimed at HR professionals who require a high-performance environment to manage complex employee data and workflows.

The visual style follows a **Modern Corporate** aesthetic. It utilizes a structured hierarchy with significant negative space to reduce cognitive load during long work sessions. By combining a "flat-plus" approach—minimalist surfaces with intentional depth—the interface remains functional and unobtrusive, ensuring the data remains the primary focus while providing clear affordances for interaction.

## Colors

This color palette is anchored by **Corporate Blue**, a color that evokes stability and trust. 

- **Primary (#2563EB):** Reserved for primary actions, active navigation states, and progress indicators.
- **Secondary/Slate (#64748B):** Used for supporting text, iconography, and secondary interface borders to provide a calm, neutral backdrop.
- **Success/Emerald (#10B981):** Specifically for "Active" employee statuses, approved leave, and successful system updates.
- **Warning/Amber (#F59E0B):** High-visibility color for pending approvals, expiring certifications, or attendance discrepancies.
- **Neutral/Background (#F8FAFC):** A cool-toned off-white that distinguishes the application chrome from the pure white content cards.

## Typography

The design system relies exclusively on **Inter** for its exceptional legibility in data-heavy environments. The hierarchy is strictly enforced to guide users through complex forms and tables.

- **Headlines:** Use Bold and Semibold weights with slight negative letter-spacing to create a compact, authoritative feel.
- **Body Text:** Standardized at 14px for most administrative tasks to maximize information density without sacrificing readability.
- **Labels:** Use Medium and Semibold weights. `label-sm` is used for table headers and category descriptors, utilizing uppercase styling to differentiate from interactive data.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for internal content areas, while the primary navigation is typically a fixed-width left sidebar (240px).

- **Spacing Rhythm:** Based on a 4px baseline grid. 16px (`md`) is the standard padding for cards and containers.
- **Data Density:** In list views and tables, vertical padding may be reduced to 8px (`sm`) to allow more rows per screen.
- **Breakpoints:**
  - **Desktop (1280px+):** Full 12-column view with sidebar.
  - **Tablet (768px - 1279px):** Sidebar collapses to icons; 8-column grid.
  - **Mobile (Below 768px):** Single column stack; hidden sidebar with "hamburger" trigger.

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with soft ambient shadows to define hierarchy.

1. **Level 0 (Background):** #F8FAFC. The lowest surface.
2. **Level 1 (Cards/Content):** Pure #FFFFFF with a subtle 1px border (#E2E8F0). Used for the main workspace.
3. **Level 2 (Dropdowns/Modals):** Pure #FFFFFF with a medium shadow (`0px 10px 15px -3px rgba(0, 0, 0, 0.1)`). 
4. **Interactive States:** Elements slightly lift or change border color on hover to provide immediate feedback. No heavy skeuomorphism is used; depth is strictly functional.

## Shapes

The shape language is professional and approachable. 
- **Standard Radius:** 8px (`0.5rem`) for cards, input fields, and buttons. This provides a modern, softened look while maintaining a structured grid.
- **Large Radius:** 16px (`1rem`) for larger containers or marketing-adjacent dashboards.
- **Full Radius:** Reserved exclusively for status tags (chips) and user avatars to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid #2563EB with White text. 8px radius.
- **Secondary:** Ghost style with #64748B border and text.
- **Tertiary/Ghost:** No border, #64748B text; background appears on hover.

### Input Fields
- White background with #CBD5E1 borders. On focus, the border shifts to #2563EB with a 2px soft outer glow.
- Labels sit above the field in `label-md` style.

### Status Chips
- Small, pill-shaped indicators.
- **Active:** Emerald-50 background with Emerald-700 text.
- **Pending:** Amber-50 background with Amber-700 text.
- **Inactive:** Slate-100 background with Slate-600 text.

### Data Tables
- Header row uses #F8FAFC background with `label-sm` uppercase text.
- Row hover state uses a subtle #F1F5F9 fill.
- 1px horizontal dividers only; no vertical borders to maintain a clean flow.

### Cards
- White fill, 1px #E2E8F0 border, 8px corner radius.
- Headers within cards should have a subtle bottom border to separate titles from content.

### Avatars
- Always circular. For missing photos, use the user's initials with a Slate-200 background.