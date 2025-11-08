import "./globals.css";
import { CarritoProvider } from "./context/CarritoContext";
import Menu from "./components/Menu";

export const metadata = {
  title: "E-commerce Móvil",
  description: "Tienda optimizada para móviles con Next.js y FakeStoreAPI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CarritoProvider>
          <main>{children}</main>
          <Menu />
        </CarritoProvider>
      </body>
    </html>
  );
}