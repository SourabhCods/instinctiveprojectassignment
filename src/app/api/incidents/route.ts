import { NextRequest, NextResponse } from 'next/server';
import  { prisma }  from '../../../../lib/prisma'

export async function GET(_req: NextRequest) {

  const incidents = await prisma.incident.findMany({
  where: { resolved: false },
  orderBy: { tsEnd: 'asc' },
  include: {
    camera: true,
  },
});


  return NextResponse.json(incidents);
}