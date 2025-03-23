'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { EspoCrmTracker } from "@/app/services/espocrm";

export default function HeroSection() {
  const handleStartFreeClick = () => {
    const tracker = new EspoCrmTracker();
    tracker.trackStartFreeClick();
    tracker.redirectToWhatsApp();
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-[#0096f4]/30 bg-[#0096f4]/10 px-3 py-1 text-sm text-[#0096f4]">
              <span>Nova versão 2.0 disponível</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-[#002171] sm:text-5xl xl:text-6xl/none">
              Gerencie sua equipe e arquivos em um só lugar
            </h1>
            <p className="text-lg text-gray-600 max-w-[600px]">
              Córtex Cloud é a solução completa para gerenciamento de equipes e
              arquivos com recursos avançados de segurança e colaboração.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/register">
                <Button
                  className="bg-[#0096f4] hover:bg-[#0096f4]/90 text-white"
                  onClick={handleStartFreeClick}
                >
                  Começar Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  variant="outline"
                  className="border-[#002171] text-[#002171] hover:bg-[#c4cbd6]/20"
                >
                  Ver Vídeo
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 text-[#0096f4]" />
              <span>14 dias de teste grátis</span>
              <CheckCircle className="ml-2 h-4 w-4 text-[#0096f4]" />
              <span>Sem necessidade de cartão</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[800px]">
              <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-[#0096f4]/10 blur-3xl"></div>
              <Image
                src="/images/notebook.png"
                alt="Córtex Cloud Dashboard"
                width={1200}
                height={1200}
                className="relative z-10 rounded-lg "
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
