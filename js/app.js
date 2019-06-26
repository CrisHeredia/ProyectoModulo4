var nrodisplay = "";
var Calculadora = {
  init: function(){
    document.onkeydown = this.cambioTamanoImagen;
    document.onkeyup = this.volverTamanoOriginal;
    document.onkeypress = this.almacenarNumero;
  },
  almacenarNumero: function(){
    if (valorTecla >= 0 & valorTecla <= 9){
      nrodisplay = nrodisplay + valorTecla;
      document.getElementById("display").innerHTML = nrodisplay;
      console.log ('tecla digitada: ' + valorTecla);
      console.log ('valor acumulado: ' + nrodisplay);
    } else if (valorTecla == "/" || valorTecla == "+" || valorTecla == "-" || valorTecla == "*"){
      console.log ('tecla digitada: ' + valorTecla);
      numero1 = nrodisplay;
      nrodisplay = "";
      valorSigno = valorTecla;
    } else if (valorTecla == "="){
      console.log ('tecla digitada: ' + valorTecla);
      switch (valorSigno) {
        case "+":
          total = Number(numero1) + Number(nrodisplay);
          break;
        case "-":
          total = Number(numero1) - Number(nrodisplay);
          break;
        case "*":
          total = Number(numero1) * Number(nrodisplay);
          break;
        case "/":
          total = Number(numero1) / Number(nrodisplay);
          break;
      }
      document.getElementById("display").innerHTML = total;
      nrodisplay = "";
    }
  },
  cambioTamanoImagen: function(event){
    var tecla = String.fromCharCode(event.which || event.KeyCode);
    //console.log ("Presiona Tecla " + tecla);
    if (tecla == "9" || tecla == "i"){
      document.getElementById("9").style="width: 14.5%; height: 50px;";
      valorTecla = 9;
    } else if (tecla == "8" || tecla == "h") {
      document.getElementById("8").style="width: 14.5%; height: 50px;";
      valorTecla = 8;
    } else if (tecla == "7" || tecla == "g") {
      document.getElementById("7").style="width: 14.5%; height: 50px;";
      valorTecla = 7;
    } else if (tecla == "6" || tecla == "f") {
      document.getElementById("6").style="width: 14.5%; height: 50px;";
      valorTecla = 6;
    } else if (tecla == "5" || tecla == "e") {
      document.getElementById("5").style="width: 14.5%; height: 50px;";
      valorTecla = 5;
    } else if (tecla == "4" || tecla == "d") {
      document.getElementById("4").style="width: 14.5%; height: 50px;";
      valorTecla = 4;
    } else if (tecla == "3" || tecla == "c") {
      document.getElementById("3").style="width: 14.5%; height: 50px;";
      valorTecla = 3;
    } else if (tecla == "2" || tecla == "b") {
      document.getElementById("2").style="width: 14.5%; height: 50px;";
      valorTecla = 2;
    } else if (tecla == "1" || tecla == "a") {
      document.getElementById("1").style="width: 14.5%; height: 50px;";
      valorTecla = 1;
    } else if (tecla == "0" || tecla == "`") {
      document.getElementById("0").style="width: 14.5%; height: 50px;";
      valorTecla = 0;
    } else if (tecla == "o") {
      document.getElementById("dividido").style="width: 14.5%; height: 50px;";
      valorTecla = "/"
    } else if (tecla == "n") {
      document.getElementById("punto").style="width: 14.5%; height: 50px;";
      valorTecla = "."
    } else if (tecla == "=") {
      document.getElementById("igual").style="width: 14.5%; height: 50px;";
      valorTecla = "="
    } else if (tecla == "k") {
      document.getElementById("mas").style="width: 50%; height: 100px;";
      valorTecla = "+"
    } else if (tecla == "m") {
      document.getElementById("menos").style="width: 14.5%; height: 50px;";
      valorTecla = "-"
    } else if (tecla == "j") {
      document.getElementById("por").style="width: 14.5%; height: 50px;";
      valorTecla = "*"
    }
    return this.valorTecla;
  },
  //console.log ('la tecla presionada es: ' + valorTecla),
  volverTamanoOriginal: function(event){
    var tecla = String.fromCharCode(event.which || event.KeyCode);
    //console.log ("Suelta Tecla " + tecla);
    if (tecla == "9" || tecla == "i"){
      document.getElementById("9").style="width: 22%; height: 62.91px;";
    } else if (tecla == "8" || tecla == "h") {
      document.getElementById("8").style="width: 22%; height: 62.91px;";
    } else if (tecla=="7" || tecla == "g") {
      document.getElementById("7").style="width: 22%; height: 62.91px;";
    } else if (tecla=="6" || tecla == "f") {
      document.getElementById("6").style="width: 22%; height: 62.91px;";
    } else if (tecla=="5" || tecla == "e") {
      document.getElementById("5").style="width: 22%; height: 62.91px;";
    } else if (tecla=="4" || tecla == "d") {
      document.getElementById("4").style="width: 22%; height: 62.91px;";
    } else if (tecla=="3" || tecla == "c") {
      document.getElementById("3").style="width: 30%; height: 62.91px;";
    } else if (tecla=="2" || tecla == "b") {
      document.getElementById("2").style="width: 30%; height: 62.91px;";
    } else if (tecla=="1" || tecla == "a") {
      document.getElementById("1").style="width: 30%; height: 62.91px;";
    } else if (tecla =="0" || tecla == "`") {
      document.getElementById("0").style="width: 30%; height: 62.91px;";
    } else if (tecla == "o") {
      document.getElementById("dividido").style="width: 22%; height: 62.91px;";
    } else if (tecla == "n") {
      document.getElementById("punto").style="width: 30%; height: 62.91px;";
    } else if (tecla == "=") {
      document.getElementById("igual").style="width: 30%; height: 62.91px;";
    } else if (tecla == "k") {
      document.getElementById("mas").style="width: 100%; height: 130px;";
    } else if (tecla == "m") {
      document.getElementById("menos").style="width: 22%; height: 62.91px;";
    } else if (tecla == "j") {
      document.getElementById("por").style="width: 22%; height: 62.91px;";
    }
  },
}

Calculadora.init();
