
import { type RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { type NextRequest, NextResponse } from 'next/server'
interface RequestCookiesExtended extends RequestCookies {
  '__Secure-next-auth.session-token': string;
}

export async function GET(req: NextRequest) {
  const cookie = (req.cookies as RequestCookiesExtended)['__Secure-next-auth.session-token'];

  if (cookie) {
    return NextResponse.json({ cookieExists: true });
  } else {
    return NextResponse.json({ cookieExists: false });
  }
}