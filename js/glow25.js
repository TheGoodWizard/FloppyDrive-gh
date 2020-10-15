var glowingSquare25 = document.getElementById("item25").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#07f3f7', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 4100,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
