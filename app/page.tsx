"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useCarrito } from "./context/CarritoContext";

export default function Page() {
  const [productos, setProductos] = useState<any[]>([]);
  const [filtro, setFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  const categorias = ["todos", ...new Set(productos.map((p) => p.category))];

  const productosFiltrados = productos.filter(
    (p) =>
      (filtro === "todos" || p.category === filtro) &&
      p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden", // Evita que se desborde horizontalmente
      }}
    >
      <Header titulo="Catálogo" />

      <div style={{ height: "100px" }}></div>

      {/* Filtros */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          padding: "0 10px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "20px",
            border: "2px solid #007bff",
            marginBottom: "10px",
            width: "90%", // 🔹 Se adapta al ancho de la pantalla
            maxWidth: "250px",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          {categorias.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
        <br />
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "20px",
            border: "2px solid #007bff",
            width: "90%", // 🔹 Cambiado de 400px a 90% del ancho
            maxWidth: "400px",
            fontSize: "16px",
            textAlign: "center",
          }}
        />
      </div>

      {/* Productos */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {productosFiltrados.map((p) => (
          <div
            key={p.id}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "15px",
              width: "180px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease",
              boxSizing: "border-box",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "16px",
                minHeight: "60px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontWeight: "bold",
                color: "#28a745",
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              ${p.price.toFixed(2)}
            </p>
            <button
              onClick={() => agregarAlCarrito(p)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
