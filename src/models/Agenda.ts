import { BaseModel } from ".";

export interface Agenda extends BaseModel {
  descricao: string;
  servico: string;
  data: string;
  cliente: string;
  usuario: string;
  funcionario: string;
  status: string;
}
