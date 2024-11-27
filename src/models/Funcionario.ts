import { BaseModel } from ".";

export interface Funcionario extends BaseModel {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  salario: number;
}
