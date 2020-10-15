var glowingSquare32 = document.getElementById("item32").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#80004f', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 3400,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
