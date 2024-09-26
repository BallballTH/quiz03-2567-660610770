import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Buranin Bunyoprakan",
    studentId: "660610770",
  });
};
