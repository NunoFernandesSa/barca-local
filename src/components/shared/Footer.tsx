import Link from "next/link";
import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="container mx-auto w-full h-full text-center text-sm text-muted px-3 py-3 gap-3 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-start justify-center">
        <span> &copy; {date} Local na Barca</span>
        <span>
          Desenvolvido por{" "}
          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Nuno F.
          </Link>
        </span>
      </div>

      <div className="flex flex-col justify-end items-end">
        <Link href="/" className="italic hover:text-primary">
          Política de Privacidade
        </Link>
        <Link href="/" className="italic hover:text-primary">
          Termos e Condições
        </Link>
      </div>
    </div>
  );
}
