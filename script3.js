var nb_block = 0;
function calculateScore() {
	// calculer score
	nb_block = 0;
	active_blocks.forEach(function(block)
	{
		if(block.getAttribute("balise") != "endfor" && block.getAttribute("balise") != "endwhile" && block.getAttribute("balise") != null)
		{
			nb_block ++;
			/*console.log(block.getAttribute("balise"));
			console.log("---");*/
		}

		if(block.getAttribute("balise") == "if")
		{	
			if(block.getAttribute("validate_blocks") != null )
			{
				var tab_validate = block.getAttribute("validate_blocks").split(";");
				tab_validate.forEach(function(mot)
				{
					if(mot.length > 0)
					{
						nb_block ++;
					}
				});
			}

			if(block.getAttribute("refused_blocks") != null )
			{
				var tab_unvalidate = block.getAttribute("refused_blocks").split(";");
				tab_unvalidate.forEach(function(mot)
				{
					if(mot.length > 0)
					{
						nb_block ++;
					}
				});
			}
		}
	});


	console.log("score : "+nb_block);
}

function calculateEtoile()
{
	
	var test_niveau = Niveau - 1;
	//console.log('niveau: ' + test_niveau);
	var nb_etoile2 = GrilleGlobal[test_niveau]["nb_etoile2"];
	console.log(nb_etoile2);
	//console.log('nb etoile 2:' +nb_etoile2);

	var nb_etoile3 = GrilleGlobal[test_niveau]["nb_etoile3"];
	console.log(nb_etoile3);
	//console.log('nb etoile 3:' +nb_etoile3);
	var etoile_niveau_valider;
	if(nb_block <= nb_etoile2 && nb_block > nb_etoile3)
	{
		// appel au web_service pour mettre dans la base
		etoile_niveau_valider = 2;
		//console.log(etoile_niveau_valider);
	}
	else if (nb_block <= nb_etoile3) 
	{
		// appel au web service pour mettre dans la base
		etoile_niveau_valider = 3;
		//console.log(etoile_niveau_valider);
	}
	else // 0 etoile
	{
		// appelau web service pour mettre dans la base
		etoile_niveau_valider = 1;
		//console.log(etoile_niveau_valider);
	}

	score_star(etoile_niveau_valider);
	if(etoile_couleur < etoile_niveau_valider)
	{
		$.ajax({
	    type:"post",
	    data:{Action:"etoile",nb_etoile:etoile_niveau_valider, niveau: Niveau, id_user: localStorage.getItem('IDUser')},
	    url:"WebService.php",
	    success: function(reponse){
	      	console.log('ok');
	      	affEtoile();
	    }
		});
	}
}