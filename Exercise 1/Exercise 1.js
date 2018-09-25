function myFunc()
{
	let p1 = document.getElementById('p1').value;
	let p2 = document.getElementById('p2').value;
	if(p1.length < 8){
		alert("Must be greater than 8 characters");
	}
	else if(p1 != p2){
		alert("The passwords don't match");
	}
	else {
		alert("The passwords you entered are both the same")
	}
}
