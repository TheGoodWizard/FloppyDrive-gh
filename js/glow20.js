var glowingSquare20 = document.getElementById("item20").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#fcf917', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 2400,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
