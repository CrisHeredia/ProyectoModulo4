var nrodisplay = "";
var valorSigno = "";
var Calculadora = {
  init: function(){
    document.onmousedown = this.cambioTamanoImagen;
    document.onmouseup = this.volverTamanoOriginal;
    document.onclick = this.funcionamiento;
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
    else if (tecla == "sign") {
      document.getElementById("sign").style="width: 14.5%; height: 50px;";
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
    } else if (tecla == "sign") {
      document.getElementById("sign").style="width: 22%; height: 62.91px;";
    }
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
      Calculadora.contarOcurrencia(nrodisplay,".");
      if (tecla >= 0 & tecla <= 9 || (tecla == "." & cont == 0)){
        if (nrodisplay.length <=7){
           nrodisplay = nrodisplay + tecla;
           document.getElementById("display").innerHTML = nrodisplay;
           constante = nrodisplay;
        }
      } else if (tecla == "sign"){
        Calculadora.contarOcurrencia(nrodisplay,"-");
        if (cont == 0 & nrodisplay > 0){
          nrodisplay = "-" + nrodisplay;
        } else if (cont == 1){
          nrodisplay = nrodisplay.substring(1);
        }
        document.getElementById("display").innerHTML = nrodisplay;
      } else if (tecla == "/" || tecla == "+" || tecla == "-" || tecla == "*"){
        numero1 = nrodisplay;
        nrodisplay = "";
        valorSigno = tecla;
        document.getElementById("display").innerHTML = "";
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
        totalDesp=total.toString();
        document.getElementById("display").innerHTML = totalDesp.substring(0,8);
        nrodisplay = constante;
        numero1 = total;
        //alert ("nrodisplay:  " + nrodisplay + "     numero1:   " + numero1 + "     constante:  " + constante);
      }
    }
  },

  contarOcurrencia: function(cadena,caracter){
    cont = 0;
    for(i=0;i<cadena.length;i++){
      let = cadena.substring(i,(i+1));
      if (let == caracter){
        cont = cont+1;
      }
    }
    return this.cont;
  },

}

Calculadora.init();
