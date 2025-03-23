'use client'

import { Calendar, CheckCircle, Cloud, MessageSquare, Share2, ShieldCheck, Video } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 bg-[#c4cbd6]/10">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-[#0096f4]/30 bg-[#0096f4]/10 px-3 py-1 text-sm text-[#0096f4] mb-4">
            <span>Recursos</span>
          </div>
          <h2 className="text-3xl font-bold text-[#002171] mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-gray-600 max-w-2xl">
            O Córtex Cloud oferece uma solução completa para gerenciamento de
            equipes e arquivos, com recursos avançados para aumentar a
            produtividade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
            <ShieldCheck className="h-10 w-10 text-[#0096f4] mb-4" />
            <h3 className="text-xl font-bold text-[#002171] mb-2">
              Sistema de Auditoria
            </h3>
            <p className="text-gray-600 mb-4">
              Monitore todas as atividades com logs detalhados e relatórios de
              auditoria para maior segurança e conformidade.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Logs detalhados de atividades
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Relatórios personalizáveis
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Alertas de segurança
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
            <Calendar className="h-10 w-10 text-[#0096f4] mb-4" />
            <h3 className="text-xl font-bold text-[#002171] mb-2">
              Calendário Integrado
            </h3>
            <p className="text-gray-600 mb-4">
              Organize eventos, reuniões e prazos com um calendário
              compartilhado para toda a equipe.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Sincronização com Google e Outlook
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Lembretes automáticos
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Agendamento de recursos
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
            <MessageSquare className="h-10 w-10 text-[#0096f4] mb-4" />
            <h3 className="text-xl font-bold text-[#002171] mb-2">
              Chat Interno
            </h3>
            <p className="text-gray-600 mb-4">
              Comunique-se instantaneamente com sua equipe através de mensagens
              diretas e canais de grupo.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Mensagens diretas e em grupo
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Compartilhamento de arquivos
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Histórico de conversas
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
            <Share2 className="h-10 w-10 text-[#0096f4] mb-4" />
            <h3 className="text-xl font-bold text-[#002171] mb-2">
              Compartilhamento Externo
            </h3>
            <p className="text-gray-600 mb-4">
              Compartilhe arquivos com segurança com clientes e parceiros
              externos, mantendo o controle total.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Links seguros com expiração
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Proteção por senha
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Controle de permissões
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
            <Video className="h-10 w-10 text-[#0096f4] mb-4" />
            <h3 className="text-xl font-bold text-[#002171] mb-2">
              Vídeo Chamadas
            </h3>
            <p className="text-gray-600 mb-4">
              Realize reuniões virtuais diretamente na plataforma, sem
              necessidade de ferramentas externas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Até 100 participantes
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Compartilhamento de tela
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Gravação de reuniões
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
            <Cloud className="h-10 w-10 text-[#0096f4] mb-4" />
            <h3 className="text-xl font-bold text-[#002171] mb-2">
              Armazenamento Seguro
            </h3>
            <p className="text-gray-600 mb-4">
              Mantenha seus arquivos protegidos com criptografia avançada e
              controle de acesso granular.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Criptografia de ponta a ponta
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">
                  Versionamento de arquivos
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#0096f4] mr-2" />
                <span className="text-sm text-gray-600">Backup automático</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
