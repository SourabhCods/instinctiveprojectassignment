import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  request: Request, {params} : {params : Promise<{id : number}>}
) {

  const {id} = await params;
  const updated = await prisma.incident.update({
    where: { id: id },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}