    var bend = 0;
    var path = document.getElementById("line-path");

    var x = 0;
    var swing = 32;
    var friction = .98;

    function step() {
      x++;

      swing *= friction;

      bend = (10 * Math.cos(x / 5) * swing);
      //var px = (10 * Math.cos(x/27) * swing);
      //var py = (10 * Math.cos(x/31) * swing);
      // var px = 0,
      //   py = 0;

      if (bend.toFixed(3) == 0) bend = 0.01; // problems with zero  O.o (?)
      var pathData = "M -150 0C -150 0 ,0 " + bend.toFixed(3) + ", 150 0";
      // var pathData = 'M -150 ' + px + 'C -150 0, 0 50, 150 ' + py;

      path.setAttribute("d", pathData);

      window.requestAnimationFrame(step);
    }

    path.onclick = function(e) {
      // var offset = e.clientX / window.innerWidth - 0.5;
      swing += 16;
    }

    window.requestAnimationFrame(step);