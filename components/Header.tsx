"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Img from "next/image";
import { EspoCrmTracker } from "@/app/services/espocrm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const trackSiteVisit = () => {
    const tracker = new EspoCrmTracker();
    tracker.trackStartFreeClick();
    tracker.redirectToWhatsApp();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between py-4 ">
        <div className="flex items-center gap-2">
          <Img
            src="/images/logo-cortex.png"
            alt="Córtex Cloud Logo"
            width={120}
            height={120}
          ></Img>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
          >
            Recursos
          </Link>
          <Link
            href="#clients"
            className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
          >
            Clientes
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
          >
            Depoimentos
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
          >
            FAQ
          </Link>
          <Link
            href="#meeting"
            className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
          >
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block"></Link>

          <Button
            className="bg-[#0096f4] hover:bg-[#0096f4]/90 text-white"
            onClick={() => {
              trackSiteVisit();
            }}
          >
            Começar Grátis
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-start gap-4 p-4">
            <Link
              href="#features"
              className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link
              href="#clients"
              className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
              onClick={() => setIsMenuOpen(false)}
            >
              Clientes
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#meeting"
              className="text-sm font-medium text-[#002171] hover:text-[#0096f4]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
