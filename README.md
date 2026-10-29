# AH Administrative Solutions

Vite + React + React Router + Supabase.

## Setup
1. `npm install`
2. Create a Supabase project and run `supabase/schema.sql` in the SQL Editor.
3. Supabase > Authentication > Users > Add user (your email and password, tick Auto Confirm). Then Sign In / Providers > turn off "Allow new users to sign up".
4. `cp .env.example .env` and fill in the project URL and anon key (Project Settings > API).
5. Copy badge images into `public/badges/` as `quickbooks.png`, `google-bi.png`, `saylor.png`.
6. `npm run dev`, then open http://localhost:5173

Routes: `/` landing, `/intake` form (saves to Supabase), `/admin` sign-in and request list.

## Deploy
`npm run build` outputs `dist/`. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your host's environment settings.
`public/_redirects` (Netlify) and `vercel.json` (Vercel) send every path to `index.html` so `/intake` and `/admin` work on refresh.
