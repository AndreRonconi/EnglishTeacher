/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

  /*------------------
       Portfolio filter
    --------------------*/
    $(".portfolio__filter li").on("click", function () {
      $(".portfolio__filter li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".portfolio__gallery").length > 0) {
      var containerEl = document.querySelector(".portfolio__gallery");
      var mixer = mixitup(containerEl);
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Masonary
  $(".work__gallery").masonry({
    itemSelector: ".work__item",
    columnWidth: ".grid-sizer",
    gutter: 10,
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero__slider").owlCarousel({
    loop: true,
    dots: true,
    mouseDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    margin: 0,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  var dot = $(".hero__slider .owl-dot");
  dot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this).html("0").append(index);
    } else {
      $(this).html(index);
    }
  });

  /*------------------
        Testimonial Slider
    --------------------*/
  $(".testimonial__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*------------------
        Latest Slider
    --------------------*/
  $(".latest__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*------------------
        Logo Slider
    --------------------*/
  $(".logo__carousel").owlCarousel({
    loop: true,
    margin: 100,
    items: 6,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 5,
      },
      768: {
        items: 4,
      },
      480: {
        items: 3,
      },
      320: {
        items: 2,
      },
    },
  });

  /*------------------
        Video Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
        Counter
    --------------------*/
  $(".counter_num").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  var link = document.querySelector('a[href^="#"]');
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var target = this.getAttribute("href");
    if (target.charAt(0) === "#") {
      var element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

function playVideo(video) {
  video.play();
}

function pauseVideo(video) {
  video.pause();
}

document.addEventListener("DOMContentLoaded", function () {
  var portfolioItems = document.querySelectorAll(".portfolio__item");
  var nextButton = document.getElementById("nextButton");
  var prevButton = document.getElementById("prevButton");
  var currentIndex = 0;
  var itemsPerPage = 6;
  var containerDiv = document.querySelector(".videomenu");

  // Oculta os vídeos além dos primeiros 6
  for (var i = 6; i < portfolioItems.length; i++) {
    portfolioItems[i].style.display = "none";
  }

  // Função para exibir os próximos vídeos
  function showNextVideos(event, jump=true) {
    event.preventDefault();

    // Oculta os vídeos atuais
    for (var i = 0; i < portfolioItems.length; i++) {
      portfolioItems[i].style.display = "none";
    }

    // Exibe os próximos vídeos
    for (var i = currentIndex; i < currentIndex + itemsPerPage; i++) {
      if (portfolioItems[i]) {
        portfolioItems[i].style.display = "block";
      }
    }

    currentIndex += itemsPerPage;

    // Desabilita o botão "Próximo" quando todos os vídeos já foram exibidos
    if (currentIndex >= portfolioItems.length) {
      nextButton.disabled = true;
    }

    // Habilita o botão "Voltar" quando pelo menos um estágio foi avançado
    if (currentIndex > itemsPerPage) {
      prevButton.disabled = false;
    }

    // Rola a página até a <div class="videomenu">
    if(jump) {containerDiv.scrollIntoView({ behavior: "smooth" });}
  }

  // Função para voltar um estágio
  function showPreviousVideos(event) {
    event.preventDefault();

    currentIndex -= itemsPerPage;

    // Oculta os vídeos atuais
    for (var i = 0; i < portfolioItems.length; i++) {
      portfolioItems[i].style.display = "none";
    }

    // Exibe os vídeos anteriores
    for (var i = currentIndex - itemsPerPage; i < currentIndex; i++) {
      if (portfolioItems[i]) {
        portfolioItems[i].style.display = "block"; 
      }
    }

    // Habilita o botão "Próximo"
    nextButton.disabled = false;

    // Desabilita o botão "Voltar" quando estiver no estágio inicial
    if (currentIndex <= itemsPerPage) {
      prevButton.disabled = true;
    }

    // Rola a página até a <div class="videomenu">
    containerDiv.scrollIntoView({ behavior: "smooth" });
  }

  // Exibe os primeiros vídeos
  showNextVideos(new Event("click"), false);

  // Evento de clique no botão "Próximo"
  nextButton.addEventListener("click", function (event) {
    if (!nextButton.disabled) { 
      showNextVideos(event); 
    }
  });

  // Evento de clique no botão "Voltar"
  prevButton.addEventListener("click", function (event) {
    if (!prevButton.disabled) {
      showPreviousVideos(event);
    }
  });

  // Desabilita o botão "Voltar" ao carregar a página
  prevButton.disabled = true;
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-9D8Y2XF2EY');