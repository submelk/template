//[advanced form element Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the advanced-form-element

$(function () {
    "use strict";

    //Initialize Select2 Elements
    $('.select2').select2();

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' });
    //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' });
    //Money Euro
    $('[data-mask]').inputmask();

    //Date range picker
    $('#reservation').daterangepicker({
      "locale": {
        "format": "MM/DD/YYYY",
        "separator": " - ",
        "applyLabel": "اعمال",
        "cancelLabel": "لغو",
        "fromLabel": "از",
        "toLabel": "تا",
        "daysOfWeek": [
            "ش",
            "ج",
            "پ",
            "چ",
            "س",
            "د",
            "ی"
        ],
        "monthNames": [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند"
        ],
        "firstDay": 1
    },
    opens: 'right', 
    });
    //Date range picker with time picker
     $('#reservationtime').daterangepicker({ 
      timePicker: true,
       timePickerIncrement: 30,
        format: 'MM/DD/YYYY h:mm A',
        "locale": {
          "format": "MM/DD/YYYY",
          "separator": " - ",
          "applyLabel": "اعمال",
          "cancelLabel": "لغو",
          "fromLabel": "از",
          "toLabel": "تا",
          "customRangeLabel": 'محدوده سفارشی',
          "daysOfWeek": [
              "ش",
              "ج",
              "پ",
              "چ",
              "س",
              "د",
              "ی"
          ],
          "monthNames": [
              "فروردین",
              "اردیبهشت",
              "خرداد",
              "تیر",
              "مرداد",
              "شهریور",
              "مهر",
              "آبان",
              "آذر",
              "دی",
              "بهمن",
              "اسفند"
          ],
          "firstDay": 1
      },
      opens: 'right', 
      });
    //Date range as a button
     $('#daterange-btn').daterangepicker(
      {
        ranges   : {
          'امروز'       : [moment(), moment()],
          'دیروز'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          '7 روز قبل' : [moment().subtract(6, 'days'), moment()],
          '30 روز قبل': [moment().subtract(29, 'days'), moment()],
          'این ماه'  : [moment().startOf('month'), moment().endOf('month')],
          'ماه قبل'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate  : moment(),
        "locale": {
          "format": "MM/DD/YYYY",
          "separator": " - ",
          "applyLabel": "اعمال",
          "cancelLabel": "لغو",
          "fromLabel": "از",
          "toLabel": "تا",
          "customRangeLabel": 'محدوده سفارشی',
          "daysOfWeek": [
              "ش",
              "ج",
              "پ",
              "چ",
              "س",
              "د",
              "ی"
          ],
          "monthNames": [
              "فروردین",
              "اردیبهشت",
              "خرداد",
              "تیر",
              "مرداد",
              "شهریور",
              "مهر",
              "آبان",
              "آذر",
              "دی",
              "بهمن",
              "اسفند"
          ],
          "firstDay": 1
      },
      opens: 'right', 
      },
      function (start, end) {
        $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
      }
    );

    //Date picker
    $('#datepicker').datepicker({
      autoclose: true
    });

    //iCheck for checkbox and radio inputs
    $('.ichack-input input[type="checkbox"].minimal, .ichack-input input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'icheckbox_minimal-blue'
    });
    //Red color scheme for iCheck
    $('.ichack-input input[type="checkbox"].minimal-red, .ichack-input input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass   : 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('.ichack-input input[type="checkbox"].flat-red, .ichack-input input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass   : 'iradio_flat-green'
    });

    //Colorpicker
    $('.my-colorpicker1').colorpicker();
    //color picker with addon
    $('.my-colorpicker2').colorpicker();

    //Timepicker
    $('.timepicker').timepicker({
      showInputs: false
    });
  });