//function to get all paragraphs
function getParas()
{
	var paras = document.getElementsByTagName("p");
	return paras;
}

function changeText(elementId, newValue)
{
	var para = document.getElementById(elementId)
  para.innerHTML = newValue;
}
function create()
{
	var para = document.createElement("p");
	para.innerHTML = "I jumped in the middle of 1 and 2";
	para.id = "para1.5";

	var check = document.getElementById("para2");
	document.body.insertBefore(para, check);
};