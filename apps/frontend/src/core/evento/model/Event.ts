import Guest from "./Guest";

export default interface Event {
  id: string;
  alias: string;
  senha: string;
  nome: string;
  data: Date;
  local: string;
  descricao: string;
  imagem: string;
  imagemBackground: string;
  publicoEsperado: number;
  convidados: Guest[];
}
