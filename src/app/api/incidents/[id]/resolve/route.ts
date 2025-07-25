/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  _request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const updatedIncident = await prisma.incident.update({
      where: { id: Number(id) },
      data: { resolved: true },
    });

    return NextResponse.json(
      { message: 'Incident resolved successfully', data: updatedIncident },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating incident:', error);
    return NextResponse.json(
      { error: 'Failed to update incident' },
      { status: 500 }
    );
  }
}
