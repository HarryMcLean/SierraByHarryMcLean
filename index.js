var dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var dropdowncontent = this.nextElementSibling;
        if (dropdowncontent.style.display === 'block') {
            dropdowncontent.style.display = 'none';
        } else {
            dropdowncontent.style.display = 'block';
        }
    });
}

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('mainpage').style.marginLeft = '250px';
    document.getElementById('category').style.marginLeft = '190px';
    document.getElementById('item').style.marginLeft = '190px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('mainpage').style.marginLeft = '0';
    document.getElementById('category').style.marginLeft = '0';
    document.getElementById('item').style.marginLeft = '0';
}

// ------------------- Slideshow ----------------------------- //

//window.addEventListener('DOMContentLoaded', function (e) {
//    var stage = document.getElementById('stage');
//    var fadeComplete = function (e) { stage.appendChild(arr[0]); };
//    var arr = stage.getElementsByTagName('img');
//    for (var i = 0; i < arr.length; i++) {
//        arr[i].addEventListener('animationend', fadeComplete, false);
//    }
//}, false);

//var arrowLeft = document.querySelector('#arrow-left');
//var arrowRight = document.querySelector('#arrow-right');
//var current;
//var arr = stage.getElementsByTagName('img');


//function startSlide() {
//    var stage = document.getElementById('stage');
//    var fadeComplete = function (e) { stage.appendChild(arr[0]); };
//    for (current = 0; current < arr.length; current++) {
//        arr[current].addEventListener('animationend', fadeComplete, false);
//    }
//}

//function slideLeft() {
//    if (current === 0) {
//        current = arr.length;
//    }
//}

//arrowLeft.addEventListener('click', function () {
//    slideLeft();
//});

//function slideRight() {
//    if (current === arr.length - 1) {
//        current = 0;
//    }
//}

//arrowRight.addEventListener('click', function () {
//    slideRight();
//});

//startSlide();



/*
---------------------------------------------------------------------------
---------------------------------------------------------------------------
---------------------------------------------------------------------------
---------------------------------------------------------------------------
*/

var slideIndex = 0;
showSlides();
var slides, dots;
var timeoutHandle;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    timeoutHandle = setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1; }
    else if (slideIndex < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(showSlides, 10000);
}

function currentSlide(index) {
    if (index > slides.length) { index = 1; }
    else if (index < 1) { index = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(showSlides, 10000);
}