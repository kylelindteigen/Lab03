let current = 1;
function next(){
	current++;
	if(current == 2){
		document.getElementById('pic').src = "two.jpg";
	}
	else if(current == 3){
		document.getElementById('pic').src = "three.jpg";
	}
	else if(current == 4){
		document.getElementById('pic').src = "four.jpg";
	}
	else if(current == 5){
		document.getElementById('pic').src = "five.jpg";
	}
	else if(current == 6){
		current = 1;
		document.getElementById('pic').src = "one.jpg";
	}
}
function previous(){
	current--;
	if(current == 0){
		current = 5;
		document.getElementById('pic').src = "five.jpg";
	}
	else if(current == 1){
		document.getElementById('pic').src = "one.jpg";
	}
	else if(current == 2){
		document.getElementById('pic').src = "two.jpg";
	}
	else if(current == 3){
		document.getElementById('pic').src = "three.jpg";
	}
	else if(current == 4){
		document.getElementById('pic').src = "four.jpg";
	}
}
