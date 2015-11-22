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

    var $optionWidth, $optionHeight;

    switch ($orientation) {
        case 'landscape':

            switch (gridSize) {

                case 2:
                    $optionWidth = $width/2;
                    $optionHeight = $height;
                    break;

                case 4:
                    $optionWidth = $width/2;
                    $optionHeight = $height/2;
                    break;

                case 8:
                    $optionWidth = $width/4;
                    $optionHeight = $height/2;
                    break;

                case 16:
                    $optionWidth = $width/4;
                    $optionHeight = $height/4;
                    break;

                case 32:
                    $optionWidth = $width/8;
                    $optionHeight = $height/4;
                    break;

                case 64:
                    $optionWidth = $width/8;
                    $optionHeight = $height/8;
                    break;

                case 128:
                    $optionWidth = $width/16;
                    $optionHeight = $height/8;
                    break;

                case 256:
                    $optionWidth = $width/16;
                    $optionHeight = $height/16;
                    break;

            }

    }

    $('.option').width($optionWidth);
    $('.option').height($optionHeight);

    console.log($width, $optionWidth);

}

/** AUXILIAR **/
function populateWindowSize() {

    $width = $(window).outerWidth();
    $height = $(window).outerHeight() - $("#main-header").outerHeight();
    $orientation = $width>$height ? "landscape" : "portrait";

}