let AmigosEscolhidos = [];

// Função para adicionar amigos à lista
function AdicionarAmigos() {
    let amigoAdicionado = document.querySelector('#amigo').value;
    let amigoMaiusculo = amigoAdicionado.toUpperCase();

    if (amigoMaiusculo === '') {
        alert("Por favor, insira um nome.");
    } else {
        AmigosEscolhidos.push(amigoMaiusculo);
        LimparNome();
        atualizarAmigosNaTela();
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarAmigosNaTela() {
    let listaAmigo = document.querySelector('#listaAmigos');
    listaAmigo.innerHTML = '';

    for (let amigo of AmigosEscolhidos) {
        let amigoLi = document.createElement('li');
        amigoLi.textContent = amigo;
        listaAmigo.appendChild(amigoLi);
    }
}

// Função para gerar um número aleatório com base na quantidade de amigos
function gerarNumeroAleatorio() {
    let max = AmigosEscolhidos.length;
    return Math.floor(Math.random() * max);
}

// Função para exibir o nome sorteado de um amigo
function monstrarNomeSortado() {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';  // Limpa o resultado anterior

    if (AmigosEscolhidos.length === 0) {
        alert("Por favor, insira um nome.");
    } else {
        let indiceSorteado = gerarNumeroAleatorio();
        let amigoSorteado = AmigosEscolhidos[indiceSorteado];
        let resultadoNomeEscolhidoLi = document.createElement('li');
        resultadoNomeEscolhidoLi.textContent = `Amigo sorteado: ${amigoSorteado}`;
        resultado.appendChild(resultadoNomeEscolhidoLi);
    }
}

// Função para limpar o campo de entrada
function LimparNome() {
    let amigoAdicionado = document.querySelector('#amigo');
    amigoAdicionado.value = '';

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 
}

// Função para mostrar o nome sortado na tela
function sortearAmigo(){
    // Limpando a tela para mostrar apenas o nome sorteado
    let listaAmigo = document.querySelector('#listaAmigos');
    listaAmigo.innerHTML = '';

    monstrarNomeSortado()
    // Limpando a lista de nomes escolhidos
    AmigosEscolhidos = []
}