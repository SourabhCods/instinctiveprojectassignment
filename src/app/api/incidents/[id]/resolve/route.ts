import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  request: NextRequest,
  context: { params: Record<string, string> }
) {
  const id = context.params.id;

  const updated = await prisma.incident.update({
    where: { id: Number(id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}