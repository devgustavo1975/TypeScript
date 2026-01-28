class Estudante{
  public nome: string = '';
  protected idade: number = 18;
  constructor(nome: string){
    this.nome = nome;
  }
  alterarIdade(){
    return this.idade += 10;
  }
}
class Professor extends Estudante{
  public nome: string = '';
  super(idade: number){}
  alterarIdadeAluno(){
    this.idade = 35;
  }
}
let exemploEstudante = new Estudante('Gustavo Faroni')
console.log(exemploEstudante.alterarIdade())
 