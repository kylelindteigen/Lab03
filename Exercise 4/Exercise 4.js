function ChangeBackground(){
	let par = document.getElementById("par");
	let backr = document.getElementById("backr").value;
	let backb = document.getElementById("backb").value;
	let backg = document.getElementById("backg").value;
	let borderr = document.getElementById('borderr').value;
	let borderb = document.getElementById('borderb').value;
	let borderg = document.getElementById('borderg').value;
	let width = document.getElementById('width').value;
	if(borderr == ""){
		borderr = "0";
	}
	if(borderb == ""){
		borderb = "0";
	}
	if(borderg == ""){
		borderg = "0";
	}
	if(backr == ""){
		backr = "0";
	}
	if(backg == ""){
		backg = "0";
	}
	if(backb == ""){
		backb = "0";
	}
	if(width == ""){
		width = "0";
	}
	if(isNaN(backr) || isNaN(backg) || isNaN(backb) || isNaN(borderr) || isNaN(borderg) || isNaN(borderb) || isNaN(width)){
		alert("please enter only numbers in the fields");
	}
	else if(Number(backr) < 0 || Number(backg) < 0 || Number(backb) < 0 || Number(borderr) < 0 || Number(borderg) < 0 || Number(borderb) < 0 ||
		Number(backr) > 255 || Number(backg) > 255 || Number(backb) > 255 || Number(borderr) > 255 || Number(borderg) > 255 || Number(borderb) > 255){
		alert("please enter a number between 0-255");
	}
	else{
		par.style.borderColor = 'rgb('+borderr+','+borderg+','+borderb+')';
		par.style.backgroundColor = 'rgb('+backr+','+backg+','+backb+')';
		par.style.borderWidth = Number(width);
	}
}
