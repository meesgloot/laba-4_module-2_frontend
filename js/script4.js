document.body.style.backgroundColor="black";
function slide() {
	document.getElementById("sketch").style.display="none";
	document.getElementById("foto").style.display="block";
	document.getElementById("hide").style.display="none";
	document.getElementById("what").style.display="none";
}
function moreFoto(number) {
	document.getElementById("sketch").style.display="block";
	document.getElementById("sketcheees").src="foto" + number +".jpg";
}
function exit() {
	document.getElementById("sketch").style.display="none";
}
let schet = 0;
function leftButton() {
	if(schet > 0) {
		schet--;
		document.getElementById("imgLeft").src="foto" + (schet + 1) + ".jpg";
		document.getElementById("imgCenter").src="foto" + (schet + 2) + ".jpg";
		document.getElementById("imgRight").src="foto" + (schet + 3) + ".jpg";
	}
}
function rightButton() {
	if(schet < 8){
		schet++;
		document.getElementById("imgLeft").src="foto" + (schet + 1) + ".jpg";
		document.getElementById("imgCenter").src="foto" + (schet + 2) + ".jpg";
		document.getElementById("imgRight").src="foto" + (schet + 3) + ".jpg";
	}
}
function carusel(number) {
	document.getElementById("what").style.display="block";
	document.getElementById("film").src="foto" + (schet + number) + ".jpg";
}
