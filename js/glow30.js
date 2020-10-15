var glowingSquare30 = document.getElementById("item30").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f50013', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 4400,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
