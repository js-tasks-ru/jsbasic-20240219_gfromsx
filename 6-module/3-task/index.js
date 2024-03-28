import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.render();
    this.event();
    setTimeout(() => {
      this.initCarousel();
    }, 0);

  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');

    let arrowRight = createElement(`<div class="carousel__arrow carousel__arrow_right">
                                  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                                </div>`);
    let arrowLeft = createElement(`<div class="carousel__arrow carousel__arrow_left">
                                  <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                                </div>`);

    this.elem.appendChild(arrowRight);
    this.elem.appendChild(arrowLeft);

    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');

    this.elem.appendChild(carouselInner);

    for (let slide of this.slides) {
      // Создаем DOM-элемент слайда
      let slideElement = createElement(`
        <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);

      // Добавляем созданный слайд к обертке
      carouselInner.appendChild(slideElement);
    }

  }

  initCarousel() {
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

  event(slideId) {
    this.elem.addEventListener('click', event => {
      let plusClick = event.target.closest('.carousel__button');
      if (plusClick) {
        let slideId = plusClick.closest('.carousel__slide').dataset.id;
        let customEvent = new CustomEvent('product-add', {
          detail: slideId,
          bubbles: true,
        });

        this.elem.dispatchEvent(customEvent);
      }
    });
}
}
