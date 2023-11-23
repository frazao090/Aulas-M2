// function imprimeMensagem(mensagem, callback) {
//     console.log(mensagem);
//     callback();
//   }

//   imprimeMensagem("Olá, mundo!", function() {
//     console.log("Callback executado!");
//   });

function somar(num1, num2, callback) {
    let resultado = num1 + num2;
    callback(resultado)
  }


  somar(2,3, imprimirResultado);

  function imprimirResultado(resultado) {
    console.log("O resultado da soma é: " + resultado);
  }