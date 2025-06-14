export interface IRegisterRequestBody {
    username: string;
    password: string;
    email: string;
    cellphone: string;
    cpf_cnpj: string;
}
  
export interface ILoginRequestBody {
    username: string;
    password: string;
}

export interface IRegisterMareBody {
   mare_name: string;
   stallion_name: string;
   donor_name?: string;
   pregnancy_date: Date | null;
}

export interface IAuthSuccessResponse {
    access_token: string;
    token_type: string;
}
  
export interface IRequestErrorResponse {
    detail: string;
}
