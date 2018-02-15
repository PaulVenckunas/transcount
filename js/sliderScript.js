



////TESTTIMONIALS NAVIGATION START
var contentTest=[
  {header:"hhhhhh1111",
  para:"para rarar araraa1"},
  {header:"hhhhhh2222",
  para:"par arara rara raa3333"},
  {header:"hhhh hh33333",
  para:"para rara rararaa3333333333"},
  {header:"hhhhhh44444",
  para:"pa rara rarararaa44 4444"},
  {header:"hhhhhh55555",
  para:"par arar arara raa5 5555"},
  {header:"hh hh hh16 6666",
  para:"par arar arar araa 6666 666"},
  {header:"hh hh hh7777777 777",
  para:"par arar arar araa 77777 7777"},
  // {header:"hh hh hh88888 888 8",
  // para:"par arar arar 888 8 8 8 8 "},
];

var screenWidth = window.innerWidth;
var elLength=contentTest.length;console.log(elLength);
var boxWidth=420;
var gap=20;

var posLast=0;//paskutinio elemento taskas, atstumas nuo testinio konteinerio pradzios
var newElementIndex=elLength-1;
var newElementIndexFirst=0;
var change=boxWidth+gap;//elemento ir tarpo suma// 350
var base=posLast-change;//pirmo elemento taskas,posLast pradzioje lygus 0
var allElementsWidth=(boxWidth*elLength+((elLength-4)*gap));
var posCont=-200;// startine konteinerio pozicija, "nulis"
if(allElementsWidth<screenWidth){
//jei elementu maziau nei ekrano plotis
}else{
  posCont=(screenWidth-allElementsWidth)/2;
}

//pardine visu elementu pozicija left
var parent= document.getElementById('testinis');

parent.style.left=posCont+"px";//testinio konteinerio taskas

document.getElementById('arrowLeft').addEventListener("click", pushRight);
document.getElementById('arrowRight').addEventListener("click", pushLeft);

for(let i=0;i<elLength;i++){
  var elementas = document.createElement("div");// komentaro dezute
  elementas.className = 'tBox';

  parent.appendChild(elementas);
  var innerTextCont;
  // var innerTextCont=document.createElement("div"); // viso teksto div, kuriame yra header ir paragraph
  // elementas.appendChild(innerTextCont);
  var innerTextHeader=document.createElement("h2");
  var headerTest = document.createTextNode(contentTest[i].header);
  innerTextHeader.appendChild(headerTest);
  elementas.appendChild(innerTextHeader);
  var innerTextPara=document.createElement("p");
  var paraTest = document.createTextNode(contentTest[i].para);
  innerTextPara.appendChild(paraTest);
  elementas.appendChild(innerTextPara);

  let posString=posLast+"px";
  elementas.style.left=posString;
  posLast+=change;//po iteracijos esantis paskutinis taskas

}
rcalc();

function createElem(n,index){//n nurodo kurioje vietoje sukuriamas naujas elementas - priekyje ar gale
  var elementas = document.createElement("div");// komentaro dezute
  elementas.className = 'tBox';
  //var innerTextCont=document.createElement("div"); // viso teksto div, kuriame yra header ir paragraph
  //elementas.appendChild(innerTextCont);
  var innerTextHeader=document.createElement("h2");
  console.log(index);
  var headerTest = document.createTextNode(contentTest[index].header);
  innerTextHeader.appendChild(headerTest);
  elementas.appendChild(innerTextHeader);
  var innerTextPara=document.createElement("p");
  var paraTest = document.createTextNode(contentTest[index].para);
  innerTextPara.appendChild(paraTest);
  elementas.appendChild(innerTextPara);

  rcalc();//perskaiciuojama  kur ideti elementa

  if(n==1){ //elementas idedamas PO visu, LEFT
    let posLastString=posLast+"px";
    elementas.style.left=posLastString;
    parent.appendChild(elementas);
    posLast+=change;
    base+=change;

    newElementIndex++;
    if(newElementIndex>(elLength-1)){
      newElementIndex=0;
    };

    newElementIndexFirst+=1;

    if(newElementIndexFirst>(elLength-1)){
      newElementIndexFirst=0;
    };

    console.log(newElementIndexFirst,newElementIndex);

  }else if(n==-1){//elementas idedamas PRIES visus, RIGHT
    let baseString=base+"px";
    elementas.style.left=baseString;
    parent.insertBefore(elementas, allBoxes[0]);
    posLast-=change;
    base-=change;
    newElementIndex-=1;
    if(newElementIndex<0){
      newElementIndex=(elLength-1);
    }
    newElementIndexFirst-=1;
    if(newElementIndexFirst<0){
      newElementIndexFirst=(elLength-1);
    }
    console.log(newElementIndexFirst,newElementIndex);
  }
}
function pushRight(){
  //posCont+=change; //buves kodas su CSS
  //parent.style.left=posCont+"px"; //buves kodas su CSS
  anime(1); // r for right
  createElem(-1,newElementIndex);
  removeElem(1);
  reColor();
}

function pushLeft(){
  anime(-1);
  //posCont-=change; //buves kodas su CSS
  //parent.style.left=posCont+"px"; //buves kodas su CSS
  createElem(1,newElementIndexFirst);
  removeElem(-1);
  reColor();
}
function anime(n){
  let tempDist=change/25;
  let counter=0;
  var tt = setInterval(function(){
  if(counter<change){
      counter+=tempDist;
      // console.log(counter);
      if(n==1){
        posCont+=tempDist;
      }else if(n==-1){
        posCont-=tempDist;
      }
      parent.style.left=posCont+"px";
    }else{
      clearInterval(tt);
    }
  },10);
}

function removeElem(n){
  rcalc();// perskaiciuojamas allBoxes
  if(n==1){//jei panaikinamas paskutinis elementas;
    parent.removeChild(allBoxes[elLength]);
  }else if(n==-1){//panaikina pati pirma elementa
    parent.removeChild(allBoxes[0]);
  }
}
function rcalc(){
  allBoxes = document.querySelectorAll(".tBox");
  }
function reColor(){
  rcalc();
  var middle=Math.floor((allBoxes.length-1)/2);
  allBoxes[middle].style.opacity=1;
  allBoxes[middle].style.transform="scale(1.07)";
  allBoxes[middle+1].style.transform="scale(1)";
  allBoxes[middle-1].style.transform="scale(1)";
  allBoxes[middle+1].style.opacity=0.5;
  allBoxes[middle-1].style.opacity=0.5;
}
reColor();
