/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import  { prisma }  from '../../../../../lib/prisma' // assuming you have prisma client setup in lib/prisma.ts

export async function GET() {
  try {
    const resolved = await prisma.incident.count({ where: { resolved: true } });
    return NextResponse.json(resolved);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch resolved incidents' }, { status: 500 });
  }
}