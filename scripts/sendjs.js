function sendData(id,feedbacktype) {
	//type=1 - tel
	//type=2 - email
	var nameinput = "name-input";
	var telmailinput = "phonemail-input";
	
	if (id==2)
	{
		nameinput = "name2-input";
		telmailinput = "phonemail2-input";
	}
	var name = $('input[name='+nameinput+']').val();
	var telmail = $('input[name='+telmailinput+']').val();
	var otpravka = true;
	if(name == "" || telmail == ""){ 
		otpravka = false;
	}
	alert("polz_name="+name+"&polz_telmail="+telmail+"&feedbacktype="+feedbacktype);
	if(otpravka) 
	 {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: "polz_name="+name+"&polz_telmail="+telmail+"&feedbacktype="+feedbacktype,
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(textStatus);
				}
		});
		alert("Спасибо!");
	 }
}