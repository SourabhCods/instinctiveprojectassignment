import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../lib/prisma';

export async function PATCH(
  request: NextRequest, // The request object now carries the params
) {
  // Access the 'id' directly from request.params
  // In Next.js 15 canary, dynamic route parameters might be available directly on the NextRequest object.
  // We cast to `any` for flexibility in canary versions, but ideally, NextRequest would be typed with `params`.
  const id = (request as any).params.id; 

  if (!id) {
    return NextResponse.json(
      { message: "Incident ID is missing" },
      { status: 400 }
    );
  }

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

    // Check if the error is due to the incident not being found
    if (error instanceof Error && error.message.includes("RecordNotFound")) {
      return NextResponse.json(
        { message: `Incident with ID ${id} not found.` },
        { status: 404 }
      );
    }

    // Return a generic error response if the update fails
    return NextResponse.json(
      { message: "Failed to resolve incident", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
