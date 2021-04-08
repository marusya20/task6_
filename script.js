const navBurger = document.querySelector('.nav-burger');
if (navBurger) {
    const nav = document.querySelector('.nav');
    console.log(nav)
    navBurger.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock');
            navBurger.classList.toggle('_active');
            nav.classList.toggle('_active');
        });
}

console.log(navBurger)
console.log(navBurger)