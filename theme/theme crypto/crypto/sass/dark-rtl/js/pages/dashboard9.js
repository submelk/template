//[Dashboard Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

    'use strict';
      
  if ($('.buy-sall-table').length) {
          setRandomClass();
          setInterval(function () {
              setRandomClass();
          },1000);
          function setRandomClass() {
              var tbody = $(".buy-sall-table table tbody");
              var items = tbody.find("tr");
              var number = items.length;
              var random1 = Math.floor((Math.random() * number));
              var random2 = Math.floor((Math.random() * number));
              items.removeClass("bg-warning");
              items.eq(random1).addClass("bg-warning");
              items.eq(random2).addClass("bg-warning");
          }
      }
      
      //ticker
       if ($('#webticker-1').length) {   
          $("#webticker-1").webTicker({
              height:'auto', 
              duplicate:true, 
              startEmpty:false, 
              rssfrequency:5,
            direction: 'right'
          });
      }
      /*--- Sparkline charts - mini charts ---*/ 
          function sparkline_charts() {
              $('.sparklines').sparkline('html');
          }
          if ($('.sparklines').length) {
              sparkline_charts();
          } 
      
  }); // End of use strict
  
  