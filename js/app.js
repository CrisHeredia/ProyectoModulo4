var nrodisplay = "";
var valorSigno = "";
var Calculadora = {
  init: function(){
    document.onmousedown = this.cambioTamanoImagen;
    document.onmouseup = this.volverTamanoOriginal;
    document.onclick = this.funcionamiento;
  },
  funcionamiento: function(){
    if ((nrodisplay=="" & tecla == 0) || tecla == "on") {
      if (valorSigno == "" || tecla == "on"){
        document.getElementById("display").innerHTML = 0;
        numero1 = "";
        nrodisplay = "";
        valorSigno = "";
        total = "0";
      }
    } else {
      if (tecla >= 0 & tecla <= 9 || tecla == "."){
        nrodisplay = nrodisplay + tecla;
        document.getElementById("display").innerHTML = nrodisplay;
      } else if (tecla == "/" || tecla == "+" || tecla == "-" || tecla == "*"){
        numero1 = nrodisplay;
        nrodisplay = "";
        valorSigno = tecla;
      } else if (tecla == "="){
        switch (valorSigno) {
          case "+":
            total = Math.round((Number(numero1) + Number(nrodisplay))*100)/100;
            break;
          case "-":
            total = Math.round((Number(numero1) - Number(nrodisplay))*100)/100;
            break;
          case "*":
            total = Math.round((Number(numero1) * Number(nrodisplay))*100)/100;
            break;
          case "/":
            total = Math.round((Number(numero1) / Number(nrodisplay))*100)/100;
            break;
        }
        document.getElementById("display").innerHTML = total;
        numero1 = "";
        nrodisplay = "";
        valorSigno = "";
      }
    }
  },

  cambioTamanoImagen: function(event){
    tecla = event.target.id;
    //console.log ("Presiona Tecla " + tecla);
    if (tecla == "9"){
      document.getElementById("9").style="width: 14.5%; height: 50px;";
    } else if (tecla == "8") {
      document.getElementById("8").style="width: 14.5%; height: 50px;";
    } else if (tecla == "7") {
      document.getElementById("7").style="width: 14.5%; height: 50px;";
    } else if (tecla == "6") {
      document.getElementById("6").style="width: 14.5%; height: 50px;";
    } else if (tecla == "5") {
      document.getElementById("5").style="width: 14.5%; height: 50px;";
    } else if (tecla == "4") {
      document.getElementById("4").style="width: 14.5%; height: 50px;";
    } else if (tecla == "3") {
      document.getElementById("3").style="width: 14.5%; height: 50px;";
    } else if (tecla == "2") {
      document.getElementById("2").style="width: 14.5%; height: 50px;";
    } else if (tecla == "1") {
      document.getElementById("1").style="width: 14.5%; height: 50px;";
    } else if (tecla == "0") {
      document.getElementById("0").style="width: 14.5%; height: 50px;";
    } else if (tecla == "dividido") {
      document.getElementById("dividido").style="width: 14.5%; height: 50px; align: center;";
      tecla = "/";
    } else if (tecla == "punto") {
      document.getElementById("punto").style="width: 14.5%; height: 50px;";
      tecla = ".";
    } else if (tecla == "igual") {
      document.getElementById("igual").style="width: 14.5%; height: 50px;";
      tecla = "=";
    } else if (tecla == "mas") {
      document.getElementById("mas").style="width: 50%; height: 100px;";
      tecla = "+";
    } else if (tecla == "menos") {
      document.getElementById("menos").style="width: 14.5%; height: 50px;";
      tecla = "-";
    } else if (tecla == "por") {
      document.getElementById("por").style="width: 14.5%; height: 50px;";
      tecla = "*";
    } else if (tecla == "on") {
      document.getElementById("on").style="width: 14.5%; height: 50px;";
    }

    return this.tecla;
  },
  //console.log ('la tecla presionada es: ' + valorTecla),
  volverTamanoOriginal: function(event){
    //var tecla = event.target.id;
    //console.log ("Suelta Tecla " + tecla);
    if (tecla == "9"){
      document.getElementById("9").style="width: 22%; height: 62.91px;";
    } else if (tecla == "8") {
      document.getElementById("8").style="width: 22%; height: 62.91px;";
    } else if (tecla=="7") {
      document.getElementById("7").style="width: 22%; height: 62.91px;";
    } else if (tecla=="6") {
      document.getElementById("6").style="width: 22%; height: 62.91px;";
    } else if (tecla=="5") {
      document.getElementById("5").style="width: 22%; height: 62.91px;";
    } else if (tecla=="4") {
      document.getElementById("4").style="width: 22%; height: 62.91px;";
    } else if (tecla=="3") {
      document.getElementById("3").style="width: 30%; height: 62.91px;";
    } else if (tecla=="2") {
      document.getElementById("2").style="width: 30%; height: 62.91px;";
    } else if (tecla=="1") {
      document.getElementById("1").style="width: 30%; height: 62.91px;";
    } else if (tecla =="0") {
      document.getElementById("0").style="width: 30%; height: 62.91px;";
    } else if (tecla == "/") {
      document.getElementById("dividido").style="width: 22%; height: 62.91px;";
    } else if (tecla == ".") {
      document.getElementById("punto").style="width: 30%; height: 62.91px;";
    } else if (tecla == "=") {
      document.getElementById("igual").style="width: 30%; height: 62.91px;";
    } else if (tecla == "+") {
      document.getElementById("mas").style="width: 100%; height: 130px;";
    } else if (tecla == "-") {
      document.getElementById("menos").style="width: 22%; height: 62.91px;";
    } else if (tecla == "*") {
      document.getElementById("por").style="width: 22%; height: 62.91px;";
    } else if (tecla == "on") {
      document.getElementById("on").style="width: 22%; height: 62.91px;";
    }
  },
}

Calculadora.init();
