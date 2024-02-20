function criptografar(texto) { //funçao que altera as vogais para palavras chaves 
    return texto.replaceAll("e", "enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")
  }
function descriptografar(texto) { //funçao que altera as palavras pra vogais
    return texto.replaceAll("enter", "e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u")
  }
  
document.getElementById("buttonCripto").addEventListener("click", clickCripto); // adicionando a funçao onclick para o button criptografar
document.getElementById("buttonDescripto").addEventListener("click", clickDescripto); // adicionando a funçao onclick para o button descriptografar

function clickCripto() { // no clique
  if(textarea.value == "") {
    alert("Digite o texto a ser criptografado") //se o textarea estiver vazio vai mandar um alert
      }else{
      cripto() //se nao vai rodar funçao criptogtafando e substituindo o html do lado direto 
    
    }
    ;
  }

function clickDescripto() { // no clique
    if(textarea.value == "") {
      alert("Digite o texto a ser descriptografado") //se o textarea estiver vazio vai mandar um alert
        }else{
        descripto() //se nao vai rodar funçao criptogtafando e substituindo o html do lado direto 
        
      }
      ;
    }
  
const container = document.getElementById('container');
container.style.display = 'none'; //deixando o container onde fica o output sem aparecer

function cripto(){
  let textarea = document.getElementById('textarea')
  let value = textarea.value //vai buscar o textarea no html e atribuir o value dela a uma variavel
  let textoCriptografado = criptografar(value) // criptografando o texto
  container.innerHTML = `${textoCriptografado}` // jogando na area de output
  textarea.value = ""
  }

function descripto(){
    let textarea = document.getElementById('textarea')
    let value = textarea.value //vai buscar o textarea no html e atribuir o value dela a uma variavel
    let textoCriptografado = descriptografar(value) // criptografando o texto
    container.innerHTML = `${textoCriptografado}` // jogando na area de output
    textarea.value = ""
    
    }

document.getElementById('buttonCripto').addEventListener('click', function() {
    container.style.display = 'block'; // Faz o output aparecer
    sectionImg.style.display = 'none'; // Faz a imagem desaparecer
    });

document.getElementById('buttonDescripto').addEventListener('click', function() {
    container.style.display = 'block'; //fazendo aparecer o output no container que estava escondido
    sectionImg.style.display = 'none';// fazendo desaparecer a img
});
