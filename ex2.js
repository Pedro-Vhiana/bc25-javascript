// criar um novo array
const nums = []

// criar um loop que execute 6 vezes
for (let i = 1; i <= 6; i++) {
  const n = parseInt(prompt(`Digite o ${i}° número`))
  nums.push(n)
}

// separar os pares dos ímpares
const pares = []
const impares = []

// percorrer o array com os números informados
// criar um variável que guardará os valores de cada posição do array
// o array que iremos percorrer

for (let numero of nums) {
  /**
   * Separar os valores pares dos ímpares
   * colocando cada valor no seu respectivo array
   */

  if (numero % 2 == 0) {
    pares.push(numero)
  } else {
    impares.push(numero)
  }
}

alert(`Nós temos ${pares.length} valores pares: ${pares.join(', ')}`)
alert(`Nós temos ${impares.length} valores ímpares: ${impares.join(`, `)}`)
