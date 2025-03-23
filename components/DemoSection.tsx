"use client";

import { EspoCrmTracker } from "@/app/services/espocrm";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";


export default function DemoSection() {
  const handleStartDemo = () => {
    const tracker = new EspoCrmTracker();
    tracker.trackScheduleDemoClick();
    tracker.redirectToWhatsApp();
  };

  return (
    <section id="demo" className="w-full py-12 md:py-24 bg-white">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-[#0096f4]/30 bg-[#0096f4]/10 px-3 py-1 text-sm text-[#0096f4]">
              <span>Demonstração</span>
            </div>
            <h2 className="text-3xl font-bold text-[#002171]">
              Veja o Córtex Cloud em ação
            </h2>
            <p className="text-gray-600">
              Descubra como o Córtex Cloud pode transformar a maneira como sua
              equipe trabalha com uma interface intuitiva e recursos poderosos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0096f4] mr-2" />
                <span className="text-gray-600">
                  Interface intuitiva e fácil de usar
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0096f4] mr-2" />
                <span className="text-gray-600">
                  Integração com ferramentas que você já usa
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0096f4] mr-2" />
                <span className="text-gray-600">
                  Personalização completa para suas necessidades
                </span>
              </li>
            </ul>
            <div>
              <Button
                className="bg-[#0096f4] hover:bg-[#0096f4]/90 text-white"
                onClick={handleStartDemo}
              >
                Agendar Demonstração Completa
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
            <video
              className="w-full h-full object-cover"
              controls
              src="/videos/CloudDocs.mp4"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
