var glowingSquare50 = document.getElementById("item50").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f76207', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 5200,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
