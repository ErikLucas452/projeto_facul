import { BaseModel } from ".";

export interface Endereco extends BaseModel {
  logradouro: string;
  uf: string;
  estado: string;
  cep: string;
  cidade: string;
  numero: string;
  complemento?: string;
}
