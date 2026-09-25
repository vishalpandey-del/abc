/*
# Create products and reviews tables (single-tenant, no auth)

1. New Tables
- `products` — catalog of premium dry fruits, nuts, seeds, trail mixes, and snacks.
  - id (uuid, primary key)
  - name (text, not null)
  - slug (text, unique, not null) — URL-friendly identifier
  - category (text, not null) — e.g. 'Nuts', 'Dry Fruits', 'Seeds', 'Trail Mixes', 'Makhana', 'Snacks', 'Gifting', 'Combos'
  - description (text, not null)
  - origin (text) — country/region of origin
  - price (integer, not null) — in INR (paise not needed, whole rupees)
  - mrp (integer, not null) — original price for discount display
  - weight (text) — e.g. '200g', '500g'
  - image_url (text, not null) — product photo URL
  - badge (text) — e.g. 'BESTSELLER', 'NEW', 'ORGANIC'
  - rating (numeric, default 0) — average rating
  - review_count (integer, default 0)
  - in_stock (boolean, default true)
  - featured (boolean, default false) — show on homepage
  - created_at (timestamptz, default now())

- `reviews` — customer reviews for products.
  - id (uuid, primary key)
  - product_id (uuid, FK to products, ON DELETE CASCADE)
  - name (text, not null)
  - rating (integer, not null, check 1-5)
  - title (text, not null)
  - body (text)
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated full CRUD on products (public catalog, no sign-in).
- Allow anon + authenticated full CRUD on reviews (public reviews, no sign-in).
- This is a single-tenant no-auth app — all data is intentionally public/shared.
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  origin text,
  price integer NOT NULL,
  mrp integer NOT NULL,
  weight text,
  image_url text NOT NULL,
  badge text,
  rating numeric DEFAULT 0,
  review_count integer DEFAULT 0,
  in_stock boolean DEFAULT true,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_products" ON products;
CREATE POLICY "anon_insert_products" ON products FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_products" ON products;
CREATE POLICY "anon_update_products" ON products FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_products" ON products;
CREATE POLICY "anon_delete_products" ON products FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title text NOT NULL,
  body text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reviews" ON reviews;
CREATE POLICY "anon_select_reviews" ON reviews FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reviews" ON reviews;
CREATE POLICY "anon_insert_reviews" ON reviews FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_reviews" ON reviews;
CREATE POLICY "anon_update_reviews" ON reviews FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reviews" ON reviews;
CREATE POLICY "anon_delete_reviews" ON reviews FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_reviews_product_id ON reviews(product_id);
