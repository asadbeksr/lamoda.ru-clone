// location
const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent =  localStorage.getItem('lomoda-location') || ('Ваш город?');

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город?');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});


//disable scroll while opened cart
const disableScroll = () => {
 document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
    
};




// modal window
const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();
};

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
};

subheaderCart.addEventListener('click', cartModalOpen );

cartOverlay.addEventListener('click', event => {
   const target = event.target;

   if(target.matches('.cart__btn-close') || target.matches('.cart-overlay')){
    cartModalClose();
   }
});

