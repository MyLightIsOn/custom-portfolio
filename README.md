# Custom Portfolio

A slide-deck style portfolio built with Next.js, featuring smooth animations, theme customization, and easy content management.

## Features

- 🎨 **Easy Theme Customization** - Swap colors, fonts, and branding for each company
- 📝 **Content-Driven** - All content managed through simple config files
- 🎬 **Smooth Animations** - Horizontal and vertical slide transitions
- 📱 **Fully Responsive** - Works beautifully on mobile and desktop
- ⌨️ **Keyboard Navigation** - Arrow keys to navigate slides
- 👆 **Touch Gestures** - Swipe on mobile devices
- 🔗 **URL-Based Navigation** - Each slide has its own semantic URL

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Theme Configuration

Edit `config/themes.ts` to customize colors, fonts, and styling:

```typescript
export const myCustomTheme: Theme = {
  name: 'custom',
  colors: {
    primary: '#FF0000',
    secondary: '#00FF00',
    // ... more colors
  },
  // ... more theme options
}
```

Then update `app/layout.tsx` to use your theme:

```typescript
import { myCustomTheme } from "@/config/themes";

// In RootLayout:
<ThemeProvider theme={myCustomTheme}>
```

### Content Configuration

Edit `config/content.ts` to update all portfolio content:

```typescript
export const myContent: PortfolioContent = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio...',
  },
  projects: [
    {
      id: 'my-project',
      title: 'My Project',
      description: '...',
      technologies: ['React', 'Next.js'],
    },
  ],
  // ... more content
}
```

Then update `app/[slide]/page.tsx` to use your content:

```typescript
import { myContent } from '@/config/content';

// In SlidePage:
<Portfolio content={myContent} />
```

## Navigation

- **Arrow Keys**: Left/Right to navigate slides
- **Floating Nav**: Click arrows or menu button
- **Touch**: Swipe left/right on mobile
- **URL**: Each slide has a unique URL for direct access

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── [slide]/           # Dynamic slide routes
│   ├── layout.tsx         # Root layout with theme provider
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── slides/           # Individual slide components
│   ├── FloatingNav.tsx   # Navigation component
│   ├── Portfolio.tsx     # Main portfolio component
│   └── SlideContainer.tsx # Slide navigation logic
├── config/               # Configuration files
│   ├── content.ts       # Portfolio content
│   └── themes.ts        # Theme definitions
└── contexts/            # React contexts
    └── ThemeContext.tsx # Theme provider
```

## Tips

- Create a new theme file for each company you apply to
- Keep project descriptions concise - they appear on slides
- Use semantic IDs for projects (e.g., 'e-commerce-platform')
- Test on mobile - swipe gestures are key to the UX

## License

MIT
