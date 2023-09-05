/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict';

  let celcius = prompt('Entrez la température en °C :');
  celcius = parseFloat(celcius);
  // ou avec opérateur unaire : celcius = +celcius;
  console.log(celcius);

  let fahrenheit = celcius * 9 / 5 + 32;
  // ou faire la conversion à ce moment avec opérateur unaire :
  // let fahrenheit = +celcius * 9 / 5 + 32;

  console.log(fahrenheit);
  alert(`${fahrenheit} °F`);


}()); // Main IIFE

