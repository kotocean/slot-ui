function myObj(name, age){
	this.name = name;
	this.age = age;

	this.sayHi = function(){
		return 'hi everyone!!!';
	}
	this.show = function(msg){
		console.log(msg)
		var myui = document.createElement("div")
		var body = document.getElementsByTagName("body")[0]

		myui.style.position = 'absolute'
		myui.style.right = '3px'
		myui.style.bottom = '60px'
		myui.style.display = 'table'
		myui.style.height = '30px'

		var logo = getCell()
		logo.innerHTML = "<img src='images/real-money-slot.jpg' height='30' onclick='alert(\""+msg+"\")'/>"

		var content = getCell()
		content.style.background='orange'
		content.style.paddingLeft='3px'
		content.style.paddingRight='3px'
		content.innerHTML = "<span>"+this.name+"&nbsp;"+this.age+"</span>"

		myui.appendChild(logo)
		myui.appendChild(content)

		body.appendChild(myui)
	}
}

function getCell(){
	var cell = document.createElement("div")
	cell.style.display = 'table-cell'
	cell.style.verticalAlign='middle'
	return cell
}