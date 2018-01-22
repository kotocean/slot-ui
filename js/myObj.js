function myObj(name, age, target){
	this.name = name;
	this.age = age;
	this.targetElement = $(target)
	if(this.targetElement instanceof Array){
		this.targetElement = this.targetElement[0]
	}

	this.sayHi = function(){
		return 'hi everyone!!!';
	}
	this.show = function(msg, img_src){
		console.log(msg)
		var myui = document.createElement("div")

		myui.style.display = 'table'
		myui.style.height = '30px'

		var logo = getCell()
		var img = document.createElement("img")
		img.style.height = '30px'
		img.src = img_src
		$(img).on('click', function(){
			getTargetText(target)
		})
		logo.append(img);
		
		var content = getCell()
		content.style.height = '30px'
		content.style.background='orange'
		content.style.paddingLeft='3px'
		content.style.paddingRight='3px'
		content.innerHTML = this.name+"&nbsp;"+this.age;

		myui.appendChild(logo)
		myui.appendChild(content)

		$(this.targetElement).prepend(myui);
	}
	this.getText = getTargetText
}

function getTargetText(target){
	var target = $(target)
	if(target instanceof Array){
		target = target[0]
	}
	var text = $(target).text()
	console.log(text)
	// console.log(target)
	return text
}

function getCell(){
	var cell = document.createElement("div")
	cell.style.display = 'table-cell'
	cell.style.verticalAlign='middle'
	return cell
}