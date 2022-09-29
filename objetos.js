/**
 * Objeto é uma estrutura que permite organizar dados na forma de
 * chave-valor
 */

let end = {
  rua: 'Rua Principal',
  numero: 456,
  estado: 'BH',
  complemento: 'Sem complemento',
  cep: '123000-000'
}

let pessoa = {
  nome: 'Joana',
  idade: 23,
  cpf: '123.123.123-12',
  altura: 156,
  // destructuring
  endereco: { ...end },
  solteiro: true,
  habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
  cumprimentar() {
    /**
     * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, eu utilizo
     * a palavra chave 'this'
     */
    console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
  }
}

/* console.log(end)
console.log(pessoa.endereco.estado) */
/* pessoa.cumprimentar()
pessoa.nome = 'Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidades.push('Angular')
console.log(pessoa.habilidades)
console.log(pessoa['cpf']) */
console.log(end.rua)
console.log(pessoa.endereco.rua)

pessoa.endereco.rua = 'Rua Secundária'

console.log(pessoa.endereco.rua)
console.log(end.rua)

/**
 * Crie um algortimo que recebe informações de 15 produtos. 
 * Cada produto possui Nome, Marca, uma foto (link de uma imagem da internet), preço unitário e 
 * a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML
 * essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).
 */

let produtos = [
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
  {
    nome: '',
    marca: '',
    foto: '',
    preco: 0,
    estoque: 0
  },
]
