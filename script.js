function generateAndAttachEvents() {
	let numButtons = parseInt(document.getElementById('numButtons').value);
	if (numButtons < 1 || isNaN(numButtons)) {
		alert('Please enter a valid number greater than 0.');
		return;
	}

	generateButtons(numButtons);
	let winnerIndex = Math.floor(Math.random() * numButtons);
	window.winnerIndex = winnerIndex;
}

function generateButtons(numButtons) {
	let buttonsContainer = document.getElementById('buttonsContainer');
	buttonsContainer.innerHTML = '';
	for (let i = 0; i < numButtons; ++i) {
		let button = document.createElement('button');
		button.classList.add('btn', 'btn-custom', 'dynamic-btn');
		button.textContent = `Button ${i + 1}`;
		button.setAttribute('onclick', `checkWinner(${i},
		window.winnerIndex)`);
		buttonsContainer.appendChild(button);
	}
}

function checkWinner(index, winnerIndex) {
	if (index === winnerIndex) {
		document.getElementById('result').innerHTML =
		'<p class="text-success">Congratulations! You won 🎉</p>';
	} else {
		document.getElementById('result').innerHTML = 
		'<p class="text-danger">You did not win! Keep trying 😔</p>';
	}
}



