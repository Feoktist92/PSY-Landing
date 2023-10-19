// Функция для обработки изменения видимости секций
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Отключаем наблюдение после анимации
        }
    });
}

// Создаем объект Intersection Observer
const sectionObserver = new IntersectionObserver(handleIntersection, {
    root: null, // Область наблюдения (null - вся видимая область)
    rootMargin: '0px', // Маржины
    threshold: 0.2, // Порог видимости
});

// Наблюдаем за каждой секцией и добавляем их к наблюдению
const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
    sectionObserver.observe(section);
});

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides((slideIndex += n));
}
function currentSlide(n) {
    showSlides((slideIndex = n));
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

window.onscroll = function () {
    scroll();
};
var header = document.querySelector('.header');
var sticky = header.offsetTop;
function scroll() {
    if (window.scrollY >= sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        });
    });
});
