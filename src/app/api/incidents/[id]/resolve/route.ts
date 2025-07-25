import { NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH({ params }: { params: { id: number } }) {
  const { id } = params;

  const updated = await prisma.incident.update({
    where: { id: id },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}