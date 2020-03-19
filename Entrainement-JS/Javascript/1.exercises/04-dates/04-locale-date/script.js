/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();

    const options = { weekday:'long', year: 'numeric', month:'long', day:'numeric'};
    const now = date.toLocaleDateString('fr-FR', options) + ', ' + hour + 'H' + min;
    
    document.getElementById('target').innerHTML = now;
    
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();
