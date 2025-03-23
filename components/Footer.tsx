import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-[#002171]">
                Córtex Cloud
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Solução completa para gerenciamento de equipes e arquivos com
              recursos avançados de segurança e colaboração.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/oficial.cortex/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0096f4]"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/5563984040475" // Substitua pelo número correto
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0096f4]"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#002171] mb-4">
              Produto
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Segurança
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Atualizações
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#002171] mb-4">
              Empresa
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Parceiros
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#002171] mb-4">
              Suporte
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Comunidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#0096f4]"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Córtex. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-[#0096f4]">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#0096f4]">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#0096f4]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
