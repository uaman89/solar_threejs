/**
 * Created by olexandr on 19.02.2016.
 */

function convertCanvasToImage(canvas) {
    var image = document.getElementById('screenShot');
    image.src = canvas.toDataURL("image/png");
    return image;
}


function convertSVGToImage() {
    var svg = document.querySelector( "svg" );
    var svgData = new XMLSerializer().serializeToString( svg );

    var canvas = document.createElement( "canvas" );
    var ctx = canvas.getContext( "2d" );

    var img = document.getElementById('screenShot');
    img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );

    img.onload = function() {
        ctx.drawImage( img, 0, 0 );

        // Now is done
        console.log( canvas.toDataURL( "image/png" ) );
    };}
