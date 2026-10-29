-- Run in Supabase: SQL Editor > New query
create table if not exists public.intake_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 200),
  company text check (char_length(company) <= 160),
  interest text check (char_length(interest) <= 80),
  message text check (char_length(message) <= 4000),
  status text not null default 'new' check (status in ('new','contacted','booked','closed'))
);

alter table public.intake_requests enable row level security;

-- Visitors can submit, but never read.
create policy "anyone can submit intake" on public.intake_requests
  for insert to anon, authenticated with check (status = 'new');

-- Only signed-in users (you) can read and update.
create policy "authenticated can read intake" on public.intake_requests
  for select to authenticated using (true);
create policy "authenticated can update intake" on public.intake_requests
  for update to authenticated using (true) with check (true);

-- Then: Authentication > Users > Add user (your email + password),
-- and turn OFF "Allow new users to sign up" so only you can sign in.
