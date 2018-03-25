var colorInp= document.getElementById("userColor"),
    prev= document.getElementById("preview"),
    deNum=document.getElementById("Num"),
    deRange=document.getElementById("Range"),
    deRan1=document.getElementById("ran1"),
    deRan2=document.getElementById("ran2"),
    deRan3=document.getElementById("ran3"),
    deRan4=document.getElementById("ran4"),
    dePlus= document.getElementById("Plus"),
    deDisp=document.getElementById("display");
var y = 1,
    x = 1,
    v = 1,
    u = 1,
    myInter;


//FUNCTIONS@@@@@@@@@@@@@@@@
//Random color
function randomFace(){
  var ranNumR=Math.floor((Math.random()* 255)+ 1),
  ranNumG=Math.floor((Math.random()* 255)+ 1),
  ranNumB=Math.floor((Math.random()* 255)+ 1),
  h=Math.floor((Math.random()* 3)+ 1),
  e=Math.floor((Math.random()* 3)+ 1),
  n=Math.floor((Math.random()* 3)+ 1),
  m=Math.floor((Math.random()* 3)+ 1);
  hair.src="img/hair"+h+".png";
  eyes.src="img/eyes"+e+".png";
  nose.src="img/nose"+n+".png";
  mouth.src="img/mouth"+m+".png";
  ran1.value=Math.floor((Math.random()* 70)+ 0);
  ran2.value=Math.floor((Math.random()* 40)+ 0);
  ran3.value=Math.floor((Math.random()* 30)+ 0);
  ran4.value=Math.floor((Math.random()* 35)+ 0);
  prev.style.backgroundColor= "rgb("+ranNumR+","+ranNumG+","+ranNumB+")";
}

//Create The randomFace
function createFace(){
  var ndiv= document.createElement("div");
   ndiv.style.width= "100px";
   ndiv.style.height= "100px";
   ndiv.style.position= "relative";
   ndiv.style.display= "inline-block";
   ndiv.setAttribute("onclick", "removeDiv(this)");
   ndiv.style.backgroundColor = prev.style.backgroundColor;
   var nImg1= document.createElement("img");
   var nImg2= document.createElement("img");
   var nImg3= document.createElement("img");
   var nImg4= document.createElement("img");
   ndiv.appendChild(nImg1);
   ndiv.appendChild(nImg2);
   ndiv.appendChild(nImg3);
   ndiv.appendChild(nImg4);
   deDisp.appendChild(ndiv);
   //hair
   nImg1.src= hair.src;
   nImg1.style.width= deRan1.value+"%";
   nImg1.style.top= hair.style.getPropertyValue('top');
   nImg1.className= "items";
   //eyes
   nImg2.src= eyes.src;
   nImg2.style.width= deRan2.value+"%";
   nImg2.style.top= eyes.style.getPropertyValue('top');
   nImg2.className= "items";
   //nose
   nImg3.src= nose.src;
   nImg3.style.width= deRan3.value+"%";
   nImg3.style.top= nose.style.getPropertyValue('top');
   nImg3.className= "items";
   //mouth
   nImg4.src= mouth.src;
   nImg4.style.width= deRan4.value+"%";
   nImg4.style.top= mouth.style.getPropertyValue('top');
   nImg4.className= "items";
}

function changeType(type){
  ran1.type=type;
  ran2.type=type;
  ran3.type=type;
  ran4.type=type;
}



//FUNCTIONS@@@@@@@@@@@@@@@@

colorInp.addEventListener("change", function(){
    prev.style.backgroundColor= colorInp.value;
});

deNum.addEventListener("click", function(){
    changeType("number");
});

deRange.addEventListener("click", function(){
    changeType("range");
});

deRan1.addEventListener("change", function(){
    hair.style.width= deRan1.value+"%";
});
deRan2.addEventListener("change", function(){
    eyes.style.width= deRan2.value+"%";
});
deRan3.addEventListener("change", function(){
    nose.style.width= deRan3.value+"%";
});
deRan4.addEventListener("change", function(){
    mouth.style.width= deRan4.value+"%";
});

hair.addEventListener("click", function(){
    y += 1;
    hair.src="img/hair"+y+".png";
    if(y==3){
        y = 0;
    }
});
eyes.addEventListener("click", function(){
    x += 1;
    eyes.src="img/eyes"+x+".png";
    if(x==3){
        x = 0;
    }
});
nose.addEventListener("click", function(){
    v += 1;
    nose.src="img/nose"+v+".png";
    if(v==3){
        v = 0;
    }
});
mouth.addEventListener("click", function(){
    u += 1;
    mouth.src="img/mouth"+u+".png";
    if(u==3){
        u = 0;
    }
});
//level 4a
dePlus.addEventListener("click", function(){
   createFace();
});

//Level 4b and 5a
document.getElementById("Random").addEventListener("click", function(){
  randomFace();
});

//level 6
document.getElementById("AutoRan").addEventListener("click", function(){
  myInter= setInterval(function(){randomFace();createFace();}, 500);
});

document.getElementById("StopAutoRan").addEventListener("click", function(){
  clearInterval(myInter);
});

//Bonus
function removeDiv(dtn){
  dtn.parentNode.removeChild(dtn);
}
