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


function fun1(){
  var mapa=document.getElementById("mapa");
  var titulo= document.getElementById("nombres");
  var nombre = document.getElementById("nombres1").innerHTML;
  titulo.innerHTML=nombre;
  mapa.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24302.935826094374!2d-3.7277581935731856!3d40.411797545730245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288c76e060fb%3A0x24000772b9f00dd8!2sThe%20Box%20-%20Escape%20Room!5e0!3m2!1ses!2ses!4v1702583464119!5m2!1ses!2ses";
}

function fun2(){
  var mapa=document.getElementById("mapa");
  var titulo= document.getElementById("nombres");
  var nombre = document.getElementById("nombres2").innerHTML;
  titulo.innerHTML=nombre;
  mapa.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24302.935826094374!2d-3.7277581935731856!3d40.411797545730245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228797900779f%3A0xb5db7367d1ef7b6e!2sDark%20Street%20Escape%20Room!5e0!3m2!1ses!2ses!4v1702583483937!5m2!1ses!2ses";
}

function fun3(){
  var mapa=document.getElementById("mapa");
  var titulo= document.getElementById("nombres");
  var nombre = document.getElementById("nombres3").innerHTML;
  titulo.innerHTML=nombre;
  mapa.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24302.935826094374!2d-3.7277581935731856!3d40.411797545730245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227cd5f5a6a11%3A0x407cb942053a902a!2sEscape%20Room%20-%20Coco%20Room%20Madrid!5e0!3m2!1ses!2ses!4v1702583502540!5m2!1ses!2ses";
}

function fun4(){
  var mapa=document.getElementById("mapa");
  var titulo= document.getElementById("nombres");
  var nombre = document.getElementById("nombres4").innerHTML;
  titulo.innerHTML=nombre;
  mapa.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24302.935826094374!2d-3.7277581935731856!3d40.411797545730245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d446a6ce7d%3A0x8bb02ec50007ec0f!2sThe%20City%20by%20Experiencity%20Escape%20Room!5e0!3m2!1ses!2ses!4v1702583516193!5m2!1ses!2ses";
}
function fun5(){
  var mapa=document.getElementById("mapa");
  var titulo= document.getElementById("nombres");
  var nombre = document.getElementById("nombres5").innerHTML;
  titulo.innerHTML=nombre;
  mapa.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24302.935826094374!2d-3.7277581935731856!3d40.411797545730245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228629073cda1%3A0xfb7ef2d39dad2253!2sEXIT%2FSALIDA%20-%20Escape%20room%20Madrid%20-%20Atrapado%20en%20el%20Museo!5e0!3m2!1ses!2ses!4v1702583542643!5m2!1ses!2ses";
}

function fun6(){
  var mapa=document.getElementById("mapa");
  var titulo= document.getElementById("nombres");
  var nombre = document.getElementById("nombres6").innerHTML;
  titulo.innerHTML=nombre;
  mapa.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24302.935826094374!2d-3.7277581935731856!3d40.411797545730245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228629073cda1%3A0xfb7ef2d39dad2253!2sEXIT%2FSALIDA%20-%20Escape%20room%20Madrid%20-%20Atrapado%20en%20el%20Museo!5e0!3m2!1ses!2ses!4v1702583542643!5m2!1ses!2ses";
}

