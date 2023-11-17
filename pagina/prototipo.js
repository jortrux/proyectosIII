var nav=document.getElementById("pop").style.display = "row";;

window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    if(scroll > 100 && nav.display!="row"){
        nav.display="row";
		console.log("nav visible");
    }else{
		nav="none";
		console.log("nav invisible");
	}
}
