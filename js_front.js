/*$(function() {
	
	$('#draggable').draggable({
    containment: ".board",
    revert: true,
    revertDuration: 10,
  
  });
  
});

$('#place').droppable({
//accept: "#draggable",//принимаем только чёрного
over: function( event, ui )//если фигура над клеткой- выделяем её границей
  {$(this).addClass('hover');
  },
out: function( event, ui )//если фигура ушла- снимаем границу
  {
  $(this).removeClass('hover');
    
  },
drop:function( event, ui )//если бросили фигуру в клетку
  {
  $(this).append(ui.draggable);//перемещаем фигуру в нового предка
  $(this).removeClass('hover');//убираем выделение
  }
});*/
let newColode=[]
let Suit=['clubs', 'diam', 'heart', 'spades']
for(i=0; i<Suit.length; i++){
  for (j=2; j<15; j++){
    newColode.push(Suit[i]+"-"+j)
  }
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

newColode.sort(compareRandom);

var block1=[], block2=[], block3=[], block4=[], block5=[], block6=[], block7=[]
let gameColode=newColode

for (i=1; i<8; i++){
  doBlocks(i)
}
function doBlocks(n){
 //var window["block" + n]
  
  for(j=0; j<n; j++){
    r=Math.floor(Math.random() * gameColode.length)
    window["block" + n].push(gameColode[r])
    gameColode.splice(r, 1)  
  }
  
}
let cardCounter=0
function showCart(){
  let url=gameColode[cardCounter]
  $('.open-deck').html("<div onmousedown='setCurrentPlace($(this))' id='one_card_for_drug' data-card='one_card' "+dataCards(url)+"><img class='open-deck-card' src='http://owen.ru/upl_files/cards_game/"+url+".png'></div>")
  cardCounter++
  addDrag('one_card')
}
var src=[]

let places=$('.table-card-place')
for(i=1; i<8; i++){
  for(j=0; j<i; j++){
    src=window["block" + i]
    //console.log(src)
    let marginBlock=""
    let url=""

    j>0 ? marginBlock=" block-close" : marginBlock=""
    j+1==src.length ? url=src[src.length-1] : url="top"


    $(places[(i-1)]).append("<div class='block"+j+ marginBlock +dataCardsClass(url)+"' "+dataCards(url)+"><img class='open-deck-card' src='http://owen.ru/upl_files/cards_game/"+url+".png'></div>")
    //$('.block'+j).css('margin-top', '')

  }
  
}


function dataCards(url){
  let data=url.split('-')
  data[0]=='clubs'||data[0]=='spades'? cardType = 'black' : cardType = 'red'
  return "data-cardType="+cardType+" data-cardValue="+data[1]+" data-cardSuit="+data[0]
}

function dataCardsClass(url){
  let data=url.split('-')
  data[0]=='clubs'||data[0]=='spades'? cardType = 'black' : cardType = 'red'
  return " "+cardType+" c"+data[1]+" "+data[0]+" "
}



