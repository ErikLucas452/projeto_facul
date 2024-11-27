import { BaseModel } from ".";

export interface Usuario extends BaseModel {
  username: string;
  senha: string;
  dfCadastro: string;
  tipoAceso: string;
}
