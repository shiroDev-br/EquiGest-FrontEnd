"use client"
import FormInput from "@/app/components/form_input";

interface RegisterBreedingMareFormProps {
    showError: (message: string) => void;
}

export default function RegisterBreedingMareForm ({showError}: RegisterBreedingMareFormProps){
    const handleSubmit = () => {
        showError("Erro ao registrar a matriz.");
      };
    return (
    <div className="w-full max-w-md mx-auto  flex flex-col gap-5 bg-amber-200 p-8 rounded-2xl shadow-xl">
        <h1 className="text-center text-3xl font-semibold text-amber-950">Registrar Matriz</h1>
        <hr className="w-full h-1 bg-amber-800 border-0 rounded" />
        <FormInput
        type="text"
        placeholder="Nome da Égua"
        onChange={val => val}
        />

        
        <div>
            <p className="ml-1 text-sm font-medium text-amber-950">
                Data da Prenhez
            </p>
            <FormInput
            type="date"
            placeholder="Data de Prenhez"
            onChange={val => val}
            />


        </div>

        <FormInput
        type="text"
        placeholder="Nome do Garanhão do Produto"
        onChange={val => val}
        />
        <button
        className="w-full md:w-full mt-4 px-6 py-3 bg-amber-950 text-amber-100 text-base md:text-lg text-center rounded-lg shadow-md hover:bg-amber-900 transition-all cursor-pointer" onClick={handleSubmit}
        >
        Registrar
      </button>
    </div>
    )
}