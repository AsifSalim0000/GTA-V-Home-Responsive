$(document).ready(function(){
    $("#myCarousel").owlCarousel({
      items: 3,
      loop: false, 
      margin: 20,
      autoplay: true,
      autoplaySpeed: 3000, 
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"], // Custom navigation icons
      responsive: {
        0: {
          items: 1 
        },
        768: {
          items: 2 
        },
        992: {
          items: 3 
        }
      }
    });
  });
