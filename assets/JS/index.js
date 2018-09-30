	window.onload = function (){
			document.querySelector(".menuMobile").addEventListener("click", function(){
				if(document.querySelector(".Menu nav ul").style.display == 'flex'){
					document.querySelector(".Menu nav ul").style.display = 'none';
				} else {
					document.querySelector(".Menu nav ul").style.display = 'flex';
				}
			});
		};