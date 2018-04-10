function addDrag(w){
  	$("[data-card='"+w+"']").draggable({
    containment: ".board",
    revert: true,
    revertDuration: 10,

  });
  	console.log(w)
}


function dataCards(url){
  let data=url.split('-')
  data[0]=='clubs'||data[0]=='spades'? cardType = 'black' : cardType = 'red'
  return "data-cardType="+cardType+" data-cardValue="+data[1]+" data-cardSuit="+data[0]
}


function setDropPlace(cardType, cardValue){
	console.log(cardType+" - "+cardValue)
	let el=$("."+cardType+".c"+cardValue)
	console.log(el)
  el.droppable({
  accept: "[data-card='one_card']", //accept: "#draggable",//принимаем только чёрного
  over: function( event, ui )//если фигура над клеткой- выделяем её границей
    {$(this).addClass('hover');
    },
  out: function( event, ui )//если фигура ушла- снимаем границу
    {
    $(this).removeClass('hover');
      
    },
  drop:function( event, ui )//если бросили фигуру в клетку
    {
    	console.log($(ui.draggable)[0])
    $(this).append(ui.draggable);//перемещаем фигуру в нового предка
    $(this).removeClass('hover');//убираем выделение
    ui.draggable.removeAttr("id")
    ui.draggable.addClass('block-close')
    }
  });
}


function setCurrentPlace(e){
	
	let cardType=$(e[0]).data('cardtype')
	let cardValue=$(e[0]).data('cardvalue')
	let cardSuit=$(e[0]).data('cardsuit')
	console.log(cardType)
	cardType=='red' ? cardType='black': cardType='red'
	cardValue=cardValue+1
	setDropPlace(cardType, cardValue)
}

