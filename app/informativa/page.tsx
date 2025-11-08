import Header from "../components/Header";

export default function Informativa() {
  return (
    <>
      <Header titulo="Informativa" />
      <main style={{ padding: "20px", marginTop:"50px", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <h1 style={{ textAlign: "center" }}>Página Informativa</h1>

        {/* Sección de descripción */}
        <section style={{ marginTop: "30px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          <h2>Sobre APIStore</h2>
          <p>
            APIStore es una API de ejemplo creada con fines educativos y de demostración, 
            perfecta para desarrollar aplicaciones web y móviles que requieran consumir 
            datos simulados. Su objetivo principal es facilitar el aprendizaje de integraciones 
            con APIs reales, ofreciendo endpoints confiables y estructurados.
          </p>
          <p>
            Desde su creación, APIStore ha servido como herramienta de práctica para cientos 
            de desarrolladores y estudiantes en todo el mundo. Gracias a su diseño intuitivo y 
            su amplia documentación, es la opción preferida para proyectos de prueba, demostraciones y prototipos.
          </p>
          <p>
            <strong>¿Por qué nos prefieren?</strong> Por su simplicidad, estabilidad y variedad de recursos, 
            APIStore permite a los desarrolladores enfocarse en la lógica de sus aplicaciones sin preocuparse por datos inconsistentes.
          </p>
        </section>

        {/* Tarjeta de contacto centrada */}
        <section style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "10px",
              padding: "25px",
              width: "100%",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3>APIStore Soporte</h3>
            <p><strong>Nombre:</strong> Juan Vargas</p>
            <p><strong>Correo:</strong> apistore@gmail.com</p>
            <p><strong>Teléfono:</strong> +57 304 341 2916</p>
            <p><strong>Dirección:</strong> Calle Falsa 123, Bogotá, Colombia</p>
          </div>
        </section>
      </main>
    </>
  );
}