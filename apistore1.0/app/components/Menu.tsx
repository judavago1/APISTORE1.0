"use client";
import Link from "next/link";
import { useCarrito } from "../context/CarritoContext";
export default function Menu() {
  const { carrito } = useCarrito();

  return (
    <nav className="c-menu">
      <Link href="/">🏠</Link>
      <Link href="/informativa">ℹ️</Link>
      <Link href="/original">🌟</Link>
      <Link href="/favoritos">🛒 {carrito.length}</Link>
    </nav>
  );
}