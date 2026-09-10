import { NextResponse } from "next/server";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

export const dynamic = "force-dynamic";

function createAppStoreRedirect() {
  const response = NextResponse.redirect(ENGLAND_871_APP_STORE_URL, 307);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export function GET() {
  return createAppStoreRedirect();
}

export function HEAD() {
  return createAppStoreRedirect();
}
