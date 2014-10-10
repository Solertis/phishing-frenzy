$( document ).ready(function() {
  $('#victims-table').dataTable( {
  "sAjaxSource": '/reports/uid_json/' + window.location.href.split("/").pop(),
  "sPaginationType": "bootstrap",
  "aLengthMenu": [
      [25, 50, 100, 500, -1],
      [25, 50, 100, 500, "All"]]
  });

  $('#victims-summary-table').dataTable( {
    "sPaginationType": "bootstrap",
    "sAjaxSource": '/reports/victims_list/' + window.location.href.split("=").pop(),
    "aoColumnDefs": [            
    {
     "aTargets": [ 0 ], // Column to target
     "mRender": function ( data, type, full ) {
        // 'full' is the row's data object, and 'data' is this column's data
        // e.g. 'full[0]' is the comic id, and 'data' is the comic title
        return '<a href="/reports/uid/' + data + '">' + data + '</a>';
      }
    }
  ],
  "aaSorting": [[4,'desc']],
  "aLengthMenu": [
      [25, 50, 100, 500, -1],
      [25, 50, 100, 500, "All"]]
  } );


    // new BeEF table
    // TODO do output escaping for these values, context: JS
    var beef_apikey = $('#beef_apikey').text();
    var beef_server = $('#beef_server_url').text();

    $('#online-hooked-browsers-table').dataTable( {
        "sPaginationType": "bootstrap",
        "sAjaxSource": beef_server + '/api/hooks/pf/online?token=' + beef_apikey,
        "aoColumns" : [
            { "sWidth": "15px" },
            { "sWidth": "50px" },
            { "sWidth": "25px" },
            { "sWidth": "20px" },
            { "sWidth": "30px" },
            { "sWidth": "20px" },
            { "sWidth": "20px" },
            { "sWidth": "300px" }
        ],
        "aoColumnDefs": [
            {
                "aTargets": [ 2 ], // browser type
                "mRender": function ( data, type, full ) {
                    var name = "";
                    switch(data){
                        case "C":
                            name = "Chrome";
                            break;
                        case "FF":
                            name = "Firefox";
                            break;
                        case "IE":
                            name = "InternetExplorer";
                            break;
                        case "O":
                            name = "Opera";
                            break;
                        case "S":
                            name = "Safari";
                            break;
                        default:
                            name = data;
                    }
                    return name;
                }
            }
        ],
        "bProcessing": true
    });

    $('#offline-hooked-browsers-table').dataTable( {
        "sPaginationType": "bootstrap",
        "sAjaxSource": beef_server + '/api/hooks/pf/offline?token=' + beef_apikey,
        "aoColumns" : [
            { "sWidth": "15px" },
            { "sWidth": "50px" },
            { "sWidth": "25px" },
            { "sWidth": "20px" },
            { "sWidth": "30px" },
            { "sWidth": "20px" },
            { "sWidth": "20px" },
            { "sWidth": "300px" }
        ],
        "aoColumnDefs": [
            {
                "aTargets": [ 2 ], // browser type
                "mRender": function ( data, type, full ) {
                    var name = "";
                    switch(data){
                        case "C":
                            name = "Chrome";
                            break;
                        case "FF":
                            name = "Firefox";
                            break;
                        case "IE":
                            name = "InternetExplorer";
                            break;
                        case "O":
                            name = "Opera";
                            break;
                        case "S":
                            name = "Safari";
                            break;
                        default:
                            name = data;
                    }
                    return name;
                }
            }
        ],
        "bProcessing": true
    });
});