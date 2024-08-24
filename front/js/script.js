function navigationFlipper()
{
    const hamburger = document.getElementById('hamburger');
    const navigationHeader = document.getElementById('navigation');

    hamburger.addEventListener('click', () => 
        {
            navigationHeader.classList.toggle('hidden');
        });
};

navigationFlipper();