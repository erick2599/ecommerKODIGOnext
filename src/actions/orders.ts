'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'cache';

export async function crearOrdenAction(items: any[]) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    return { error: 'No autorizado' };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ items }),
    });

    if (!res.ok) {
      return { error: 'No se pudo crear la orden' };
    }

    const data = await res.json();

    // Requisito: Evitar interfaces desactualizadas limpiando la caché
    revalidatePath('/historial');

    return { success: true, orderId: data.id };
  } catch (error) {
    return { error: 'Error de red en el servidor' };
  }
}
