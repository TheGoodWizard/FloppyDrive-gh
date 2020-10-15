var glowingSquare60 = document.getElementById("item60").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#fcf917', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 3300,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
