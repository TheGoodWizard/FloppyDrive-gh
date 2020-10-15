var glowingSquare13 = document.getElementById("item13").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#44be41', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 1200,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
