/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */


'use strict'; // Demande un interprétation stricte du code


let btAjouter = document.querySelector('.ajouter');
let inputArticle = document.getElementById('article');
let pArticles = document.querySelector('p.article');
let ulArticles = document.querySelector('ul.tousArticles');

// Permet d'ajouter les conversion dans la liste et dans le paragraphe
btAjouter.addEventListener('click', () => {
    inputArticle.value = parseInt(inputArticle.value);

     if (isNaN(inputArticle.value)) {
        alert('Entrez un nombre !');
    } else {
        pArticles.innerHTML = '<p>' + (inputArticle.value * 9 / 5 + 32) + '°F' + '</p>';
        ulArticles.innerHTML += '<li>' + (inputArticle.value * 9 / 5 + 32) +'°F' + '</li>';
        // Vide le champ Article
        inputArticle.value = '';
    }
});

//Permet de réinitialiser tout les conversions
let btReinitialiser = document.querySelector('.reinitialiser');
btReinitialiser.addEventListener('click', () => {
    inputArticle.value = '';
    pArticles.innerHTML = '';
    ulArticles.innerHTML = '';
});


/*-
let degresCelicius = prompt('Quelle température veux tu transformer ?');
degresCelicius = parseInt(degresCelicius);

if (isNaN(degresCelicius)) {
    alert('Entrez un nombre !');
} else {
    let degresFahrenheit = degresCelicius * 9 / 5 + 32;
    alert(`${degresCelicius}°C = ${degresFahrenheit}°F`);
}*/



