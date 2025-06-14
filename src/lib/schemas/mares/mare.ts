import { z } from "zod/v4";

export const RegisterMareSchema = z.object({
    mare_name: z.string()
        .trim(),

    stallion_name: z.string()
        .trim(),
    
    pregnancy_date: z.date(),

    donor_name: z.string().
        optional().
        nullable(),

    mare_type: z.string().
        optional().
        nullable()
});
