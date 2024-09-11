// pages/api/books.js
import { pool } from '../../../lib/db';

// Handler untuk metode GET
export async function GET(request) {
  try {
    const [rows] = await pool.query('SELECT id, title, author, link, cover_image FROM books');
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
