import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

// esto es una opcion para evitar que chachee de forma estatica la ruta, y que siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  // La plataforma Web

  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies })
    // Usando el código que le hemos pasado por URL nos devuelve la sesión del codigo
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}
