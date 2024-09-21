
console.log("JS loaded")
console.log("v5")


// progress bar --------------------------------------------------------------------------------------
window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = scrollPercent + '%';
});


// header ------------------------------------------------------------------------------------------
  // JavaScript code for handling the scroll event
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;
  const opacity = 1 - (scrollPosition / 200); // Adjust the divisor to control the speed of the animation

  // Apply the opacity value to the header
  header.style.opacity = opacity < 0 ? 0 : opacity; // Ensure opacity doesn't go below 0
});




// sidebar--------------------------------------------------------------------------------------------------
// Get all the menu items and sections
const menuItems = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.rcontainer h1');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  // Loop through each section and check if it's in the viewport
  sections.forEach((section, index) => {
    if (isInViewport(section)) {
      // Remove "active" class from all menu items
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove('active');
      });

      // Add "active" class to the corresponding menu item
      menuItems[index].classList.add('active');
    }
  });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);



// back to top ---------------------------------------------------------------------------------------------
window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('back-to-top');
  const scrollPosition = window.scrollY;

  // Show or hide the button based on the scroll position
  if (scrollPosition > 300) { // Adjust the value to control when the button appears
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll to the top of the page when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




// animation controller --------------------------------------------------------------------------------------------

const elements = document.querySelectorAll('.animate__animated');

const animations = ['animate__bounce', 'animate__backInDown', 'animate__backInUp', 'animate__backInLeft', 'animate__backInRight', 'animate__bounceIn', 'animate__bounceInDown', 'animate__bounceInLeft', 'animate__bounceInRight', 'animate__bounceInUp', 'animate__fadeIn', 'animate__fadeInDown', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInUp', 'animate__flipInX', 'animate__lightSpeedInRight', 'animate__lightSpeedInLeft', 'animate__jackInTheBox', 'animate__zoomIn', 'animate__zoomInDown', 'animate__zoomInLeft', 'animate__zoomInRight', 'animate__zoomInUp', 'animate__slideInDown', 'animate__slideInLeft', 'animate__slideInRight', 'animate__slideInUp'];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
	if (entry.isIntersecting) {
	  let randomAnimation = animations[Math.floor(Math.random() * animations.length)];
	  entry.target.classList.add(randomAnimation);
	}
  });
});

elements.forEach((element) => {
  observer.observe(element);
});


// slideshow ------------------------------------------------------------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//2

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2-1].style.display = "block";
}