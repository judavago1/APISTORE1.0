"use client";

export default function ProductoCard({ producto, onAdd }: any) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={producto.image}
        alt={producto.title}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
      <h3 style={{ fontSize: "14px", height: "40px" }}>{producto.title}</h3>
      <p style={{ fontWeight: "bold" }}>${producto.price}</p>
      <button onClick={onAdd}>Agregar</button>
    </div>
  );
}