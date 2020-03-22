var w = window.innerWidth;
var h = window.innerHeight;

var fromLeft = 0;
var fromTop = 0;

var shapes = 0;

function makeTiles(rows, cols) {
    for (x = 0; x < rows; x++) {
        for (y = 0; y < cols; y++) {
            var i = Math.random() * 210 + 250;
            fromLeft = Math.random() * 95;
            fromTop = Math.random() * 95;
            
            var col = 'hsla(' + i + ',90%, 60%, 1)';
            var tile = document.createElement('BUTTON');
            tile.className = "tile";
            tile.style.left = fromLeft + "%";
            tile.style.top = fromTop + "%";
            tile.style.backgroundColor = col;
            
            //rotate the tiles randomly-- the prime # 17 is good for this
            var rotate = 360*Math.random();
            tile.style.mozTransform = 'rotate('+(rotate-17)+'deg)';
            tile.style.webkitTransform = 'rotate('+(rotate-17)+'deg)';
            tile.style.transform = 'rotate('+(rotate-17)+'deg)';
            
            //add the tile to the html
            document.getElementById('board').appendChild(tile);
            shapes++;
        }
    }
}

$(document).ready(function () {
    alert("Clean up the shapes!")

    //set glboal w and h to width and height of board
    w = $('#board').width();
    h = $('#board').height();
  
    //make the disco tiles
    var rows = w / 40;
    var cols = h / 40;
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
        shapes--;
        $(this).remove();

        if (shapes === 0) {
            alert("Good job! Now go read a book :-)")
        }
    });
});
