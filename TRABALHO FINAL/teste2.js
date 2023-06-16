function j2cript(){
   var inText = document.getElementById("inText");
   var inNmro = document.getElementById("inNmro");
   var outCript2 = document.getElementById("outCript2");

   var text = (inText.value);
   var nmro = Number(inNmro.value);
   var cripto2 = "";
   var txt2 = text.length

   if ( nmro > 10 || nmro < 1){
       alert("Digite um numero entre 1 e 10");
       outCript2.textContent = "";
   }


   for ( var x=0; x<txt2; x++ ){
     var vlr2 = text.charCodeAt(x);

    if (vlr2 >=65 && vlr2 <=79 || vlr2 >=97 && vlr2 <= 111 ){
        cripto2 += String.fromCharCode( vlr2 + nmro );
    } else {
        cripto2 += String.fromCharCode( vlr2 - nmro );
    }
     outCript2.textContent = cripto2
   }
}


function j2decript(){
    var inText = document.getElementById("inText");
    var inNmro = document.getElementById("inNmro");
    var outCript2 = document.getElementById("outCript2");
 
    var text = (inText.value);
    var nmro = Number(inNmro.value);
    var cripto2 = "";
    var txt2 = text.length 
 
    for ( var x=0; x<txt2; x++ ){
      var vlr2 = text.charCodeAt(x);
      var nmbr = vlr2 + nmro
      var nbmr = vlr2 - nmro

    }

     
    



    outCript2.textContent = cripto2 
 }

 