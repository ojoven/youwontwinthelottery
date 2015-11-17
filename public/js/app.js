var $width, $height, $orientation;

$(document).ready(function() {

    // Let's populate the window width and height
    populateWindowSize();

    // Fast Click
    FastClick.attach(document.body);

    // Load first turn
    loadInitialTurn();

});

$(window).resize(function() {

    populateWindowSize();

});


/** INITIAL **/
function loadInitialTurn() {

    var url = urlBase + "turn";
    var data = {};
    data.width = $(window).width();
    data.height = $(window).height();

    $.get(url, data, function(response) {

        loadGrid(response.grid);

    });

}

function loadGrid(gridSize) {

    console.log(gridSize, $width, $height);

    // Generate the HTML
    var gridHtml = "";
    for (i=0;i<gridSize;i++) {
        gridHtml += '<a href="#" class="option" data-val="' + i + '"></a>';
    }

    // And append to the grid
    $("#grid").html(gridHtml);

    // And adapt to screen
    adaptOptionsScreen(gridSize);

}

function adaptOptionsScreen(gridSize) {

    switch ($orientation) {
        case 'landscape':

            switch (gridSize) {

                case 2:
                    $(".option").width($width/2);
                    $(".option").height($height);
                    break;

                case 4:
                    $(".option").width($width/2);
                    $(".option").height($height/2);
                    break;

                case 8:
                    $(".option").width($width/4);
                    $(".option").height($height/2);
                    break;

                case 16:
                    $(".option").width($width/4);
                    $(".option").height($height/4);
                    break;

                case 32:
                    $(".option").width($width/8);
                    $(".option").height($height/4);
                    break;

                case 64:
                    $(".option").width($width/8);
                    $(".option").height($height/8);
                    break;

                case 128:
                    $(".option").width($width/16);
                    $(".option").height($height/8);
                    break;

                case 256:
                    $(".option").width($width/16);
                    $(".option").height($height/16);
                    break;

            }

    }

}

/** AUXILIAR **/
function populateWindowSize() {

    $width = $(window).outerWidth();
    $height = $(window).outerHeight();
    $orientation = $width>$height ? "landscape" : "portrait";

}