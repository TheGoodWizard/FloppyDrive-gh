var glowingSquare14 = document.getElementById("item14").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#f50013', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 2100,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
