import AboutNavBar from "../../components/about_components/navbar";
import Image from "next/image";
import login from "../../assets/login.jpg"
import LoginForm from "./components/login_form";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-amber-50 px-4">
      <div className="shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-[1000px] h-auto lg:h-[600px] overflow-hidden bg-amber-100">
      <div className="w-full lg:w-1/2 h-[300px] lg:h-full">
          <Image
            src={login}
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
                Entre na conta do seu Haras
              </p>

              <hr className="w-full" />

              <LoginForm/>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
