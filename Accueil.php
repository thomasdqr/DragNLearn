<html>
<head>
	<title>
		Drag'nLearn
	</title>
</head>
<body>
	<div id="Main">
		<h1>LEVEL SELECTION</h1>
		<label id="username">User : </label><div id="disconnect" onclick="document.location='index.html'"></div>
		<h2 id="h2">Progress : </h2>
		<div id="progressBar">
			<div id="bar"></div>
		</div>
		<div id="ListeNiveau"></div>
	</div>
</body>
</html>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="menu_niveau.css">
<script type="text/javascript">
	var ListeNiveau = document.getElementById('ListeNiveau');
	var bar = document.getElementById('bar');
	var Progression = document.getElementById('h2');
	var Complete = 0;	
	function load(){
		IDUser = localStorage.getItem('IDUser');
		console.log(IDUser);
		$.ajax({
			type:"post",
			data:{Action:"Charger",IDUser:IDUser},
			url:"WebService.php",
			success: function(reponse){
				reponse = JSON.parse(reponse);
				cpt = 0;
				cpt_niveau = 1;
				for(var i in reponse){
					for(var j in reponse[i]){
						var nb_etoile = 0;
						var etoile_couleur = 0;
						if (cpt==1) {
							document.getElementById("username").innerHTML = reponse[i][j];
						}
						if(cpt>2){

							ListeNiveau.innerHTML += '<div class="placement"> <div class="niveau" id="'+cpt_niveau+'"><p class="chiffre">'+cpt_niveau+'</p></div><div id="'+j+'" class="placement_etoile"></div></div>';
							cpt_niveau ++;
							while( nb_etoile < 3)
							{
								if(etoile_couleur < reponse[i][j])
								{
									var et = document.getElementById(j);
									et.innerHTML += '<span class="fa fa-star checked test_etoile color_check"></span>'
									etoile_couleur++;
								}
								else
								{
									var et = document.getElementById(j);
									et.innerHTML += '<span class="fa fa-star test_etoile color_non_check"></span>'
								}
								nb_etoile ++;
							}
							Complete = Complete + Number(reponse[i][j]);
						}
						cpt++;
					}
				}
				bar.style.width = Math.round((Complete*100)/30)+"%";
				Progression.innerHTML += Math.round((Complete*100)/30)+"%"; 

				var niv1 = document.getElementById('1');
				var niv2 = document.getElementById('2');
				var niv3 = document.getElementById('3'); 
				var niv4 = document.getElementById('4');
				var niv5 = document.getElementById('5');
				var niv6 = document.getElementById('6');
				var niv7 = document.getElementById('7');
				var niv8 = document.getElementById('8');
				var niv9 = document.getElementById('9');
				var niv10 = document.getElementById('10');


				niv1.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '1');
					window.location.href = "menu.html";
				};

				niv2.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '2');
					window.location.href = "menu.html";
				};

				niv3.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '3');
					window.location.href = "menu.html";
				};

				niv4.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '4');
					window.location.href = "menu.html";
				};

				niv5.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '5');
					window.location.href = "menu.html";
				};

				niv6.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '6');
					window.location.href = "menu.html";
				};

				niv7.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '7');
					window.location.href = "menu.html";
				};

				niv8.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '8');
					window.location.href = "menu.html";
				};

				niv9.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '9');
					window.location.href = "menu.html";
				};

				niv10.onclick = function()
				{
					console.log('onclick');
					localStorage.setItem('niveau', '10');
					window.location.href = "menu.html";
				};
			}
		});
	}
	load();
	//console.log(Complete);



	
</script>