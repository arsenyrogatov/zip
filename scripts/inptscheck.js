function privacyInputCheck(ind)
{
if (ind!=0)
{
	document.querySelectorAll(".button-input")[1].disabled = (!document.querySelectorAll(".custom-input")[1].checked) || (document.querySelectorAll(".text-input")[2].value == "" || document.querySelectorAll(".text-input")[3].value == "");
}
else
{
	document.querySelectorAll(".button-input")[0].disabled = (!document.querySelectorAll(".custom-input")[0].checked) || (document.querySelectorAll(".text-input")[0].value == "" || document.querySelectorAll(".text-input")[1].value == "");
}
}