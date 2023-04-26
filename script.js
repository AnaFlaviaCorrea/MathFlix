let result = document.querySelector('.result');
let pesquisa = document.querySelector('.pesquisa');
let formulario = document.querySelector('.formulario');
let rigth = document.querySelector('.right');
let left = document.querySelector('.left');
let img = document.querySelectorAll('img');
let contador = 0;
let botao = document.querySelector('.btn');
let hamburguer = document.querySelector('.hamburguer');
let menu = document.querySelector('.menu-item');
// let container = document.querySelector('.container');

formulario.addEventListener('submit', (Event) => {
    Event.preventDefault();
    getApi(pesquisa.value);

})
// async function getApi(movie) {
//   let resultHTML = '';
//   for (let page = 1; page <= 10; page++) {
//     let response = await fetch(`https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=dedacaa3`);
//     let data = await response.json();
//     for (let i = 0; i < data.Search.length; i++) {
//       resultHTML += `
//         <div class="card">
//           <h3>${data.Search[i].Title}</h3>
//           <p>${data.Search[i].Year}</p>
//           <img src="${data.Search[i].Poster}">
//         </div>
//       `;
//     }
//   }
//   document.querySelector('.grid').innerHTML = resultHTML;
// }


var paginaAtual = 1;
var totalPaginas ;
var resultHTML = '';

async function getApi(movie, page) {
  let response = await fetch(`https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=dedacaa3`);
  if(response){
   let data = await response.json();
  //  console.log(data.totalResults);
  totalPaginas = Math.ceil(data.totalResults / 10); // calcula o número total de páginas
  resultHTML = '';
  for (let i = 0; i < data.Search.length; i++) {
    resultHTML += `
      <div class="card">
        <h4>Título: ${data.Search[i].Title}</h4>
        <p>Ano: ${data.Search[i].Year}</p>
        <img src=" ${data.Search[i].Poster}" class="api-img">
      </div>
    `;
  }
  document.querySelector('.cards').innerHTML = resultHTML;
  document.querySelector('.atual').textContent = `Página ${paginaAtual} de ${totalPaginas}`;
}
}



document.querySelector('.anterior').addEventListener('click', () => {
  if (paginaAtual > 1) {
    paginaAtual--;
    getApi(document.querySelector('.pesquisa').value, paginaAtual);
  }
});

document.querySelector('.proxima').addEventListener('click', () => {
  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    getApi(document.querySelector('.pesquisa').value, paginaAtual);
  }
});

document.querySelector('.formulario').addEventListener('submit', (event) => {
  event.preventDefault();
  paginaAtual = 1;
  getApi(document.querySelector('.pesquisa').value, paginaAtual);
});


  

// const slider = document.querySelector('.slider');
// // const container = document.querySelectorAll('.container');
// const prevBtn = document.querySelector('.left');
// const nextBtn = document.querySelector('.right');
// let counter = 0;
// const size = container[0].clientWidth;

// function slide() {
//   console.log("slide", container);
//   slider.style.transform = `translateX(${-size * counter}px)`;
// }

// // slide();

// nextBtn.addEventListener('click', () => {
//   if (counter >= container.length - 1) return;
//   counter++;
//   slide();
// });

// prevBtn.addEventListener('click', () => {
//   if (counter <= 0) return;
//   counter--;
//   slide();
// });

// const size = container[0].clientWidth;

// rigth.addEventListener('click', () => {
//     botao.classList.remove('inicio')
//     contador++;
//     console.log(container);
//     container.style.transform = `translateX(${-600 * contador}px)`;
//     if (contador > img.length - 1) {

//         container.style.transform = `translateX(${0}px)`;
//         contador = 0;
//         botao.classList.add('inicio')

//     }

// })

// left.addEventListener('click', () => {
       

   
//     if (contador >= 0) {
//         contador--;
//         container.style.transform = `translateX(${-600 * contador}px)`;

//     }
//     if(contador ===0){
//         botao.classList.add('inicio')
//     }
   
// })
// const slider = document.querySelector('.slider');
// const container = document.querySelectorAll('.container');
// const prevBtn = document.querySelector('.left');
// const nextBtn = document.querySelector('.right');

// let counter = 0;
// const size = container[0].clientWidth;

// slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// nextBtn.addEventListener('click', () => {
//   if (counter >= container.length - 1) return;
//   slider.style.transition = 'transform 0.4s ease-in-out';
//   counter++;
//   slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', () => {
//   if (counter <= 0) return;
//   slider.style.transition = 'transform 0.4s ease-in-out';
//   counter--;
//   slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// slider.addEventListener('transitionend', () => {
//   if (container[counter].classList.contains('first-clone')) {
//     slider.style.transition = 'none';
//     counter = container.length - 2;
//     slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
//   if (container[counter].classList.contains('last-clone')) {
//     slider.style.transition = 'none';
//     counter = container.length - counter;
//     slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
// });

