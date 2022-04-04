import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
import 'isotope-cells-by-row';

function SortingCard() {
      jQueryBridget( 'isotope', Isotope, $ );

      var portfolioIsotope = $('.featured__filter').isotope({
        itemSelector: '.featuredFilterItem',
        layoutMode: 'fitRows'
      });

      $('.featured__controls ul li').on('click', function() {
        $('.featured__controls ul li').removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
}

const handelTitle = (title) => {
    document.title = title
}

const handelHumbergerMenu = () => {
    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });
}

function Addshrink() {
    let RelBanner = document.querySelector(".header-sticky"),
        headerFlex = document.querySelector(".header-sticky .row .header-flex");

    window.addEventListener("scroll", e => {
        if(window.pageYOffset > 86){
          RelBanner.classList.add("sticky-bar");
          RelBanner.classList.add("sticky");
          headerFlex.classList.add("sticky-flex");
        }else
        {
            RelBanner.classList.remove("sticky-bar");
            RelBanner.classList.remove("sticky");
            headerFlex.classList.remove("sticky-flex");
        }
    });
}

const moveSmooth = () => {
  window.scrollTo({
    behavior: "smooth"
  });
};

function loader() {
    let fadeTarget = document.getElementById("preloder");

    function fadeOutEffect() {
        
        let fadeEffect = setInterval(function () {
            if (fadeTarget && fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = 'none'
            }
        }, 100);
    }

    window.onload = setTimeout(fadeOutEffect , 300)
}

export {
    SortingCard,
    handelTitle,
    handelHumbergerMenu,
    Addshrink,
    moveSmooth,
    loader
};
