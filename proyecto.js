let div = document.getElementById('welcome');
let user = document.getElementById('user');

user.style.display = 'none';

//Lo preparamos para que desaparezca y aparezca el Usuario luego
let temp = setTimeout(function () {
    div.style.display = 'none';
    show();
}, 5000);     

document.addEventListener("keypress", function(tecla) {
    if (tecla.key === "o" || tecla.key === "k") {
        div.style.display = 'none';
        show();
    }
});

//Función para mostrar el Usuario
function show() {
    user.style.display = 'block';
}

let error = document.getElementById('error');

//Se valida teniendo en cuenta que debe contener car + @ + car + . + car
function validateEmail(cadena) {
    return (cadena.includes('@') &&
    cadena.includes('.') &&
    cadena.indexOf('@') > 0 &&
    cadena.indexOf('.') > cadena.indexOf('@') + 1
    );
}

// Evita que el form recargue la página y valida correctamente
user.addEventListener('submit', function(event) {

    // Evita que se recargue la página
    event.preventDefault();
    let emailUser = document.getElementById('valiName').value;
    localStorage.setItem (("usuario"), emailUser);
    if(validateEmail(emailUser)) {
        error.textContent = "";
    } else {

        //Si no es correcto el email, se hace que el usuario lo vuelva a intentar
        error.textContent = "Correo incorrecto";
    }
});