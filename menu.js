var etoile_couleur = 0;
var info_if = document.getElementById("info_if");
var info_for = document.getElementById("info_for");
var info_while = document.getElementById("info_while");
var info_move_forward = document.getElementById("info_move_forward");
var info_right_turn = document.getElementById("info_right_turn");
var info_left_turn = document.getElementById("info_left_turn");
var paragraphe_info_if = document.getElementById("paragraphe_info_if");
var paragraphe_info_for = document.getElementById("paragraphe_info_for");
var paragraphe_info_while = document.getElementById("paragraphe_info_while");
var paragraphe_info_move_forward = document.getElementById("paragraphe_info_move_forward");
var paragraphe_info_right_turn = document.getElementById("paragraphe_info_right_turn");
var paragraphe_info_left_turn = document.getElementById("paragraphe_info_left_turn");
info_if.onmouseover = function()
{
	paragraphe_info_if.style.transform='scale(1)';
	paragraphe_info_if.style.opacity='1';
};
info_if.onmouseout = function()
{
	paragraphe_info_if.style.transform='scale(0.5)';
	paragraphe_info_if.style.opacity='0';
};
info_for.onmouseover = function()
{
	paragraphe_info_for.style.transform='scale(1)';
	paragraphe_info_for.style.opacity='1';
};
info_for.onmouseout = function()
{
	paragraphe_info_for.style.transform='scale(0.5)';
	paragraphe_info_for.style.opacity='0';
};
info_while.onmouseover = function()
{
	paragraphe_info_while.style.transform='scale(1)';
	paragraphe_info_while.style.opacity='1';
};
info_while.onmouseout = function()
{
	paragraphe_info_while.style.transform='scale(0.5)';
	paragraphe_info_while.style.opacity='0';
};
info_move_forward.onmouseover = function()
{
	paragraphe_info_move_forward.style.transform='scale(1)';
	paragraphe_info_move_forward.style.opacity='1';
};
info_move_forward.onmouseout = function()
{
	paragraphe_info_move_forward.style.transform='scale(0.5)';
	paragraphe_info_move_forward.style.opacity='0';
};
info_right_turn.onmouseover = function()
{
	paragraphe_info_right_turn.style.transform='scale(1)';
	paragraphe_info_right_turn.style.opacity='1';
};
info_right_turn.onmouseout = function()
{
	paragraphe_info_right_turn.style.transform='scale(0.5)';
	paragraphe_info_right_turn.style.opacity='0';
};
info_left_turn.onmouseover = function()
{
	paragraphe_info_left_turn.style.transform='scale(1)';
	paragraphe_info_left_turn.style.opacity='1';
};
info_left_turn.onmouseout = function()
{
	paragraphe_info_left_turn.style.transform='scale(0.5)';
	paragraphe_info_left_turn.style.opacity='0';
};


IDUser = localStorage.getItem('IDUser');


affEtoile();

function affEtoile()
{
	Niveau = localStorage.getItem('niveau');
	console.log("id: " +IDUser+ ' niveau: '+Niveau);
		$.ajax({
	    type:"post",
	    data:{Action:"Charger",IDUser:IDUser},
	    url:"WebService.php",
	    error: function(){
	      alert("erreur BDD");
	    },
	    success: function(reponse){
	      	reponse = JSON.parse(reponse);
	      	cpt = 0;
	      	niveau_calcule = 2 + Number(Niveau);
	      	console.log(niveau_calcule);
	      	var nb_etoile = 0;
	      	etoile_couleur = 0;
	      	for(var i in reponse){
	      		for(var j in reponse[i]){
	      			if(cpt == niveau_calcule)
	      			{
	      				var left = 0;
	      				while( nb_etoile < 3)
	      				{
	      					if(etoile_couleur < reponse[i][j])
	      					{
	      						star.innerHTML += '<span class="fa fa-star checked test_etoile color_check" style="left:'+left+'px"></span>'
	      						etoile_couleur++;
	      						//console.log('aaa');
	      						left += 50;
	      					}
	      					else
	      					{
	      						//star.innerHTML += '<span class="fa fa-star test_etoile color_non_check" style="left:'+left+'px"></span>'
	      						star.innerHTML += '<span class="fa fa-star checked test_etoile color_non_check" style="left:'+left+'px"></span>'
	      						left += 50;
	      					}
	      					nb_etoile ++;

	      				}
	      			}
	      			cpt++;
	      		}
	      	}
	    }
	  });
}


var victory_screen = document.getElementById("victory_screen");
var change_level = document.getElementById("change_level");
var star_victory_screen = document.getElementById("star_victory_screen");
var star_victory_screen_2 = document.getElementById("star_victory_screen_2");
var star_victory_screen_3 = document.getElementById("star_victory_screen_3");
var main_container = document.getElementById("main_container");
var victory_change_level = document.getElementById("victory_change_level");
var victory_continue = document.getElementById("victory_continue");
var x = document.getElementById("x");
var hide_background = document.getElementById("hide_background");
function score_star(score)
{
	console.log('score: '+score);
	victory_screen.style.transform = 'scale(1)';
	victory_screen.style.opacity = '1';
	hide_background.style.backgroundColor='rgba(0, 0, 0, 0.8)';
	hide_background.style.transform='scale(1)';
	if (score==1)
	 {
	 	console.log('aaaaa');
	 	star_victory_screen.style.color="#00B2FF";
	 	star_victory_screen_2.style.color="#707070";
	 	star_victory_screen_3.style.color="#707070";
	 }
	 if (score==2)
	 {
	 	star_victory_screen.style.color="#00B2FF";
	 	star_victory_screen_2.style.color="#00B2FF";
	 	star_victory_screen_3.style.color="#707070";
	 }
	 if (score==3)
	 {
	 	star_victory_screen.style.color="#00B2FF";
	 	star_victory_screen_2.style.color="#00B2FF";
	 	star_victory_screen_3.style.color="#00B2FF";
	 }
}

x.onclick = function()
{
		victory_screen.style.transform='scale(0)';
		hide_background.style.backgroundColor='rgba(0, 0, 0, 0.0)';
		hide_background.style.transform='scale(0)';
};


change_level.onclick = function()
{
	document.location.href="Accueil.php";
}

victory_change_level.onclick = function()
{
	document.location.href="Accueil.php";
}

victory_continue.onclick = function()
{
	victory_screen.style.transform='scale(0)';
	hide_background.style.backgroundColor='rgba(0, 0, 0, 0.0)';
	hide_background.style.transform='scale(0)';
}