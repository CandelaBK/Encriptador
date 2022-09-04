var texto = document.querySelector("input-text");
var botones = document.querySelector("botones");
var textoEncriptado = document.querySelector("h2");
var btnCopiar = document.querySelector("btn-copiar");

document.querySelector("div-aparece").style.display = 'none';
inputverificar(); 

function capturarTexto(textarea){
    var texto = input-text
}
return texto;

var btnEncriptar = document.querySelector("botonEncriptar");
//function botonEncriptar (){}
btnEncriptar.addEventListener('click', function(event)){
    event.preventDefault();
    var texto = document.querySelector("input-text")
    var texto = capturarTexto(textarea);
    const textoEncriptado = encriptar(input.value.toLowerCase());
  	mensaje.value = textoEncriptado;
  	input.value = "";
  	aparece()
};

var btnDesencriptar = document.querySelector("botonDesencriptar");
//function botonDesncriptar (){}
btnDesencriptar.addEventListener('click', function(event)){
    event.preventDefault();
    var texto = document.querySelector("input-text")
    var texto = document.querySelector("input-text")
    var texto = capturarTexto(textarea);
    const textoDesencriptado = desencriptar(input.value);
    mensaje.value = textoDesencriptado;
    input.value = "";
    aparece()
};

document.querySelector('btn-copiar').onclick = (e) => {
    e.preventDefault();
    const mensaje = document.querySelector("btn-copiar");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
  }
  
  function encriptar(stringEncriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringEncriptada.includes(matrixCode[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
      }
    }
    return stringEncriptada
  }
  
  function desencriptar(stringDesencriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringDesencriptada.includes(matrixCode[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
      }
    }
    return stringDesencriptada
  }
  
  function aparece() {
    document.querySelector("div-desaparece").style.display = 'none';
    document.querySelector("div-aparece").style.display = 'block';
  }
  
  function home() {
    document.querySelector("div-aparece").style.display = 'none';
    document.querySelector("div-desaparece").style.display = 'block';
  }
  
  function inputverificar() {
    var inputPalabra = document.querySelector("#input-texto");
    inputPalabra.addEventListener("keypress", function (e) {
      var keyCode = (e.keyCode ? e.keyCode : e.which);
  
      if (keyCode > 47 && keyCode < 65) {
        e.preventDefault();
      }
    });
  }

function botonHandler() {
	botonEn.textContent=texto.value;
	texto.value="";
}
botones.addEventListener("click", botonHandler)
event.preventDeFault();

