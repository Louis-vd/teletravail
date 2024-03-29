/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        let num1 = parseInt(document.getElementById('op-one').value);
        let num2 = parseInt(document.getElementById('op-two').value);

        switch(operation){
            case 'addition':
                alert(num1 + num2);
                break;
            case 'substraction':
                alert(num1 - num2);
                break;
            case 'multiplication':
                alert(num1 * num2);
                break;
            case 'division':
                alert(num1 / num2);
                break;
        };
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        )
    );
})();
