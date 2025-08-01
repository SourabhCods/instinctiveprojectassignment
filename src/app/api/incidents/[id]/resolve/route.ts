import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {

  const {id} = await params
  const updated = await prisma.incident.update({
    where: { id: Number(id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
} 