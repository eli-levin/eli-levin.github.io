//right now will be blue waves
//eventually change to rainbow
var w = window.innerWidth;
var h = window.innerHeight;
//var num = w * h / 810;

var fromLeft = 0;
var fromTop = 0;
var rowss = 9;
var colss = 9;

function makeTiles(rows, cols) {
    for (x = 0; x < rows; x++) {
        for (y = 0; y < cols; y++) {
            //var i = 1/0.2*(x+y) * 210; //more uniform distribution
            //var i = 1/(x*cols+y) * 8888; //better colors...
            var i = Math.random() * 210 + 250;
            //var randColor = '#'+Math.floor(Math.random()*16777215).toString(16); //this was old col
            var col = 'hsla(' + i + ',90%, 60%, 1)';
            var tile = document.createElement('BUTTON');
            tile.className = "tile";
            tile.style.left = fromLeft + "px";
            tile.style.top = fromTop + "px";
            tile.style.backgroundColor = col;
            document.getElementById('board').appendChild(tile);
            fromLeft += 55;
        }
        fromTop += 55;
        fromLeft = 0;
    }
}

// function ripple(ind){
//   var myBut = "button:nth-child("+ind+")";
//   for(i=0; i<rows; i++) {
//     for(j=0; j<cols; j++){
//       $(myBut).fadeTo(100, 1);
//     }
//   }
// }


$(document).ready(function () {
    //make the disco tiles
    var rows = $('#board').width() / 60;
    var cols = $('#board').height() / 60;
    makeTiles(rows, cols);

    $('button').mouseenter(function () {
        var ind = $(this).index();
        ind++;
        var myBut = "button:nth-child(" + ind + ")";
        $(myBut).fadeTo(100, 1);
    });

    $('button').mouseout(function () {
        var ind = $(this).index();
        ind++;
        var myBut = "button:nth-child(" + ind + ")";
        $(myBut).fadeTo(100, 0.5);
    });

    $('button').click(function () {
        var ind = $(this).index();
        ind++;
        var myBut = "button:nth-child(" + ind + ")";
        ripple(ind);
    });

    $('button').on("taphold", function () {
        var ind = $(this).index();
        ind++;
        var myBut = "button:nth-child(" + ind + ")";
        $(myBut).fadeTo(100, 1);
    });

    $('button').on("taphold", function () {
        var ind = $(this).index();
        ind++;
        var myBut = "button:nth-child(" + ind + ")";
        $(myBut).fadeTo(100, 0.5);
    });
});
