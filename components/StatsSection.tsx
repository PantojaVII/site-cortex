export default function StatsSection() {
  return (
    <section className="w-full py-12 bg-[#c4cbd6]/10">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-[#002171]">Alta disponibilidade</h3>
            <p className="text-gray-600">Solicitações e escalabilidade em massa</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#002171]">Infra estrutura AWS </h3>
            <p className="text-gray-600">Maior sistema Cloud do mundo</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#002171]">99.9%</h3>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#002171]">24/7</h3>
            <p className="text-gray-600">Suporte</p>
          </div>
        </div>
      </div>
    </section>
  );
}
