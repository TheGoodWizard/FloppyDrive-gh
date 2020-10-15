var glowingSquare11 = document.getElementById("item11").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#db04d4', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 6300,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
