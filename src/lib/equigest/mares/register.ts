import { 
    IRegisterMareBody, 
} from "@/lib/interfaces/interfaces";

import { RegisterMareType } from "@/lib/types/mares";
import { RegisterMareSchema } from "@/lib/schemas/mares/mare";

import { handleApiResponse } from "@/lib/utils/handleResponse";

export async function register_mare (
    unsanitized_body: IRegisterMareBody,
    mare_type: string
): Promise<RegisterMareType> {

    const NEXT_PUBLIC_API_STAGING_URL = process.env.NEXT_PUBLIC_API_STAGING_URL;
    if (!NEXT_PUBLIC_API_STAGING_URL) {
      throw new Error("API URL não definida");
    }

    const parsed = RegisterMareSchema.safeParse(unsanitized_body);
    if (!parsed.success) {
        const errors = parsed.error.issues
        .map(i => `${String(i.path[0])}: ${i.message}`)
        .join("\n");
        return {success: false, error: errors}
    }

    const sanitized_body = parsed.data;
    sanitized_body.mare_type = mare_type;

    const request = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/mares/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(sanitized_body)
    })

    const result = await request.json()
    const response = handleApiResponse<typeof result>(request.status, result);

    if (!response.success){
        return {success: false, error: response.error}
    }

    return {success: true, response: response.response};
}