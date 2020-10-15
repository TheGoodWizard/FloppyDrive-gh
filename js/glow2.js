var glowingSquare2 = document.getElementById("item2").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f76207', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 7500,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
