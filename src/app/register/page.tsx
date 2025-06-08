import AboutNavBar from "../components/about_components/navbar";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-amber-50 px-4">
      <div className="shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-[1000px] h-auto lg:h-[600px] overflow-hidden bg-amber-100">
        
      <div className="w-full lg:w-1/2 h-[300px] lg:h-full">
          <img
            src="https://media.istockphoto.com/id/498994244/pt/foto/%C3%A9gua-com-potro.jpg?s=612x612&w=0&k=20&c=js_dJ4eX-0TkHlVtpA5sPpFZhjiUrevLSIqg-Kf4XkA="
            alt="mareImage"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 h-auto flex flex-col justify-start items-center text-left p-6 md:p-8">
          <AboutNavBar />
          
          <div className="flex-1 flex items-start mt-8 md:mt-12 justify-start w-full">
            <div className="flex flex-col">
              <h1 className="text-amber-950 text-4xl md:text-5xl lg:text-6xl">EquiGest</h1>
              <p className="text-base md:text-lg mt-2 opacity-[75%]">
                Registre seu Haras!
              </p>

              <hr className="w-full" />

              <div className="w-96 mt-12 flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-62 md:w-full px-4 py-2 rounded-lg shadow-md border-2 border-amber-950 placeholder:text-amber-950/70 focus:outline-none focus:ring-2 focus:ring-amber-800"
                        placeholder="Nome do seu Haras"
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-62 md:w-full px-4 py-2 rounded-lg shadow-md border-2 border-amber-950 placeholder:text-amber-950/70 focus:outline-none focus:ring-2 focus:ring-amber-800"
                        placeholder="Senha da sua Conta"
                    />
                </div>

              <div className="flex md:items-center md:justify-center mt-4 md:mt-8">
                <button className="w-62 md:w-96 px-6 py-3 bg-amber-950 text-amber-100 leading-relaxed text-base md:text-lg text-center rounded-lg shadow-md hover:bg-amber-900 transition-all cursor-pointer">
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
