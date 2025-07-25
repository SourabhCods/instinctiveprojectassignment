import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const updated = await prisma.incident.update({
    where: { id: Number(params.id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}