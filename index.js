$(".button-1").click(function(){
  $(".tab-1").css("visibility","hidden");
  $(".tab-2").css("visibility" , "visible");
});

$(".button-2").click(function(){
  $(".tab-2").css("visibility","hidden");
  $(".tab-1").css("visibility" , "visible");
});

$(".p").click(function(){
  $(".tab-2").css("visibility","hidden");
  $(".tab-1").css("visibility" , "visible");
});

$(".pl").click(function(){
  $(".tab-1").css("visibility","hidden");
  $(".tab-2").css("visibility" , "visible");
});

$(".card").hover(function(){
  $(this).addClass("shadow")
},function(){
  $(this).removeClass("shadow")
});

$(".box").hover(function(){
  $(this).addClass("shadow")
},function(){
  $(this).removeClass("shadow")
});

var info=[];

document.querySelector(".button-1").addEventListener("click" ,function () {
    info.push(document.getElementById("n").value);
    info.push(document.getElementById("e").value);
    info.push(document.getElementById("p").value);
    console.log(info);
});
