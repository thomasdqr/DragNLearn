<?php
$mysql = 'host=localhost';
$bdname = 'workshop';
$charset = 'utf8';
$utilisateur = 'root';
$mdp = '';
$bdd = new PDO('mysql:host=thomasdeltroot.mysql.db;dbname=thomasdeltroot', 'thomasdeltroot', 'Password98');
if(isset($_POST['Action'])){
	$Action = $_POST['Action'];
	switch ($Action) {
		case 'Connexion':
			$req = $bdd -> prepare("SELECT IDUser FROM global WHERE Pseudo=:Pseudo AND Mdp=:Mdp");
			$req->bindParam(':Pseudo',$_POST['user']);
			$req->bindParam(':Mdp',md5($_POST['pasw']));
			if($req -> execute()){
				$data = $req->fetchAll(PDO::FETCH_ASSOC);
				$data = json_encode($data);
				echo $data;
			}
			break;
		case 'Charger':
			$req = $bdd -> prepare("SELECT * FROM global WHERE IDUser=:IDUser");
			$req->bindParam(':IDUser',$_POST['IDUser']);
			if($req -> execute()){
				$data = $req->fetchAll(PDO::FETCH_ASSOC);
				$data = json_encode($data);
				echo $data;
			}
			break;
		case 'Inscription':
			$req = $bdd -> prepare("SELECT Pseudo FROM global WHERE Pseudo=:Pseudo");
			$req->bindParam(':Pseudo',$_POST['user']);
			if($req -> execute()){
				$data = $req->fetchAll(PDO::FETCH_ASSOC);
				if(count($data)!=0){
					echo json_encode("false");
					return;
				}
				$req2 = $bdd -> prepare("INSERT INTO global(Pseudo, Mdp) VALUES (:Pseudo, :Mdp)");
				$req2->bindParam(':Pseudo',$_POST['user']);
				$req2->bindParam(':Mdp',md5($_POST['pasw']));
				try {
					$req2->execute();
					echo json_encode("true");
				}
				catch (PDOException $Exception){
					echo json_encode($Exception);
				}
			}
			break;

		case 'etoile':
			$nb_etoile = $_POST['nb_etoile'];
			$id_user = $_POST['id_user'];
			$niveau = "Level".$_POST["niveau"];
			$bdd -> query("UPDATE global SET $niveau = '$nb_etoile' WHERE IDUser='$id_user'");
			break;

		
	}
}

