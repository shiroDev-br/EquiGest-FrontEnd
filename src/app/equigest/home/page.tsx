import SideBar from "../../components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex bg-amber-50">
      <SideBar />
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="p-6 md:p-8 rounded-lg max-w-md md:max-w-xl shadow-lg bg-amber-100 flex flex-col items-center text-center md:text-left">
          <h1 className="text-amber-950 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
            EquiGest
          </h1>
          <p className="text-amber-900 text-base sm:text-lg md:text-lg leading-relaxed mb-6 text-justify md:text-left">
            🐴 Nosso sistema de controle gestacional de éguas facilita o gerenciamento completo da sua criação, acompanhando todas as etapas importantes.<br /><br />
            💉 Ele monitora as vacinas e hormônios a serem administrados, prevê a data provável do parto e oferece um controle geral da tropa, incluindo a quantidade de éguas cadastradas, seu status individual e acompanhamento gráfico.<br /><br />
            ✅ Tudo isso para garantir a saúde e o bom desenvolvimento das suas éguas de forma prática e eficiente.
          </p>
        </div>
      </div>
    </div>
  );
}
