//[Data Table Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the Data Table

$(function () {
    "use strict"; 

    $('#example1').DataTable({
        language: {
            url:'../../js/dataTables.fa.json' 
                },
    });
    $('#example2').DataTable({
		language: {
			url:'../js/dataTables.fa.json' 
				},
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    });
	
	
	$('#example').DataTable( {
		language: {
			url:'../../js/dataTables.fa.json' 
				},
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		]
	} );
	
	$('#tickets').DataTable({
		language: {
			url:'../../js/dataTables.fa.json' 
				},
	  'paging'      : true,
	  'lengthChange': false,
	  'searching'   : false,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : false,
	});
	
	$('#employeelist').DataTable({
		language: {
			url:'../../js/dataTables.fa.json' 
				},
	  'paging'      : true,
	  'lengthChange': false,
	  'searching'   : true,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : false,
	});
	
  }); // End of use strict