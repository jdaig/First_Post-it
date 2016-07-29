$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
  new Board('#board');
});


var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  var $elem = $( selector );
  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
  // $(".post-it").draggable();
    $("body").dblclick(function(event){
      var x = event.clientX;
      var y = event.clientY; //obtiene las cordenadas del mouse
      postit = new PostIt(x,y);
      
      $("#board").append(postit.element);

      $(".header").on("mousedown", function(){
            $selec = $(this).parent();
            $selec.draggable({ stack: "#master" }); // stack ayuda a poner al frente los post-it
        });

      $(".header").on("mouseup", function(event){
          event.preventDefault(); 
          $selec.draggable("destroy");
          
        });

      $(".close").click(function(){
        // console.log(this);
        $(this).parent().parent().addClass("delete");
        $(".delete").remove();
        });

    });

  };

  initialize();
};

var PostIt = function(x,y) {
  // Aquí va el código relacionado con un post-it       aqui abajo le da la posicion del mouse
  this.element = "<div id='master' class='post-it' style='left:"+x+"px; top:"+y+"px; '><div class='header'><div class='close'>X</div></div><div class='content' contenteditable='true'>...New</div></div>"
};

