import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  const connection = await mysql.createConnection({
    host: 'tramway.proxy.rlwy.net',
    user: 'root',
    password: 'DOfaAEeZFGTlGirzmqGVZqqVmHSmCbTG',
    database: 'railway',
    port: 11834,
  });

  try {
    const [rows] = await connection.execute('SELECT name, message FROM messages');
    await connection.end();
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error('Database error:', error);
    await connection.end();
    return NextResponse.json({ success: false, error: error.message });
  }
}