//initialisation
var id = localStorage.getItem('niveau');
var id = id-1;
var GrilleGlobal = [{
	"grilleDesign":[[0,0,0,0,0,0],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
					[0,0,0,6,0,0],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,6,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":0},{"TournerD":0},{"If":0},{"For":0},{"While":0}],
	"nombreDeBloc":10,
	"msg-tuto": "Welcome to drag and learn the game that teaches you how to code easily.<space><space>the goal is to lead the mouse to the cheese by using the instructions blocks available.<space><space>drag and drop a move forward block then click on execute.",
	"position":3,
	"orientation":2,
	"if-tuto":"",
	"nb_etoile2":4,
	"nb_etoile3":3
},
{
	"grilleDesign":[[0,0,2,0,0,0],
					[0,0,0,0,0,0],
					[0,0,6,2,0,0],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,2,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,6,2,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":0},{"For":0},{"While":0}],
	"nombreDeBloc":10,
	"msg-tuto": "Right and left blocks are also available to turn right or left.<space><space>Try to use them to complete this level.",
	"position":3,
	"orientation":2,
	"if-tuto":"",
	"nb_etoile2":6,
	"nb_etoile3":5
},
{
	"grilleDesign":[[0,0,0,0,2,0],
					[0,0,0,0,2,0],
					[0,0,0,0,2,0],
					[0,4,0,3,2,0],
					[0,0,2,2,2,0],
					[0,6,2,0,0,0]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,0,0,2,0,7],
						  [7,0,0,0,0,2,0,7],
						  [7,0,0,0,0,2,0,7],
						  [7,0,4,0,3,2,0,7],
						  [7,0,0,2,2,2,0,7],
						  [7,0,6,2,0,0,0,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":1},{"For":0},{"While":0}],
	"nombreDeBloc":10,
	"msg-tuto": "One of the most well known loop in programming is the if loop.<space><space>It allows you to execute actions only when the condition that you've set is true.<space><space>Try to use an if loop with a condition to complete this level with the best score.",
	"position":3,
	"orientation":2,
	"if-tuto":"true",
	"nb_etoile2":12,
	"nb_etoile3":11
}
,{
	"grilleDesign":[[0,0,0,0,0,0],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
					[0,0,0,6,0,0]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,0,0,0,7],
						  [7,0,0,0,6,0,0,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":0},{"For":1},{"While":0}],
	"nombreDeBloc":10,
	"msg-tuto": "A for loop is use to exectute several actions as many times as you've defined.<space><space>This number is defined in the incrementer variable.<space><space>Try to use a for loop to complete this level with the best score.<space><space>For each level, the less blocks you use, the highter your score will be.",
	"position":3,
	"orientation":2,
	"if-tuto":"",
	"nb_etoile2":4,
	"nb_etoile3":2
}
,{
	"grilleDesign":[[0,0,2,0,0,0],
					[0,0,2,0,0,0],
					[0,0,2,0,0,0],
					[0,0,2,0,0,0],
					[0,0,2,0,0,0],
					[0,0,6,5,0,0]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,2,0,0,0,7],
						  [7,0,0,2,0,0,0,7],
						  [7,0,0,2,0,0,0,7],
						  [7,0,0,2,0,0,0,7],
						  [7,0,0,2,0,0,0,7],
						  [7,0,0,6,5,0,0,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":0},{"For":0},{"While":1}],
	"nombreDeBloc":10,
	"msg-tuto": "A while loop execute actions in loop as long as its condition is true.<space><space>Try to use a while loop to complete this level and obtain 3 stars.",
	"position":3,
	"orientation":2,
	"if-tuto":"",
	"nb_etoile2":5,
	"nb_etoile3":4
}
,{
	"grilleDesign":[[0,0,0,0,0,3],
					[2,2,2,2,2,0],
					[0,0,2,5,0,3],
					[0,0,2,5,3,2],
					[0,0,2,2,0,2],
					[6,0,0,0,3,2]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,0,0,0,3,7],
						  [7,2,2,2,2,2,0,7],
						  [7,0,0,2,5,0,3,7],
						  [7,0,0,2,5,3,2,7],
						  [7,0,0,2,2,0,2,7],
						  [7,6,0,0,0,3,2,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":1},{"For":1},{"While":1}],
	"nombreDeBloc":10,
	"msg-tuto": "",
	"position":0,
	"orientation":1,
	"if-tuto":"",
	"nb_etoile2":15,
	"nb_etoile3":6
}
,{
	"grilleDesign":[[0,0,0,0,0,0],
					[4,0,0,0,0,4],
					[0,0,2,2,2,0],
					[0,0,2,2,2,0],
					[4,0,0,4,2,0],
					[2,2,2,6,2,0]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,0,0,0,0,7],
						  [7,4,0,0,0,0,4,7],
						  [7,0,0,2,2,2,0,7],
						  [7,0,0,2,2,2,0,7],
						  [7,4,0,0,4,2,0,7],
						  [7,2,2,2,6,2,0,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":1},{"For":1},{"While":1}],
	"nombreDeBloc":10,
	"msg-tuto": "",
	"position":35,
	"orientation":4,
	"if-tuto":"",
	"nb_etoile2":14,
	"nb_etoile3":7
}
,{
	"grilleDesign":[[0,0,0,5,0,5],
					[0,0,0,0,2,0],
					[0,0,0,4,2,6],
					[0,0,0,0,2,0],
					[0,0,0,3,0,4],
					[0,0,0,2,2,2]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,0,0,5,0,5,7],
						  [7,0,0,0,0,2,0,7],
						  [7,0,0,0,4,2,6,7],
						  [7,0,0,0,0,2,0,7],
						  [7,0,0,0,3,0,4,7],
						  [7,0,0,0,2,2,2,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":1},{"For":1},{"While":1}],
	"nombreDeBloc":10,
	"msg-tuto": "",
	"position":12,
	"orientation":3,
	"if-tuto":"",
	"nb_etoile2":13,
	"nb_etoile3":8
}
,{
	"grilleDesign":[[0,3,0,0,0,0],
					[3,2,2,2,2,2],
					[0,0,4,0,2,2],
					[2,2,2,3,2,2],
					[2,2,2,0,5,2],
					[2,2,2,2,0,6]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,0,3,0,0,0,0,7],
						  [7,3,2,2,2,2,2,7],
						  [7,0,0,4,0,2,2,7],
						  [7,2,2,2,3,2,2,7],
						  [7,2,2,2,0,5,2,7],
						  [7,2,2,2,2,0,6,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":1},{"For":1},{"While":1}],
	"nombreDeBloc":10,
	"msg-tuto": "",
	"position":5,
	"orientation":2,
	"if-tuto":"",
	"nb_etoile2":25,
	"nb_etoile3":13
}
,{
	"grilleDesign":[[2,4,5,3,4,3],
					[5,3,2,0,2,4],
					[4,3,2,2,2,4],
					[4,2,3,6,2,3],
					[5,2,5,2,2,3],
					[4,3,3,4,4,5]],
	"grilleDelimitation":[[7,7,7,7,7,7,7,7],
						  [7,2,4,5,3,4,3,7],
						  [7,4,3,2,2,2,4,7],
						  [7,4,3,2,2,2,4,7],
						  [7,4,2,3,6,2,3,7],
						  [7,5,2,5,2,2,3,7],
						  [7,4,3,3,4,4,5,7],
						  [7,7,7,7,7,7,7,7]],
	"blocLimite":[{"Avancer":1},{"TournerG":1},{"TournerD":1},{"If":1},{"For":1},{"While":1}],
	"nombreDeBloc":10,
	"msg-tuto": "",
	"position":9,
	"orientation":4,
	"if-tuto":"",
	"nb_etoile2":15,
	"nb_etoile3":12
}];
var flag = true;
var limite = GrilleGlobal[id]["blocLimite"];
for(var i in limite){
	switch(i){
		case "0":
			if(!limite[i]["Avancer"]) create_block1.classList.add("action_disabled");
			break;
		case "1":
			if(!limite[i]["TournerG"]) create_block2.classList.add("action_disabled");
			break;
		case "2":
			if(!limite[i]["TournerD"]) create_block3.classList.add("action_disabled");
			break;
		case "3":
			if(!limite[i]["If"]) create_block4.classList.add("action_disabled");
			break;
		case "4":
			if(!limite[i]["For"]) create_block5.classList.add("action_disabled");
			break;
		case "5":
			if(!limite[i]["While"]) create_block7.classList.add("action_disabled");
			break;
	}
}
var compteurIf = 0;
var grilledelimitation = [];
var grille1 = [];
	for(var i in GrilleGlobal[id]["grilleDelimitation"]){
		grilledelimitation.push(GrilleGlobal[id]["grilleDelimitation"][i]);
	}
	console.log(grilledelimitation);
	for(var i in GrilleGlobal[id]["grilleDesign"]){
		grille1.push(GrilleGlobal[id]["grilleDesign"][i]);
	}
	var cpt=0;
	for( var i in grille1)
	{
		console.log('----------------');
		//console.log(cpt);
		//console.log('entre1');
		for(var j in grille1[i])
		{

			if(grille1[i][j] == 1)
			{
				// mettre mettre perso
			}

			if(grille1[i][j] == 2)
			{
				var elmt = document.getElementById(cpt);
				//elmt.style.backgroundColor = "brown";
				elmt.classList.add("obstacle");
				console.log(cpt);
			}

			if(grille1[i][j] == 3)
			{
				var elmt = document.getElementById(cpt);
				elmt.style.backgroundColor = "#e59090";
				console.log(cpt);
				//console.log('entre2');
			}

			if(grille1[i][j] == 4)
			{
				var elmt = document.getElementById(cpt);
				elmt.style.backgroundColor = "#90c0e5";
				console.log(cpt);
				//console.log('entre2');
			}

			if(grille1[i][j] == 5)
			{
				var elmt = document.getElementById(cpt);
				elmt.style.backgroundColor = "#90e595";
				console.log(cpt);
				//console.log('entre2');
			}

			if(grille1[i][j] == 6)
			{
				var elmt = document.getElementById(cpt);
				//elmt.style.backgroundColor = "yellow";
				elmt.classList.add("flag");
				console.log(cpt);
				// mettre drapeau
			}

			cpt ++;		
		}
	}
var tuto = document.getElementById("tuto_background");
function ShowTuto(msg) {
	if (msg.length > 0) {
		tuto.style.display = "block";
		msg = msg.replace(/<space>/g, '<br>')
		document.getElementById("tuto_txt").innerHTML = msg;
	}
	else {
		tuto.style.display = "none";
	}
}

// mouvement 
var Console = document.getElementById('recap');
var BaseOrientation = GrilleGlobal[id]["orientation"];
var ActuelOrientation = GrilleGlobal[id]["orientation"];
var EmplacementPersonnage = GrilleGlobal[id]["position"];
var label = document.getElementById('label_validation_code');
var execute = document.getElementById('play-button');
var game=1;
var compteur = 0;
var color = "black";
var sizeMin = "20";
var sizeMax = "45";
var Tab = [];
var TabCopy = [];
var rotate = 0;
var timer;
var arrayfor = [];
var vrai_algo = [];
var debug = [];
function Init(){
	EmplacementPersonnage = GrilleGlobal[id]["position"];
	XStart = EmplacementPersonnage % 6;
	YStart = (EmplacementPersonnage-XStart) / 6;
	for (var i = Tab.length; i > 0; i--) {Tab.pop();}
	rotate=0;
	compteur=0;
	game=0;
	Tab = [];
	TabCopy = [];
	vrai_algo = [];
	debug = [];
	joueur.style.width = "55px";
	joueur.style.height = "55px";
	joueur.style.position = "absolute";
	joueur.style.top = 117+(58*YStart)+"px";
	joueur.style.left = 1056+(58*XStart)+"px";
	joueur.style.marginTop = "-5px";
	joueur.style.marginLeft = "-4px";
	joueur.style.transitionDuration = "1s";
	/*
	joueur.style.borderTop = sizeMin+"px solid transparent";
	joueur.style.borderLeft = sizeMax+"px solid "+color;
	joueur.style.borderBottom = sizeMin+"px solid transparent";
	joueur.style.borderRight = "";
	*/
	ActuelOrientation = GrilleGlobal[id]["orientation"];
	for(var t=1;t<ActuelOrientation;t++){
			CalculPosition("droite");
	}
	clearTimeout(timer);
	console.log(ActuelOrientation);
	CalculPosition(ActuelOrientation);
	setTimeout(function(){
		execute.classList.remove("play_disabled");
		label.innerHTML = "CORRECT CODE";
		label.style.color = "green"; 
	},1100);
}

function CalculPosition(action) {
	switch(action){
			case "droite":
					rotate += 90
					break;
			case "gauche":
					rotate -= 90;
					break;
	}
	joueur.style.transform =  'rotate('+rotate+'deg) translate3d( 0, 0, 1px)' ;
}

function TournerG(){
	ActuelOrientation--;
	if(ActuelOrientation==0)ActuelOrientation=4;
	CalculPosition('gauche');
	Console.innerHTML += "<div style='margin:5px;'>Turn left</div>";
	Console.scrollTop = Console.scrollHeight;
}

function TournerD(){
	if(ActuelOrientation==4)ActuelOrientation=0;
	ActuelOrientation++;
	CalculPosition('droite');
	Console.innerHTML += "<div style='margin:5px;'>Turn right</div>";
	Console.scrollTop = Console.scrollHeight;
}
function Avancer(){
	var top = joueur.style.top;
	var left = joueur.style.left;
	if(Verif()){
		switch(ActuelOrientation){
		case 1:
			joueur.style.left = Number(left.substr(0,left.length-2))+58+"px";
			break;
		case 2:
			joueur.style.top = Number(top.substr(0,top.length-2))+58+"px";
			break;
		case 3:
			joueur.style.left = Number(left.substr(0,left.length-2))-58+"px";
			break;
		case 4:
			joueur.style.top = Number(top.substr(0,top.length-2))-58+"px";
			break;
		}
		Console.innerHTML += "<div style='margin:5px;'>Move forward</div>";
		Console.scrollTop = Console.scrollHeight;
	}else{
		Console.innerHTML += "<div style='color:red;margin:5px;'>Block encountered</div>";
		Console.scrollTop = Console.scrollHeight;
		Init();
		clearTimeout(timer);
	}
}
function Verif(){
	XActuel = EmplacementPersonnage % 6;
	YActuel = (EmplacementPersonnage-XActuel) / 6;
	XVerif = XActuel + 1;
	YVerif = YActuel + 1;	
	var Flag = true;
	switch(ActuelOrientation){
		case 1:
			if(grilledelimitation[YVerif][XVerif+1]==7 || grilledelimitation[YVerif][XVerif+1]==2)Flag = false;
			else EmplacementPersonnage = YActuel*6 + XActuel+1;
			break;
		case 2:
			if(grilledelimitation[YVerif+1][XVerif]==7 || grilledelimitation[YVerif+1][XVerif]==2) Flag = false;
			else EmplacementPersonnage = (YActuel+1)*6 + XActuel;
			break;
		case 3:
			if(grilledelimitation[YVerif][XVerif-1]==7 || grilledelimitation[YVerif][XVerif-1]==2) Flag = false;
			else EmplacementPersonnage = YActuel*6 + XActuel-1;
			break;
		case 4:
			if(grilledelimitation[YVerif-1][XVerif]==7 || grilledelimitation[YVerif-1][XVerif]==2) Flag = false;
			else EmplacementPersonnage = (YActuel-1)*6 + XActuel;
			break;
	}
	return Flag;
}
function Execute(){
	Tab = [];
	Console.innerHTML = "";
	execute.classList.add("play_disabled");
	game=1;
	for (var i = 1; i < active_blocks.length; i++) {
		var block = document.querySelector('[order="'+i+'"]');
		var instruction = block.getAttribute("balise");
		var actionV = null;
		var actionR = null;
		var condition = null; 
		var action = [];
		if(instruction == "if"){
			condition = block.getAttribute("condition");
			if(block.getAttribute("validate_blocks") != null) actionV = block.getAttribute("validate_blocks");
			if(block.getAttribute("refused_blocks") != null) actionR = block.getAttribute("refused_blocks");
			if(actionV!= null){
				actionV = actionV.split(";");
				actionV.pop();
			}
			action.push({'actionV':actionV});
			if(actionR!=null) {
				actionR = actionR.split(";");
			}
			action.push({'actionR':actionR});
		}
		if(instruction == "while"){
			action.push({'EndWhile_uid':block.getAttribute("endWhile_uid")});
		}
		if(instruction == "endwhile"){
			condition = block.getAttribute("condition");
			action.push({'uid':block.getAttribute("uid")});
		}
		if(instruction == "for"){
			action.push({'Endfor_uid':block.getAttribute("endfor_uid")});
			arrayfor[block.getAttribute("endfor_uid")] = 0;
		}
		if(instruction == "endfor"){
			condition = block.getAttribute("condition");
			condition = Number(condition)-1;
			action.push({'uid':block.getAttribute("uid")});
		}
		Tab.push({"id":i,"instruction":instruction,"action":action,"condition":condition});
	}
	TabCopy = Tab.slice(0);
	console.log(Tab);
	myLoop(Tab,true);
}
function myLoop(Algorithme){
var time = 1000;
if(Algorithme[compteur] !== undefined){
	if(Algorithme[compteur]["instruction"]=="if" || Algorithme[compteur]["instruction"]=="endwhile" || Algorithme[compteur]["instruction"]=="endfor" || Algorithme[compteur]["instruction"]=="while" || Algorithme[compteur]["instruction"]=="for"){
	time = 0;
}
}
timer =	setTimeout(function(){
		label.innerHTML = "RUNNING CODE";
		label.style.color = "orange";           
   	  if(compteur==Algorithme.length && stop){
   	  	console.log(debug);
   	  	setTimeout(function(){
   	  		Init();
   	  	},1000)
      }  	                            
      if (compteur < Algorithme.length && game==1) {
      	debug.push(Algorithme[compteur]["instruction"]+" : "+Algorithme[compteur]["id"]);
      	if(Algorithme[compteur]["instruction"]!="if" && Algorithme[compteur]["instruction"]!="endwhile" && Algorithme[compteur]["instruction"]!="endfor"){
      		if(Algorithme[compteur]["instruction"]!="while" && Algorithme[compteur]["instruction"]!="for"){
      			GererCetteMerde(Algorithme[compteur]["instruction"]);
      		}
      		var index = Algorithme[compteur]["id"];
      		Algorithme.splice(index-1,1);
      		var big = 1;
      			for(var i in Algorithme){
      				if(i<index-1) Algorithme.splice(i,1);
      			}
      			for(var i in Algorithme){
      				Algorithme[i]["id"] = big++;
      				big++;
      			}
      	}else if(Algorithme[compteur]["instruction"]=="endwhile"){
      		var uid = Algorithme[compteur]["action"][0]["uid"];
	      		if(CheckCondition(Algorithme[compteur]["condition"])){
	      			var index = Algorithme[compteur]["id"];
	      			Algorithme.splice(index-1,1);
	      			var big = 1;
      				for(var i in Algorithme){
      					Algorithme[i]["id"] = big;
      					big++;
      				}
      			
	      		}else{
	      			cpt2=0;
	      			flag = false;
	      			for(var i in TabCopy){
	      				if(TabCopy[i]["instruction"]=="while" && TabCopy[i]["action"][0]["EndWhile_uid"] == uid) {
	      					flag=true;
	      				}
	      				if(TabCopy[i]["instruction"]=="endwhile" && TabCopy[i]["action"][0]["uid"] == uid) {
	      					flag=false;
	      				}
	      				if(flag) {
	      					Algorithme.splice(cpt2,0,TabCopy[i]);
	      					cpt2++;
	      				}
	      			}
	      			var big = 1;
	      			for(var i in Algorithme){
	      				Algorithme[i]["id"] = big;
	      				big++;
	      			}
	      		}
      	}else if(Algorithme[compteur]["instruction"]=="endfor"){
      		console.log("mdr");
      		var uid = Algorithme[compteur]["action"][0]["uid"];
      			var index = Algorithme[compteur]["id"];
	      		if(Algorithme[compteur]["condition"] == arrayfor[uid] ){
	      			Algorithme.splice(index-1,1);
      				big = 1;
      				for(var i in Algorithme){
	      				Algorithme[i]["id"] = big;
	      				big++;
	      			}
	      			arrayfor[uid] = 0;
	      		}else{
	      			cpt2=0;
	      			flag = false;
	      			for(var i in TabCopy){
	      				if(TabCopy[i]["instruction"]=="for" && TabCopy[i]["action"][0]["Endfor_uid"] == uid){
	      					flag=true;
	      				} 
	      				if(TabCopy[i]["instruction"]=="endfor" && TabCopy[i]["action"][0]["uid"] == uid) {
	      					flag=false;
	      				}
	      				if(flag) {
	      					Algorithme.splice(cpt2,0,TabCopy[i]);
	      					cpt2++;
	      				}
	      			}
	      			var big = 1;
	      			for(var i in Algorithme){
	      				Algorithme[i]["id"] = big;
	      				big++;
	      			}
	      			arrayfor[uid]++;
	      		}
      	}
      	else{
      		if(CheckCondition(Algorithme[compteur]["condition"])){
      			var index = Algorithme[compteur]["id"];
      			var array = Algorithme[compteur]["action"][0]["actionV"];
      			Algorithme.splice(index-1,1);
      			index = index-2;
      			if(index <= 0) index = 0;
      			var cpt1 = 0;
      			for(var j in array){
      				Algorithme.splice(index+cpt1,0,{"id":0,"instruction":array[j],"action":null,"condition":null});
      				cpt1++;
      			}
      			var big = 1;
      			for(var i in Algorithme){
      				Algorithme[i]["id"] = big;
      				big++;
      			}
      		}
      		else{
      			var index = Algorithme[compteur]["id"];
      			var array = Algorithme[compteur]["action"][1]["actionR"];
      			Algorithme.splice(index-1,1);
      			index = index-2;
      			if(index <= 0) index = 0;
      			var cpt1 = 0;
      			for(var j in array){
      				Algorithme.splice(index+cpt1,0,{"id":0,"instruction":array[j],"action":null,"condition":null});
      				cpt1++;
      			}
      			var big = 1;
      			for(var i in Algorithme){
      				Algorithme[i]["id"] = big;
      				big++;
      			}
      		}
      	}
      	vrai_algo = Algorithme;
      	myLoop(vrai_algo);
      	if(Win() && game==1){
      		game = 0;
      		Console.innerHTML += "<div style='margin:5px;color:green;'>Success !</div>";
      		Console.scrollTop = Console.scrollHeight;
      		setTimeout(function(){
      			calculateEtoile();
      			Init();
      		},1000);
		}            
	 }                                  
},time);
}
function myLoopIf(tab){
	setTimeout(function () {
      if(compteurIf < tab.length && game==1)
      	if(tab[compteurIf].length>1){
      		GererCetteMerde(tab[compteurIf],'','','');
      	}	                            
        compteurIf++;
        if(Win() && flag){
        	flag = false;
      		setTimeout(function(){
      			alert('win');
      			Init();
      		},1000);
      		Console.innerHTML += "<div style='margin:5px;color:green;'>Success !</div>";
      		Console.scrollTop = Console.scrollHeight;
		}             
        myLoopIf(tab);                               
   },1000);
}
function Win(){
	XVerif = EmplacementPersonnage % 6;
	YVerif = (EmplacementPersonnage-XVerif) / 6;
	if(grille1[YVerif][XVerif]==6) return true;
	else return false;
}
function CheckCondition(color){
	XVerif = EmplacementPersonnage % 6;
	YVerif = (EmplacementPersonnage-XVerif) / 6;
	switch(color){
		case "red":
			if(grille1[YVerif][XVerif]==3) return true;
			else return false;
			break;
		case "green":
			if(grille1[YVerif][XVerif]==5) return true;
			else return false;
			break;
		case 'blue':
			if(grille1[YVerif][XVerif]==4) return true;
			else return false;
			break;
		case 'Win':
			if(Win()) return true;
			else return false;
			break;

	}
	return false;

}
function GererCetteMerde(instruction){
	switch(instruction){
		case "TournerG":
			TournerG();
			break;
		case "TournerD":
			TournerD();
				break;
		case "Avancer":
			Avancer();
			break;
	}
}
Init();
ShowTuto(GrilleGlobal[id]["msg-tuto"]);
                     
