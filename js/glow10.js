var glowingSquare10 = document.getElementById("item10").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f76207', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 5400,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
