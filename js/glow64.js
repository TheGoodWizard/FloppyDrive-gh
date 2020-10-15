var glowingSquare64 = document.getElementById("item64").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#80004f', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 5500,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
