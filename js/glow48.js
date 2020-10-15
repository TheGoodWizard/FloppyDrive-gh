var glowingSquare48 = document.getElementById("item48").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#80004f', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 1100,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
