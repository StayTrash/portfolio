# Portfolio Project Structure

This document describes the folder structure and organization of the portfolio project.

## 📁 Folder Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home/Landing page
│   ├── showcase/
│   │   └── page.tsx       # Showcase page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
│
├── components/             # Reusable React components
│   ├── Cursor.tsx         # Custom cursor component
│   ├── Navigation.tsx     # Navigation bar component
│   ├── GridCell.tsx       # Grid cell wrapper component
│   ├── TechPile.tsx       # Physics-based tech stack component
│   ├── HeroSection.tsx    # Hero section with animated text
│   ├── HomeGrid.tsx       # Home page grid layout
│   └── GlobalStyles.tsx   # Global styles and fonts
│
├── hooks/                  # Custom React hooks
│   └── useCursor.ts       # Cursor position and variant hook
│
├── constants/              # Static data and configuration
│   ├── fonts.ts           # Font styles configuration
│   ├── data.ts            # Tech stack, tags, contact info
│   └── showcase.ts        # Projects and experience data
│
├── lib/                    # Utility functions and helpers
│   └── fonts.ts           # Font face declarations
│
├── types/                  # TypeScript type definitions
│   └── matter.d.ts        # Matter.js type declarations
│
└── public/                 # Static assets
    └── fonts/             # Custom font files
```

## 🎯 Component Organization

### Components (`/components`)
- **Cursor.tsx**: Custom animated cursor with blend modes
- **Navigation.tsx**: Top navigation bar with routing
- **GridCell.tsx**: Reusable grid cell with corner markers
- **TechPile.tsx**: Interactive physics-based tech stack visualization
- **HeroSection.tsx**: Hero section with rotating font animations
- **HomeGrid.tsx**: Complete home page grid layout
- **GlobalStyles.tsx**: Font imports and global CSS

### Hooks (`/hooks`)
- **useCursor.ts**: Manages cursor position, variants, and handlers

### Constants (`/constants`)
- **fonts.ts**: Hero font styles and transition configuration
- **data.ts**: Tech stack items, work tags, contact information
- **showcase.ts**: Projects and experience data

### Lib (`/lib`)
- **fonts.ts**: Font face declarations and global styles

## 🔧 Key Features

1. **Modular Components**: Each component is self-contained and reusable
2. **Custom Hooks**: Shared logic extracted into hooks
3. **Type Safety**: TypeScript types defined for all data structures
4. **Constants**: All static data centralized for easy updates
5. **Clean Imports**: Using `@/` alias for cleaner import paths

## 📝 Usage

### Adding a New Component
1. Create file in `/components`
2. Export as default or named export
3. Import using `@/components/ComponentName`

### Updating Data
- **Fonts**: Edit `constants/fonts.ts`
- **Tech Stack**: Edit `constants/data.ts`
- **Projects**: Edit `constants/showcase.ts`
- **Contact Info**: Edit `constants/data.ts`

### Adding a New Hook
1. Create file in `/hooks`
2. Export hook function
3. Import using `@/hooks/hookName`

## 🎨 Styling

- Global styles in `components/GlobalStyles.tsx`
- Font declarations in `lib/fonts.ts`
- Tailwind CSS classes used throughout
- Custom animations defined in GlobalStyles

## 🚀 Benefits

- **Maintainability**: Clear separation of concerns
- **Reusability**: Components can be used across pages
- **Readability**: Smaller, focused files
- **Scalability**: Easy to add new features
- **Type Safety**: Full TypeScript support

