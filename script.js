$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

});

const FAQ = document.querySelectorAll(".FAQ");

FAQ.forEach((FAQ)=> {
    FAQ.addEventListener("click", () => {
        FAQ.classList.toggle("active");
    });
});

document.getElementById("search-input").addEventListener("input", filterRestaurants);
function filterRestaurants() {
  let searchValue = document.getElementById("search-input").value.toLowerCase();
  let restaurants = document.getElementsByClassName("restaurants_card");

  for (let i = 0; i < restaurants.length; i++) {
    let restaurantName = restaurants[i].getElementsByTagName("p")[0].innerText.toLowerCase();
    if (restaurantName.indexOf(searchValue) > -1) {
      restaurants[i].style.display = "block"; 
    } else {
      restaurants[i].style.display = "none";
    }
  }
}
