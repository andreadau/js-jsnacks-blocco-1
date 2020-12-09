// Dichiarazione 
var arr1 = [1,2,3,4,5,6,7,8,9,10];

// Posizioni
var a = 1;
var b = 5; 

// Funzione 
function arrayPosition(arr, start, exit) {  
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (i >= start && i <= exit) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// Return
var nuovoArray = arrayPosition(arr1,a,b);
console.log(nuovoArray);
