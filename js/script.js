/*
var slider = new Slider('#section-slider', {

  loop: false,
  arrow: false

});

slider.left();
slider.swipeTo(5);
slider.remove(5);

var magicSlider = new Slider();

var Slider = function(selector, settings) {

  this.selector = selector;
  this.settings = settings;

}

Slider.prototype.left = function() {

}
*/


var xColor=216;

function scroll(){
  var n=0;

  var e = Math.floor((window.innerHeight)*0.3);
  var x = document.getElementsByTagName("html")[0].scrollTop;
  var tParent= document.getElementsByClassName('blue-container')[n].offsetParent.offsetTop;

  for(n=0;n<3;n++){

    var t= document.getElementsByClassName('blue-container')[n];

    if(t){ // tikrina ar yra toks elementas

      var el=document.getElementsByClassName('blue-container')[n].offsetTop+tParent;
      if(x<el+e){ // tikrina ar nuskrolintas html atstumas maziau nei elemento atstumas iki virsaus

        document.getElementsByClassName('inner-blue')[n].style.height=(x-el+e)+"px";// keicia inner-blue auksti
        // console.log(n,"  ",innerBlueHeight,+" "+blueContainerHeight);
        var blueContainerHeight=document.getElementsByClassName('blue-container')[n].clientHeight;

        var innerBlueHeight=document.getElementsByClassName('inner-blue')[n].clientHeight;
        var blueContainerHeight=document.getElementsByClassName('blue-container')[n].clientHeight;
        // console.log(innerBlueHeight+"ir"+blueContainerHeight);

        if(innerBlueHeight>=blueContainerHeight){ // tikrina koks nuspalvinto melyno aukstis, kai pasiekia 100proc

          document.getElementsByClassName('inner-bubble')[n].style.backgroundColor="rgba(76,136,238,1)";
          document.getElementsByClassName('circle')[n].style.backgroundColor="rgb(255,255,255)";
          document.getElementsByClassName('inner-blue')[n].style.height="100%";
            var circle = document.getElementsByClassName('circle')[n];
            document.getElementsByClassName('inner-bubble')[n].style.backgroundColor="rgba(76,136,238,1)";
            var inactive = document.getElementsByClassName('inactive')[n];
            if(inactive){
              inactive.className="active";
            }

            // var inactiveTop=document.getElementsByClassName('inactive')[n].offsetTop;

        }else if(innerBlueHeight<blueContainerHeight){ //griztant nuspalvina elementa atgal i pilka burbula
          // console.log("melutis");
          document.getElementsByClassName('circle')[n].style.backgroundColor="#d8d8d8";
          document.getElementsByClassName('inner-bubble')[n].style.backgroundColor="#8e8e8e";

          var active2=document.getElementsByClassName('active')[n];
          if(active2){active2.className="inactive";}
        }
      }else{  // nuspalvina elementa, jei jis lieka virsuje ir perkraunamas browseris
        document.getElementsByClassName('inner-bubble')[n].style.backgroundColor="rgba(76,136,238,1)";
        document.getElementsByClassName('circle')[n].style.backgroundColor="#fff";
        document.getElementsByClassName('inner-blue')[n].style.height="100%";

        var inactive2 = document.getElementsByClassName('inactive')[n];
        if(inactive2){inactive2.className="active";}
      }
    }
  }
}

// scroll();

// Menu bar buttons and MENU BAR

var nMenu=0;
var nLang=0;

function menuButton(){

  if(nMenu==0){
    console.log("nMenu"+nMenu);
    backActive();

  }else if(nMenu==1){
    console.log("nMenu"+nMenu);
    backExit();

    //paspaudus uzdaromas ir menu langas
    nLang=1;
    languageMenuButton();
  }
}

//isskleidzia balta fona
function backActive(){
  //pakeicia backgroundo klase i active
  document.getElementById("menu-background").className = "active";
  //pakeicia menu spalva i juoda
  document.getElementById("main-menu").classList.add("mobile-main-menu");
  //logotipus sukeicia vietomis is balto i melyna
  document.getElementById("transcount-blue").classList.remove("logo-hidden");
  document.getElementById("transcount-white").classList.add("logo-hidden");
  document.getElementById("menu-logo").removeClass;
  document.getElementById("menu-logo").className="fa fa-times";
  nMenu=1;
  //iskleidzia antrini meniu
  if(nLang==0){
    document.getElementById("secondary-menu").classList.add("mobile");
  }
  return;
}

function backExit(){

  //pakeicia MENU logotipo  spalva i balta
  document.getElementById("main-menu").classList.remove("mobile-main-menu");
  //panaikina aktyvaus ekrano klase
  document.getElementById("menu-background").className="";
  //trasncount logotipa grazina is melynos i balta spalva
  document.getElementById("transcount-white").classList.remove("logo-hidden");
  document.getElementById("transcount-blue").classList.add("logo-hidden");
  document.getElementById("menu-logo").removeClass;
  document.getElementById("menu-logo").className="fa fa-bars";
  //suskleidzia antrini meniu
  document.getElementById("secondary-menu").classList.remove("mobile");
  document.getElementById("language-menu-full").classList.remove("active-lang");
  nMenu=0;
  return;
}

function languageMenuButton(){
  //dabartinis ekrano plotis
  var i = window.innerWidth;
  // jei aktyvus baltas meniu fonas(aukstis ne 0)
  if(document.getElementById("menu-background").clientHeight == 0 && (i<=1024) && nMenu==0) {
    //pakeicia backgroundo klase i active
    nLang=1;
    backActive();
    //aktyvuojamas pilnas menu issiskleidimas
    document.getElementById("language-menu-full").classList.add("active-lang");
  }else if(nMenu==1){
    document.getElementById("secondary-menu").classList.remove("mobile");
    document.getElementById("language-menu-full").classList.add("active-lang");
  }else if(nLang==1){
    backExit();
    nLang=0;
  }
}


////TESTTIMONIALS NAVIGATION START
var screenWidth = window.innerWidth;

///element creation
//startas

//ekrano tasku skaiciavimas
var centerPoint=0;//centrinis taskas
var centerPointAdj=0;//centrinis taskas pastumtas
var leftPoint=0;
var leftPointAdj=0;
var rightPoint=0;
var rightPointAdj=0;

function screenPoints(){
  centerPoint = screenWidth/2;
}


var parent= document.getElementById('testinis');
var elementas = document.createElement("div");
elementas.className = 'testimonials-box';
parent.appendChild(elementas);

/*var innerTextCont=document.createElement("div"); // viso teksto div
var innerTextHeader=document.createElement("h2");
var headerTest = document.createTextNode("Hello World");
innerTextHeader.appendChild(innerTextHeader);
innerTextCont.appendChild(innerTextHeader);
var innerTextPara=document.createElement("p");
innerTextCont.children[0].appendChild(innerTextPara);

var paraTest = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt");*/





////TESTTIMONIALS NAVIGATION END

// VISI EVENTAI

window.onscroll = function(){
  scroll();
  if(nMenu==1){
    backExit();
    nMenu=0;
    nLang=0;
  }
}

window.onresize =  scroll();
