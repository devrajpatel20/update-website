(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
    });
    
})(jQuery);

// let imageSources = [
//     'img/mdimg_11zon.jpg',
//     'img/princapil_11zon.jpg',
//     'img/collagelaeebreri.jpg',
//     'img/collagebanir.jpg',
//     'img/labpic_11zon.jpg',
//     'img/shreeimg_11zon.jpg',
//     'img/lad2_11zon.jpg',
//     'img/classroomphoto_11zon.jpg'
//   ];

//   // Function to create image elements and add them to the gallery
//   function populateGallery() {
//     let gallery = document.querySelector('.container');
    
//     imageSources.forEach(src => {
//       let imgDiv = document.createElement('div');
//       imgDiv.classList.add('col-lg-3', 'col-md-4', 'col-6');
      
//       let img = document.createElement('img');
//       img.classList.add('img-fluid', 'img-thumbnail');
//       img.src = src;
//       img.alt = 'Image';
//       img.onclick = function() {
//         openModal(src);
//       };
      
//       imgDiv.appendChild(img);
//       gallery.appendChild(imgDiv);
//     });
//   }

//   // Call the function to populate the gallery with images
//   populateGallery();

//   // Open modal with clicked image
//   function openModal(src) {
// let modal = document.getElementById("myModal");
// let modalImg = document.getElementById("modalImg");
// let currentIndex = imageSources.indexOf(src);

// modalImg.src = src;
// modal.style.display = "block";

// // Close modal when close button is clicked
// let closeBtn = document.querySelector('.close');
// closeBtn.onclick = function () {
// modal.style.display = "none";
// };

// // Navigate images using arrow icons
// let leftArrow = document.querySelector('.left-arrow');
// let rightArrow = document.querySelector('.right-arrow');

// leftArrow.onclick = function () {
// currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
// modalImg.src = imageSources[currentIndex];
// };

// rightArrow.onclick = function () {
// currentIndex = (currentIndex + 1) % imageSources.length;
// modalImg.src = imageSources[currentIndex];
// };
// }