// location
const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || ('Ваш город?');

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город?');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});


//disable scroll when opened cart
const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    })
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
    enableScroll();
};


// request to database

const getData = async () => {
    const data = await fetch('db.json');

    if (data.ok) {
        return data.json()
    } else {
        throw new Error(`Данне небыли полученыб ошибка ${data.status} ${data.statusText}`)
    }
};

const getGoods = (callback) => {
    getData()
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
}

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose();
    }
});