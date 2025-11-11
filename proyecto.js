let div = document.getElementById('welcome');
let user = document.getElementById('user');
user.style.display = 'none';

let temp = setTimeout(function () {
    div.style.display = 'none';
}, 5000);     

document.addEventListener("keypress", function(tecla) {
    if (tecla.key === "o" || tecla.key === "k") {
        div.style.display = 'none';
        show();
    }
})

function show() {
    user.style.display = 'block';
}

function validateEmail() {
    if (valiName.)
}