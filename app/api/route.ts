import { NextResponse } from "next/server";

export const GET = async function GET() {
  return NextResponse.json(
    {
      message: "Hello, World!",
    },
    {
      status: 200,
    },
  );
};
