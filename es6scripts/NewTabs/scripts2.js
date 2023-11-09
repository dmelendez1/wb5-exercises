document.addEventListener('DOMContentLoaded', () => {

    const googleButton = document.getElementById('openGoogle');
    const w3SchoolsButton = document.getElementById('openW3Schools');
    const imagesButton = document.getElementById('openImages');


    googleButton.addEventListener('click', () => {
        window.open('https://www.google.com')
    });

    w3SchoolsButton.addEventListener('click', () => {
        window.open('https://www.w3schools.com');
    });

    imagesButton.addEventListener('click',  () => {
        location.href = 'images.html';
    });

});


