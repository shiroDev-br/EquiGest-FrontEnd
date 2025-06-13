import {IRegisterRequestBody} from "../interfaces/interfaces";
import {RegisterSchema} from "../schemas/auth/register_schema";
import { AuthType } from "../types/auth";

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
  
    const response = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitized_body),
    });
    
    const result = await response.json();
  
    if (response.status === 201) {
      return {success: true, access_token: result.access_token}
    } else {
      return {success: false, error: result.detail}
    }
  }