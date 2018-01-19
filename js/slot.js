window.onload = function(){
	//alert('alert one time after the page loaded.')
	var myui = document.createElement("div")
	var body = document.getElementsByTagName("body")[0]

	myui.style.position = 'absolute'
	myui.style.right = '10px'
	myui.style.bottom = '30px'
	myui.innerHTML = "<img src='images/real-money-slot.jpg' height='30' onclick='tip()' />"

	body.appendChild(myui)
}

function tip(){
	alert('click one time!')
}