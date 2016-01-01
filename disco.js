var w = window.innerWidth;
var h = window.innerHeight;
//var num = w * h / 810;

var fromLeft = 0;
var fromTop = 0;

function makeTiles(rows, cols) {
    for (x = 0; x < rows; x++) {
        for (y = 0; y < cols; y++) {
            //var i = 1/0.2*(x+y) * 210; //more uniform distribution
            //var i = 1/(x*cols+y) * 8888; //better colors...
            var i = Math.random() * 210 + 250;
            //var randColor = '#'+Math.floor(Math.random()*16777215).toString(16); //this was old col
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
        }
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
    //set glboal w and h to width and height of board
    w = $('#board').width();
    h = $('#board').height();
  
    //make the disco tiles
    var rows = w / 30;
    var cols = h / 30;
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
        //$(myBut).fadeTo(100, 0.5);
        $(this).hide();
    });

    /*$('button').click(function () {
        var ind = $(this).index();
        ind++;
        var myBut = "button:nth-child(" + ind + ")";
        //ripple(ind);
        //$(this).hide();
    });*/
});
