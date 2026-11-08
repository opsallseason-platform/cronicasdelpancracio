import Image from "next/image";

export default function HomePage() {
  return (
    <div className="landing">
      <div className="landing-photograph" aria-hidden="true">
        <Image
          src="/bg-new.jpeg"
          alt=""
          fill
          sizes="100vw"
          preload
          unoptimized
          className="landing-image"
        />
      </div>

      <header className="masthead">
        <p>Historia de la lucha libre</p>
        <p>México</p>
      </header>

      <main className="introduction">
        <h1>
          <span>Crónicas</span>
          <span>del Pancracio</span>
        </h1>
        <p className="description">
          La historia de la lucha libre mexicana,
          <br />
          contada por <span className="author">Médico Asesino Jr.</span>
        </p>
      </main>

      <footer className="colophon">
        <p className="launch-status">Próximamente</p>
        <p>La memoria del ring.</p>
      </footer>
    </div>
  );
}
