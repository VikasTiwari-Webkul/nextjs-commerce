import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
const checkAuthPages = (pathName: string) => {
  return (
    pathName.endsWith('/login1') ||
    pathName.endsWith('/forget-password1') ||
    pathName.endsWith('/register1')
  );
};

export const config = {
  matcher: ['/customer/:path*']
};

export default withAuth(
  async function middleware(req) {
    const pathName = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    const token = req.nextauth.token;
    if (token && checkAuthPages(pathName)) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: async () => {
        return true; // Authorized
      }
    }
  }
);