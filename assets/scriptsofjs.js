$(document).ready(function() {
    $('.owl-carousel-review').owlCarousel({ loop: true, margin: 10, autoplay: true, autoplayTimeout: 4000, autoplayHoverPause: true, responsiveClass: true, responsive: { 0: { items: 1, singleItem: true, nav: false, loop: true }, 600: { items: 1, nav: false, loop: true }, 1000: { items: 1, nav: false, loop: true, margin: 20 } } });
    $('.owl-carousel-features').owlCarousel({ loop: true, margin: 10, autoplay: true, autoplayTimeout: 5000, autoplayHoverPause: true, responsiveClass: true, responsive: { 0: { items: 1, singleItem: true, nav: false, loop: true }, 600: { items: 1, nav: false, loop: true }, 1000: { items: 1, nav: false, loop: true, margin: 20 } } });
})

function scrollFunction1() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("navbar-brand-img").style.width = "75px";
        document.getElementById("navbar-brand-img").style.height = "50px";
        document.getElementById("navbar-brand-img").style.display = "block";
    } else {
        document.getElementById("navbar-brand-img").style.width = "75px";
        document.getElementById("navbar-brand-img").style.height = "50px";
        document.getElementById("navbar-brand-img").style.display = "none";
    }
}

function scrollFunction2() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("navbar-brand-img").style.width = "60px";
        document.getElementById("navbar-brand-img").style.height = "40px";
        document.getElementById("navbar-brand-img").style.display = "block";
    } else { document.getElementById("navbar-brand-img").style.display = "none"; }
}
if ($(window).width() > 1000) { window.onscroll = function() { scrollFunction1() }; } else { window.onscroll = function() { scrollFunction2() }; }
window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) { if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) { return false; } else { return true; } };
const targets = document.querySelectorAll('img');
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        console.log(entries)
        entries.forEach(entry => { console.log('D'); if (entry.isIntersecting) { observer.disconnect(); } });
    });
    io.observe(target)
};
targets.forEach(lazyLoad);