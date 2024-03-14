function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let carouselCounter = 0;

  if (carouselCounter == 0) {
    leftArrow.style.display = 'none';   
  } else if (carouselCounter == 3) {
    rightArrow.style.display = 'none';
  } else {
    leftArrow.style.display = '';
    rightArrow.style.display = '';
  }

  rightArrow.addEventListener('click', function () {
    carouselCounter++;
    if (carouselCounter == 3) {
      rightArrow.style.display = 'none';   
    } else {
      rightArrow.style.display = '';
    }  
    if (carouselCounter == 0) {
      leftArrow.style.display = 'none';   
    } else {
      leftArrow.style.display = '';
    } 
    carousel.style.transform = `translateX(-${carousel.offsetWidth * carouselCounter}px)`;
  });

  leftArrow.addEventListener('click', function () {
    carouselCounter--;
    if (carouselCounter == 3) {
      rightArrow.style.display = 'none';   
    } else {
      rightArrow.style.display = '';
    }  
    if (carouselCounter == 0) {
      leftArrow.style.display = 'none';   
    } else {
      leftArrow.style.display = '';
    }  
    carousel.style.transform = `translateX(-${carousel.offsetWidth * carouselCounter}px)`;
  });

}
