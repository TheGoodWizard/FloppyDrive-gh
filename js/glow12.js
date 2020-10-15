var glowingSquare12 = document.getElementById("item12").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#fcf917', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 4300,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
