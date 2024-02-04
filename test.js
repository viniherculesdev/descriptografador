function substituir(texto) { //funçao que altera as vogais para palavras chaves 
    return texto.replaceAll("a", "ai").replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat")
  }
  
  function click() { // vai pegar a area da imagem e texto da direita, se nao escrever ira receber um alert 
      let container = document.querySelector("#container")
      if(textarea.value == "") {
          alert("Digite o texto a ser criptografado") //se o textarea estiver vazio vai mandar um alert
      }else{
        cripto() //se nao vai rodar funçao criptogtafando e substituindo o html do lado direto 
      }
    ;
  }
  
  document.getElementById("buttonId").addEventListener("click", click); // adicionando a funçao onclick para o button criptografar
  
  function cripto(){
      let textarea = document.getElementById('textarea')
      let value = textarea.value //vai buscar o textarea no html e atribuir o value dela a uma variavel
  
      let textoCriptografado = substituir(value) // criptografando o texto
  
      container.innerHTML = `<textarea>${textoCriptografado}</textarea>` // jogando na area de output
      
  }