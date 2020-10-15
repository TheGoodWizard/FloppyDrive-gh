var glowingSquare42 = document.getElementById("item42").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f76207', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 1100,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
