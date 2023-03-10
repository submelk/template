//[Dashboard Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
  // bootstrap WYSIHTML5 - text editor
  $('.textarea').wysihtml5({
    locale: 'fa-IR',
  });	

   
  // SLIMSCROLL FOR CHAT WIDGET
  $('#direct-chat').slimScroll({
    height: '380px'
  });
	
//ticker
 		if ($('#webticker-8').length) {   
		$("#webticker-8").webTicker({
			height:'auto', 
			duplicate:true,
			startEmpty:false, 
			rssfrequency:5,
			direction: 'right',
		});
	}
//data table
     $('#example1').DataTable({
      language: {
				url:'./js/dataTables.fa.json' 
					},
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : false,
      'autoWidth'   : false
    });
	
	
}); // End of use strict

