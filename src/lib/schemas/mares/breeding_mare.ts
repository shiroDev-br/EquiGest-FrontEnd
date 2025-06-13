import { z } from "zod/v4";

export const RegisterBreedingMareSchema = z.object({
    mare_name: z.string()
        .trim(),

    stallion_name: z.string()
        .trim(),
    
    pregnancy_date: z.date(),
    
    mare_type: z.string().
        optional().
        nullable()
});
