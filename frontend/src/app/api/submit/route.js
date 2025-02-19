import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request) {
  const { name, message } = await request.json();

  const connection = await mysql.createConnection({
    host: 'tramway.proxy.rlwy.net',
    user: 'root',
    password: 'DOfaAEeZFGTlGirzmqGVZqqVmHSmCbTG',
    database: 'railway',
    port: 11834,
  });

  try {
    const [result] = await connection.execute(
      'INSERT INTO messages (name, message) VALUES (?, ?)',
      [name, message]
    );
    await connection.end();
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Database error:', error);
    await connection.end();
    return NextResponse.json({ success: false, error: error.message });
  }
}