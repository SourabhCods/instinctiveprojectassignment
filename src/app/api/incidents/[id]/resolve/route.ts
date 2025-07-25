import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

interface Context {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: Context) {
  const updated = await prisma.incident.update({
    where: { id: Number(params.id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}