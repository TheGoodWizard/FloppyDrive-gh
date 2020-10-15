var glowingSquare22 = document.getElementById("item22").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f50013', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 1600,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
