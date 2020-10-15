var glowingSquare7 = document.getElementById("item7").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#0309dd', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 8500,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
