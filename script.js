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


