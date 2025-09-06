let candidatos = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://cdn.agenciamural.org.br/2023/07/11213707/AndressaAlves-SamRoblesCBF.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzvT1w1GsPKjkMwdTWxZFbjRcsljs0cpJB5w&s",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/_upload/noticia/2022/01/07/mariza-e-o-segundo-reforco-anunciado-pelo-gy.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTb45soFQKI8Xi1u0fVoqjpfWxxClfDcXyTg&s",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZWRQbFplY7pPn2VHv4anqp71FS9as9u3Ww&s",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
]

const listarCandidatos =  document.getElementById("listar-jogadores")// chamando a div no HTML

function mostrarCandidatos(){
 listarCandidatos.innerHTML = "" //limpar o HTML
}

function salvarLocalStorage() {
    // localStorage só guarda texto  "JSON.stringify"  transforma o array em string
    localStorage.setItem("candidatos", JSON.stringify(candidatos))
}

function carregarLocalStorage() {  // Função para CARREGAR do localStorage 
    // Pegamos o que está salvo no  candidatos
    const dados = localStorage.getItem("candidatos")
    // Se existir alguma coisa salva...
    if (dados) {
      // ...transformamos de volta para array/objeto com JSON.parse
      candidatos = JSON.parse(dados)
    }
}

carregarLocalStorage()
renderizarCandidatos()


// Primeiro, pega todos os inputs do HTML pelo ID
const nomeInput = document.getElementById("nome")
const posicaoInput = document.getElementById("posicao")
const clubeInput = document.getElementById("clube")
const golsInput = document.getElementById("gols")
const assistenciasInput = document.getElementById("assistencias")
const jogosInput = document.getElementById("jogos")
const fotoInput = document.getElementById("foto") 

/*candidatos.forEach(function(candidato){//para cada candidato dentro do candidatos faça...
  listarCandidatos.innerHTML += ` 
  <div class="card">
   <img src="${candidato.foto}" alt="${candidato.nome}">
     <div class="info">
        <h2>${candidato.nome}</h2>
         <p>Posição: ${candidato.posicao}</p>
         <p>Clube: ${candidato.clube}</p>
         <p>Gols: ${candidato.gols}</p>
         <p>Assistências: ${candidato.assistencias}</p>
         <p>Jogos: ${candidato.jogos}</p>
         <p>Favorita: ${candidato.favorita}</p>
     </div>
  </div>
        
  `// += para ir adicionando e não substituir 
})*/


// Pega o botão Cadastrar
const cadastrarBtn = document.getElementById("cadastros");

function renderizarCandidatos() {// Função que desenha os cards na tela
    listarCandidatos.innerHTML = "" // Limpa o HTML antes de renderizar

    candidatos.forEach(function(candidato,indice){ // percorre todos os candidatos
        listarCandidatos.innerHTML += `
        <div class="card">
            <img src="${candidato.foto}" alt="${candidato.nome}">
            <div class="info">
                <h2>${candidato.nome}</h2>
                <p>Posição: ${candidato.posicao}</p>
                <p>Clube: ${candidato.clube}</p>
                <p>Gols: ${candidato.gols}</p>
                <p>Assistências: ${candidato.assistencias}</p>
                <p>Jogos: ${candidato.jogos}</p>
                <p>Favorita: ${candidato.favorita}</p>
                <button onclick="favoritarJogadora(${indice})">
                    ${candidato.favorita ? "⭐ Favorita" : "☆ Favoritar"}
                </button>
            </div>
        </div>
        `
    })  
}

//  Botão Cadastrar 
cadastrarBtn.addEventListener("click", function() {
    //  Cria um novo objeto com os dados do input
    const novoCandidato = {
        nome: nomeInput.value.trim(),           // pega o valor digitado no input "nome", trim() remove espaços no início e no fim
        posicao: posicaoInput.value.trim(),    
        clube: clubeInput.value.trim(),        
        gols: Number(golsInput.value),           // converte para número
        assistencias: Number(assistenciasInput.value), // converte para número
        jogos: Number(jogosInput.value),        
        foto: fotoInput.value.trim(),           // pega o link da foto do input "foto"
        favorita: false                          // sempre começa como não favorita
    }

    // Validação dos campos
    if (
        novoCandidato.nome === "" || !isNaN(novoCandidato.nome) ||          // nome deve ser string,  O isNaN() verifica se o valor **não é um número
        novoCandidato.posicao === "" || !isNaN(novoCandidato.posicao) ||    // posição deve ser string
        novoCandidato.clube === "" || !isNaN(novoCandidato.clube) ||        // clube deve ser string
        novoCandidato.foto === "" ||                                         // foto obrigatória
        isNaN(novoCandidato.gols) ||                                        // gols deve ser número
        isNaN(novoCandidato.assistencias) ||                                 // assistências deve ser número
       isNaN(novoCandidato.jogos)        // jogos deve ser número
    ) {
      alert("Por favor, insira dados válidos.")
    } else {
      candidatos.push(novoCandidato) // Adiciona o novo jogador ao array
      alert("Jogadora cadastrada com sucesso!")
    }

    salvarLocalStorage()
    
    //  Atualiza a lista de jogadores na tela
    renderizarCandidatos()

    //  Limpa os inputs para cadastrar outro jogador facilmente
    nomeInput.value = ""
    posicaoInput.value = ""
    clubeInput.value = ""
    golsInput.value = ""
    assistenciasInput.value = ""
    jogosInput.value = ""
    fotoInput.value = ""
})

let indiceEditando = null; // variavel q armazena o índice do jogador que será editado

const editarBtn = document.getElementById("EditarPost");

// Função para editar candidato
function editarCandidato() {
    // Se já existe um índice de edição, significa que ta salvando
    if (indiceEditando !== null) {
        // Atualiza os dados do jogador com os valores dos inputs
        candidatos[indiceEditando] = {
            nome: nomeInput.value.trim(),           // pega o valor digitado no input "nome"
            posicao: posicaoInput.value.trim(),    
            clube: clubeInput.value.trim(),        
            gols: Number(golsInput.value),           // converte para número
            assistencias: Number(assistenciasInput.value), // converte para número
            jogos: Number(jogosInput.value),        
            foto: fotoInput.value.trim(),           // pega o link da foto do input "foto"
            favorita: candidatos[indiceEditando].favorita // mantém se era favorita
        };

        salvarLocalStorage(); // salva no localStorage
        renderizarCandidatos(); // atualiza a lista na tela

        // Limpa inputs para cadastrar ou editar outro jogador
        nomeInput.value = "";
        posicaoInput.value = "";
        clubeInput.value = "";
        golsInput.value = "";
        assistenciasInput.value = "";
        jogosInput.value = "";
        fotoInput.value = "";

        indiceEditando = null; // reseta variável
        alert("Jogadora editada com sucesso!"); // feedback de edição
        return; // sai da função
    }

    // Se não está editando, mostra a lista de jogadores disponíveis
    let mensagem = "Jogadores disponíveis:\n";
    for (let i = 0; i < candidatos.length; i++) {
        mensagem += (i + 1) + " - " + candidatos[i].nome + "\n";
    }

    // Pede para o usuário digitar o número do jogador
    const numero = prompt("Digite o número do jogador que quer editar:\n" + mensagem);

    // Converte para índice do array
    const indice = Number(numero) - 1;

    // Verifica se o número é válido
    if (indice < 0 || indice >= candidatos.length || isNaN(indice)) {
        alert("Número inválido!"); // alerta caso o usuário digite número inválido
        return;
    }

    // Preenche os campos do formulário com os dados atuais
    nomeInput.value = candidatos[indice].nome;
    posicaoInput.value = candidatos[indice].posicao;
    clubeInput.value = candidatos[indice].clube;
    golsInput.value = candidatos[indice].gols;
    assistenciasInput.value = candidatos[indice].assistencias;
    jogosInput.value = candidatos[indice].jogos;
    fotoInput.value = candidatos[indice].foto;

    indiceEditando = indice; // guarda o índice para usar no próximo clique
    alert("Agora edite os campos acima e clique novamente em 'Editar' para salvar."); // instrução para o usuário
}

editarBtn.addEventListener("click", editarCandidato); // evento do botão

const excluirBtn = document.getElementById("ExcluirPost");
excluirBtn.addEventListener("click", function() {
  let mensagem = "Jogadores disponíveis:\n";
  for (let i = 0; i < candidatos.length; i++) {
        mensagem += (i + 1) + " - " + candidatos[i].nome + "\n";
  }
    // Pede para o usuário digitar o número do jogador
    let numero = parseInt( prompt("Digite o número do jogador que quer excluir:\n" + mensagem));
    numero = numero -1
    console.log( candidatos.splice(numero,1))
  alert("Jogadora excluída com sucesso!")
  renderizarCandidatos()
  salvarLocalStorage()
 
});

function favoritarJogadora(indice) {
    // Alterna o estado "favorita" da jogadora selecionada: se era false, vira true; se era true, vira false
    candidatos[indice].favorita = !candidatos[indice].favorita; 
    salvarLocalStorage(); // Salva a alteração no LocalStorage
    renderizarCandidatos(); // Atualiza a lista de jogadoras na tela para refletir a mudança
}

