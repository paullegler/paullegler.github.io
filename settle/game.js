var canvas = document.getElementById("Board");
var cxt = canvas.getContext("2d");

// hexagon
function drawHex(size, xcenter, ycenter) {
  var numberOfSides = 6,
      size = size,
      Xcenter = xcenter,
      Ycenter = ycenter;

  cxt.beginPath();
  cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

  for (var i = 1; i <= numberOfSides;i += 1) {
      cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  cxt.strokeStyle = "#000000";
  cxt.lineWidth = 1;
  cxt.stroke();
}

drawHex(100, 200, 200)
drawHex(100, 300, 300)
