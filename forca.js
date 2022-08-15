let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "GRAMADO",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "BRUSQUE",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "CARROÇA",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria: "OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria: "OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria: "OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria: "OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "BOLO",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "BETERRABA",
        categoria: "ALIMENTOS"
    },
    palavra038 = {
        nome: "JUJUBA",
        categoria: "ALIMENTOS"
    },
    palavra039 = {
        nome: "MACARRAO",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "CHOCOLATE",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria: "ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria: "ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria: "ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria: "ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    }
]


palavra = document.getElementById('#palavraSecreta')
criarPalavraSecreta()

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaSorteada = palavras [indexPalavra].nome;
    palavraSecretaCategoria = palavras [indexPalavra].categoria;



}

palavraTela();

function palavraTela() {
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria
    const palavra = document.getElementById('palavraSecreta');
    palavra.innerHTML = '';

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] === undefined) {
            listaDinamica[i] = '&nbsp'
            palavra.innerHTML = palavra.innerHTML + "<div class = 'letras'>" + listaDinamica[i] + "</div>"

        } else {
            palavra.innerHTML = palavra.innerHTML + "<div class = 'letras'>" + listaDinamica[i] + "</div>"
        }

    }

}

let VerificarLetraEscolhida = letra => {

    document.getElementById('tecla ' + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra('tecla ' + letra);
        comparaListas(letra);
        palavraTela()


    }
};

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = '#05fafa';
    document.getElementById(tecla).style.color = '#6a6969';
}

function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra)
    if (posicao < 0) {
        tentativas--
        imagemForca()
        if (tentativas === 0) {
            abreModal('OPS!', 'Não foi dessa vez... A palavra secreta era <br/>' + palavraSecretaSorteada)
        }


    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] === letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] !== listaDinamica[i]) {
            vitoria = false;
        }
    }
    if (vitoria === true) {
        abreModal('PARABÉNS!', 'Você conseguiu adivinhar a palavra secreta!! <br/>')
        tentativas = 0;
    }

    function imagemForca() {
        switch (tentativas) {
            case 6:
                break;
            case 5:
                document.getElementById('img').style.background = "url('imagem/forca01.png')";
                break;
            case 4:
                document.getElementById('img').style.background = "url('imagem/forca02.png')";
                break;
            case 3:
                document.getElementById('img').style.background = "url('imagem/forca03.png')";
                break;
            case 2:
                document.getElementById('img').style.background = "url('imagem/forca04.png')";
                break;
            case 1:
                document.getElementById('img').style.background = "url('imagem/forca05.png')";
                break;
            case 0:
                document.getElementById('img').style.background = "url('imagem/forca06.png')";
                break;
            default:
                document.getElementById('img').style.background = "url('imagem/forca.png')";
                break;
        }
    }

    function abreModal(titulo, mensagem) {

        let modalTitle = document.getElementById('titulo');
        modalTitle.innerText = titulo;

        let modalMessage = document.getElementById('texto');
        modalMessage.innerHTML = mensagem

        $('#myModal').modal({
            show: true
        });
    }

    let btnRestart = document.querySelector('#btnRestart')

    btnRestart.addEventListener('click', function () {
        location.reload();
    })
}

window.addEventListener('keydown', (e) => {


    if (e.key.toLowerCase() === 'a' ||
        e.key.toLowerCase() === 'b' ||
        e.key.toLowerCase() === 'c' ||
        e.key.toLowerCase() === 'd' ||
        e.key.toLowerCase() === 'e' ||
        e.key.toLowerCase() === 'f' ||
        e.key.toLowerCase() === 'g' ||
        e.key.toLowerCase() === 'h' ||
        e.key.toLowerCase() === 'i' ||
        e.key.toLowerCase() === 'j' ||
        e.key.toLowerCase() === 'k' ||
        e.key.toLowerCase() === 'l' ||
        e.key.toLowerCase() === 'm' ||
        e.key.toLowerCase() === 'n' ||
        e.key.toLowerCase() === 'o' ||
        e.key.toLowerCase() === 'p' ||
        e.key.toLowerCase() === 'q' ||
        e.key.toLowerCase() === 'r' ||
        e.key.toLowerCase() === 's' ||
        e.key.toLowerCase() === 't' ||
        e.key.toLowerCase() === 'u' ||
        e.key.toLowerCase() === 'v' ||
        e.key.toLowerCase() === 'w' ||
        e.key.toLowerCase() === 'x' ||
        e.key.toLowerCase() === 'y' ||
        e.key.toLowerCase() === 'z') {

        VerificarLetraEscolhida(e.key.toUpperCase());

    }


})




























