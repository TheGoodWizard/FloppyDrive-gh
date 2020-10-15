var glowingSquare4 = document.getElementById("item4").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#fcf917', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 8000,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
