var rotatingMain = document.getElementById("main-button").animate(
  [
      { opacity: 1.0, transform: 'rotate(0deg)' },
      { opacity: 1.0, transform: 'rotate(360deg)' }
  ],
  {
      duration: 2000,
      iterations: 1,
      easing: 'linear'
  }
)
