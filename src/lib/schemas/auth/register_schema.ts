import { z } from "zod/v4";

export const RegisterSchema = z.object({
  username: z.string()
    .trim()
    .min(1, "Nome é obrigatório"),

  email: z.string()
    .trim()
    .toLowerCase()
    .email("E-mail inválido"),

  password: z.string()
    .trim()
    .min(6, "Senha deve ter no mínimo 6 caracteres"),

  cpf_cnpj: z.string()
    .trim()
    .transform(val => val.replace(/[^\d]/g, "")) 
    .refine(val => val.length === 11 || val.length === 14, {
      message: "CPF ou CNPJ inválido"
    }),

  cellphone: z.string()
    .trim()
    .min(8, "Número de celular inválido")
    .transform(val => val.replace(/[^\d]/g, ""))
});
