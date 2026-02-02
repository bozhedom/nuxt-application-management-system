# Admin Panel Application - Technical Documentation

A simple Vue.js application for managing and editing applications. Users can view a list of applications, edit their details, save changes locally, and send data to the Nuxt server.

## Core Functionality
* Application Management - View and manage application lists

* Product Editing - Edit product details within applications

* Form Validation - Real-time validation with custom rules

* Data Persistence - LocalStorage integration with caching

* API Integration - Server communication with simulated delays

## UI/UX Features
* Loading States - Skeletons and progress indicators

* Interactive Tables - Data tables with action buttons

* Collapsible Navigation - Animated sidebar menu

* Form Components - Custom Input, Select, and validation displays

## Technical Features
* TypeScript Support - Full type safety throughout the application

* Composition API - Modern Vue 3 reactivity system

* Custom Hooks - Reusable logic for API calls and state management

* SCSS Modules - Scoped styling with CSS modules

* Nuxt Server API - Mocked backend with custom endpoints

## Usage Guide

### 1. Main Page (/)

* View list of applications in a data table

* Each row shows status, verification result, and creation date

* Action buttons change based on localStorage state:

  *   Edit: No cached data → Navigate to edit page

  *   Send: Cached data exists → Send to server
 

### 2. Edit Page (/edit)

* Edit product details within an application

* Fields include:

  *   Name (read-only)

  *   Quantity (validated numeric input)
 
  *   Price (validated decimal input)

  *   Color (dropdown select with predefined options)
 

### 3. Data Flow

* First visit to /edit → API call (2s delay) → Save to localStorage

* Subsequent visits → Load from localStorage (instant)

*   Edit form → Validate → Save to localStorage

*   Return to main page → "Send" button appears
 
*   Click Send → POST to server → Clear localStorage → Update UI



## Getting Started

### Prerequisites

* Node.js 18+

* npm or yarn
  
### Installation

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
