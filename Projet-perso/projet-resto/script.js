
const myFunction = ()=> {
    const x = document.getElementById("myNav");
    //Si la class = navbar alors le menu burger apparait //
    if (x.className === "navbar") {
      x.className += " responsive";
    //Si non, navbar normale//
    } else {
      x.className = "navbar";
    }
  }

$(document).ready(function(){
  $(window).scroll(function(){
    let scrollpos = $(window).scrollTop();
    $('.bg').css({
      'height': +(scrollpos)+ 'px'
    })
  })
})