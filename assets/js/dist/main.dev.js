"use strict";

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
    $(".replacer").addClass("show");
  } else {
    header.classList.remove("fixed");
    $(".replacer").removeClass("show");
  }
}

$(function () {
  $(".hamburger, #mobile-menu-shadow").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
  });
  $(".mob-menu__link").on("click", function () {
    $(".hamburger").removeClass("is-active");
    $("body").toggleClass("open");
  });
  $("#to-top, #to-top-mobile").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 400);
  });
});