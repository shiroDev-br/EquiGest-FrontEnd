"use client";
import { useState } from "react";
import {login_user} from "@/lib/auth/login"
import { ILoginRequestBody } from "@/lib/interfaces/interfaces";
import FormInput from "../../../components/form_input";
import { redirect } from 'next/navigation'
import {LoadingOverlay} from "../../../components/loading_overlay"

export default function LoginForm() {

  const [form, setForm] = useState<ILoginRequestBody>({
    username: "",
    password: "",
  });

  const [openLoadingOverlay, setOpenLoadingOverlay] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof ILoginRequestBody, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleLogin = async () => {
    const result = await login_user(form);
    setOpenLoadingOverlay(true);

    if (result.success) {
        localStorage.setItem("jwtToken", result.access_token ?? "");
        setError(null);
        redirect("/equigest/home")
    } else {
        setOpenLoadingOverlay(false);
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

      {openLoadingOverlay && (
        <LoadingOverlay/>
      )}

      <FormInput
        type="text"
        placeholder="Nome do seu Haras"
        value={form.username}
        onChange={val => handleChange("username", val)}
      />
      <FormInput
        type="password"
        placeholder="Senha da sua Conta"
        value={form.password}
        onChange={val => handleChange("password", val)}
      />

      <button
        onClick={handleLogin}
        className="w-62 md:w-96 mt-4 px-6 py-3 bg-amber-950 text-amber-100 text-base md:text-lg text-center rounded-lg shadow-md hover:bg-amber-900 transition-all cursor-pointer"
      >
        Entrar
      </button>
    </div>
  );
}
