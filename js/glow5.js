var glowingSquare5 = document.getElementById("item5").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#44be41', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 5500,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
