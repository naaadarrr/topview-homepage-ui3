import { NextResponse } from "next/server";
import { queryDownloadVideoStatus } from "@/server/api/services/download";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("videoId") ?? "";
  //   const data = await request.json();
  const res = await queryDownloadVideoStatus({ params: { videoId } });

  return NextResponse.json(res);
}
