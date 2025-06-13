import { z } from "zod/v4";

export const LoginSchema = z.object({
  username: z.string()
    .trim()
    .min(1, "Nome é obrigatório"),

  password: z.string()
    .trim()
    .min(1, "Senha deve ter no mínimo 1 caracteres"),
});
