/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */


'use strict'; // Demande un interprétation stricte du code

let degresCelicius = prompt('Quelle température veux tu transformer ?');

if (isNaN(degresCelicius)) {
    alert('Entrez un nombre !');
} else {
    degresCelicius = parseInt(degresCelicius);
    let degresFahrenheit = degresCelicius * 9 / 5 + 32;
    alert(`${degresCelicius}°C = ${degresFahrenheit}°F`);
}



