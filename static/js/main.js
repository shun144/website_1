const show_delay = 2500;
const tran_delay = 1000;

$(function() {

   $('#intro_container').hide().fadeIn(show_delay);

   setTimeout(() => { 
      $('.letter').addClass('loaded');
      $('.reg-text').addClass('loaded');
   }, tran_delay)

   setTimeout(() => {

      $('.splash_bg').addClass('appear');  
   }, tran_delay * 4.0)

   setTimeout(() => {

      $('body').addClass('body_appear');
      $('#intro_container').addClass('disappear');
      $('#main_container').addClass('appear');
   
   }, tran_delay * 4.5)

});
