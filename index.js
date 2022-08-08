let vitoriaProg = 0;
let vitoriaJog = 0;

let emojiPrograma = '';
let emojiJogador = '';
let jogarDNovo = true;

function Opcao_jogador() {
    let opcaoJogador = 0;
    while (
        opcaoJogador !== 1 &&
        opcaoJogador !== 2 &&
        opcaoJogador !== 3
    ) {
        opcaoJogador = parseInt(
            prompt(`
        Escolha um número 
        entre as opções:
        
        [1] Pedra ✊
        [2] Papel ✋
        [3] Tesoura ✌️
        `)
        );

        opcaoJogador !== 1 && opcaoJogador !== 2 && opcaoJogador !== 3
            ? alert('Digite novamente')
            : '';
    }
    return opcaoJogador;
}

function Partida(opcaoJ) {
    let opcaoPrograma = parseInt(Math.random() * 3) + 1;

    opcaoPrograma == 1 ? (emojiPrograma = '✊') : '';
    opcaoPrograma == 2 ? (emojiPrograma = '✋') : '';
    opcaoPrograma == 3 ? (emojiPrograma = '✌️') : '';

    switch (opcaoJ) {
        case 1:
            emojiJogador = '✊';
            opcaoPrograma == 2 ? vitoriaProg++ : '';
            opcaoPrograma == 3 ? vitoriaJog++ : '';
            break;

        case 2:
            emojiJogador = '✋';
            opcaoPrograma == 1 ? vitoriaJog++ : '';
            opcaoPrograma == 3 ? vitoriaProg++ : '';
            break;

        case 3:
            emojiJogador = '✌️';
            opcaoPrograma == 1 ? vitoriaProg++ : '';
            opcaoPrograma == 2 ? vitoriaJog++ : '';
            break;

        default:
            break;
    }
}

function Placar() {
    alert(`
    Placar

    Jogador ${emojiJogador} ${vitoriaJog} X ${vitoriaProg} ${emojiPrograma} Programa
`);
}

do {
    while (vitoriaJog < 2 && vitoriaProg < 2) {
        Partida(Opcao_jogador());
        Placar();
    }
    vitoriaJog == 2
        ? alert('Vitoria do Jogador!!!')
        : vitoriaProg == 2
        ? alert('Vitoria do Programa!!!')
        : '';
    vitoriaJog = 0;
    vitoriaProg = 0;
    jogarDNovo = confirm(`Deseja jogar novamente?`);
} while (jogarDNovo == true);
