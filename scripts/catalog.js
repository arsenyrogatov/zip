function showPanel(id, btn) {
	var btns = document.querySelectorAll(".button-slip-input");
	var menbtns = document.querySelectorAll(".man-only-input");
	for (var i = 0; i < btns.length; i++) 
	{
		$(btns[i]).css("background", "#F0F2F7");
		$(btns[i]).css("box-shadow", "2px 2px 5px rgba(0, 0, 50, 0.1), -1px -1px 5px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.3)");
		$(btns[i]).css("color", "#606163");
	}
	if (id!="men")
	{
		for (var i = 0; i < menbtns.length; i++) 
		{
			$(menbtns[i]).css("background", "#F0F2F7");
			$(menbtns[i]).css("box-shadow", "inset 2px 2px 4px rgba(255, 255, 255, 0.3)");
			$(menbtns[i]).css("color", "#A8A9AD");
			$(menbtns[i]).attr("disabled", true);
		}
	}
	else
	{
		for (var i = 0; i < menbtns.length; i++) 
		{
			$(menbtns[i]).css("background", "#F0F2F7");
			$(menbtns[i]).css("box-shadow", "2px 2px 5px rgba(0, 0, 50, 0.1), -1px -1px 5px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.3)");
			$(menbtns[i]).css("color", "#606163");
			$(menbtns[i]).removeAttr("disabled");
		}
		$(menbtns[0]).css("background", "#EEF0F5");
		$(menbtns[0]).css("box-shadow", "inset -2px -2px 5px rgba(235, 235, 235, 0.9), inset 2px 2px 5px rgba(0, 0, 50, 0.2)");
		$(menbtns[0]).css("color", "black");
	}
	
	$(btn).css("background", "#EEF0F5");
	$(btn).css("color", "black");
	$(btn).css("box-shadow", "inset -2px -2px 5px rgba(235, 235, 235, 0.9), inset 2px 2px 5px rgba(0, 0, 50, 0.2)");
				
	var capt = document.querySelectorAll(".size-panel");
	for (var i = 0; i < capt.length; i++) 
	{
		if (capt[i].id == id) 
		{
			capt[i].style.display = 'block';
		} 
		else 
		{
			capt[i].style.display = 'none';
		}
	}
	if (id == 'children')
	{
		$( ".input-slip-panel-bottom").css("margin-top", "19px");
	}
	if (id == 'wmen')
	{
		$( ".input-slip-panel-bottom").css("margin-top", "125px");
	}
	if (id == 'men')
	{
		$( ".input-slip-panel-bottom").css("margin-top", "91px");
	}
}

function showMenPanel(id, btn) {
	var menbtns = document.querySelectorAll(".man-only-input");
	for (var i = 0; i < menbtns.length; i++) 
	{
		$(menbtns[i]).css("background", "#F0F2F7");
		$(menbtns[i]).css("box-shadow", "2px 2px 5px rgba(0, 0, 50, 0.1), -1px -1px 5px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.3)");
		$(menbtns[i]).css("color", "#606163");
	}
	$(btn).css("background", "#EEF0F5");
	$(btn).css("color", "black");
	$(btn).css("box-shadow", "inset -2px -2px 5px rgba(235, 235, 235, 0.9), inset 2px 2px 5px rgba(0, 0, 50, 0.2)");
	var capt = document.querySelectorAll(".size-panel");
	for (var i = 0; i < capt.length; i++) 
	{
		if (capt[i].id == id) 
		{
			capt[i].style.display = 'block';
		} 
		else 
		{
			capt[i].style.display = 'none';
		}
	}
	if (id == 'men' || id =='men-long')
	{
		$( ".input-slip-panel-bottom").css("margin-top", "91px");
	}
	else
	{
		$( ".input-slip-panel-bottom").css("margin-top", "85px");
	}
}

function showFeedbackPanel()
{
	document.querySelectorAll(".feedback-text-block-active")[0].style.display = 'block';
	$( ".feedback-text-block-active").animate({
			opacity: 1
			}, 100, function() {
			$( ".feedback-text-block-active-decorate").animate({
			opacity: 1
			}, 200, function() {
			
			});
			});
}

function switchImage(elem, ind)
{
	var pathToCurr = $(elem).parent().parent().children(".item-img-block").children(".item-img").attr('src');
	var curInd =  parseInt(pathToCurr.charAt(pathToCurr.length-5));
	console.log(curInd + 1);
	//var pathToFullsize = pathToPreview.substring(0, pathToPreview.length-4)+"-fullsize.png";
	var nextInd = 0;
	if ($(elem).attr('class') == "left-arr-button")
	{
		if (curInd - 1 < 1)
			nextInd = 1;
		else
			nextInd = curInd - 1;
	}
	else
	{
		if (curInd + 1 > ind)
			nextInd = 1;
		else
			nextInd = curInd + 1;
	}
	$(elem).parent().parent().children(".item-img-block").children(".item-img").attr('src', pathToCurr.substring(0, pathToCurr.length-5)+nextInd+".png");
}
function zoomImage(elem)
{
	document.querySelectorAll(".blackout-panel")[0].style.display = 'flex';
	var pathToPreview = $(elem).parent().parent().children(".item-img-block").children(".item-img").attr('src');
	var pathToFullsize = pathToPreview.substring(0, pathToPreview.length-4)+"-fullsize.png";
	$(".zoom-image").attr('src', pathToFullsize);
	
	var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || 

document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
 
	if(myWidth > myHeight)
	{
		$( ".zoom-image-panel").css("height", "100%");
		$( ".zoom-image").css("height", "100%");
		$( ".zoom-image-panel").css("width", "auto");
		$( ".zoom-image").css("width", "auto");
	}
	else
	{
		$( ".zoom-image-panel").css("width", "100%");
		$( ".zoom-image").css("width", "100%");
		$( ".zoom-image-panel").css("height", "auto");
		$( ".zoom-image").css("height", "auto");
	}

	$( ".blackout-panel").animate({
			opacity: 1
			}, 100, function() {
			// Animation complete.
			});
}
function hideZoom()
{
	$( ".blackout-panel").animate({
			opacity:0
			}, 100, function() {
			document.querySelectorAll(".blackout-panel")[0].style.display = 'none';
			$(".zoom-image").attr('src', '');
			});
}