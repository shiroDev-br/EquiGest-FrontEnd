import {ILoginRequestBody} from "@/lib/interfaces/interfaces";

import {LoginSchema} from "@/lib/schemas/auth/login_schema";
import { AuthType } from "@/lib/types/auth";

import { handleApiResponse } from "@/lib/utils/handleResponse";

export async function login_user(
    unsanitized_body: ILoginRequestBody
): Promise<AuthType> {
    const NEXT_PUBLIC_API_STAGING_URL = process.env.NEXT_PUBLIC_API_STAGING_URL;
    if (!NEXT_PUBLIC_API_STAGING_URL) {
      throw new Error("API URL não definida");
    }

    const parsed = LoginSchema.safeParse(unsanitized_body);

    if (!parsed.success) {
        const errors = parsed.error.issues
        .map(i => `${String(i.path[0])}: ${i.message}`)
        .join("\n");
        return {success: false, error: errors}
    }

    const sanitized_body = parsed.data;

    const form_data = new URLSearchParams();
    form_data.append("username", sanitized_body.username);
    form_data.append("password", sanitized_body.password);
    form_data.append("grant_type", "password");


    const request = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form_data.toString(),
      });

    const result = await request.json();
    const response = handleApiResponse<typeof result>(request.status, result)
    
    if (!response.success){
      return {success: false, error: response.error}
  }

    return {success: true, access_token: response.access_token};
}