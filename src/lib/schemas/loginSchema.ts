import { z } from "zod/v4";

export const loginSchema = z.object({
  username: z.string()
    .trim()
    .min(1, "Nome é obrigatório"),

  password: z.string()
    .trim()
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});
