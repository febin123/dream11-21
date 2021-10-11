




/*start of menubar*/


$(window).scroll(function() {
  if ($(this).scrollTop() >= 350) {        // If page is scrolled more than 50px
      $('#hea').slideDown();    // Fade in the arrow
  } else {
      $('#hea').slideUp();   // Else fade out the arrow
  }
 
});

$(window).scroll(function() {
  if ($(this).scrollTop() <= 0) {        // If page is scrolled more than 50px
      $('#hea').slideDown();    // Fade in the arrow
  }
 
});


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const header=document.getElementById('hea');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',close1);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
function close1(){
  mainMenu.style.top = '110%';
  mainMenu.style.display = 'flex';
    // mainMenu.style.top = '0';
}

window.addEventListener("scroll",function(){
    var header=document.querySelectorAll("nav");
    header.classList.bottom("sticky",window.scrollY>0)

})


/*end of menubar */
/*start of scroll*/
// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop() >= 450) {        // If page is scrolled more than 50px
      $('.fixed-btn').fadeIn(200);    // Fade in the arrow
  } else {
      $('.fixed-btn').fadeOut(200);   // Else fade out the arrow
  }
});

$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});

/*end of scroll */
/*start of signup*/
var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}
/*end of signup */

/*start of faq */
$(document).ready(function () {
  $(".accordion-title").click(function (e) {
      var accordionitem = $(this).attr("data-tab");
      $("#" + accordionitem)
          .slideToggle()
          .parent()
          .siblings()
          .find(".accordion-content")
          .slideUp();

      $(this).toggleClass("active-title");
      $("#" + accordionitem)
          .parent()
          .siblings()
          .find(".accordion-title")
          .removeClass("active-title");

      $("i.fa-chevron-down", this).toggleClass("chevron-top");
      $("#" + accordionitem)
          .parent()
          .siblings()
          .find(".accordion-title i.fa-chevron-down")
          .removeClass("chevron-top")
  });
});

/*end of faq */


