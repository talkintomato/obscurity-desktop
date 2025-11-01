# Obscurity Desktop

An Electron desktop application built with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Tech Stack

- **Electron**: 39.0.0
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Tailwind CSS**: 4.1.16
- **Vite**: 7.1.12
- **shadcn/ui**: Component library
- **ESLint**: 9.39.0

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v10 or higher)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd obscurity-desktop
```

### 2. Install dependencies

**Important**: Electron requires build scripts to run during installation to download the Electron binary.

```bash
pnpm install --ignore-scripts=false
```

**Alternative**: If you see a prompt about approving build scripts:

```bash
pnpm install
pnpm approve-builds  # Select 'electron' and 'esbuild'
```

### 3. Start development server

```bash
pnpm dev
```

This will:
- Build the main process and preload scripts
- Start the Vite dev server for the renderer process
- Launch the Electron app with hot-reload enabled

## Available Scripts

### Development

```bash
pnpm dev          # Start development server
pnpm start        # Preview production build
```

### Building

```bash
pnpm build              # Build for production
pnpm build:mac          # Build for macOS
pnpm build:win          # Build for Windows
pnpm build:linux        # Build for Linux
pnpm build:unpack       # Build without packaging
```

### Code Quality

```bash
pnpm typecheck          # Run TypeScript type checking
pnpm lint               # Run ESLint (with auto-fix)
pnpm format             # Format code with Prettier
```

## Project Structure

```
obscurity-desktop/
├── src/
│   ├── main/           # Electron main process
│   ├── preload/        # Preload scripts
│   └── renderer/       # React renderer process
│       ├── src/
│       │   ├── assets/       # CSS and static assets
│       │   ├── components/   # React components
│       │   │   └── ui/      # shadcn/ui components
│       │   └── lib/         # Utilities
│       └── index.html
├── resources/          # App icons and resources
├── build/             # Build configuration
└── out/               # Build output (generated)
```

## Tailwind CSS v4

This project uses Tailwind CSS v4 with the new CSS-first configuration:

- Theme configuration is defined in `src/renderer/src/assets/base.css` using the `@theme` directive
- No `tailwind.config.js` file needed
- Uses `@tailwindcss/postcss` plugin

## ESLint v9

This project uses ESLint v9 with the new flat config format:

- Configuration in `eslint.config.js`
- Uses `@electron-toolkit/eslint-config-ts` for Electron-specific rules
- Integrated with Prettier via `eslint-plugin-prettier`

## Troubleshooting

### Electron binary not found

If you get errors about Electron not being installed:

```bash
# Manually run the Electron install script
node node_modules/.pnpm/electron@*/node_modules/electron/install.js
```

### Build script warnings

If pnpm warns about ignored build scripts, make sure to run:

```bash
pnpm install --ignore-scripts=false
```

## License

MIT
