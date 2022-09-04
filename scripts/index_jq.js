function testing(id) {
	var actElem_mas = document.querySelectorAll(".elem-icon");
	var curElem = document.getElementById(id);
	
	for (var i = 0; i < actElem_mas.length; i++) 
	{
		if (actElem_mas[i].style.left == "404px") 
		{
			actElem_mas[i].style.left = curElem.style.left;
			//curElem.style.left = "404px";
			
			$( "#"+id ).animate({
			left: "404px"
			}, 80, function() {
			// Animation complete.
			});
			break;
		}
	}
	id = "act-"+id;
    var capt = document.querySelectorAll(".active-elem-caption");
	var descr = document.querySelectorAll(".active-elem-description");
	change(capt, id);
	change(descr, id);
}

function change(arr, id)
{
	for (var i = 0; i < arr.length; i++) 
	{
		if (arr[i].id == id) 
		{
			arr[i].style.display = 'block';
		} 
		else 
		{
			arr[i].style.display = 'none';
		}
	}
}

function privacyInputCheck()
{
document.querySelectorAll(".button-input")[0].disabled = (!document.querySelectorAll(".custom-input")[0].checked) || (document.querySelectorAll(".text-input")[0].value == "" || document.querySelectorAll(".text-input")[1].value == "");
}