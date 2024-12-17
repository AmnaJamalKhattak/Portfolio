// Initialize sections
window.onload = function() {
    var home1 = document.getElementById('home1');
    var home2 = document.getElementById('home2');
    home1.classList.add('active');
};

function toggleSections() {
    var home1 = document.getElementById('home1');
    var home2 = document.getElementById('home2');

    if (home1.classList.contains('active')) {
        home1.classList.remove('active');
        home2.classList.add('active');
    } else {
        home2.classList.remove('active');
        home1.classList.add('active');
    }
}



// Automatically toggle sections every 5 seconds
setInterval(toggleSections, 5000);



//close-open sidebar
document.getElementById('closeNavBtn').addEventListener('click', function() {
    document.querySelector('.sidebar').style.display = 'none';
    document.getElementById('openNav').style.display = 'flex';
    document.querySelector("#closeNavBtn").style.marginLeft = '0%';

});

document.getElementById('openNav').addEventListener('click', function() {
    document.querySelector('.sidebar').style.display = 'flex';
    document.getElementById('openNav').style.display = 'none';
});


//Education dropdown
function toggleDropdown(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}


//Carousel
document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.getElementById('carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3500, // Slide change interval in milliseconds
        ride: 'carousel'
    });
});

