// Funzione per fusione array
function fusioneArray(arr,arr1,arr2,arrFusione) {
    for (var i = 0; i < arr.length; i++) {
      var el1 = arr1[i];
      var el2 = arr2[i];
      arrFusione.push(el1,el2);
    }
}
// Dichiarazione array
var arrLista = ["mela","banane","carote","cipolle"];
var arrNumeri = [1,2,3,4];
var arrShuffle = [];

// Applicazione funzione

fusioneArray(arrLista,arrLista,arrNumeri,arrShuffle);
  
console.log(arrShuffle);