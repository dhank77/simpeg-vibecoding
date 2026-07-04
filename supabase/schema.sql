-- Create employees table
create table public.employees (
  id bigserial primary key,
  name text not null,
  email text not null,
  nik text not null unique,
  department text not null,
  position text not null,
  join_date text,
  status text not null,
  avatar text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.employees enable row level security;

-- Development policy: allow public read and write
-- Remove or restrict these in production
create policy "Public read employees" on public.employees
  for select using (true);

create policy "Public insert employees" on public.employees
  for insert with check (true);

create policy "Public update employees" on public.employees
  for update using (true);

create policy "Public delete employees" on public.employees
  for delete using (true);
