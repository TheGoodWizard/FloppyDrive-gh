var glowingSquare16 = document.getElementById("item16").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#80004f', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 5300,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
