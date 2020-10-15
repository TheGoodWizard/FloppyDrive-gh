var glowingSquare21 = document.getElementById("item21").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#44be41', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 2500,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
