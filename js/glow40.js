var glowingSquare40 = document.getElementById("item40").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#80004f', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 4600,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
