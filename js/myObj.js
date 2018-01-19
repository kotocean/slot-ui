function myObj(name, age, target){
	this.name = name;
	this.age = age;
	this.target = target

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
		logo.innerHTML = "<img src='images/real-money-slot.jpg' height='30' onclick='getTargetText(\""+this.target+"\")'/>"

		var content = getCell()
		content.style.background='orange'
		content.style.paddingLeft='3px'
		content.style.paddingRight='3px'
		content.innerHTML = "<span>"+this.name+"&nbsp;"+this.age+"</span>"

		myui.appendChild(logo)
		myui.appendChild(content)

		body.appendChild(myui)
	}
	this.getText = function(className){
		var article = $("."+className)[0]
		alert($(article).text())
	}
}

function getTargetText(target){
	var article = $("." + target)[0]
	var text = $(article).text()
	console.log(text)
	return text
}

function getCell(){
	var cell = document.createElement("div")
	cell.style.display = 'table-cell'
	cell.style.verticalAlign='middle'
	return cell
}