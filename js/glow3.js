var glowingSquare3 = document.getElementById("item3").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#db04d4', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 6000,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
