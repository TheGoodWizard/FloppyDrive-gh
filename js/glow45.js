var glowingSquare45 = document.getElementById("item45").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#44be41', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 6100,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
