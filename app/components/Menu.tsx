"use client";
import Link from "next/link";
import { useCarrito } from "../context/CarritoContext";

export default function Menu() {
  // ✅ Evita errores si el contexto aún no está inicializado
  const { carrito } = useCarrito() || {};
  const items = Array.isArray(carrito) ? carrito : [];

  return (
    <nav className="c-menu">
      <Link href="/">🏠</Link>
      <Link href="/informativa">ℹ️</Link>
      <Link href="/original">🌟</Link>
      <Link href="/favoritos">🛒 {items.length}</Link>
    </nav>
  );
}
