import {IRegisterRequestBody} from "@/lib/interfaces/interfaces";

import {RegisterSchema} from "@/lib/schemas/auth/register_schema";
import { AuthType } from "@/lib/types/auth";

import { handleApiResponse } from "@/lib/utils/handleResponse";

export async function register_user(
    unsanitized_body: IRegisterRequestBody
): Promise<AuthType> {

    const NEXT_PUBLIC_API_STAGING_URL = process.env.NEXT_PUBLIC_API_STAGING_URL;
    if (!NEXT_PUBLIC_API_STAGING_URL) {
      throw new Error("API URL não definida");
    }
    const parsed = RegisterSchema.safeParse(unsanitized_body);

    if (!parsed.success) {
        const errors = parsed.error.issues
        .map(i => `${String(i.path[0])}: ${i.message}`)
        .join("\n");
        return {success: false, error: errors}
    }

    const sanitized_body = parsed.data; 
  
    const request = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitized_body),
    });
    
    const result = await request.json();
    const response = handleApiResponse<typeof result>(request.status, result)
    
    if (!response.success){
      return {success: false, error: response.error}
  }

    return {success: true, access_token: response.access_token};
}