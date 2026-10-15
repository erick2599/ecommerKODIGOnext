import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // Rutas que requieren autenticación
  const rutasProtegidas = ['/historial', '/checkout'];

  if (rutasProtegidas.some((ruta) => pathname.startsWith(ruta)) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/historial/:path*', '/checkout/:path*'],
};
