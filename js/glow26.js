var glowingSquare26 = document.getElementById("item26").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f76207', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 3600,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
