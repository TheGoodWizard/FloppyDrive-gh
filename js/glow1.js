var glowingSquare1 = document.getElementById("item1").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#07f3f7', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 5000,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
