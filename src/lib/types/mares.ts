export type RegisterMareType = 
    | { success: true; response: object }
    | { success: false; error: string };