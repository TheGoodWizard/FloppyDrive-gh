var glowingSquare24 = document.getElementById("item24").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#80004f', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 2600,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
