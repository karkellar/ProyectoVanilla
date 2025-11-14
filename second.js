let greetings = document.createElement('h1');

greetings.innerText = '¡HOLA ' + localStorage.getItem("usuario") + '!';

document.getElementById('hey').appendChild(greetings);

//Si hay una fecha, aparece la anterior vex que apareció
let lastDate = localStorage.getItem('fecha');
if (lastDate) {
    let div = document.createElement('div');
    div.innerText = "ÚLTIMA VEZ QUE INGRESASTE FUE: " + lastDate;
    document.getElementById("hey").appendChild(div);
}

//Recuperamos los datos guardados en localStorage
localStorage.setItem("fecha", new Date().toLocalString());
