var result = 
document.getElementById('result');
result.innerHTML = ""/*neste Elemento 
sera amostrado os Resultados*/

function C(){//Aqui limpara todos os numeros presentes.
result.innerHTML =  ""       
result.style.color = "black"//aqui faz com ele fique com a cor
// preto novamente caso fique de cor vermelha
}
function inserir(num){
  result.innerHTML += num//esse comando serve para a maioria dos buttons
}//os fazendo aparecer na barra branca

function removee(){//nesta parte do codigo ele vai pegar todo o conteudo e 
  //retirar o ultimo (<)
  var back1 = document.getElementById('result').innerHTML //pega tudo e faz o (back1) receber todo o conteudo           /-->ele retorna o valor total: "exemplo" = 7
document.getElementById('result').innerHTML = back1.substring(0, back1.length -1)// ja nessa parte "back1.substring(0, back1.length -1)"
}//                                                                                                                                   \-->e com isso ele ai subtrair o valor (7 - 1)          
function resposta(){//faz com que ele der o resultado na tela 2 + 2 = 4
  var resposta_ = document.getElementById('result').innerHTML//pega tudo e faz o (resposta_) receber todo o conteudo
  if(resposta_){//ja aqui ai er se tem algo escrito na tela, se caso nao estiver...
  document.getElementById('result').innerHTML = eval(resposta_)
  }else{//ele mostrar  "Erro", e mudarar pra cor vermelha
    document.getElementById('result').innerHTML = "Erro"
    result.style.color = "red"
  }
}

