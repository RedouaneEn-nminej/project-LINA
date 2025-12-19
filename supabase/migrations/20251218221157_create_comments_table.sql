/*
  # Create comments table for school website

  1. New Tables
    - `comments`
      - `id` (uuid, primary key) - Unique identifier for each comment
      - `author_name` (text) - Name of the person leaving the comment
      - `message` (text) - Content of the comment
      - `created_at` (timestamptz) - Timestamp when comment was created
  
  2. Security
    - Enable RLS on `comments` table
    - Add policy for anyone to read comments (public access)
    - Add policy for anyone to insert comments (public access)
  
  Note: This is a public comments system where all visitors can read and post comments.
*/

CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read comments"
  ON comments
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can insert comments"
  ON comments
  FOR INSERT
  TO anon
  WITH CHECK (true);