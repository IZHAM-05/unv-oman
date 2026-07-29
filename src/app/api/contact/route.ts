import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const contact = await Contact.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully.",
        data: contact,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit contact form.",
      },
      { status: 500 },
    );
  }
}