// Triangolo
var triangoloRett = {
    base : 4,
    altezza : 20
};

// Perimetro 
var ipotenusa = Math.sqrt((triangoloRett.base^2)+(triangoloRett.altezza^2));
var perimetro = (triangoloRett.base) + (triangoloRett.altezza) + ipotenusa;
console.log(perimetro);

// Area
var area = (triangoloRett.base * triangoloRett.altezza) / 2;
console.log(area);