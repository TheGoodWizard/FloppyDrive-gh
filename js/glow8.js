var glowingSquare8 = document.getElementById("item8").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#80004f', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 8000,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
