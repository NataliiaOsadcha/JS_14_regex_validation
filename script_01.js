const backButton = document.querySelector('.back-btn');
const screenWidth = screen.width;
const screenHeight = screen.height;


backButton.addEventListener('click', (event)=> {
  event.preventDefault();
  location.href = 'index.html';
})


console.log(`Screen Width: ${screenWidth}`)
console.log(`Screen Height: ${screenHeight}`)


navigator.geolocation.getCurrentPosition(function(position) {
  console.log('широта', position.coords.latitude);
  console.log('довгота', position.coords.longitude);
});


