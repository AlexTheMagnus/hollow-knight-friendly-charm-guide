# AI-CONTEXT: HOLLOW-KNIGHT-FRIENDLY-CHARM-GUIDE (RESUMIDO)

## METADATA
```json
{
  "project": "hollow-knight-friendly-charm-guide",
  "framework": "next.js",
  "version": "15.5.5",
  "styling": "tailwindcss",
  "language": "typescript",
  "state_management": "react_context",
  "storage": "localStorage",
  "ui_components": ["radix_ui", "custom_components"],
  "animations": "framer_motion",
  "last_updated": "2024-09-12"
}
```

## PROJECT_STRUCTURE

src:
  app:
    page.tsx: "Main page with charm grid display"
    layout.tsx: "Root layout with providers chain"
    globals.css: "Global styles including Tailwind"
  components:
    Charm.tsx, CharmDialog.tsx, CharmDialogContent.tsx
    CollectedCheckbox.tsx, TopActions.tsx, ui/
  data:
    charms.json: "Charm data with metadata and locations"
  lib:
    charmMapper.ts, CharmsContext.tsx, localStorage.ts
    MobileContext.tsx, TranslationProvider.tsx
  locales: "Translation strings by language"

## DATA_STRUCTURES

type Charm = { id:string, name:string, description:string, location:string, notches:number, sprite:string, video_url:string };
interface ObtainedCharmsContextType { obtainedCharms:string[]; isCharmObtained:(id:string)=>boolean; toggleCharm:(id:string)=>void; clearAllCharms:()=>void; }
interface MobileContextType { isMobile:boolean }
interface TranslationContextType { t:(key:string)=>string; locale:string; setLocale:(locale:string)=>void }
interface StorageService { getObtainedCharms():string[]; saveObtainedCharms(ids:string[]):void; clearObtainedCharms():void }

## PATTERNS

state_management: "Context + custom hooks (useObtainedCharms, useTranslation, useMobile)"
data_validation: "TypeScript guards, interface props, defensive localStorage coding"
component_composition: "Small reusable components, Dialog/modal pattern, Fragment usage"
persistence: "localStorage with SSR guards, JSON serialization, error handling"
responsive_design: "MobileContext for viewport-aware layouts, Tailwind breakpoints, CSS Grid responsive"

## CONVENTIONS

naming: components:PascalCase, hooks:camelCase 'use', utils:camelCase, context:PascalCase Context
component_structure: functional TS components, named exports, 'use client' on client, interface props
state_management: useState/useEffect with explicit typing, useMemo/useCallback for heavy computations
error_handling: try/catch for browser APIs, defaults for missing data
i18n: keys directly in t('key'), TranslationProvider for global access

## KEY_USER_FLOWS

    Initial Load: load charms → contexts → localStorage → render grid

    Charm Details: click → modal → load content → YouTube embed

    Mark Obtained: toggle checkbox → update context → save to localStorage → update UI

    Clear Progress: click clear → confirm → reset context & UI

    Responsive Adaptation: viewport resize → MobileContext → layout adjustment

## TECHNICAL_GUIDANCE

optimizations:
  rendering: 'use client' for interactive, server for static, Next Image with sizes, memoization, conditional rendering
  performance: lazy loading modals, iframe lazy loading, batch localStorage writes
  seo_accessibility: alt texts, semantic HTML, keyboard navigation
  build: strict TS, Tailwind JIT, flat imports

## STYLING_SYSTEM

tailwind: utility-first, mobile-first, responsive breakpoints sm-md-lg-xl
theme: primary dark, accents gold/amber, fonts Cinzel/Crimson
custom_components: charm halo, themed modal, notch indicators
animations: Tailwind + framer-motion

## AGENT_GUIDANCE

code_generation: follow patterns, naming conventions, TS typing, hooks
recommendations: prefer TS + hooks + Context + Tailwind; avoid class components, Redux, inline styles
development_approach: types → props → render → interactions
common_tasks: follow CharmDialog pattern, use Context for new features, maintain responsive design