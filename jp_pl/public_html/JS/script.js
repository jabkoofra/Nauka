/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tabliczkaMnozenia = "<table>";
var x = 15;

function powiekszanie() {
    var xx = document.getElementById("rezultat");
    /**
     document.getElementById("rezultat").className = "zmienKolor";
     var style = xx.window.getComputedStyle(document.getElementById("rezultat")).fontSize;    
     var fontSize = parseFloat(style); **/
    xx.style.fontSize = x++ + 'px';
}


function pomniejszenie() {
    /** this.removeAttribute("class"); **/
    document.getElementById("rezultat").style.fontSize = --x + 'px';
}

for (var i = 1; i <= 10; i++) {
    tabliczkaMnozenia += "<tr>";
    for (var j = 1; j <= 10; j++) {
        tabliczkaMnozenia += "<td>" + i * j + "</td>";
    }
    tabliczkaMnozenia += "</tr>";
}

tabliczkaMnozenia += "</table>";
var rezultat = document.getElementById("rezultat");
rezultat.innerHTML = tabliczkaMnozenia;

/** var plusik = document.getElementById("plus");
 plusik.onmouseover = powiekszanie;
 plusik.onmouseout = pomniejszenie;
 **/
window.onload = function () {
    document.getElementById("plus").onmouseover = powiekszanie;
    document.getElementById("minus").onmouseover = pomniejszenie;
};