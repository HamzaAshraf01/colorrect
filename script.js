var rect = document.querySelector("#center");

rect.addEventListener("mousemove" , function(details){
  var rectlocation = rect.getBoundingClientRect();
  var insideRect = details.clientX - rectlocation.left ;

  if(insideRect < rectlocation.width / 2 ) {
 
    var redcolor = gsap.utils.mapRange(0 , rectlocation.width / 2 , 255, 0 ,insideRect);
    gsap.to(rect , {
      backgroundColor: `rgb(${redcolor} , 0 , 0)` ,
      ease: "power4"
    });

  }
  else{
   
    var bluecolor = gsap.utils.mapRange(rectlocation.width / 2, rectlocation.width ,0 , 255 ,insideRect);
    gsap.to(rect , {
      backgroundColor: `rgb(0 , 0 , ${bluecolor})` ,
      ease: "power4"
    });

  }

});

rect.addEventListener("mouseleave" , function(){

  gsap.to(rect, {
    backgroundColor: "#fff" 
  })

});