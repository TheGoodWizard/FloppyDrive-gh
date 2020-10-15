var glowingSquare15 = document.getElementById("item15").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#0309dd', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 6100,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
