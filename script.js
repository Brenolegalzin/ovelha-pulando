let y = window.scrollMaxY;
document.querySelector(".grama").style.height = y;
document.querySelector(".fundo").style.height = y;
let carneiros = 0;
let pauseOrPlay = ["▶", "| |"];
let onOrOff = ["true","false"];
let indice = 0;
let isPaused = onOrOff[indice];
let isPlayerOrPaused = pauseOrPlay[indice];
alert("clique no audio a baixo para colocar musica, agora voce me pergunta porque eu nao coloquei para musica dar auto play, bem é porque navegadores como firefox nao permitem tocar musica sem a permissao do usuario entao clique no audio para ouvir musica");
let audioDuration = document.getElementById("music").duration;
function loop(){
	setTimeout(function(){
	    document.getElementById("ovelha").style.top = 150;
	    document.getElementById("ovelha").style.right = 490;
	    isPaused = onOrOff[indice];
	}, 1000);
	setTimeout(function(){
		document.getElementById("ovelha").style.top = 366;
		document.getElementById("ovelha").style.right = 700;
		isPaused = onOrOff[indice];
	}, 2000);
	setTimeout(function(){
		document.getElementById("ovelha").style.top = 366;
		document.getElementById("ovelha").style.right = 700;
		carneiros += 1;
	    document.getElementById("carneirinhos").innerText = "carneiros :"+carneiros;
	    isPaused = onOrOff[indice];
	}, 3000);
	setTimeout(function(){
        document.getElementById("ovelha").style.top = 366;
	    document.getElementById("ovelha").style.right = 300;
		isPaused = onOrOff[indice];
	}, 4000);
	setTimeout(loop, 5000);
}
function musica(){
	if(document.getElementById("music").currentTime>=299.120816){
		document.getElementById("music").currentTime = 0;
	}
	setTimeout(musica, 100);
}
musica();
loop();
function pause(){
	indice += 1;
	if(indice>=2){
		indice = 0;
	}
	isPlayerOrPaused = pauseOrPlay[indice];
	document.getElementById("playOrPause").innerText = isPlayerOrPaused;
	if(isPlayerOrPaused=="| |"){
		document.getElementById("music").play();
	}
	else{
		document.getElementById("music").pause();
	}
}
