const trabaios = [
  { 
    titulo: 'bomdia',
    autor: 'eu', 
    conteudo: '<p>texxto</p>' 
  }
];

const espaçoDoTrabalho = document.querySelector('.trabalho');

if (espaçoDoTrabalho) {
  espaçoDoTrabalho.innerHTML = trabaios[0].conteudo;
}

// trabalhos em arrays de objetos

// Cartões e páginas gerados por funções, usando laços ou métodos de array

//barra de pesquisa usando filtros e busca com filter

// Menu responsivo (abrir e fechar) e outra interação à escolha (tema, galeria etc.)