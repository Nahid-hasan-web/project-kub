// ======================== latest slider part start=====================

$('.latest_slider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    }
  ]
});
// ------------------------ latest slider part end ----------------------
// ======================== menu fixed part start=====================
let main_menu = document.querySelector(".main_menu")

let menu_height = main_menu.clientHeight

window.addEventListener("scroll", function () {
  let scrolling = this.scrollY

  if (scrolling > (menu_height + 40)) {
    main_menu.classList.add("menu_fixed")
  } else {
    main_menu.classList.remove("menu_fixed")
  }
})
// ------------------------ menu fixed part end ----------------------
// ======================== back top part start=====================
let back_top = document.querySelector(".back_top")

window.addEventListener('scroll' , function(){
  let scrolling = this.scrollY;

  if(scrolling > 400){
    back_top.classList.add('go_top')
  }
  else{
    back_top.classList.remove('go_top')
  }
})

back_top.addEventListener('click' , function(){
  window.scrollTo({
      top:0,
      behavior : "smooth"
  })
})

// ------------------------ back top part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------
// ======================== part start=====================


// ------------------------ part end ----------------------