var glowingSquare6 = document.getElementById("item6").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f50013', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 3000,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
