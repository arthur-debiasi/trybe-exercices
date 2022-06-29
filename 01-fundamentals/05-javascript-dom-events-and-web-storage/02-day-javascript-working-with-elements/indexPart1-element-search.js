console.log('olá, arthur!');

/* Parte I - Buscando elementos */

/* Acesse o elemento elementoOndeVoceEsta. */

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

/*Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.*/

let pai = elementoOndeVoceEsta.parentElement;
pai.style.backgroundColor = 'red';

/*Acesse o primeiroFilhoDoFilho e adicione um texto a ele. 
Você se lembra dos vídeos da aula anterior, como fazer isso?*/

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Texto do primeiro filho do filho.'

/*Acesse o primeiroFilho a partir de pai.*/

let primeiroFilho = pai.firstElementChild;

/*Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.*/

let primeiroFilhoIrmao = elementoOndeVoceEsta.previousElementSibling;

/*Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.*/

let atencaoText = elementoOndeVoceEsta.nextSibling;
/*Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.*/

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

/*Agora acesse o terceiroFilho a partir de pai.*/

let terceiroFilhoDePai = pai.lastElementChild.previousElementSibling;
