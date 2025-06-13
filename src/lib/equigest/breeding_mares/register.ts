import { 
    IRegisterBreedingMareBody, 
    IRequestErrorResponse 
} from "@/lib/interfaces/interfaces";

import { RegisterMareType } from "@/lib/types/mares";

import { RegisterBreedingMareSchema } from "@/lib/schemas/mares/breeding_mare";

export async function register_breeding_mare (
    unsanitized_body: IRegisterBreedingMareBody
): Promise<RegisterMareType> {
    const NEXT_PUBLIC_API_STAGING_URL = process.env.NEXT_PUBLIC_API_STAGING_URL;
    if (!NEXT_PUBLIC_API_STAGING_URL) {
      throw new Error("API URL não definida");
    }

    const parsed = RegisterBreedingMareSchema.safeParse(unsanitized_body);
    if (!parsed.success) {
        const errors = parsed.error.issues
        .map(i => `${String(i.path[0])}: ${i.message}`)
        .join("\n");
        return {success: false, error: errors}
    }

    const sanitized_body = parsed.data;

    const response = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/mares/create`)

    return {success: true, response: {
        'status': 'ok'
    }}

}