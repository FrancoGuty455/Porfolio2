import Link from "next/link";
import "./paginaprincipal.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <main>
        <h1>Bienvenido a mi Portfolio</h1>
        <p>Elegí una versión para explorar:</p>
        <div className="button-container">
          <Link href="/classic" className="button-classic">
            Versión Classic
          </Link>
          <Link href="/assistant" className="button-assistant">
            Versión Assistant
          </Link>
        </div>
      </main>
    </div>
  );
}
