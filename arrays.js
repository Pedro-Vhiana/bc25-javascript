/**
 * Arrays ou Vetores é um tipo especial que te permite armazenar diversos valores
 * em apenas um local
 */

// criando um Array
/* let arr = new Array()
let arr2 = new Array(5) */
/**
 * Cada valor de um array é separado por vírgula
 * 
 * Dentro de um array eu posso ter vários tipos de dados
 */

/**
 * Posições de um array
 * 
 * -> Cada posição é representada por um número
 * -> A primeira posição de um Array é a posição é a 0
 */ 

/**
 * sempre que você tentar recuperar uma posição que não existe, ele te informará o valor undefined
 */
/*let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', 'Olá, mundo', true, false, false]
console.log(arr[6]) // false
arr[6] = 'Outro texto'
console.log(arr[6]) // Outro texto
console.log(arr[8]) // undefined
arr[8] = 'Agora a posição 8 existe dentro de arr' */

const lista = ['João', 'Maria', 'Paulo', 'Pedro', 'Vitória', 'Augusto', 'Fábio', 'Larissa']
console.log(lista)
lista.push('Roberta') // adicionar um valor no final do array
console.log(lista)
lista.unshift('Gustavo') // adicionar um valor no início do array
console.log(lista)
lista.pop() // remove o último valor do array
console.log(lista)
lista.shift() // remove o primeiro valor de um array
console.log(lista)
const novaLista = lista.concat('Júlio')
console.log(novaLista) // cria um novo array adicionando o valor passado como parâmetro no final
console.log(lista)
console.log(lista.join('===')) // João-> Maria-> ...
