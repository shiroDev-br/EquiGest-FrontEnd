import {IRegisterRequestBody, IRegisterSuccessResponse, IRegisterErrorResponse} from "../interfaces/interfaces";
import {registerSchema} from "../schemas/registerSchema";


type RegisterResult =
    | { success: true; access_token: string }
    | { success: false; error: string };

export async function register_user(
    unsanitized_body: IRegisterRequestBody
): Promise<RegisterResult> {
    const NEXT_PUBLIC_API_STAGING_URL = process.env.NEXT_PUBLIC_API_STAGING_URL;
    if (!NEXT_PUBLIC_API_STAGING_URL) {
      throw new Error("API URL não definida");
    }
    const parsed = registerSchema.safeParse(unsanitized_body);

    if (!parsed.success) {
        const errors = parsed.error.issues
        .map(i => `${String(i.path[0])}: ${i.message}`)
        .join("\n");
        return {success: false, error: errors}
    }

    const sanitizedBody = parsed.data; 
  
    const response = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitizedBody),
    });
  
    if (response.status === 201) {
      const result: IRegisterSuccessResponse = await response.json();
      return {success: true, access_token: result.access_token}
    } else {
      const result: IRegisterErrorResponse = await response.json();
      return {success: false, error: result.detail}
    }
  }