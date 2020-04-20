// determinare il costo per km e la stringa valuta
var costo_km = 0.21;
var valuta = ' euro';

// domandare Nome

var nome_utente = prompt('Inserisci il tuo nome');
console.log(nome_utente);
document.getElementById('nome').innerHTML = nome_utente;


// domandare i km da percorrere
var km = prompt('km da percorrere in treno');
document.getElementById('km_dafare').innerHTML = km;
console.log(km);

// domandare l'età

var eta = prompt('quanti anni hai?');
document.getElementById('eta_utente').innerHTML = eta;
console.log(eta);

// creare un if che applica la scontistica col sottocento

if (eta > 18 && eta < 65) {
    var costo_finale = (costo_km * km);
    document.getElementById('costo_da_mostrare').innerHTML = costo_finale + valuta;
}
else {
    if (eta <18) {
        var costo_finale = ((80 * (costo_km * km)) / 100);
        document.getElementById('costo_da_mostrare').innerHTML = costo_finale + valuta;
    }
    else {
        var costo_finale = ((60 * (costo_km * km)) / 100);
        document.getElementById('costo_da_mostrare').innerHTML = costo_finale + valuta;
    }
}
console.log(costo_finale);
