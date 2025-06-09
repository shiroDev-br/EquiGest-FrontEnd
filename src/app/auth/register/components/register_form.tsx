"use client";
import { useState } from "react";
import { register_user } from "@/lib/auth/register";
import { IRegisterRequestBody } from "@/lib/interfaces/interfaces";
import FormInput from "../../components/form_input";

export default function RegisterForm() {
  const [form, setForm] = useState<IRegisterRequestBody>({
    username: "",
    email: "",
    password: "",
    cpf_cnpj: "",
    cellphone: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof IRegisterRequestBody, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleRegister = async () => {
    const result = await register_user(form);

    if (result.success) {
        localStorage.setItem("jwtToken", result.access_token);
        setError(null);
    } else {
        setError(result.error);

        setTimeout(() => {
            setError(null);
        }, 5000);
    }
  };

  return (
    <div className="w-96 mt-6 flex flex-col gap-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erro:</strong>
          <span className="block sm:inline ml-2 whitespace-pre-line">{error}</span>
        </div>
      )}

      <FormInput
        type="text"
        placeholder="Nome do seu Haras"
        value={form.username}
        onChange={val => handleChange("username", val)}
      />
      <FormInput
        type="email"
        placeholder="E-mail cadastral"
        value={form.email}
        onChange={val => handleChange("email", val)}
      />
      <FormInput
        type="text"
        placeholder="CPF/CNPJ cadastral"
        value={form.cpf_cnpj}
        onChange={val => handleChange("cpf_cnpj", val)}
      />
      <FormInput
        type="text"
        placeholder="Telefone cadastral"
        value={form.cellphone}
        onChange={val => handleChange("cellphone", val)}
      />
      <FormInput
        type="password"
        placeholder="Senha da sua Conta"
        value={form.password}
        onChange={val => handleChange("password", val)}
      />

      <button
        onClick={handleRegister}
        className="w-62 md:w-96 mt-4 px-6 py-3 bg-amber-950 text-amber-100 text-base md:text-lg text-center rounded-lg shadow-md hover:bg-amber-900 transition-all cursor-pointer"
      >
        Registrar
      </button>
    </div>
  );
}
