function fillAndUpdateButtons() {
    let buttons = document.querySelectorAll("#tabla button");
    document.querySelector("#winPane").style.display="none";
    //let numbers = [];
    let first_25 = []
    let count=1;
    let points = 1;

    for (let i = 1; i <= 50; i++) {
        //numbers.push(i);
        if (i <= 25) {
            first_25.push(i);
        }
    }
    
    first_25.sort(function() {
        return 0.5 - Math.random();
    });
    
    
    buttons.forEach(function(button) {
        button.textContent = first_25[count-1];
        count++;
    
        // Define a named function for the click event
        function handleClick() {
            if (count <= 50) {
                if (points == button.textContent) {
                    button.textContent = count;
                    points++;
                    count++;
                }
                
                
            } else if (count <= 74) {
                if (points == button.textContent) {
                    button.style.background = "#ffffff";
                    button.style.color = "#ffffff";
                    button.textContent ="";
                    // Remove the click event listener using the named function reference
                    button.removeEventListener("click", handleClick);
                    count++;
                } 
            } else {
                if (buttons && buttons.forEach) {
                    console.log("You win!");
                    let winner = document.getElementById("winPane");
                    winner.style.display = "block";
                    buttons.forEach(function(button) {
                        button.removeEventListener("click", handleClick);
                        button.style.background = "#ffffff";
                        button.style.color = "#ffffff";
                        button.textContent ="";
                    });
                } else {
                    console.error("The 'buttons' array is undefined or does not support forEach.");
                }
                
            }
        }
    
        // Add the click event listener using the named function
        button.addEventListener("click", handleClick);
    });
}

function reset() {
    location.reload();
}
// Llama a la función cuando se cargue la página
window.onload = fillAndUpdateButtons;