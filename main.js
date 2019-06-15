// var instance = M.FloatingActionButton.getInstance(elem);


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        opacity: 0.5,
        inDuration:250
    });
  });


  // Or with jQuery

 