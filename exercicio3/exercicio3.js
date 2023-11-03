class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    if (this.tipo == "guerreiro") {
      console.log(`O ${this.tipo} atacou usando espada`);
    } else if (this.tipo == "mago") {
      console.log(`O ${this.tipo} atacou usando magia`);
    } else if (this.tipo == "monge") {
      console.log(`O ${this.tipo} atacou usando artes marciais`);
    } else if (this.tipo == "ninja") {
      console.log(`O ${this.tipo} atacou usando shuriken`);
    }
  }
}

let guerreiro = new Heroi("Yogo", 26, "guerreiro");
let mago = new Heroi("Bruna", 36, "mago");
let monge = new Heroi("Junior", 36, "monge");
let ninja = new Heroi("Yasmin", 12, "ninja");
guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();
