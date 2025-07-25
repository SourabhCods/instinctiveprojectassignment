import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  _req: NextRequest,
  context : { params: { id: string } }
) {
  const updated = await prisma.incident.update({
    where: { id: Number(context.params.id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
} 