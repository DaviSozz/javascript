alert ("Bem vindo ao trabalho de Criptografia...");
alert ("O que você deseja criptografar/descriptografar hoje?");

function cripto(){
  var inTexto = document.getElementById("inTexto");
  var outCript = document.getElementById("outCript");
 
  var texto = (inTexto.value)
  var cripto = "";
  var txt = texto.length

  if ( inTexto = " " || isNaN(inTexto)){
    alert("Digite o texto a ser criptografado...");
    inTexto.focus();
  }

  for ( var i=0; i<txt; i++ ){
      var vlr = texto.charCodeAt(i);

      if (vlr >= 88 && vlr <= 96 || vlr >= 120){
      cripto += String.fromCharCode(texto.charCodeAt(i) - 23);
      } else {
      cripto += String.fromCharCode(texto.charCodeAt(i) + 3);
      }
}
  outCript.textContent = cripto
}
var btCript = document.getElementById("btCript");
btCript.addEventListener("click", cripto);

function decripto(){
    var inTexto = document.getElementById("inTexto");
    var outCript = document.getElementById("outCript");
   
    var texto = (inTexto.value)
    var cripto = "";
    var txt = texto.length

    if ( inTexto = " " || isNaN(inTexto)){
      alert("Digite o texto a ser criptografado...");
      inTexto.focus();
    }
  
    for ( var i=0; i<txt; i++ ){
        var vlr = texto.charCodeAt(i);
  
        if (vlr >= 97 && vlr <= 99 || vlr >= 65 && vlr <= 67){
        cripto += String.fromCharCode(texto.charCodeAt(i) + 23);
        } else {
        cripto += String.fromCharCode(texto.charCodeAt(i) - 3);
        }
  }
    outCript.textContent = cripto
  }
var btDecript = document.getElementById("btDecript");
btDecript.addEventListener("click", decripto);