// --- Initialize variables --- //
var movingBall;
var balls = [];
var timer;
var ballPlayground;
var highScore;
var startTimer = false;
var button;

function setup() {
  createCanvas(1200, 800);

  // --- Default highScore --- //
  highScore = -1;

  // --- Default timer --- //
  timer = 0;

  // --- Style button --- //
  button = createButton("Play", "pause");
  button.position(10, 125);
  button.style("width", "100px");
  button.style("height", "75px");
  button.style("cursor", "pointer");

  // --- Button interaction --- //
  button.mousePressed(btnClicked);

  // --- Set gameplay variable --- //

  ballPlayground = {
    x: 0,
    y: 200,
    w: 1000,
    h: 600,
  };

  movingBall = {
    x: width / 2 - 100,
    y: height / 2,
    speedX: 0,
    speedY: 0,
    size: 50,
    draw: function () {
      ellipse(this.x, this.y + this.size / 2, this.size);
    },
    speed: function () {
      this.x += this.speedX;
      this.y += this.speedY;
    },
    rebound: function () {
      if (this.x > 1000 || this.x < 0 || this.y > 800 || this.y < 200) {
        balls.pop();
      }
    },
  };

  // Add single ball to the array
  balls.push(movingBall);
}

function draw() {
  background(255);

  ballExitedResetGame();
  push();
  textStyle(BOLD);
  textSize(24);
  text(
    `Objective: Try to keep the circle within the grey space for as long as possible`,
    100,
    50
  );
  pop();

  // Instructions
  rect(width / 2 - 10, 100, 455, 90);
  text(`Controls:`, width / 2, 125);
  text(`1. Click Play/Pause button to start/pause`, width / 2, 150);
  text(`2. Use ⬆️ ⬇️ ⬅️ ➡️ to control ball direction`, width / 2, 175);

  // Timer

  // updateTimer()
  if (startTimer === true) {
    if (frameCount % 60 === 0) timer += 1;
    if (frameCount % 600 === 0) {
      movingBall.speedX *= 2;
    }
  }

  textSize(24);
  text(`Timer: ${timer}`, width / 4, 125);
  text(`HighScore: ${highScore}`, width / 4, 160);
  push();
  fill(125);
  rect(ballPlayground.x, ballPlayground.y, ballPlayground.w, ballPlayground.h);
  pop();

  if (balls.length === 0) {
    push();
    fill(255, 0, 255);
    textSize(36);
    text(`GameOver! Press R to reset`, width / 2 - 300, height / 2);
    pop();
  }

  // Moving Ball
  for (let b of balls) {
    b.draw();
    if (button.value() == "play") {
      b.speed();
      if (b) {
        b.rebound();
      }
    }
  }
}

// --- Keypressed events --- //
function keyPressed() {
  // Check for "Spacebar" keypress
  if (keyCode == 32) {
    if (isLooping()) {
      // Pause if looping
      noLoop();
    } else {
      // Unpause if not looping
      loop();
    }
  }

  // Check for "R" keypress
  if (keyCode == 82 && balls.length === 0) {
    // Resets the game variables
    movingBall.x = width / 2 - 100;
    movingBall.y = height / 2;
    movingBall.speedX = 0;
    movingBall.speedY = 0;
    balls.push(movingBall);
  }

  // Check for "up arrow" keypress
  if (keyCode == UP_ARROW) {
    if (movingBall.speedY === 0) {
      movingBall.speedY = -2;
    } else {
      movingBall.speedY *= -1;
    }
  }

  // Check for "down arrow" keypress
  if (keyCode == DOWN_ARROW) {
    if (movingBall.speedY === 0) {
      movingBall.speedY = 2;
    } else {
      movingBall.speedY *= -1;
    }
  }

  // Check for "left arrow" keypress
  if (keyCode == LEFT_ARROW) {
    if (movingBall.speedX === 0) {
      movingBall.speedX = -2;
    } else {
      movingBall.speedX *= -1;
    }
  }

  // Check for "right arrow" keypress
  if (keyCode == RIGHT_ARROW) {
    if (movingBall.speedX === 0) {
      movingBall.speedX = 2;
    } else {
      movingBall.speedX *= -1;
    }
  }
}

function btnClicked() {
  /*
    Update button value and timer status
  */
  if (button.value() == "pause") {
    button.html("Pause");
    button.value("play");
    startTimer = !startTimer;
  } else {
    button.html("Play");
    button.value("pause");
    startTimer = !startTimer;
  }
}

function ballExitedResetGame() {
  /*
    Resets button and timer variables when ball exits grey space
  */
  if (balls.length === 0) {
    if (highScore < timer) {
      highScore = timer;
    }
    button.html("Play");
    button.value("pause");
    startTimer = false;
    timer = 0;
    push();
    fill(255, 0, 0);
    pop();
  }
}
