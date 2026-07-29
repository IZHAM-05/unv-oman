import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import ProductEnquiry from "@/models/ProductEnquiry";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
  request: Request,
  { params }: Props
) {
  try {
    await connectDB();

    const { id } = await params;

    await ProductEnquiry.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
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