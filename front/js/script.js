function hamburgerMenu()
{
    let hamburger = document.getElementById('hamburger');
    let navigation = document.getElementById('navigation');

    hamburger.addEventListener('click',() => {
        navigation.classList.toggle('opacity-0');
        navigation.classList.toggle('hidden');
    });
};

let currentYear = new Date().getFullYear();
let year = document.getElementById('year');
year.innerHTML = currentYear;

hamburgerMenu();