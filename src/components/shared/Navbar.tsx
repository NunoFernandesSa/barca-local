"use client";

import { JSX } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  /**
   * Returns CSS classes for active and inactive links based on the current pathname.
   *
   * If the current pathname matches the given path, the returned CSS classes will style the link as active.
   * Otherwise, the returned CSS classes will style the link as inactive.
   *
   * @param {string} path The path to compare with the current pathname.
   * @returns {string} The CSS classes for the link.
   */
  const linkClasses = (path: string) =>
    pathname === path
      ? `font-semibold text-primary hover:text-primary/80 transition-colors scale-101`
      : "font-semibold text-muted hover:text-primary/80 transition-colors scale-101";

  return (
    <div className="shadow-md h-24">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <Image
              src="/images/logo/local-na-barca-logo.png"
              alt="Local na Barca Logo"
              width={60}
              height={60}
              className="mr-2"
            /> */}
            <div className="flex flex-col items-start justify-center space-y-1">
              <h1 className="text-xl font-bold text-foreground text-primary">
                Local na Barca
              </h1>
              <p className="text-sm italic text-muted">
                Descubra produtos locais de qualidade da região do Minho.
              </p>
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className={linkClasses("/")}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtores" className={linkClasses("/produtores")}>
                  Lista de Produtores
                </Link>
              </li>
              <li>
                <Link href="/contacto" className={linkClasses("/contacto")}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}
