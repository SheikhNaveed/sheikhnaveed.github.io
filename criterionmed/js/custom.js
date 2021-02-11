$('.tip').tooltip();
        // ================= Google Maps ========================
        $('#map_addresses').gMap({
          address: "Quito, Ecuador",
          zoom: 15,
          markers:[
          {
            // latitude: -2.2014,
            // longitude: -80.9763,
            address: "5190 Neil Road, Suite 430 Reno, Nevada, 89502",
            html: "CriterionMed",
            popup: true
          }
          ]
        });

        // ================= Products/Services Chart ========================
        productsArray = new Array(
         [[6.6,93.4],'Customer Service'],
         [[7.9,92.1],'Billing Dept. <br>'],
         [[10.2,89.8],'Technical Support'],
         [[5.6,94.4],'Equipment'],
         [[2.6,97.4],'Supplies'],
         [[1.9,98.1],'Shipping']
         );  

        $('#products').jqBarGraph({
         data: productsArray,
         colors: ['#437346','#97D95C'],
         legends: ['Dissatisfied','Satisfied'],
         legend: true,
         postfix: '%',
         width: 700,
         legendWidth: 150,
         position:top,
         showValues: true,

       });

            // ================= Patient Outcomes ========================
            patientArray = new Array(
             [[9.4,90.6],'Pain Management'],
             [[12.4,87.6],'Rehabilitation'],
             [[3.5,96.5],'Reduce Swelling']
             );  

            $('#patient').jqBarGraph({
             data: patientArray,
             colors: ['#437346','#97D95C'],
             legends: ['Dissatisfied','Satisfied'],
             legend: true,
             postfix: '%',
             width: 500,
             legendWidth: 150,
             position:top,
             showValues: true,

           });

            // ================= Others ========================
            othersArray = new Array(
             [[42.3,57.7],'Reduce Pain Medication'],
             [[25.7,74.3],'Reduce PT Costs'],
             [[2.8,97.2],'Increase Personal Activity'],
             [[92.4,7.6],'**Adverse Side Effects'],
             [[9.7,90.3],'Recommend to Others']

             );  

            $('#others').jqBarGraph({
             data: othersArray,
             colors: ['#437346','#97D95C'],
             legends: ['No','Yes'],
             legend: true,
             postfix: '%',
             width: 1100,
             legendWidth: 150,
             position:top,
             showValues: true,

           });

            new WOW().init();
            $('.carousel').carousel({
              interval: 2000
            });

            new Share('.share');
            
            $('.products li, .products article').hover(
              function () {
                $(this).find('.des').addClass('on animated flipInY');
              },
              function () {
                $(this).find('.des').removeClass('on animated flipInY');
              }
              );
            $('.products article').hover(
              function () {
                $(this).find('.des').addClass('on animated flipInY');
              },
              function () {
                $(this).find('.des').removeClass('on animated flipInY');
              }
              );
            

            $('ol,p,.control-group:even').addClass('wow fadeInLeft');
            $('h6,h3,.control-group:odd').addClass('wow fadeInRight');