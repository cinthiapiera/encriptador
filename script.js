const textArea = document.querySelector(".principal");
const mensaje = document.querySelector(".secundario");

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
  const textDesencriptado = desencriptar(textArea.value);
  mensaje.value = textDesencriptado;
  textArea.value = "";
}

function btnCopiar(){
  const textCopiado = document.querySelector(".secundario");
  textCopiado.select();
  navigator.clipboard.writeText(textCopiado.value);
  alert("Copied the text: " + textCopiado.value);
  textCopiado.value = "";
}


function encriptar(stringEncriptado){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  // console.table(matrizCodigo);
  stringEncriptado = stringEncriptado.toLowerCase();

  for(let i=0; i<matrizCodigo.length;i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
  }
  return stringEncriptado;
}

function desencriptar (stringDesencriptado){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for(let i=0; i<matrizCodigo.length; i++){
    if(stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
  }
  return stringDesencriptado;
}
