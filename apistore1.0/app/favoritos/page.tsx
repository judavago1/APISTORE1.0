"use client";
import { useCarrito } from "../context/CarritoContext";
import Header from "../components/Header";

export default function Favoritos() {
  const { carrito, eliminarDelCarrito, total } = useCarrito();

  return (
    <div style={{ padding: "15px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Header titulo="Favoritos" />

      <h1 style={{ textAlign: "center", marginTop: "80px", color: "#007bff" }}>
        🛒 Mi carrito
      </h1>

      {carrito.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>No hay productos aún.</p>
      ) : (
        <>
          <ul
            style={{
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {carrito.map((p, index) => (
              <li
                key={`${p.id}-${index}`} // 🔑 Clave única combinando id + índice
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#fff",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flex: 1,
                  }}
                >
                  {/* 🖼️ Imagen del producto */}
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                      borderRadius: "8px",
                      backgroundColor: "#f1f1f1",
                      padding: "5px",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0", fontWeight: "bold", color: "#333" }}>
                      {p.title}
                    </p>
                    <p style={{ margin: "0", color: "#28a745" }}>${p.price}</p>
                  </div>
                </div>

                {/* ❌ Botón para eliminar */}
                <button
                  onClick={() => eliminarDelCarrito(p.id)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ✖️
                </button>
              </li>
            ))}
          </ul>

          {/* 💰 Total */}
          <h3
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#333",
            }}
          >
            Total: <span style={{ color: "#28a745" }}>${total.toFixed(2)}</span>
          </h3>
        </>
      )}
    </div>
  );
}
