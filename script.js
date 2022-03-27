let carta1 = {
    nome: "Seiya de Pegasus",
    imagem: "http://pm1.narvii.com/6538/fd696e322af509b39a305a38792501e8969c2c11_00.jpg",
    atributos: {
        ataque: 6,
        defesa: 5,
    }
};

let carta2 = {
    nome: "Shun de Andromeda",
    imagem: "http://pm1.narvii.com/6400/1c55c6cbf4831e75b9f678e742a5212c6face3f6_00.jpg",
    atributos: {
        ataque: 5,
        defesa: 7,
    }
};

let carta3 = {
    nome: "Shiryu de Dragao",
    imagem: "https://i.pinimg.com/236x/96/2f/5a/962f5af366388d622c5afb7b63841156.jpg",
    atributos: {
        ataque: 7,
        defesa: 4,
    }
};


//         indice 0     1        2
let cartas = [carta1, carta2, carta3];
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
    let cartaMaquinaSorteada = parseInt(Math.random() * 3);
    cartaMaquina = cartas[cartaMaquinaSorteada];

    let cartaJogadorSorteada = parseInt(Math.random() * 3);

    while (cartaMaquinaSorteada == cartaJogadorSorteada) {
        cartaJogadorSorteada = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[cartaJogadorSorteada];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    // exibirOpcoes()
    exibirCartaJogador()
}

// function exibirOpcoes() {
//     let opcoes = document.getElementById("opcoes");
//     let opcoesTexto = "";

//     for (let atributo in cartaJogador.atributos) {
//         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
//     }
//     opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[1].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let divResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Você venceu!</p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = "<p class='resultado-final'>Perdeu!</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou!</p>"
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = "";

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";  
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }