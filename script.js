const frutas = ["laranja", "limão", "uva"]


// EXERCÍCIO 1: Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens li que estão na página. Repare que um dos itens li ficará vago. Vamos preenchê-lo no exercício 3.

const adicionaFruta1 = document.getElementById("fruta-1")
// 1. cria uma const que busca o elemento pelo Id

adicionaFruta1.innerHTML = frutas[0]
// 2. chama a const + a propriedade que vai acrescentar o texto = indica qual o texto através de const inicial + a posição do array

const adicionaFruta2 = document.getElementById("fruta-2")
adicionaFruta2.innerHTML = frutas[1]

const adicionaFruta3 = document.getElementById("fruta-3")
adicionaFruta3.innerHTML = frutas[2]



// EXERCÍCIO 2: Crie um label e um input na página HTML e, depois, preencha o campo de texto com o nome de mais uma fruta. Agora, escreva o código necessário para que seja possível imprimir no console o valor escrito no input.

// function adicionarFrutaDoInput() {
//     const nomeDoInput = document.getElementById("nome")
//     console.log(nomeDoInput.value)
// }

// essa função ficou apagada porque no exercício 3 é acrescentado mais coisas à ela

// EXERCÍCIO 3: Agora vamos brincar um pouco com a fruta inserida no input! Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1.
// Crie um botão e utilize um evento de onclick no botão criado, para que, ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.

const adicionaFruta4 = document.getElementById("fruta-4")

const adicionarFrutaDoInput = () => {
    const nomeDoInput = document.getElementById("nome")
    console.log(nomeDoInput.value);
    adicionaFruta4.innerHTML += nomeDoInput.value
}







