export default class Cliente {
  private _id: any;
  private _nome: string;
  private _idade: number;

  constructor(nome: string, idade: number, id: any = null) {
    this._nome = nome;
    this._idade = idade;
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get nome() {
    return this._nome;
  }

  get idade(){
    return this._idade
  }

  static vazio() {
    return new Cliente('', 0)
  }

}