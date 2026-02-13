import React, { JSX } from "react";
import Container from "./Container";
import Image from "next/image";

export default function Navbar(): JSX.Element {
  return (
    <div className="shadow-md h-24">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo/local-na-barca-logo.png"
              alt="Local na Barca Logo"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className="flex flex-col items-start justify-center space-y-1">
              <h1 className="text-xl font-bold text-foreground text-primary">
                Local na Barca
              </h1>
              <p className="text-sm italic text-muted">
                Produtores locais de Ponte da Barca e arredores.
              </p>
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Produtores
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}
