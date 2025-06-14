"use client"
import { useState } from "react";

import FormInput from "@/app/components/form_input";

import {register_mare} from "@/lib/equigest/mares/register";

import { 
    IRegisterMareBody, 
} from "@/lib/interfaces/interfaces";

interface RegisterBreedingMareFormProps {
    showError: (message: string) => void;
    setOpenLoadingOverlay: (value: boolean) => void;
}

export default function RegisterBreedingMareForm ({
    showError,
    setOpenLoadingOverlay
}: RegisterBreedingMareFormProps){
    const [form, setForm] = useState<IRegisterMareBody>({
        mare_name: "",
        stallion_name: "",
        pregnancy_date: null,
    });

    const handleChange = (field: keyof IRegisterMareBody, value: any) => {
        setForm(prev => ({...prev, [field]: value}));
    }

    const handleSubmit = async () => {
        const result = await register_mare(form, "HEADQUARTERS");
        setOpenLoadingOverlay(true);

        if (result.success){
            console.log(result.response);
        }else {

            setOpenLoadingOverlay(false);
            showError(result.error)
        }

      };
    return (
    <div className="w-full max-w-md mx-auto  flex flex-col gap-5 bg-amber-200 p-8 rounded-2xl shadow-xl">
        <h1 className="text-center text-3xl font-semibold text-amber-950">Registrar Matriz</h1>
        <hr className="w-full h-1 bg-amber-800 border-0 rounded" />
        <FormInput
        type="text"
        placeholder="Nome da Égua"
        value={form.mare_name}
        onChange={val => handleChange("mare_name", val)}
        />

        
        <div>
            <p className="ml-1 text-sm font-medium text-amber-950">
                Data da Prenhez
            </p>
            <FormInput
            type="date"
            placeholder="Data de Prenhez"
            value={
                form.pregnancy_date
                  ? form.pregnancy_date.toISOString().split("T")[0]
                  : ""
            }
            onChange={val => handleChange("pregnancy_date", new Date(val))}
            />
        </div>

        <FormInput
        type="text"
        placeholder="Nome do Garanhão do Produto"
        value={form.stallion_name}
        onChange={val => handleChange("stallion_name", val)}
        />
        <button
        className="w-full md:w-full mt-4 px-6 py-3 bg-amber-950 text-amber-100 text-base md:text-lg text-center rounded-lg shadow-md hover:bg-amber-900 transition-all cursor-pointer" onClick={handleSubmit}
        >
        Registrar
      </button>
    </div>
    )
}