import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 bg-[#c4cbd6]/10"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-[#0096f4]/30 bg-[#0096f4]/10 px-3 py-1 text-sm text-[#0096f4] mb-4">
            <span>Depoimentos</span>
          </div>
          <h2 className="text-3xl font-bold text-[#002171] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Descubra como o Córtex Cloud tem ajudado empresas de todos os
            tamanhos a melhorar sua produtividade e colaboração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="flex text-[#0096f4]">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              O Córtex Cloud transformou completamente a maneira como nossa
              equipe trabalha. A integração de todas as ferramentas em uma única
              plataforma aumentou nossa produtividade em mais de 30%.
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#c4cbd6] mr-3"></div>
              <div>
                <h4 className="font-medium text-[#002171]">Ana Silva</h4>
                <p className="text-sm text-gray-500">
                  Diretora de Operações, TechSolutions
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="flex text-[#0096f4]">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              A segurança e o sistema de auditoria do Córtex Cloud nos deram a
              confiança necessária para gerenciar informações sensíveis. O
              suporte técnico é excepcional e sempre está disponível quando
              precisamos.
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#c4cbd6] mr-3"></div>
              <div>
                <h4 className="font-medium text-[#002171]">Carlos Mendes</h4>
                <p className="text-sm text-gray-500">CTO, FinanceGroup</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="flex text-[#0096f4]">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Como uma empresa com equipes distribuídas globalmente, o Córtex
              Cloud nos permitiu colaborar de forma eficiente, independentemente
              da localização. As videoconferências e o chat interno são
              ferramentas que usamos diariamente.
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#c4cbd6] mr-3"></div>
              <div>
                <h4 className="font-medium text-[#002171]">Juliana Costa</h4>
                <p className="text-sm text-gray-500">
                  Gerente de Projetos, GlobalTech
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="text-[#0096f4] hover:underline inline-flex items-center"
          >
            Ver mais depoimentos
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
