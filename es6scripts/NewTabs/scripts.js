

window.onload = init;

function init() {
    
    const openGoogle = document.getElementById('openGoogle');
    const openW3Schools = document.getElementById('openW3Schools');
    const openImages = document.getElementById('openImages');

    
    openGoogle.onclick = openGoogleButtonClick;
    openW3Schools.onclick = openW3SchoolsButtonClick;
    openImages.onclick = openImagesButtonClick;
}

function openGoogleButtonClick() {
    
    window.open('https://www.google.com');
}

function openW3SchoolsButtonClick() {
   
    window.open('https://www.w3schools.com');
}

function openImagesButtonClick() {
    
    window.location.href = 'images.html';

}

