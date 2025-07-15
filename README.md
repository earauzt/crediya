# Crediya

Demo fintech application built with **Next.js 15** and the App Router. The project showcases a basic credit request flow, product listing and UI components.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and provide your keys for Supabase and OpenAI.
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.

## Project structure

- `app/` – application routes using the App Router.
- `components/` – shared React components.
- `src/lib/` – utilities such as the Supabase client and mocked APIs.
- `public/` – static assets.

The previous `src/pages` folder has been removed to avoid confusion with the App Router.

## Environment variables

Create a `.env` file based on `.env.example` with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=...      # URL of your Supabase instance
NEXT_PUBLIC_SUPABASE_ANON_KEY=... # Public anon key from Supabase
OPENAI_API_KEY=...                # Optional, API key for OpenAI
```

## Build

For a production build run:

```bash
npm run build
npm start
```

Deploy the output as you would any Next.js application.
