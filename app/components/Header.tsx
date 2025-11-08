import React from "react";

export default function Header({ titulo }: { titulo?: string }) {
  return (
    <header
      style={{
        backgroundColor: "#007bff",
        color: "white",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "15px 20px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Columna vacía para mantener el título centrado */}
      <div></div>

      {/* Título centrado pero ligeramente a la izquierda */}
      <div style={{ textAlign: "center", marginLeft: "-80px" }}>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
          ApiStore
        </h1>
        <h2 style={{ margin: "5px 0 0", fontSize: "18px", fontWeight: "normal" }}>
          {titulo || "Catálogo"}
        </h2>
      </div>

      {/* Info de contacto a la derecha, con más espacio desde el borde */}
      <div
        style={{
          textAlign: "right",
          fontSize: "12px",
          lineHeight: "1.4",
          paddingRight: "30px",
          marginLeft: "10px",
        }}
      >
        <strong>ApiStore</strong> <br />
        📞 +57 304-341-2916 <br />
        ✉️ apistore@gmail.com
      </div>
    </header>
  );
}