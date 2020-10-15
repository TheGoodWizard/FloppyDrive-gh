var glowingSquare18 = document.getElementById("item18").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f76207', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 3400,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
