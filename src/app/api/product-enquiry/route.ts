import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import ProductEnquiry from "@/models/ProductEnquiry";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const enquiry = await ProductEnquiry.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        data: enquiry,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}