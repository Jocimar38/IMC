
import { Modal } from './modal.js'
import { alertError } from './alerterror.js'
import { calculateIMC, notNumber } from './utils.js'


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function (event) {
  event.preventDefault()


  const weight = inputWeight.value
  const height = inputHeight.value


  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if ( weightOrHeightIsNotANumber) {
    alertError.open()
    return

  }

  alertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

}

  function displayResultMessage(result){
    
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message

  Modal.open()


   }

   inputWeight.oninput = function(){
      alertError.close()
   }


   inputHeight.oninput = function(){
    alertError.close()
 }



/*
const wrapper = document.querySelector('.modal-wrapper')
const message = document.querySelector('.modal .title span')
const buttonClose = document.querySelector('.close')
/*
/*TERCEIRA FORMA E OPÇÃO MELHORANDO O CODIGO, TORNANDO MAIS ENXUTO E APLICANDO OU MELHOR CRIANDO UM OBJETO MODAL*/



//INSERINDO EVENTO NO FORM ONSUBMIT = Ao clicar submeta esse formulario(faça o que a função pede)

// criando consTantes weight e height e atribuindo o valor do input capturado na digitação do usuario para o calculo do IMC

//Calculando IMC



//######################################################

/*PRIMEIRA FORMA DE CODAR

//Abrindo o modal para apresentar o resultado usando a classe open, ja inseriada no style.css como hidden e visible

document.querySelector('.modal-wrapper').classList.add('open')

//alterando texto e inserido resultado atraves de interpolação ${}

document.querySelector('.modal .title span').innerText = `Seu IMC é ${result}`
*/


//##########################################################

/*SEGUNDA FORMA E OPÇÃO MELHORANDO O CODIGO, TORNANDO MAIS ENXUTO

//pegando a variávesi criadas ja atribuidas pelos elementos DOM e adicionando a eles o eventos(o que fazer)

wrapper.classList.add('open') //Esse abre o modal
message.innerText = `Seu IMC é ${result}`//insere(alterar o valor) ao modal
//Adicionado a constante buttonClose a função para fechamento do modal
buttonClose.onclick = function(){
  document.querySelector('.modal-wrapper').classList.remove('open')

*/
