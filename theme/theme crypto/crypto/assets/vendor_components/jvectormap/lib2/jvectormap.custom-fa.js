

jQuery('#world-map-markers').vectorMap(
    {
        map: 'world_mill_en',
        backgroundColor: '#fff',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#f4f3f0',
        regionStyle : {
            initial : {
              fill : '#0f9ad8'
            }
          },
        markerStyle: { 
          initial: {
                        r: 9,
                        'fill': '#fff',
                        'fill-opacity':1,
                        'stroke': '#000',
                        'stroke-width' : 5,
                        'stroke-opacity': 0.4
                    },
                    },
        enableZoom: true,
        hoverColor: '#0a89c1',
        markers : [{
            latLng : [21.00, 78.00],
            name : 'متن'
          
          }],
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        showTooltip: true,
        onRegionClick: function(element, code, region)
        {
            var message = 'شما روی کشور  "'
            + region
            + '" کلیک کردین که دارای کد : '
            + code.toUpperCase()
            + 'است . ';


        alert(message);
        }
    });
    
    
    $('#india').vectorMap({
                map : 'in_mill',
                backgroundColor : 'transparent',
                regionStyle : {
                    initial : {
                        fill : '#f7941d'
                    }
                }
            });
    
    
            $('#usa').vectorMap({
                map : 'us_aea_en',
                backgroundColor : 'transparent',
                regionStyle : {
                    initial : {
                        fill : '#BF0A30'
                    }
                }
            });
            
           
            
            $('#australia').vectorMap({
                map : 'au_mill',
                backgroundColor : 'transparent',
                regionStyle : {
                    initial : {
                        fill : '#00008B'
                    }
                }
            });
            
             $('#uk').vectorMap({
                map : 'uk_mill_en',
                backgroundColor : 'transparent',
                regionStyle : {
                    initial : {
                        fill : '#003399'
                    }
                }
            });
    
           
            