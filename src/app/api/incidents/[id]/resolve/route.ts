import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  _request: NextRequest, // The request object is not used in this specific handler, hence the underscore
  context: { params: { id: string } } // Correct type definition for the second argument
) {
  // Destructure the 'id' from context.params
  const { id } = context.params;

  try {
    const updated = await prisma.incident.update({
      where: { id: Number(id) }, // Ensure id is converted to a number for Prisma's 'where' clause
      data: { resolved: true },
    });

    // Return the updated incident as a JSON response
    return NextResponse.json(updated);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to update incident:", error);
    // Return an error response if the update fails
    return NextResponse.json(
      { message: "Failed to resolve incident", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
