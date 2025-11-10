let cont = 0;
let div = document.createElement ("div");
let interval = setInterval(() => {
    div.textContent = alert ('Bienvenido, pulsa Control + F10 o epera 5 segundos.');
    document.body.appendChild(div);
}, 5000);