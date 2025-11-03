# Premium Social Analytics Dashboard - Design Guidelines v4.0 (Compact)

## Design Foundation
**Aesthetic**: High-end SaaS with TikTok energy - professional analytics with vibrant accents, glass-morphism, supporting TikTok/Instagram/YouTube.

**Principles**: Premium polish, data clarity, energetic professionalism, Gen-Z appeal, bilingual (EN/ID).

## Color System

**Backgrounds**: `#0A0A0A` (shell) | `#141414` (cards) | `#1E1E1E` (elevated) | `rgba(20,20,20,0.7)` (glass + backdrop-blur)

**Accents**:
- Pink: `#FF1654` (CTAs, active, key metrics)
- Cyan: `#00F5FF` (success, secondary metrics)
- Gradient: `linear-gradient(135deg, #FF1654 0%, #FF4E8F 50%, #00F5FF 100%)`
- Gradient Subtle: `linear-gradient(135deg, rgba(255,22,84,0.1) 0%, rgba(0,245,255,0.1) 100%)`
- Glow: Pink `0 0 30px rgba(255,22,84,0.3)` | Cyan `0 0 30px rgba(0,245,255,0.3)`

**Text**: `#FFFFFF` (primary) | `#B8B8B8` (secondary) | `#707070` (tertiary) | `#4A4A4A` (muted)

**Semantic**: Success `#00F5FF` | Warning `#FFB800` | Error `#FF1654` | Info `#A78BFA`

**Platforms**: TikTok `#FF0050` | Instagram gradient `#F58529→#DD2A7B→#8134AF` | YouTube `#FF0000`

## Typography

**Fonts**: Inter (UI), JetBrains Mono (data/codes)

**Scale**:
- Display: `text-6xl md:text-7xl font-black tracking-tight text-white`
- Hero: `text-4xl md:text-5xl font-bold leading-tight`
- Section: `text-3xl md:text-4xl font-bold`
- Card Header: `text-xl md:text-2xl font-semibold`
- Body: `text-sm md:text-base text-gray-300`
- Caption: `text-xs md:text-sm font-medium text-gray-400`
- Data Values: `text-2xl md:text-4xl font-bold` (JetBrains Mono)
- Micro: `text-xs font-medium uppercase tracking-wider text-gray-500`

**Gradient Text**: `bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent` for headers/key metrics.

## Spacing & Layout

**Units**: 2, 4, 6, 8, 12, 16 (Tailwind scale)
- Tight: `gap-2 p-2` | Standard: `gap-4 p-4` | Comfortable: `gap-6 p-6` | Generous: `gap-8 p-8`
- Sections: `py-12 md:py-16`

**Containers**: App `max-w-[1600px]` | Dashboard `max-w-7xl` | Analysis `max-w-5xl` | Content `max-w-3xl`

**Grids**: Metrics 2x2→1x4 mobile | Videos 3-col→1-col mobile | Analytics 60/40→stacked mobile

## Navigation

**Top Bar**: `h-16 bg-black/95 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50`
- Logo (gradient) + platform pills (active=platform color) + search (`bg-[#141414] border-gray-700 focus:border-pink-500 rounded-xl`) + language toggle (pink active) + token badge + avatar

**Sidebar**: `w-64 bg-[#0A0A0A] border-r border-gray-800/50`
- Active: `bg-gradient-to-r from-pink-500/10 to-transparent border-l-4 border-pink-500 text-pink-500`
- Hover: Pink left bar | Mobile: collapse to `w-16`

**Mobile Bottom Nav**: `bg-black border-t border-gray-800 fixed bottom-0` - 5 actions, gradient active state

## Components

**Hero**: `h-[500px]` - Animated gradient mesh bg (pink/cyan, 60% overlay), centered content, glass stats cards (`bg-white/5 backdrop-blur-md border-white/10 rounded-2xl p-6`)

**Metric Cards**: `bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(255,22,84,0.2)]`
- Gradient number (4xl JetBrains) + icon + sparkline + change badge + progress bar

**Glass Cards**: `bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8` + `inset shadow-lg shadow-white/5`

**8-Layer Radar**: Octagon, `fill-opacity-20% stroke-pink-500-2px`, points `w-3 h-3 bg-pink-500 border-2-white`, grid `stroke-gray-700`

**Video Cards**: `bg-[#141414] rounded-2xl hover:scale-[1.02]` - Thumbnail + gradient overlay + platform badge + glass play button + metrics row

**Scoring Panel**: Circular gauge (pink→cyan gradient stroke) + 2x3 metric grid (icon + label + value + progress)

**Trend Charts**: Dark grid `stroke-gray-800`, series (pink/cyan/purple), gradient fills 20% opacity, glass tooltips, period pills (pink active)

**Heat Maps**: Grid cyan→pink gradient, `border-gray-700`, scale on hover

**Progress Rings**: `stroke-gray-800 w-8` track, gradient stroke fill, center percentage (4xl gradient) - Sizes: w-24/w-32/w-48

**Tables**: Sticky header `bg-[#1E1E1E] border-b-2 border-gray-800`, alternating rows, hover `bg-white/5`, cyan sort arrows

## Forms & Inputs

**Text**: `bg-[#141414] border-2 border-gray-700 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 rounded-xl px-4 py-3`
- Label: `text-sm font-medium mb-2 text-white` | Placeholder: `text-gray-500` | Error: `border-red-500`

**Buttons**:
- Primary: `bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105`
- Secondary: `border-2 border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500/10`
- Glass: `bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20`
- Disabled: `opacity-40 cursor-not-allowed`
- **On Images**: Use `bg-black/40 backdrop-blur-md border-white/20` (NO hover states)

**Selects**: Match input style, cyan chevron, glass dropdown

**Toggles**: `bg-gray-700` track, active `bg-gradient-to-r from-pink-500 to-cyan-400`, white thumb

## Modals & Overlays

**Modals**: `max-w-2xl bg-[#141414] border border-gray-800 rounded-3xl p-8`, backdrop `bg-black/80 backdrop-blur-sm`
- Success: gradient checkmark (w-24) + gradient title + stat cards

**Toasts**: `bg-[#141414] rounded-xl p-4 shadow-2xl` - Success `border-l-4 border-cyan-400` | Error `border-pink-500` | Warning `border-yellow-500` - Top-right, 5s auto-dismiss

**AI Chat**: Fixed bottom-right, trigger `w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-cyan-400 shadow-xl` (pulse ring), panel `w-96 h-[600px] bg-[#0A0A0A] rounded-2xl border-gray-800`

## Platform Elements

**Tabs**: Pill selector - TikTok pink | Instagram gradient border | YouTube red when active | Inactive gray with hover

**Cross-Platform**: Unified cards, small icons (w-6) with colors, comparison bars, stack mobile

## Animation

**Purposeful Only**:
- Metric count: 0.8s ease-out | Progress: 1s linear | Charts: 0.4s stagger | Hover: 0.2s scale-105 + glow | Tabs: 0.3s slide | Modals: 0.3s fade + scale-0.95
- **NO continuous loops**

## Visual Assets

**Hero Image**: Abstract data viz - particles forming graphs/networks, dark base + pink/cyan particles, 60% gradient overlay + radial glow

**Empty States**: Line art (max-w-xs) gradient colors - charts/magnifier/upload cloud

**Icons**: Heroicons only - gradient `from-pink-500 to-cyan-400` active, gray inactive

**Logos**: Official platform assets - white monochrome UI, full color when selected

## Bilingual (EN/ID)

**Toggle**: Pill in top bar `bg-[#141414] border-gray-700 rounded-full`, active `bg-gradient-to-r from-pink-500 to-cyan-400`
- Instant switch, all UI translates, flex handles text length

## Accessibility

- Focus: `ring-4 ring-pink-500/30` on all interactive elements
- Contrast: 4.5:1 minimum
- Touch: 44x44px minimum mobile
- Glass: Always add border for definition
- Loading: Pink/cyan gradient bar/spinner

## Critical Rules

**DO**:
- ✓ Gradient text for metrics/headers
- ✓ Glass-morphism for premium surfaces
- ✓ Pink primary, cyan secondary consistency
- ✓ Backdrop-blur for depth
- ✓ Subtle, purposeful animations

**DON'T**:
- ✗ Fonts outside Inter/JetBrains Mono
- ✗ Motion loops or persistent animations
- ✗ Random accent mixing
- ✗ Break responsive patterns
- ✗ Solid backgrounds on glass cards