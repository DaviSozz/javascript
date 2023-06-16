    //                          Matematica Aplicada - Trabalho Final                                      //
//                                   ******
// Função para descriptografar                                       
function cripto(){
  // Variaveis do HTML                                               
  var inTexto = document.getElementById("inTexto");
  var outCript = document.getElementById("outCript");
  // Variaveis da função                                             
  var texto = (inTexto.value)
  var cripto = "";
  var txt = texto.length
  // Condição IF para focar no campo da variavel caso retorne vazio  
  if( texto == "" ){
    alert("Digite um texto válido e sem acentos...");
    inTexto.focus();
    return;
  }
  // Separando caracteres e convertendo                                
  for ( var i=0; i<txt; i++ ){
      var vlr = texto.charCodeAt(i);
  // Condição IF para recomeçar a contagem caso "i" > Z              
      if (vlr >= 88 && vlr <= 96 || vlr >= 120){
      cripto += String.fromCharCode(vlr - 23);
      } else {
      cripto += String.fromCharCode(vlr + 3);
      }
}
  // Out com a resposta para o HTML                                   
  outCript.textContent = cripto
}                               
// FIM                                                               
//                                   ******                                              

// Função para descriptografar                                       
function decripto(){
  // Variaveis do HTML                                               
    var inTexto = document.getElementById("inTexto");
    var outCript = document.getElementById("outCript"); 
  // Variaveis da função                                             
    var texto = (inTexto.value)
    var cripto = "";
    var txt = texto.length

    if( texto == "" ){
      alert("Digite um texto válido e sem acentos...");
      inTexto.focus();
      return;
    }

    for ( var i=0; i<txt; i++ ){
        var vlr = texto.charCodeAt(i);
  // Condição IF para recomeçar a contagem caso "i" > Z              
  if (vlr >= 97 && vlr <= 99 || vlr >= 65 && vlr <= 67){
    cripto += String.fromCharCode(vlr + 23);
    } else {
    cripto += String.fromCharCode(vlr - 3);
    }
  }
  // Out com a resposta para o HTML                                   
    outCript.textContent = cripto
  }
// FIM                                                               
//                                   ******