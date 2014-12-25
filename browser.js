var Snap = require('Snap');
var domready = require('domready');
var util = require('util');

domready(function(){
    var container = Snap('#container');
    Snap.load('speedometer.svg',function(speed){
        var marker = speed.select('#marker');
        container.append(speed);

        //Cada 3 segundos cambia el valor, lo reflejamos
        //con una animación
        var ang = 0;
        setInterval(function(){
            var matrix = new Snap.Matrix();
            ang=Math.floor(Math.random()*360);
            console.log(util.format('r%i,129,129',ang));
            marker.animate({ transform: util.format('r%d,129,129',ang) }, 700,mina.linear);
            //marker.attr({ transform: util.format('r%d,129,129',ang) });

        },1000);
    });
})