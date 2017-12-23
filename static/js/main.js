'use strict'

$(function(){
	console.log("Nice, you found the console! Good Job!");
	console.log("Somewhere on my portfolio is a 'Wobbly Goblin'.  Find and click on it's real name for a thought-provoking question");

	var modal = document.getElementById("myModal");

	$("#easterEgg").click(function(){
		$("#question").html("Why did the chicken cross the road?");
		modal.style.display = "block";
		// prompt("Why did the chicken cross the road?");

		$("#guess").keypress(function(){
			alert("It doesn't Matter why the chicken crossed the road!");
			modal.style.display = "none";
		});
		
		$("#answer-modal").click(function(){
			alert("Um, you didn't give any kind of a guess.");
		});

		$("#close-modal").click(function(){
			alert("Come on, at least make some kind of guess!");
		});

		window.onclick = function(event){
			if(event.target == modal){
				modal.style.display = "none";
			}
		}

	});

	// Chester's Gift Color Rotation
	function colorChanger(){
		setInterval(function(){
			let color = getColor();
			$("#Chester").css('background-color', color);
		}, 150);
	}

	function getColor(){
		let colors = ["#FFFF00", "#FFFF33", "#F2EA02", "#E6FB04", "#FF0000", "#FD1C03", "#FF3300", "#FF6600", "#00FF00", "#00FF33", "#00FF66", "#33FF00", "#00FFFF", "#099FFF", "#0062FF", "#0033FF", "#FF00FF", "#FF00CC", "#FF0099", "#CC00FF", "#9D00FF", "#CC00FF", "#6E0DD0", "#9900FF"];
		let len = colors.length;
		let randIdx = Math.floor(Math.random() * len);
		return colors[randIdx];
	}

	colorChanger();

});
