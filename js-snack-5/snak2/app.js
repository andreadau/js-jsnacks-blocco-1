// reverse function
var parola = prompt("Inserisci una parola per il reverse");

function reverse(s){
    return s.split("").reverse().join("");
}


reverse(parola);

alert(reverse(parola));