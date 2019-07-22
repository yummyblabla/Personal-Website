/* ------------------Global Variables------------------ */

// Canvas Variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let then = Date.now();

// Images
const EASY_IMAGE_SIZE = 150;
const NORMAL_IMAGE_SIZE = 100;
const HARD_IMAGE_SIZE = 75;
let IMAGE_SIZE = 100;

// Default mode is Normal
IMAGE_SIZE = NORMAL_IMAGE_SIZE;

const zombie1Path = "./mouse-click-accuracy-game/assets/zombie1.png";
const zombie2Path = "./mouse-click-accuracy-game/assets/zombie2.png";
const zombie3Path = "./mouse-click-accuracy-game/assets/zombie3.png";
const zombie4Path = "./mouse-click-accuracy-game/assets/zombie4.png";
const zombie5Path = "./mouse-click-accuracy-game/assets/zombie5.png";
const zombie6Path = "./mouse-click-accuracy-game/assets/zombie6.png";
const heartPath = "./mouse-click-accuracy-game/assets/heart.png";
const imageURL = [heartPath, zombie1Path, zombie2Path, zombie3Path, zombie4Path, zombie5Path, zombie6Path];
const images = [];
let imageCount = 0;
let allLoaded = false;

// Canvas Size Specifications
let MIN_CANVAS_WIDTH = 880;
let MIN_CANVAS_HEIGHT = 800;

// Game Stats
let playerScore = 0;
let playerAccuracy = 100;
let numberOfClicks = 0;
let monstersKilled = 0;

// Game Modes
let gameOver = false;
let gameStarted = false;
let survivalMode = false;
let timedMode = true;
const easyText = "Easy";
const normalText = "Normal";
const hardText = "Hard";
let difficultyText = normalText;
const timedModeText = "Timed Mode";
const survivalModeText = "Survival Mode";
let gameModeText = timedModeText;

let gameOverModeText = gameModeText;
let gameOverDifficultyText = difficultyText;

// UI
const statsFont = {
	fontSize: 30,
	fontStyle: "Open Sans",
	colour: "white"
};
const buttonFont = {
	fontSize: 20,
	fontStyle: "Open Sans",
	colour: "white"
}
const scoreFont = {
	fontSize: 40,
	fontStyle: "Open Sans",
	colour: "white"
}
const buttons = {
	timed: {
		x: 0,
		y: canvas.height - statsFont.fontSize * 2,
		width: 80,
		height: statsFont.fontSize * 2,
		textX: 40,
		colour: "green",
		text: "Timed\nMode"
	},
	survival: {
		x: 80,
		y: canvas.height - statsFont.fontSize * 2,
		width: 80,
		height: statsFont.fontSize * 2,
		textX: 120,
		colour: "blue",
		text: "Survival\nMode"
	},
	easy: {
		x: 180,
		y: canvas.height - statsFont.fontSize * 2,
		width: 80,
		height: statsFont.fontSize * 2,
		textX: 220,
		colour: "#FFA500",
		text: "Easy\nMode"
	},
	normal: {
		x: 260,
		y: canvas.height - statsFont.fontSize * 2,
		width: 80,
		height: statsFont.fontSize * 2,
		textX: 300,
		colour: "#CC8400",
		text: "Normal\nMode"
	},
	hard: {
		x: 340,
		y: canvas.height - statsFont.fontSize * 2,
		width: 80,
		height: statsFont.fontSize * 2,
		textX: 380,
		colour: "red",
		text: "Hard\nMode"
	},
	start: {
		x: 440,
		y: canvas.height - statsFont.fontSize * 2,
		width: 80,
		height: statsFont.fontSize * 2,
		textX: 480,
		colour: "green",
		text: "Start\nGame"
	},
	stop: {
		x: 520,
		y: canvas.height - statsFont.fontSize * 2,
		width: 80,
		height: statsFont.fontSize * 2,
		textX: 560,
		colour: "red",
		text: "Stop\nGame"
	},
	lineHeight: 20
}
let stopButtonPressed = false;

// Survival Mode
let allowedTimeToKill = 3000; // ms
let playerLives = 5;
const hearts = {
	x: 0,
	y: 0,
	width: statsFont.fontSize,
	height: statsFont.fontSize
}
const monstersToKill = {
	unlockZombie2: 20,
	unlockZombie3: 40,
	unlockZombie4: 60,
	unlockZombie5: 80,
	unlockZombie6: 100
}

// Timed Mode
let timeLeft = 30;
let timePassed = 0;
const timePassedForZombie = {
	unlockZombie2: 5,
	unlockZombie3: 10,
	unlockZombie4: 15,
	unlockZombie5: 20,
	unlockZombie6: 25
}

// Objects
let mouseClicks = {};
const zombie1 = {
	x: 0,
	y: 0,
	timeElapsed: 0,
	ready: true
}
const zombie2 = {
	x: 0,
	y: 0,
	timeElapsed: 0,
	ready: false
}
const zombie3 = {
	x: 0,
	y: 0,
	timeElapsed: 0,
	ready: false
}
const zombie4 = {
	x: 0,
	y: 0,
	timeElapsed: 0,
	ready: false
}
const zombie5 = {
	x: 0,
	y: 0,
	timeElapsed: 0,
	ready: false
}
const zombie6 = {
	x: 0,
	y: 0,
	timeElapsed: 0,
	ready: false
}
const zombieArray = [zombie1, zombie2, zombie3, zombie4, zombie5, zombie6];

// Blood Animation Items
let bloodItems = [];
const bloodValues = {
	particles: 50,
	scatter: 0.2,
    gravity: 0.05
}

// Audio
const zombieDeathSounds = [];
const zombieDeathSrc = "./mouse-click-accuracy-game/assets/death.mp3";
const playerHitSounds = [];
const playerHitSrc = "./mouse-click-accuracy-game/assets/hit.mp3";
let soundToPlay = 0;
let soundToPlay1 = 0;

/* ------------------Functions------------------ */

// Load Images
const imagesInit = () => {
	imageURL.forEach(src => {
		const image = new Image();
		image.src = src;
		imageCount++;
		image.onload = () => {
			if (imageCount == imageURL.length) {
				allLoaded = true;
			}
		}
		images.push(image);
	})
}

// Sound Initialize
const soundInit = () => {
	for (let i = 0; i < 4; i++) {
		let sound = new Audio();
		sound.src = zombieDeathSrc;
		zombieDeathSounds.push(sound);
	}
	for (let i = 0; i < 4; i++) {
		let sound = new Audio();
		sound.src = playerHitSrc;
		playerHitSounds.push(sound);
	}
}

// Play sound when zombie gets hit
const playZombieDeath = () => {
	let sound = zombieDeathSounds[soundToPlay % zombieDeathSounds.length];
	sound.currentTime = 0;
	sound.play();
	soundToPlay++;
}

const playPlayerHit = () => {
	let sound = playerHitSounds[soundToPlay1 % playerHitSounds.length];
	sound.currentTime = 0;
	sound.play();
	soundToPlay1++;
}

// Add blood to area where zombie was hit
const addBlood = (x, y, array) => {
	for (let i = 0; i < bloodValues.particles; i++) {
		let size = Math.random() * Math.PI;
		let dirX = (((Math.random() < .5) ? 3 : -3) * (Math.random() * 3)) * bloodValues.scatter;
		let dirY = (((Math.random() < .5) ? 3 : -3) * (Math.random() * 3)) * bloodValues.scatter;

		array.push({
			x: x,
			y: y,
			dx: dirX,
			dy: dirY,
			size: size
		})
	}
}

// Draw blood based on bloodItems array and drawCircle function
const drawBlood = (array) => {
	let len = array.length;
	while (len--) {
		let blood = array[len];
		let x = blood.x;
		let y = blood.y;
		let s = blood.size;
		drawCircle(x, y, s);

		blood.dy -= bloodValues.gravity;
		blood.x -= blood.dx;
		blood.y -= blood.dy;
		blood.size = Math.max(blood.size - 0.05, 0);

		if (array[len].size < 0.3) {
			drawCircle(blood.x, blood.y, blood.size);
			array.splice(len, 1);
			
		}
	}
}

// Draw red circle
const drawCircle = (x, y, size) => {
	ctx.beginPath();
	ctx.arc(x, y, size * 5, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
}

// Set zombies (2-6) not 1, to false so they don't load on new game
const resetZombieReady = () => {
	for (let i = 0; i < zombieArray.length; i++) {
		if (i != 0) {
			zombieArray[i].ready = false;
		}
		zombieArray[i].timeElapsed = 0;
	}
}

let newGame = {
	playerLives: 5,
	playerScore: 0,
	playerAccuracy: 100,
	numberOfClicks: 0,
	monstersKilled: 0,
	timePassed: 0
}

// Reset variables for start of new survival game
const startSurvivalMode = () => {
	playerLives = newGame.playerLives;
	playerScore = newGame.playerScore;
	playerAccuracy = newGame.playerAccuracy;
	numberOfClicks = newGame.numberOfClicks;
	monstersKilled = newGame.monstersKilled;
	resetZombieReady();
}

// Reset variables for start of new timed game
const startTimedMode = () => {
	playerScore = newGame.playerScore;
	playerAccuracy = newGame.playerAccuracy;
	numberOfClicks = newGame.numberOfClicks;
	monstersKilled = newGame.monstersKilled;
	timePassed = newGame.timePassed;
	resetZombieReady();
}


// Update Score
const updateScore = () => {
	playerScore += parseInt(playerAccuracy * 100 / IMAGE_SIZE); // Hard Score*1.5, Normal Score*1.0, Easy Score*0.66
	monstersKilled++;
}

const resetXY = (zombieNumber, spaceForUI) => {
	zombieArray[zombieNumber].x = Math.random() * (canvas.width - IMAGE_SIZE);
	zombieArray[zombieNumber].y = statsFont.fontSize + Math.random() * (canvas.height - IMAGE_SIZE - spaceForUI); // font size added for topcentred score
}

const overlapXY = (zombieNumber, otherZombieX, otherZombieY) => {
	for (let i = 0; i < otherZombieX.length; i++) {
		let leftXOverlap = zombieArray[zombieNumber].x >= otherZombieX[i] && zombieArray[zombieNumber].x <= otherZombieX[i] + IMAGE_SIZE;
		let rightXOverlap = (zombieArray[zombieNumber].x + IMAGE_SIZE) >= otherZombieX[i] && (zombieArray[zombieNumber].x + IMAGE_SIZE) <= (otherZombieX[i] + IMAGE_SIZE);
		
		if (leftXOverlap || rightXOverlap) {
			let topYOverlap = zombieArray[zombieNumber].y >= otherZombieY[i] && zombieArray[zombieNumber].y <= (otherZombieY[i] + IMAGE_SIZE);
			let botYOverlap = (zombieArray[zombieNumber].y + IMAGE_SIZE) >= otherZombieY[i] && (zombieArray[zombieNumber].y+ IMAGE_SIZE) <= (otherZombieY[i] + IMAGE_SIZE)
			
			if (topYOverlap || botYOverlap) {
				return true;
			}
		}
	}
	return false;
}

// Reset Zombie location and timer when hit
const resetZombie = (zombieNumber) => { // ZombieNumber is array index
	let spaceForUI = 100;
	zombieArray[zombieNumber].timeElapsed = 0;

	let otherZombieX = [];
	let otherZombieY = [];
	for (let i = 0; i < zombieArray.length; i++) {
		otherZombieX.push(zombieArray[i].x);
		otherZombieY.push(zombieArray[i].y);
	}
	otherZombieX.splice(zombieNumber, 1);
	otherZombieY.splice(zombieNumber, 1);

	resetXY(zombieNumber, spaceForUI);

	while (overlapXY(zombieNumber, otherZombieX, otherZombieY)) {
		resetXY(zombieNumber, spaceForUI);
	}
}

// Update and Check for Hits
const update = (modifier) => {
	for (let key in mouseClicks) {
		let hitChecks = [false, false, false, false, false, false];

		// Check if zombies were hit
		for (let i = 0; i < hitChecks.length; i++) {
			if (zombieArray[i].ready) {
				hitChecks[i] = Math.sqrt(Math.pow((mouseClicks[key].x - (zombieArray[i].x + (IMAGE_SIZE / 2))), 2) + Math.pow((mouseClicks[key].y - (zombieArray[i].y + (IMAGE_SIZE / 2))), 2)) < (IMAGE_SIZE / 2);
			}
		}

		// If zombies are hit and ready, update and reset zombie coordinates
		for (let i = 0; i < hitChecks.length; i++) {
			if (zombieArray[i].ready && hitChecks[i]) {
				playZombieDeath();
				updateScore();
				addBlood(zombieArray[i].x + IMAGE_SIZE / 2, zombieArray[i].y + IMAGE_SIZE / 2, bloodItems);
				delete mouseClicks[key];
				resetZombie(i);
			}
		}
		delete mouseClicks[key];
	}
	// Update Mouse Accuracy
	playerAccuracy = (numberOfClicks == 0) ? 100 : (monstersKilled / numberOfClicks * 100);
}

// Render on canvas
const render = () => {
	if (gameStarted) {

		for (let i = 1; i <= zombieArray.length; i++) {
			if (zombieArray[i - 1].ready) {
				ctx.drawImage(images[i], zombieArray[i - 1].x, zombieArray[i - 1].y, IMAGE_SIZE, IMAGE_SIZE);
			}
		}

		drawBlood(bloodItems);

		if (survivalMode) { // Draw Hearts
			for (let i = 0; i < playerLives; i++) {
				ctx.drawImage(images[0], (i * hearts.width) + hearts.x, hearts.y, hearts.width, hearts.height);

			}
			// Draw circles indicating time status
			for (let i = 0; i < zombieArray.length; i++) {
				if (zombieArray[i].ready) {
					let greenHue = 255 - (255 * (zombieArray[i].timeElapsed) / 3000);
					ctx.beginPath();
					ctx.arc(zombieArray[i].x + IMAGE_SIZE / 2, zombieArray[i].y + IMAGE_SIZE / 2, IMAGE_SIZE / 2, 0, 2 * Math.PI, false);
					ctx.lineWidth = 3;
					ctx.strokeStyle = `rgb(255, ${greenHue}, 0)`;
					ctx.stroke();
					ctx.closePath();
				}
				
			}
		}

		if (timedMode) { // Draw Time
			ctx.fillStyle = statsFont.colour;
			ctx.font = `${statsFont.fontSize}px ${statsFont.fontStyle}`;
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText(`Time: ${(timeLeft - timePassed).toFixed(1)}` , canvas.width, 0);
		}
	}

	drawStaticUI();
}

const timedModeButton = () => {
	ctx.fillStyle = buttons.timed.colour;
	ctx.fillRect(buttons.timed.x, buttons.timed.y, buttons.timed.width, buttons.timed.height);

	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${buttonFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	let text = buttons.timed.text;
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], buttons.timed.textX, canvas.height - 50 + (i * buttons.lineHeight) + 10);
	}
}

const survivalModeButton = () => {
	ctx.fillStyle = buttons.survival.colour;
	ctx.fillRect(buttons.survival.x, buttons.survival.y, buttons.survival.width, buttons.survival.height);

	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${buttonFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	let text = buttons.survival.text;
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], buttons.survival.textX, canvas.height - 50 + (i * buttons.lineHeight) + 10);
	}
}

const easyMode = () => {
	ctx.fillStyle = buttons.easy.colour;
	ctx.fillRect(buttons.easy.x, buttons.easy.y, buttons.easy.width, buttons.easy.height);

	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${buttonFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	let text = buttons.easy.text;
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], buttons.easy.textX, canvas.height - 50 + (i * buttons.lineHeight) + 10);
	}
}

const normalMode = () => {
	ctx.fillStyle = buttons.normal.colour;
	ctx.fillRect(buttons.normal.x, buttons.normal.y, buttons.normal.width, buttons.normal.height);

	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${buttonFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	let text = buttons.normal.text;
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], buttons.normal.textX, canvas.height - 50 + (i * buttons.lineHeight) + 10);
	}
}

const hardMode = () => {
	ctx.fillStyle = buttons.hard.colour;
	ctx.fillRect(buttons.hard.x, buttons.hard.y, buttons.hard.width, buttons.hard.height);

	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${buttonFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	let text = buttons.hard.text;
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], buttons.hard.textX, canvas.height - 50 + (i * buttons.lineHeight) + 10);
	}
}

const startGame = () => {
	ctx.fillStyle = buttons.start.colour;
	ctx.fillRect(buttons.start.x, buttons.start.y, buttons.start.width, buttons.start.height);

	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${buttonFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	let text = buttons.start.text;
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], buttons.start.textX, canvas.height - 50 + (i * buttons.lineHeight) + 10);
	}
}

const stopGame = () => {
	ctx.fillStyle = buttons.stop.colour;
	ctx.fillRect(buttons.stop.x, buttons.stop.y, buttons.stop.width, buttons.stop.height);

	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${buttonFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	let text = buttons.stop.text;
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], buttons.stop.textX, canvas.height - 50 + (i * buttons.lineHeight) + 10);
	}
}

const addDifficultyText = () => {
	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${statsFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(`${difficultyText}` , canvas.width / 5 + 10, 10);
}

const addGameModeText = () => {
	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${buttonFont.fontSize}px ${statsFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(`${gameModeText}` , canvas.width / 3, 10);
}

const addScoreText = () => {
	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${statsFont.fontSize}px ${statsFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(`Score: ${playerScore}` , canvas.width / 2, 20);
}

const addMonstersKilled = () => {
	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${statsFont.fontSize}px ${statsFont.fontStyle}`;
	ctx.textAlign = "right";
	ctx.textBaseline = "middle";
	ctx.fillText(`Monsters Killed: ${monstersKilled}` , canvas.width, canvas.height - statsFont.fontSize + 10);
}

const addAccuracyText = () => {
	ctx.fillStyle = buttonFont.colour;
	ctx.font = `${statsFont.fontSize}px ${statsFont.fontStyle}`;
	ctx.textAlign = "right";
	ctx.textBaseline = "middle";
	ctx.fillText(`Accuracy: ${playerAccuracy.toFixed(1)}%` , canvas.width, canvas.height - statsFont.fontSize * 2 + 10);
}

// Draw UI, can be called independently from render, especially when changing modes
const drawStaticUI = () => {

	timedModeButton();
	survivalModeButton();

	easyMode();
	normalMode();
	hardMode();
	startGame();
	stopGame();

	addDifficultyText();
	addGameModeText();

	addScoreText();
	addMonstersKilled();
	addAccuracyText();

	if (stopButtonPressed) {
		drawEndScore();
	}
}

// Draw end score, when stop game is pressed or when game is over
const drawEndScore = () => {
	ctx.fillStyle = scoreFont.colour;
	ctx.font = `${scoreFont.fontSize}px ${scoreFont.fontStyle}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "top";

	let text = `Game over!\n \nYou scored: ${playerScore}\nDifficulty Level: ${gameOverDifficultyText}\nGame Mode: ${gameOverModeText}`
	let lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], canvas.width / 2, canvas.height / 3 + (i * 50));
	}
}

// Adds time to zombie timer in survival mode
const zombieTimer = (delta) => {
	for (let i = 0; i < zombieArray.length; i++) {
		if (zombieArray[i].ready) {
			zombieArray[i].timeElapsed += delta;
		}
	}
}

// When game is over, game mode text is saved so it does not get overridden
const setGameOverText = () => {
	gameOverModeText = gameModeText;
	gameOverDifficultyText = difficultyText;
}

// Main Game Loop
const main = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let now = Date.now();
	let delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Game loop started
	if (gameStarted) {
		requestAnimationFrame(main);
	}
	// Stuff for Timed Mode
	if (timedMode) {
		timePassed += delta / 1000;
		// Game over when time is up
		if (timePassed >= timeLeft) {
			gameStarted = false;
			gameOver = true;
			setGameOverText();
			drawEndScore();
		}

		// Add more zombies as time progresses
		if (timePassed >= timePassedForZombie.unlockZombie6) {
			zombie6.ready = true;
		} else if (timePassed >= timePassedForZombie.unlockZombie5) {
			zombie5.ready = true;
		} else if (timePassed >= timePassedForZombie.unlockZombie4) {
			zombie4.ready = true;
		} else if (timePassed >= timePassedForZombie.unlockZombie3) {
			zombie3.ready = true;
		} else if (timePassed >= timePassedForZombie.unlockZombie2) {
			zombie2.ready = true;
		}
	// Stuff for Survival Mode
	} else if (survivalMode) {
		zombieTimer(delta);
		// Check mosnters killed to unlock more zombies = increase difficulty as game goes on
		if (monstersKilled == monstersToKill.unlockZombie2) {
			zombie2.ready = true;
		} else if (monstersKilled == monstersToKill.unlockZombie3) {
			zombie3.ready = true;
		} else if (monstersKilled == monstersToKill.unlockZombie4) {
			zombie4.ready = true;
		} else if (monstersKilled == monstersToKill.unlockZombie5) {
			zombie5.ready = true;
		} else if (monstersKilled == monstersToKill.unlockZombie6) {
			zombie6.ready = true;
		}

		// Check to lose lives
		for (let i = 0; i < zombieArray.length; i++) {
			if (zombieArray[i].timeElapsed >= allowedTimeToKill) {
				resetZombie(i);
				playPlayerHit();
				playerLives -= 1;
			}
		}

		// Game over when playerLives is zero
		if (playerLives <= 0) {
			gameStarted = false;
			gameOver = true;
			setGameOverText();
			drawEndScore();
		}
	}
}
// Get mouse position on Canvas
const getMousePos = (can, evt) => {
	let rect = can.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	}
}

// Add Event Listeners to page
const addEventListeners = () => {
	// Click listener
	canvas.addEventListener("click", (event) => {
		let mousePos = getMousePos(canvas, event);
		if (mousePos.y > canvas.height - statsFont.fontSize * 2) {
			checkButton(mousePos.x);
		} else if (gameStarted) {
			mouseClicks[numberOfClicks] = {
				x: mousePos.x, 
				y: mousePos.y
			};
			numberOfClicks++;
		}
	})

	// window.addEventListener('resize', resizeCanvas, false);
}

// Update Button Placements when window is resized
const updateButtonPlacement = () => {
	buttons.timed.y = canvas.height - statsFont.fontSize * 2;
	buttons.survival.y = canvas.height - statsFont.fontSize * 2;
	buttons.easy.y = canvas.height - statsFont.fontSize * 2;
	buttons.normal.y = canvas.height - statsFont.fontSize * 2;
	buttons.hard.y = canvas.height - statsFont.fontSize * 2;
	buttons.start.y = canvas.height - statsFont.fontSize * 2;
	buttons.stop.y = canvas.height - statsFont.fontSize * 2;
}

const resizeCanvas = () => {
	if (window.innerWidth >= MIN_CANVAS_WIDTH) {
		canvas.width = window.innerWidth;
	}
	if (window.innerHeight >= MIN_CANVAS_HEIGHT) {
		canvas.height = window.innerHeight;
	}
	updateButtonPlacement();
	drawStaticUI();
}

// Check what button was pressed
const checkButton = (mouseX) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// Can only be pressed if game has not started or when assets have been loaded
	if (!gameStarted) {
		if (mouseX < buttons.timed.x + buttons.timed.width && mouseX > buttons.timed.x) { // Timed Mode
			timedMode = true;
			survivalMode = false;
			gameModeText = timedModeText;
		} else if (mouseX < buttons.survival.x + buttons.survival.width && mouseX > buttons.survival.x) { // Survival
			survivalMode = true;
			timedMode = false;
			gameModeText = survivalModeText;
		} else if (mouseX < buttons.easy.x + buttons.easy.width && mouseX > buttons.easy.x) { // Easy Mode
			IMAGE_SIZE = EASY_IMAGE_SIZE;
			difficultyText = easyText;
		} else if (mouseX < buttons.normal.x + buttons.normal.width && mouseX > buttons.normal.x) { // Normal Mode
			IMAGE_SIZE = NORMAL_IMAGE_SIZE;
			difficultyText = normalText;
		} else if (mouseX < buttons.hard.x + buttons.hard.width && mouseX > buttons.hard.x) { // Hard Mode
			IMAGE_SIZE = HARD_IMAGE_SIZE;
			difficultyText = hardText;
		} else if (mouseX < buttons.start.x + buttons.start.width && mouseX > buttons.start.x) { // Start Game
			if (timedMode) {
				startTimedMode();
				then = Date.now();
			} else if (survivalMode) {
				then = Date.now();
				startSurvivalMode();
			}
			gameStarted = true;
			stopButtonPressed = false;
			main();
		}
	// Stop game can only be pressed when game has started
	} else {
		if (mouseX < buttons.stop.x + buttons.stop.width && mouseX > buttons.stop.x) { // Stop Game
			setGameOverText();
			gameStarted = false;
			stopButtonPressed = true;
		}
	}
	// If stop button was pressed, display end score
	if (stopButtonPressed) {
		drawEndScore();
	}
	drawStaticUI();
}

// Load page
const initializeGame = () => {
	// resizeCanvas();
	canvas.width = MIN_CANVAS_WIDTH;
	canvas.height = MIN_CANVAS_HEIGHT;

	updateButtonPlacement();
	imagesInit();
	soundInit();

	addEventListeners();

	// Sets zombie locations at random
	for (let i = 0; i < zombieArray.length; i++) {
		resetZombie(i);
	}

	// Draw UI for display
	drawStaticUI();
}

initializeGame();