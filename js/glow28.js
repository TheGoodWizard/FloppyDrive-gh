var glowingSquare28 = document.getElementById("item28").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#fcf917', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 6400,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
