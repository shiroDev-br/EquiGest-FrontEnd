export interface IRegisterRequestBody {
    username: string;
    password: string;
    email: string;
    cellphone: string;
    cpf_cnpj: string;
  }
  
export interface IAuthSuccessResponse {
    access_token: string;
    token_type: string;
  }
  
export interface IRequestErrorResponse {
    detail: string;
  }

export interface ILoginRequestBody {
    username: string;
    password: string;
}