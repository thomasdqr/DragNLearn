// The creator blocks (if / for / while / avancer / etc...)
/*
block1 = avancer
block2 = turn left
block3 = turn right
block4 = if
block5 = for
block6 = while
*/
var create_block1 = document.getElementById("move_forward");
var create_block2 = document.getElementById("left_turn");
var create_block3 = document.getElementById("right_turn");
var create_block4 = document.getElementById("if");
var create_block5 = document.getElementById("for");
var create_block7 = document.getElementById("while");

var workspace = document.getElementById("code_container");

// Position de la souris
var pos_x = 0;
var pos_y = 0;

// Position précédente
var last_pos_x = 0;
var last_pos_y = 0;

// Element actuellement déplacé
var element_dragged;
var mouse_down = false;

var active_blocks = [document.getElementById("start")];
var last_order = 1;

// On clique sur le bouton de création
create_block1.onmousedown = function() {
	create_block(1);
}
create_block2.onmousedown = function() {
	create_block(2);
}
create_block3.onmousedown = function() {
	create_block(3);
}
create_block4.onmousedown = function() {
	create_block(4);
}
create_block5.onmousedown = function() {
	create_block(5);
}
create_block7.onmousedown = function() {
	create_block(7);
}


var closest_block;

var special_insert = 0;
var if_block;

var blocks_in_if = [];

// Création d'un bloc enfant
function create_block(index) {
	if (index == 1) {
		var block = document.createElement('div');
		var text = document.createElement('p');
		text.classList.add("action_name");
		text.innerHTML = "MOVE FORWARD";
		block.appendChild(text);
		block.classList.add('action_code');
		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute('balise', 'Avancer');
		block.setAttribute('in_for', 'false');
		block.style.left = "-170px";
		block.style.top = workspace.scrollTop+330+"px";
		element_dragged = block;
		moveElement();
		active_blocks.push(block);
	}
	else if (index == 2) {
		var block = document.createElement('div');
		var text = document.createElement('p');
		text.classList.add("action_name");
		text.innerHTML = "TURN LEFT";
		block.appendChild(text);
		block.classList.add('action_code');
		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute('balise', 'TournerG');
		block.setAttribute('in_for', 'false');
		block.style.left = "-170px";
		block.style.top = workspace.scrollTop+550+"px";;
		element_dragged = block;
		moveElement();
		active_blocks.push(block);
	}
	else if (index == 3) {
		var block = document.createElement('div');
		var text = document.createElement('p');
		text.classList.add("action_name");
		text.innerHTML = "TURN RIGHT";
		block.appendChild(text);
		block.classList.add('action_code');
		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute('balise', 'TournerD');
		block.setAttribute('in_for', 'false');
		block.style.left = "-170px";
		block.style.top = workspace.scrollTop+440+"px";;
		element_dragged = block;
		moveElement();
		active_blocks.push(block);
	}
	else if (index == 4) {
		var block = document.createElement('div');
		var lines_start = document.createElement('div');
		var lines_end = document.createElement('div');
		block.classList.add('action_code');
		lines_start.classList.add('if_lines_start');
		lines_end.classList.add('if_lines_end');

		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.appendChild(lines_start);
		block.appendChild(lines_end);

		var text1 = document.createElement('p');
		text1.style.top = "0px";
		text1.classList.add("action_name");
		text1.innerHTML = "IF";
		block.appendChild(text1);

		var text2 = document.createElement('p');
		text2.style.top = "20px";
		text2.classList.add("action_name");
		text2.innerHTML = "Player on color :";
		block.appendChild(text2);

		var select = document.createElement('select');
		select.style.top = "60px";
		select.classList.add("color_select");
		select.setAttribute("onchange", "changeCondition(this)");
		var option1 = document.createElement('option');
		option1.value = "red";
		option1.innerHTML = "RED";
		select.appendChild(option1);
		var option2 = document.createElement('option');
		option2.value = "green";
		option2.innerHTML = "GREEN";
		select.appendChild(option2);
		var option3 = document.createElement('option');
		option3.value = "blue";
		option3.innerHTML = "BLUE";

		select.setAttribute("onmouseenter", "DisableParentMouseDown(this)");
		select.setAttribute("onmouseout", "EnableParentMouseDown(this)");

		select.appendChild(option3);
		block.appendChild(select);

		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute("balise", "if");
		block.setAttribute('in_for', 'false');
		block.setAttribute("max", "");
		block.setAttribute('condition', 'red');
		block.style.left = "-170px";
		block.style.top = workspace.scrollTop+"px";;
		element_dragged = block;
		moveElement();
		active_blocks.push(block);
	}
	else if (index == 5) {
		var block = document.createElement('div');
		var child_block = document.createElement('div')
		block.classList.add('block5');
		//child_block.style.height = "100px";
		child_block.style.width = "200px";
		child_block.style.marginLeft = "-25px";
		child_block.classList.add('action_code');
		block.appendChild(child_block);

		var text = document.createElement('p');
		text.classList.add("action_name");
		text.innerHTML = "FOR";
		text.style.top = "10px";
		block.appendChild(text);

		var text2 = document.createElement('p');
		text2.classList.add("action_name");
		text2.innerHTML = "INCREMENTER < ";
		text2.style.top = "45px";
		text2.style.left = "10px";
		text2.style.textAlign = "left";
		text2.style.fontSize = "13px";
		block.appendChild(text2);

		var input = document.createElement('input');
		input.type = "number";
		input.name = "number_for";
		input.id = "number_for";
		input.min = "1";
		input.max = "50";
		input.value = "1";
		input.setAttribute("onmouseenter", "DisableParentMouseDown(this)");
		input.setAttribute("onmouseout", "EnableParentMouseDown(this)");
		input.setAttribute("onchange", "changeCondition(this)");
		block.appendChild(input);

		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute('balise', 'for');
		block.setAttribute('ended', 'false');
		block.setAttribute("uid", GenerateUID());
		block.style.left = "-170px";
		block.style.top = workspace.scrollTop+110+"px";
		element_dragged = block;
		moveElement();
		active_blocks.push(block);
	}
	else if (index == 6) {
		var block = document.createElement('div');
		var child_block = document.createElement('div')
		block.classList.add('block5');
		//child_block.style.height = "100px";
		child_block.style.width = "200px";
		child_block.style.marginLeft = "-25px";
		child_block.classList.add('action_code');
		block.appendChild(child_block);

		var text = document.createElement('p');
		text.classList.add("action_name");
		text.innerHTML = "INCREMENTER ++";
		text.style.top = "15px";
		text.style.fontSize = "13px";
		block.appendChild(text);

		var text2 = document.createElement('p');
		text2.classList.add("action_name");
		text2.innerHTML = "END OF FOR";
		text2.style.top = "40px";
		text2.style.left = "10px";
		//text2.style.textAlign = "left";
		//text2.style.fontSize = "13px";
		block.appendChild(text2);

		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute('balise', 'endfor');
		block.setAttribute("uid", GenerateUID());
		block.setAttribute("for_uid", element_dragged.getAttribute("uid"));
		block.setAttribute('condition', '1');
		element_dragged.setAttribute("endfor_uid", block.getAttribute("uid"));
		block.style.left = element_dragged.style.left;
		block.style.top = Number(element_dragged.style.top.replace("px",""))+100+"px";

		var closest_order = parseInt(closest_block.getAttribute("order"));
		if (closest_order != parseInt(block.getAttribute("order")) - 1) {
			active_blocks.forEach(function(_block) {
				if (parseInt(_block.getAttribute("order")) > closest_order && _block != block) {
					if (block.getAttribute("balise") == "if") {
						_block.style.top = parseInt(_block.style.top.replace("px", "")) + 304 + "px";
						//console.log("big move down");
					}
					else {
						_block.style.top = parseInt(_block.style.top.replace("px", "")) + 100 + "px";
						//console.log("move down");
					}
					_block.setAttribute("order", parseInt(_block.getAttribute("order")) + 1);
				}
			});
		}
		block.setAttribute("order", closest_order + 1);

		//element_dragged = block;
		//moveElement();
		active_blocks.push(block);
	}
	else if (index == 7) {
		var block = document.createElement('div');
		var child_block = document.createElement('div')
		block.classList.add('block5');
		child_block.style.width = "200px";
		child_block.style.marginLeft = "-25px";
		child_block.classList.add('action_code');
		block.appendChild(child_block);

		block.onmousedown = moveElement;
		workspace.appendChild(block);

		var text1 = document.createElement('p');
		text1.style.top = "0px";
		text1.classList.add("action_name");
		text1.innerHTML = "WHILE";
		block.appendChild(text1);

		var text2 = document.createElement('p');
		text2.style.top = "20px";
		text2.classList.add("action_name");
		text2.innerHTML = "Player is NOT :";
		block.appendChild(text2);

		var select = document.createElement('select');
		select.style.top = "60px";
		select.classList.add("color_select");
		select.setAttribute("onchange", "changeCondition(this)");
		var option1 = document.createElement('option');
		option1.value = "red";
		option1.innerHTML = "ON RED";
		select.appendChild(option1);
		var option2 = document.createElement('option');
		option2.value = "green";
		option2.innerHTML = "ON GREEN";
		select.appendChild(option2);
		var option3 = document.createElement('option');
		option3.value = "blue";
		option3.innerHTML = "ON BLUE";
		select.appendChild(option3);
		var option4 = document.createElement('option');
		option4.value = "flag";
		option4.innerHTML = "ON CHEESE";
		select.appendChild(option4);

		select.setAttribute("onmouseenter", "DisableParentMouseDown(this)");
		select.setAttribute("onmouseout", "EnableParentMouseDown(this)");

		block.appendChild(select);

		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute('balise', 'while');
		block.setAttribute('ended', 'false');
		block.setAttribute("uid", GenerateUID());
		block.style.left = "-170px";
		block.style.top = workspace.scrollTop+220+"px";
		element_dragged = block;
		moveElement();
		active_blocks.push(block);
	}
	else if (index == 8) {
		var block = document.createElement('div');
		var child_block = document.createElement('div')
		block.classList.add('block5');
		child_block.style.width = "200px";
		child_block.style.marginLeft = "-25px";
		child_block.classList.add('action_code');
		block.appendChild(child_block);

		var text = document.createElement('p');
		text.classList.add("action_name");
		text.innerHTML = "END OF WHILE";
		block.appendChild(text);
		block.onmousedown = moveElement;
		workspace.appendChild(block);
		block.setAttribute("onmouseenter", "changeActiveElement(this)");
		block.setAttribute('balise', 'endwhile');
		block.setAttribute("uid", GenerateUID());
		block.setAttribute("while_uid", element_dragged.getAttribute("uid"));
		element_dragged.setAttribute("endwhile_uid", block.getAttribute("uid"));
		block.style.left = element_dragged.style.left;
		block.style.top = Number(element_dragged.style.top.replace("px",""))+100+"px";

		var closest_order = parseInt(closest_block.getAttribute("order"));
		if (closest_order != parseInt(block.getAttribute("order")) - 1) {
			active_blocks.forEach(function(_block) {
				if (parseInt(_block.getAttribute("order")) > closest_order && _block != block) {
					if (block.getAttribute("balise") == "if") {
						_block.style.top = parseInt(_block.style.top.replace("px", "")) + 304 + "px";
						//console.log("big move down");
					}
					else {
						_block.style.top = parseInt(_block.style.top.replace("px", "")) + 100 + "px";
						//console.log("move down");
					}
					_block.setAttribute("order", parseInt(_block.getAttribute("order")) + 1);
				}
			});
		}
		block.setAttribute("order", closest_order + 1);
		block.setAttribute('condition', 'red');

		//element_dragged = block;
		//moveElement();
		active_blocks.push(block);
	}
}

// On change l'élément actif
function changeActiveElement(element) {
	if (!mouse_down) {
		element_dragged = element;
	}
}

// Clic de la souris de l'élément
function moveElement(e)  {
	//element_dragged.style.opacity = 0;
	mouse_down = true;
	e = e || window.event;
	e.preventDefault();

	last_pos_x = e.clientX;
	last_pos_y = e.clientY;
	document.onmouseup = stopDrag;
	document.onmousemove = changePosition;
}

// Déplacement de l'élément
function changePosition(e) {
	element_dragged.style.zIndex = 200;
	element_dragged.style.opacity = 0.5;
	e = e || window.event;
	e.preventDefault();

	pos_x = last_pos_x - e.clientX;
	pos_y = last_pos_y - e.clientY;
	last_pos_x = e.clientX;
	last_pos_y = e.clientY;
	element_dragged.style.top = (element_dragged.offsetTop - pos_y) + "px";
	element_dragged.style.left = (element_dragged.offsetLeft - pos_x) + "px";

	closest_block = FindClosestBlock(element_dragged);
	active_blocks.forEach(function(block) {
		if (block.id == "start") {
			//block.style.backgroundColor = "black";
			block.style.filter = "brightness(100%)";

		}
		else {
			block.style.filter = "brightness(100%)";
			//block.style.backgroundColor = "red";
		}
	});
	if (closest_block != null) {
		closest_block.style.filter = "brightness(20%)";
		//closest_block.style.backgroundColor = "blue";
	}
}

// Arrêt du déplacement
function stopDrag() {
	element_dragged.style.opacity = 1;
	mouse_down = false;
	document.onmouseup = null;
	document.onmousemove = null;

	if (closest_block != null) {
		var closest_order = parseInt(closest_block.getAttribute("order"));
		if (closest_block.getAttribute("balise") == "if") {
			element_dragged.style.top = closest_block.offsetTop + 304 + "px";
		}
		else {
			element_dragged.style.top = closest_block.offsetTop + 100 + "px";
		}
		if (element_dragged.getAttribute("balise") == "for" && element_dragged.getAttribute("ended") == "false") {
			element_dragged.style.left = closest_block.offsetLeft + "px";
			create_block(6);
			element_dragged.setAttribute("ended", "true");
		}

		if (element_dragged.getAttribute("balise") == "while" && element_dragged.getAttribute("ended") == "false") {
			element_dragged.style.left = closest_block.offsetLeft + "px";
			create_block(8);
			element_dragged.setAttribute("ended", "true");
		}

		element_dragged.style.left = closest_block.offsetLeft + "px";
		if (closest_order != parseInt(element_dragged.getAttribute("order")) - 1) {
			active_blocks.forEach(function(block) {
				if (parseInt(block.getAttribute("order")) > closest_order && block != element_dragged) {
					if (element_dragged.getAttribute("balise") == "if") {
						block.style.top = parseInt(block.style.top.replace("px", "")) + 304 + "px";
						//console.log("big move down");
					}
					else {
						block.style.top = parseInt(block.style.top.replace("px", "")) + 100 + "px";
						//console.log("move down");
					}
					block.setAttribute("order", parseInt(block.getAttribute("order")) + 1);
				}
			});
		}
		element_dragged.setAttribute("order", closest_order + 1);
		
	}
	else {
		if (element_dragged.getAttribute("balise") == "for" && element_dragged.getAttribute("ended") =="true") {
			var endfor = document.querySelector('[uid="'+element_dragged.getAttribute("endfor_uid")+'"]');

			active_blocks.splice(active_blocks.indexOf(endfor), 1);
			active_blocks.forEach(function(block) {
				if (parseInt(block.getAttribute("order")) >= parseInt(endfor.getAttribute("order"))) {
					block.setAttribute("order", parseInt(block.getAttribute("order")) - 1);
					block.style.top = parseInt(block.style.top.replace("px", "")) - 100 + "px";
				}
			});
			endfor.remove();
		}

		if (element_dragged.getAttribute("balise") == "endfor") {
			var _for = document.querySelector('[uid="'+element_dragged.getAttribute("for_uid")+'"]');

			active_blocks.splice(active_blocks.indexOf(_for), 1);
			active_blocks.forEach(function(block) {
				if (parseInt(block.getAttribute("order")) >= parseInt(_for.getAttribute("order"))) {
					block.setAttribute("order", parseInt(block.getAttribute("order")) - 1);
					block.style.top = parseInt(block.style.top.replace("px", "")) - 100 + "px";
				}
			});
			_for.remove();
		}

		if (element_dragged.getAttribute("balise") == "while" && element_dragged.getAttribute("ended") =="true") {
			var endwhile= document.querySelector('[uid="'+element_dragged.getAttribute("endwhile_uid")+'"]');

			active_blocks.splice(active_blocks.indexOf(endwhile), 1);
			active_blocks.forEach(function(block) {
				if (parseInt(block.getAttribute("order")) >= parseInt(endwhile.getAttribute("order"))) {
					block.setAttribute("order", parseInt(block.getAttribute("order")) - 1);
					block.style.top = parseInt(block.style.top.replace("px", "")) - 100 + "px";
				}
			});
			endwhile.remove();
		}

		if (element_dragged.getAttribute("balise") == "endwhile") {
			var _while = document.querySelector('[uid="'+element_dragged.getAttribute("while_uid")+'"]');

			active_blocks.splice(active_blocks.indexOf(_while), 1);
			active_blocks.forEach(function(block) {
				if (parseInt(block.getAttribute("order")) >= parseInt(_while.getAttribute("order"))) {
					block.setAttribute("order", parseInt(block.getAttribute("order")) - 1);
					block.style.top = parseInt(block.style.top.replace("px", "")) - 100 + "px";
				}
			});
			_while.remove();
		}

		active_blocks.splice(active_blocks.indexOf(element_dragged), 1);
		active_blocks.forEach(function(block) {
			if (parseInt(block.getAttribute("order")) >= parseInt(element_dragged.getAttribute("order"))) {
				block.setAttribute("order", parseInt(block.getAttribute("order")) - 1);
				block.style.top = parseInt(block.style.top.replace("px", "")) - 100 + "px";
			}
		});
		element_dragged.remove();
		if (special_insert == 1 && element_dragged.getAttribute("balise") != "if" && element_dragged.getAttribute("balise") != "for" && element_dragged.getAttribute("balise") != "endfor" && element_dragged.getAttribute("balise") != "while" && element_dragged.getAttribute("balise") != "endwhile") {
			var previous_blocks = if_block.getAttribute("validate_blocks");
			if (previous_blocks == null) {
				previous_blocks = "";
			}
			if_block.setAttribute("validate_blocks", previous_blocks + element_dragged.getAttribute("balise")+";");
		}
		else if (special_insert == 2 && element_dragged.getAttribute("balise") != "if" && element_dragged.getAttribute("balise") != "for" && element_dragged.getAttribute("balise") != "endfor" && element_dragged.getAttribute("balise") != "while" && element_dragged.getAttribute("balise") != "endwhile") {
			var previous_blocks = if_block.getAttribute("refused_blocks");
			if (previous_blocks == null) {
				previous_blocks = "";
			}
			if_block.setAttribute("refused_blocks", previous_blocks + element_dragged.getAttribute("balise")+";");
		}

		// Show limitations :
		if ((special_insert == 1 || special_insert == 2) && element_dragged.getAttribute("balise") == "if") {
			alert("You can't add 'if' in another 'if' in this version");
		}
		else if ((special_insert == 1 || special_insert == 2) && (element_dragged.getAttribute("balise") == "for" || element_dragged.getAttribute("balise") == "endfor")) {
			alert("You can't add 'for' loops in a an 'if' in this version");
		}
		else if ((special_insert == 1 || special_insert == 2) && (element_dragged.getAttribute("balise") == "while" || element_dragged.getAttribute("balise") == "endwhile")) {
			alert("You can't add 'while' loops in a an 'if' in this version");
		}
		
	}

	// CHECK IF HOLE IN CHAIN :
	
	var order_index;
	for (order_index = 0; order_index < active_blocks.length; order_index++) { 
		var exist = false;
		var hole_index = 0;
		active_blocks.forEach(function(block) {
			if (parseInt(block.getAttribute("order")) == order_index) {
				exist = true;
			}
		});
		if (!exist) {
			//console.log("hole found ! index : "+order_index);
			
			active_blocks.forEach(function(block) {
				if (block != document.getElementById("start") && block.getAttribute("order") > order_index) {
					block.setAttribute("order", parseInt(block.getAttribute("order")) - 1);
					block.style.top = parseInt(block.style.top.replace("px", "")) - 100 + "px";
				}
			});
			break;
			
		}

	}

	// REORGANISE THIS MESS

	// reorganise active blocks :
	var start_y = 110;
	for (var i = 1; i < active_blocks.length; i++) {
		var block = document.querySelector('[order="'+i+'"]');
		if (block.getAttribute("balise") == "if") {
			block.style.top = start_y + "px";
			start_y += 304 + (100 * parseInt(block.getAttribute("max")));
		}
		else {
			block.style.top = start_y + "px";
			start_y += 100;
		}
	}
	// Do it twice to fix everything
	FixThisMess();
	FixThisMess();
	workspace.scrollTop = workspace.scrollHeight;

	// Reset colors
	active_blocks.forEach(function(block) {
		if (block.id == "start") {
			//block.style.backgroundColor = "black";
			block.style.filter = "brightness(100%)";

		}
		else {
			block.style.filter = "brightness(100%)";
			//block.style.backgroundColor = "red";
		}
	})

	calculateScore();
}

function FindClosestBlock(current_block) {
	var min_distance = 999999;
	var closest_block = null;
	special_insert = 0;
	active_blocks.forEach(function(block) {
		if (block != current_block) {
			// Gestion des insertions impossibles de for :
			//BOUCLES FOR DANS FOR :
			
			if (current_block.getAttribute("ended") == "true" && ((current_block.getAttribute("balise") == "for" && block.getAttribute("in_for") == "true") || (block.getAttribute("balise") == "for" && current_block.getAttribute("balise") == "for"))) {
				return null;
			}
			
			if ((current_block.getAttribute("balise") == "endfor" && block.getAttribute("in_for") == "true") || (current_block.getAttribute("balise") == "endfor" && block.getAttribute("balise") == "for" && block.getAttribute("endfor_uid") != current_block.getAttribute("uid") ) ) {
				return null;
			}
			
			
			if (current_block.getAttribute("balise") == "endfor" && Number(block.getAttribute("order")) < Number(document.querySelector('[uid="'+current_block.getAttribute("for_uid")+'"]').getAttribute("order")) ) {
				return null;
			}
			if (current_block.getAttribute("ended") == "true" && current_block.getAttribute("balise") == "for" && Number(block.getAttribute("order")) >= Number(document.querySelector('[uid="'+current_block.getAttribute("endfor_uid")+'"]').getAttribute("order")) ) {
				return null;
			}

			if ( (current_block.getAttribute("balise") == "for" && current_block.getAttribute("ended") == "true") && (block.getAttribute("in_while") == "true" || block.getAttribute("balise") == "while") ) {
				return null;
			}
			if ( current_block.getAttribute("balise") == "endfor" && (block.getAttribute("in_while") == "true" || block.getAttribute("balise") == "while") ) {
				return null;
			}

			// Gestion des insertions impossibles de while :
			//BOUCLES WHILE DANS WHILE
			if (current_block.getAttribute("ended") == "true" && ((current_block.getAttribute("balise") == "while" && block.getAttribute("in_while") == "true") || (block.getAttribute("balise") == "while" && current_block.getAttribute("balise") == "while"))) {
				return null;
			}
			
			if ((current_block.getAttribute("balise") == "endwhile" && block.getAttribute("in_while") == "true") || (current_block.getAttribute("balise") == "endwhile" && block.getAttribute("balise") == "while" && block.getAttribute("endwhile_uid") != current_block.getAttribute("uid") ) ) {
				return null;
			}
			
			
			if (current_block.getAttribute("balise") == "endwhile" && Number(block.getAttribute("order")) < Number(document.querySelector('[uid="'+current_block.getAttribute("while_uid")+'"]').getAttribute("order")) ) {
				return null;
			}
			if (current_block.getAttribute("ended") == "true" && current_block.getAttribute("balise") == "while" && Number(block.getAttribute("order")) >= Number(document.querySelector('[uid="'+current_block.getAttribute("endwhile_uid")+'"]').getAttribute("order")) ) {
				return null;
			}


			if ( (current_block.getAttribute("balise") == "while" && current_block.getAttribute("ended") == "true") && (block.getAttribute("in_for") == "true" || block.getAttribute("balise") == "for") ) {
				return null;
			}
			if ( current_block.getAttribute("balise") == "endwhile" && (block.getAttribute("in_for") == "true" || block.getAttribute("balise") == "for") ) {
				return null;
			}

			if (block.getAttribute("balise") == "if") {
				var distance = DistanceBetween(block.offsetLeft, block.offsetTop + 200 + (100*Number(block.getAttribute("max"))), current_block.offsetLeft, current_block.offsetTop);
				var distance_left = DistanceBetween(block.offsetLeft - 250, block.offsetTop + 150 + (100*Number(block.getAttribute("max"))), current_block.offsetLeft, current_block.offsetTop);
				var distance_right = DistanceBetween(block.offsetLeft + 250, block.offsetTop + 150 + (100*Number(block.getAttribute("max"))), current_block.offsetLeft, current_block.offsetTop);
				if (distance_left < distance || distance_right < distance) {
					if (distance_left < distance_right && distance_left < 100) {
						special_insert = 1;
						if_block = block;
					}
					else if (distance_left > distance_right && distance_right < 100) {
						special_insert = 2;
						if_block = block;
					}
					return null;
				}
			}
			else {
				var distance = DistanceBetween(block.offsetLeft, block.offsetTop, current_block.offsetLeft, current_block.offsetTop);
			}
			if (distance < min_distance && distance < 100) {
				closest_block = block;
				min_distance = distance;
			}
		}
	});
return closest_block;
}

function DistanceBetween(x1, y1, x2, y2) {
	var a = x1 - x2;
	var b = y1 - y2;

	var c = Math.sqrt( a*a + b*b );
	return c;
}

function CloseIfBlock(block) {
	block = block.parentNode;
	var my_if_block = document.querySelector('[order="'+block.getAttribute("if_id")+'"]'); 
	var action_list = [];
	if (block.getAttribute("condition") == "validate") {
		action_list = my_if_block.getAttribute("validate_blocks").split(";");
		action_list.pop();
		action_list.splice(action_list.indexOf(action_list[parseInt(block.getAttribute("if_order"))]), 1);
		console.log(action_list);
		var result = action_list.join(';');
		if (result.length > 0) {
			result = result + ";";
		}
		my_if_block.setAttribute("validate_blocks", result);
	}
	else if (block.getAttribute("condition") == "refused") {
		action_list = my_if_block.getAttribute("refused_blocks").split(";");
		action_list.pop();
		action_list.splice(action_list.indexOf(action_list[parseInt(block.getAttribute("if_order"))]), 1	);
		var result = action_list.join(';');
		if (result.length > 0) {
			result = result + ";";
		}
		my_if_block.setAttribute("refused_blocks", result);
	}

	blocks_in_if.splice(blocks_in_if.indexOf(block), 1);
	block.remove();

	// Do it twice to fix everything;
	FixThisMess();
	FixThisMess();

	calculateScore();

	
}

function FixThisMess() {

	var all_if = document.querySelectorAll('[balise="if"]');
	blocks_in_if.forEach(function(block) {
		block.remove();
	});
	blocks_in_if = [];

	all_if.forEach(function(_if_block) {
	// reoganise if :
	if (_if_block != null) {
		var v_blocks = _if_block.getAttribute("validate_blocks");
		var r_blocks = _if_block.getAttribute("refused_blocks");
		var max = 0;
		if (r_blocks != null) {
			r_list = r_blocks.split(";");
			max = r_list.length;

			var index = 0;
			var z_index = 100;
			r_list.forEach(function(element) {
				if (element.length > 0) {
					var block = document.createElement('div');
					var close = document.createElement('div');
					var text = document.createElement('p');
					text.classList.add("action_name");
					block.classList.add('action_code');
					close.classList.add("close_btn");
					if (element == "Avancer") {
						text.innerHTML = "MOVE FORWARD";
						//block.classList.add('create_block1');
						//block.classList.add('red');
					}
					else if (element=="TournerG") {
						text.innerHTML = "TURN LEFT";
						//block.classList.add('block2');
						//block.classList.add('green');
					}
					else if (element=="TournerD") {
						text.innerHTML = "TURN RIGHT";
						//block.classList.add('block3');
						//block.classList.add('yellow');
					}
					block.style.zIndex = z_index;
					block.appendChild(text);
					block.setAttribute("if_order", index);
					close.setAttribute("onmousedown","CloseIfBlock(this)");
					block.setAttribute("if_id", _if_block.getAttribute("order"));
					block.setAttribute("condition", "refused");
					block.appendChild(close);
					workspace.appendChild(block);
					block.style.top = parseInt(_if_block.style.top.replace("px", "")) + 200 + (index * 100) + "px";
					block.style.left = parseInt(_if_block.style.left.replace("px", "")) + 220+ "px";
					blocks_in_if.push(block);
					index += 1;
				}
				z_index -= 1;
			});
		}
		if (v_blocks != null) {
			v_list = v_blocks.split(";");
			if (v_list.length > max) {
				max = v_list.length;
			}
			var index = 0;
			var z_index = 100;
			v_list.forEach(function(element) {
				if (element.length > 0) {
					var block = document.createElement('div');
					var close = document.createElement('div');
					var text = document.createElement('p');
					text.classList.add("action_name");
					block.classList.add('action_code');
					close.classList.add("close_btn");
					if (element == "Avancer") {
						text.innerHTML = "MOVE FORWARD";
						//block.classList.add('create_block1');
						//block.classList.add('red');
					}
					else if (element=="TournerG") {
						text.innerHTML = "TURN LEFT";
						//block.classList.add('block2');
						//block.classList.add('green');
					}
					else if (element=="TournerD") {
						text.innerHTML = "TURN RIGHT";
						//block.classList.add('block3');
						//block.classList.add('yellow');
					}
					block.style.zIndex = z_index;
					block.appendChild(text);
					close.setAttribute("onmousedown","CloseIfBlock(this)");
					block.setAttribute("if_order", index);
					block.setAttribute("if_id", _if_block.getAttribute("order"));
					block.setAttribute("condition", "validate");
					block.appendChild(close);
					workspace.appendChild(block);
					block.style.top = parseInt(_if_block.style.top.replace("px", "")) + 200 + (index * 100) + "px";
					block.style.left = parseInt(_if_block.style.left.replace("px", "")) - 220+ "px";
					blocks_in_if.push(block);
					index += 1;

					
				}
				z_index -= 1;
			});
		}
		if (max == 0) {
			max = 1;
		}
		_if_block.childNodes[1].style.marginTop = (100 * (max-1)) + "px"; 
		_if_block.setAttribute("max", (max-1));
	}
});

	// Reorganise twice 

	var start_y = 110;
	var in_for = false;
	var in_while = false;
	var last_loop = [];
	var code_correct = true;
	var z_index = 99;
	for (var i = 1; i < active_blocks.length; i++) {
		var block = document.querySelector('[order="'+i+'"]');
		if (block.getAttribute("balise") == "if") {
			block.style.top = start_y + "px";
			start_y += 304 + (100 * parseInt(block.getAttribute("max")));
		}
		else {
			block.style.top = start_y + "px";
			start_y += 100;
		}

		if (block.getAttribute("balise") == "for") {
			last_loop.push(block.getAttribute("endfor_uid"));
			in_for = true;
		}
		else if (block.getAttribute("balise") == "endfor") {
			if (block.getAttribute("uid") == last_loop[last_loop.length - 1]) {
				console.log("ok");
				last_loop.pop();
			}
			else {
				//alert("incorrect code !");
				code_correct = false;
			}
			in_for = false;
		}
		else {
			if (in_for) {
				block.setAttribute("in_for", "true");
			}
			else {
				block.setAttribute("in_for", "false");
			}
		}

		if (block.getAttribute("balise") == "while") {
			last_loop.push(block.getAttribute("endwhile_uid"));
			in_while = true;
		}
		else if (block.getAttribute("balise") == "endwhile") {
			if (block.getAttribute("uid") == last_loop[last_loop.length - 1]) {
				console.log("ok");
				last_loop.pop();
			}
			else {
				//alert("incorrect code !");
				code_correct = false;
			}
			in_while = false;
		}
		else {
			if (in_while) {
				block.setAttribute("in_while", "true");
			}
			else {
				block.setAttribute("in_while", "false");
			}
		}

		// Set z-index
		block.style.zIndex = z_index;
		z_index-=1;
	}
	if (code_correct) {
		document.getElementById("label_validation_code").style.color= "#079b07";
		document.getElementById("label_validation_code").innerHTML = "CORRECT CODE";
		document.getElementById("play-button").classList.remove("play_disabled");
	}
	else {
		document.getElementById("label_validation_code").style.color= "#c40707";
		document.getElementById("label_validation_code").innerHTML = "INCORRECT CODE";
		document.getElementById("play-button").classList.add("play_disabled");
	}
}

function GenerateUID() {
	return '_' + Math.random().toString(36).substr(2, 9);
}

function DisableParentMouseDown(element) {
	element.parentNode.onmousedown = null;
}
function EnableParentMouseDown(element) {
	element.parentNode.onmousedown = moveElement;
}

function changeCondition(select) {
	if (select.parentNode.getAttribute("balise") == "for") {
		var _endfor = document.querySelector('[uid="'+select.parentNode.getAttribute("endfor_uid")+'"]');
		_endfor.setAttribute("condition", select.value);
	}
	else if (select.parentNode.getAttribute("balise") == "while") {
		var _endwhile = document.querySelector('[uid="'+select.parentNode.getAttribute("endwhile_uid")+'"]');
		_endwhile.setAttribute("condition", select.value);
	}
	else {
		select.parentNode.setAttribute("condition", select.value);
	}
}