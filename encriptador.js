(function(){
  const textArea = document.querySelector("#inputText");
  const mensaje = document.querySelector("#outputText");
  const encryptButton = document.querySelector("#encryptButton");
  const decryptButton = document.querySelector("#decryptButton");
  const copyButton = document.querySelector("#copyButton");


  const matrizCodigo = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
  ];

  function aplicarCifrado(texto, matriz, esEncriptar){
    texto = texto.toLowerCase();
    for (let index = 0; index < matriz.length; index++) {
      const origen = esEncriptar ? matriz[index][0] : matriz[index][1];
      const destino = esEncriptar ? matriz[index][1] : matriz[index][0];

      if(texto.includes(origen)){
        texto = texto.replaceAll(origen, destino);
      }
    }
    return texto;
  }
  
  encryptButton.addEventListener("click", function () {
    const textoEncriptado = aplicarCifrado(textArea.value, matrizCodigo, true);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
  });

  decryptButton.addEventListener("click", function () {
    const textDesencriptado = aplicarCifrado(textArea.value, matrizCodigo, false);
    mensaje.value = textDesencriptado;
    textArea.value = "";
  });

  copyButton.addEventListener("click", function () {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Copied the text: " + mensaje.value);
    mensaje.value = "";
  });

})();