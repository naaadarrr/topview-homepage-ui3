import { NextResponse } from "next/server";
import { submitDownloadVideo } from "@/server/api/services/download";

export async function POST(request: Request) {
  //   const searchParams = new URL(request.url);
  const data = await request.json();
  const res = await submitDownloadVideo({ data });

  return NextResponse.json(res);
}
