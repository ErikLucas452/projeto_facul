import { BaseModel } from ".";

export interface Servico extends BaseModel {
  nome: string;
  valor: number;
}
