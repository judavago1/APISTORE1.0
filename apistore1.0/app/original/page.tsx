"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useCarrito } from "../context/CarritoContext";

export default function Original() {
  const [ofertas, setOfertas] = useState<any[]>([]);
  const { agregarAlCarrito } = useCarrito();
  const [productoDetalle, setProductoDetalle] = useState<any | null>(null); // producto para modal
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productosOferta = data
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)
          .map((p: any) => ({ ...p, precioOferta: (p.price * 0.8).toFixed(2) }));
        setOfertas(productosOferta);
      });
  }, []);

  const abrirDetalle = (producto: any) => {
    setProductoDetalle(producto);
    setMostrarModal(true);
  };

  const cerrarDetalle = () => {
    setProductoDetalle(null);
    setMostrarModal(false);
  };

  return (
    <>
      <Header titulo="Original" />

      <div style={{ padding: "20px",paddingTop: "60px", textAlign: "center" }}>


        {/* SECCIÓN DE OFERTAS */}
        {ofertas.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ color: "#dc3545", marginBottom: "20px" }}> Ofertas Especiales </h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
              {ofertas.map((p) => (
                <div
                  key={p.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    padding: "15px",
                    width: "200px",
                    textAlign: "center",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ height: "150px", objectFit: "contain", marginBottom: "10px" }}
                  />
                  <h3 style={{ fontSize: "16px", minHeight: "60px", fontWeight: "bold", marginBottom: "5px" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "#6c757d", textDecoration: "line-through", marginBottom: "5px" }}>
                    ${p.price.toFixed(2)}
                  </p>
                  <p style={{ fontWeight: "bold", color: "#dc3545", fontSize: "18px", marginBottom: "10px" }}>
                    ${p.precioOferta}
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
                      marginBottom: "5px",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                  >
                    Agregar
                  </button>
                  <button
                    onClick={() => abrirDetalle(p)}
                    style={{
                      backgroundColor: "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "bold",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
                  >
                    Detalle
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL DETALLE */}
        {mostrarModal && productoDetalle && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
            onClick={cerrarDetalle} // cerrar al hacer click fuera del modal
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                padding: "20px",
                width: "400px",
                maxHeight: "90vh",
                overflowY: "auto",
                textAlign: "center",
              }}
              onClick={(e) => e.stopPropagation()} // evitar cerrar al click interno
            >
              <h2>{productoDetalle.title}</h2>
              <img
                src={productoDetalle.image}
                alt={productoDetalle.title}
                style={{ height: "200px", objectFit: "contain", marginBottom: "10px" }}
              />
              <p><strong>Categoría:</strong> {productoDetalle.category}</p>
              <p style={{ color: "#6c757d", textDecoration: "line-through" }}>
                Precio original: ${productoDetalle.price.toFixed(2)}
              </p>
              <p style={{ color: "#dc3545", fontWeight: "bold", fontSize: "20px" }}>
                Precio oferta: ${productoDetalle.precioOferta}
              </p>
              <p style={{ marginTop: "10px" }}>{productoDetalle.description}</p>
              <button
                onClick={cerrarDetalle}
                style={{
                  marginTop: "15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}