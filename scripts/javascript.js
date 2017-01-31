$(document).ready(function() {
    createDivs(getsize());
    clearCanvas();
    changeColor();
    changeGridSize();
});

// creates the 16 divs to use as squares
function createDivs(gridDimension) {
    $(".container").children().remove();
    $(".container").append("<table>");
    for(i=0; i< gridDimension; i++) {
        $(".container").append("<tr>");
        for(j=0; j < gridDimension; j++) {
            $(".container").append("<td></td>")
            $("td").css("height", 800/gridDimension);
            $("td").css("width", 800/gridDimension);
        }
        $(".container").append("</tr>");
    }
    $(".container").append("</table>");
    drawOnCanvas(getColor());
    erase();
};

// allows user to draw on canvas
function drawOnCanvas(color) {
    $("td").hover(function() {
        $(this).css("background-image", "none");
        $(this).css("background-color", color);
    });
};

// clears canvas when "Clear" button is clicked
function clearCanvas() {
    $("#clear").click(function() {
        $("td").css("background-color", "white");
        $("td").css("background-image", "none");
    });
};

// changes the dimensions of grid by using the selction of pen size
function changeGridSize() {
  $('#pen').on('change', function() {
      createDivs(getsize());
    });
};
function getsize () {
    return $('#pen').val();
}
function getColor() {
    return $('#chooseColor').val();
}

// allows user to select color to draw with
function changeColor() {
    $('#chooseColor').on('change', function() {
        var color = this.value;
        drawOnCanvas(color);
    });
};

// allows user to erase
function erase() {
    $('#eraser').click(function() {
        $("td").hover(function() {
            $(this).css("background-color", "none");
        });
    });
};
