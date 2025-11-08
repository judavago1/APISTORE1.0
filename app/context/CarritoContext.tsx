"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// 1️⃣ Definimos la forma del contexto
interface CarritoContextType {
  carrito: any[];
  agregarAlCarrito: (producto: any) => void;
  eliminarDelCarrito: (id: number) => void;
  total: number;
}

// 2️⃣ Creamos el contexto con tipo explícito (puede ser null al inicio)
const CarritoContext = createContext<CarritoContextType | null>(null);

// 3️⃣ Componente proveedor
export function CarritoProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<any[]>([]);

  const agregarAlCarrito = (producto: any) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const total = carrito.reduce((acc, prod) => acc + (prod.price || 0), 0);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// 4️⃣ Hook para usar el contexto
export const useCarrito = () => {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  return ctx;
};
