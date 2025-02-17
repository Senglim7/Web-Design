// 1. Hamburger Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Floating Cart Preview
const cartIcon = document.querySelector('.floating-cart');
const cartPreview = document.querySelector('.cart-preview');

cartIcon.addEventListener('mouseenter', () => {
    cartPreview.style.display = 'block';
});

cartIcon.addEventListener('mouseleave', () => {
    cartPreview.style.display = 'none';
});

// 3. Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        updateCartPreview();
    });
});

function updateCartPreview() {
    if (cartItems === 0) {
        cartPreview.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cartPreview.innerHTML = `<p>${cartItems} item(s) in your cart</p>`;
    }
}

// 4. Smooth Scrolling for Navigation
const navLinksSmooth = document.querySelectorAll('nav ul li a');

navLinksSmooth.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Optional: Add "Back to Top" button functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide "Back to Top" Button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
