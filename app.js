
function GetName(){
	let name = document.getElementById('name').value;
		if(name.indexOf('J') && name.indexOf('j')){
			document.getElementById('demo').innerHTML = "Hello " +name;
		}
		else{
			document.getElementById('demo').innerHTML = "GoodBye "+name;
		}
}