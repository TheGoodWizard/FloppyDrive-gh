var glowingSquare31 = document.getElementById("item31").animate(
  [
    { backgroundColor: '#ffffff', opacity: 1.0 },
    { backgroundColor: '#0309dd', opacity: 0.3 },
    { backgroundColor: '#ffffff', opacity: 1.0 }
  ],
  {
     duration: 4500,
     iterations: Infinity,
     easing: 'ease-in-out'
  }
)
