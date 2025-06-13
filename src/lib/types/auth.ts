export type AuthType = 
    | { success: true; access_token: string }
    | { success: false; error: string };