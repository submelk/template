//[member list Javascript]

//Project:	Crypto Admin - Responsive Admin Template

$(function () {
    "use strict";

	$('#example5').DataTable({
    language: {
      url:'../../js/dataTables.fa.json' 
          },
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    });
	
  }); // End of use strict