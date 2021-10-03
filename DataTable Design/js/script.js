    function hidden(){
	var tdDisplay = document.getElementsByClassName('td-display');

	for (let i = 0; i < tdDisplay.length;  i++) {

		tdDisplay[i].classList.add("hidden");
	}

}

function show(){
	var tdDisplay = document.getElementsByClassName('td-display');

	for (let i = 0; i < tdDisplay.length;  i++) {

		tdDisplay[i].classList.remove("hidden");
	}

}

const buttonShow = document.getElementById('buttonSwitch');


var clickCount = 0;

buttonShow.addEventListener('click', function() {
	   clickCount++;
	   if (clickCount === 1) {
	   		clickCount = 1;
	   		show();

	   } else if (clickCount === 2) {
	   		clickCount = 0;
	   		hidden();
	   }
}, false);
