let mainToggle=document.querySelector(".main-header__toggle"),mainNav=document.querySelector(".main-nav");function navToggle(){mainToggle.classList.contains("main-header__toggle--nojs")||(mainNav.classList.contains("main-nav--closed")?(mainNav.classList.remove("main-nav--closed"),mainNav.classList.add("main-nav--opened"),mainToggle.classList.remove("main-header__toggle--closed"),mainToggle.classList.add("main-header__toggle--opened")):(mainNav.classList.remove("main-nav--opened"),mainNav.classList.add("main-nav--closed"),mainToggle.classList.remove("main-header__toggle--opened"),mainToggle.classList.add("main-header__toggle--closed")))}mainNav.classList.remove("main-nav--nojs"),mainToggle.classList.remove("main-header__toggle--nojs"),mainToggle.addEventListener("click",navToggle);let mapPinSrc="./img/map-pin/map-pin-mobile@1x.png",mapPinSize=[57,53],dpr=window.devicePixelRatio;function init(){var a=new ymaps.Map("map",{center:[59.938631,30.323037],zoom:15}),e=new ymaps.Placemark([59.938631,30.323037],{},{iconLayout:"default#image",iconImageHref:mapPinSrc,iconImageSize:mapPinSize,iconImageOffset:[-25,-53]});a.geoObjects.add(e)}document.documentElement.clientWidth>=768?(mapPinSrc="./img/map-pin/map-pin-tablet@1x.png",mapPinSize=[113,106],dpr>=2&&(mapPinSrc="./img/map-pin/map-pin-tablet@2x.png")):dpr>=2&&(mapPinSrc="./img/map-pin/map-pin-mobile@2x.png"),ymaps.ready(init);