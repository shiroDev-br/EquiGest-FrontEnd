export interface IRegisterRequestBody {
    username: string;
    password: string;
    email: string;
    cellphone: string;
    cpf_cnpj: string;
  }
  
export interface IRegisterSuccessResponse {
    access_token: string;
    token_type: string;
  }
  
export interface IRegisterErrorResponse {
    detail: string;
  }