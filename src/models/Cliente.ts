import { BaseModel } from ".";

export interface Cliente extends BaseModel {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
}
