import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

type RouteContext = {
  params: {
    id: string;
  };
};

export async function PATCH(req: NextRequest, context: RouteContext) {
  const { id } = context.params;

  const updated = await prisma.incident.update({
    where: { id: Number(id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}