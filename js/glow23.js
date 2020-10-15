var glowingSquare23 = document.getElementById("item23").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#0309dd', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 6400,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
