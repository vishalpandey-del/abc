/*
# Create contact_submissions and career_applications tables (single-tenant, no auth)

1. New Tables
- `contact_submissions` — inquiries submitted through the Contact page form.
  - id (uuid, primary key)
  - full_name (text, not null)
  - email (text, not null)
  - phone (text)
  - service (text) — which service the inquiry relates to
  - organisation_name (text)
  - designation (text)
  - message (text, not null)
  - created_at (timestamptz, default now())

- `career_applications` — job applications submitted through the Careers page form.
  - id (uuid, primary key)
  - full_name (text, not null)
  - email (text, not null)
  - phone (text)
  - position (text) — which open position they are applying for
  - cv_url (text) — link to uploaded CV (stored as text URL)
  - message (text)
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT only (public can submit forms).
- No SELECT/UPDATE/DELETE for anon — submissions are write-only from the frontend.
- This is a single-tenant no-auth app — forms are public-facing lead capture.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  organisation_name text,
  designation text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS career_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  position text,
  cv_url text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_career" ON career_applications;
CREATE POLICY "anon_insert_career" ON career_applications FOR INSERT
  TO anon, authenticated WITH CHECK (true);
