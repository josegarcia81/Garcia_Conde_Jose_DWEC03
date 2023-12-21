'use strict'

$(document).ready(function(){
    console.log("JQuery cargado")

    var botonRojo = $("#butrojo");
    //console.log(botonRojo)
    var botonAzul = $("#butazul");
    var rojo = "rojo";
    var azul = "azul";

    botonRojo.click(function(){
        console.log("boton rojo activado")
        
        $("div").click(function(){
            var nombreClase1 = $(this).attr("class");
            console.log(nombreClase1);

            var nombreId = $(this).attr("id");
            console.log(nombreId);
            
            $("#"+nombreId).removeClass().addClass("rojo")
            //$("#"+nombreId).attr("class","rojo")
            // if($(this).hasClass(azul)){
                
            //     alert("casilla marcada por el azul")
            
            // }else{
            //     pintar(nombreId,rojo)
            //     //$("#"+nombreId).removeClass().addClass("rojo")
            // }
        })
        
    })

    botonAzul.click(function(){
        console.log("boton azul activado")

        $("div").click(function(){
            var nombreClase2 = $(this).attr("class");
            console.log(nombreClase2);
            
            var nombreId = $(this).attr("id");
            console.log(nombreId);

            $("#"+nombreId).removeClass().addClass("azul")
            //$("#"+nombreId).attr("class","rojo")
            // if($(this).hasClass(rojo)){
                
            //     alert("casilla marcada por el rojo")
            
            // }else{
            //     pintar(nombreId,azul)
            //     //$(this).removeClass().addClass("azul")
            
            // }
            
                    
        })
    })

    

    //  function pintar(nombreId,color){
    //      $("#"+nombreId).removeClass().addClass(color)
    //      //$("#"+nombreId).attr("class",color)
    //  } 
    
    

    var botonReset = $("#resetpartida");
    botonReset.click(function(){
        $("div").removeClass()
    })

});