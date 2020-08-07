class Timer {
  constructor(durationInput, startButton, pauseButton, callback) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    // FOR ANIMATION
    if (callback) {
      this.onStart = callback.onStart;
      this.onTick = callback.onTick;
      this.onComplete = callback.onComplete;
    }
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // SET RUNS FOR PART BEFORE "="
      // GET WORKS FOR ACCESSING timeRemaining
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };
  // SPECIAL FUNCTIONS
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
