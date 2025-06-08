import AboutNavBar from "../components/about_components/navbar";
import Image from "next/image";
import about from "../assets/about.jpg" 

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-amber-50 px-4">
      <div className="shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-[1000px] h-auto lg:h-[600px] overflow-hidden bg-amber-100">
        
        <div className="w-full lg:w-1/2 h-[300px] lg:h-full">
          <Image
            src={about}
            alt="mareImage"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>

        <div className="w-full lg:w-1/2 h-auto flex flex-col justify-start items-center text-left p-6 md:p-8">
          <AboutNavBar />
          
          <div className="flex-1 flex items-start mt-8 md:mt-12 justify-start w-full">
            <div className="flex flex-col">
              <h1 className="text-amber-950 text-4xl md:text-5xl lg:text-6xl">EquiGest</h1>
              <p className="text-base md:text-lg mt-2 opacity-[75%]">
                Gerencie suas éguas com facilidade!
              </p>
              <hr />

              <p className="mt-6 md:mt-10 text-amber-950 text-base md:text-lg leading-relaxed">
                Controle de vacinação, progesterona, previsões de parto e registros das suas éguas
                com facilidade.
                <br /><br />
                Tudo isso por apenas <strong>R$49,99/mês</strong>.
                <br /><br />
                Simplifique o controle gestacional do seu Haras com o EquiGest!
              </p>

              <div className="flex items-center justify-center mt-8 md:mt-12">
                <button className="w-52 md:w-62 px-3 py-2 bg-amber-950 text-amber-100 leading-relaxed text-base md:text-lg text-center rounded-lg shadow-md hover:bg-amber-900 hover:py-4 transition-all cursor-pointer">
                  Conheça o Sistema
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
