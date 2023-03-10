function carregaCanhoeiras(){
  var referencia = {
  ref01:{ nome:
    "Cachoeira Véu de Noiva",
  imgem:"imagens/img.10.jpeg", 
  descriao:"A cachoeira é linda. Fica em meio a muitas árvores. Tem barzinho e lojas de artesanto por perto. Têm pouco espaço para veículos. São 150 metros de trilha até a cachoeira, a trilha é curta e não é difícil percorre-lá. Está localizada logo na saída da Vila de Maromba sentido cachoeira do Escorega e a 10km de Visconde de Mauá.",
  citacao:"Canhoeira linda e de fácil acesso",
},

  ref02:{nome:"Cachoeira do Escorrega.",
   imgem:"imagens/imagen.2jpeg.jpg",
    descricao:"Visite também a cachoeria do Escorrega. Têm algumas barraquinhas e lojinhas de artesato e diversos restaurantes por perto. Muito movimentada, já que é uma das mais famosas da região. Por isso, provavelmente será necessário que você pague para estacionar uma taxa. A boa notícia é que tem fácil acesso com estacionamento. Fica há 12 km de Visconde de Mauá.",
    citacao:"Cachoeira com estacionamento.",
  },
  ref03:{nome:"Canhoeira para se aventurar, fica em propriedade particular.",
  imgem:"imagens/IMG_4jpg.jpg",
  descriao:"Esta cahoeira fica na estrada de Visconde de Mauá indo em direção a Bocaína de Minas, é dificil de encontra-lá, já que tem uma estrada totalmente de terra. Mas fica aqui o lembrete para procura-lá. Bem como explorar todas as belas cachoeiras em toda região. Aventure-se.",
  citacao:"Canhoeira particular na beira da estrada.",
},
  ref04:{nome:"Cachoeira de Santa Clara",
  imgem:"imagens/img6.jpg.jpg",
  descricao:"A cachoeira Santa Clara é uma das mais bonitas cachoeiras em Visconde de Mauá. Mas na realidade, como tudo é entrelaçado por aqui, ela fica do lado mineiro, em Bocaina de Minas. A entrada fica logo na estradinha, onde é possível estacionar o carro se não estiver cheio. Dali até a Cachoeira de Santa Clara a caminhada é curtinha descendo por uma trilha. Aliás, para quem gosta de um piquenique em meio à natureza ainda há um gramado bem gostoso perto da água. Traga seu lanche e aproveite! Fica na estrada entre Maringá e Maromba, você verá uma ponte à direita cruzando o Rio Preto para o lado de MG sentido Vale de Santa Clara. Atravesse a ponte, siga até uma bifurcação e entre à esquerda, onde há placas para a cachoeira. São mais cerca de 500 m até lá.",
  citacao:"Cachoeira Santa Clara muito bonita.",
},
  ref05:{nome:"Poção da Maromba",
  imgem:"imagens/imagen3.pjeg.jpg",
  descricao:"Quem gosta de se aventurar é um local bastante conhecido. São 7 metros de altura é o (point). A pessoa precisa ter coragem devido a essa altura são 7 metros de altura entre a ponta da pedra e o poço para banho. Apesar de ser geograficamente favorável não é recomendado pois um salto despretensioso pode termine em acidente. Cuidado ao saltar em cachoeira!",
  citacao:"Cachoeira com 7 metros de altura",
},
  ref06:{nome:"Cachoeira do Alcantilado",
  imgem:"imagens/img.alc.jpg",
  descricao:"Fica há 8 km de Visconde de Mauá. Esta cachoeira tem 9 quedas. Fica ao seu gosto subí-la em sua totalidade, ou ficar no poço logo no ínicio. Está localizada em uma propriedade particular e tem uma taxa de manutenção. Por lá, há 9 cachoeiras lindas e um mirante. O acesso ás cachoeiras e totalmente sinalizado e em alguns pontos com ponte e escadas para facilitar o acesso. A trilha te 1.500 metros dee subida. Vá parando para descansar. Tome folêgo. Pois a última é bem difícil de subir o seu acesso é incline tem um mirante lindo.Compensa a grande subida.",
  citacao:"Cachoeira com 9 quedas. Cada uma com sua beleza particular.",
},
};
var content = document.getElementById("content");
for(var ref in referencia)
  content.innerHTML += '<div class"card">' + '<img src="'+
  referencia[ref].imagem+ '"/>'+ 
  "<details>"+
  "<summary>"+
  referencia[ref].nome+
  "</summary>"+
  "<p>"+
  referencia[ref].descriao +
  "</p>"+
  "<blockquote><q>"+
  referencia[ref].citacao+
  "</q></blockquote>"+
  "</details><div>";'}'}