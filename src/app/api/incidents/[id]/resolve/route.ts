import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  const updated = await prisma.incident.update({
    where: { id: Number(id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}