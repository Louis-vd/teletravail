/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let age = prompt("Quel age as-tu ?");
    let sex = prompt("De quel sexe est tu ?");
    let ville = prompt("Ou habites-tu ?");

    confirm("age = " + age  +
          "sexe = " + sex +
          "ville = " + ville)
    // your code here
})();
