const deg =6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(() => {
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

    function calcularTiempo() {
        let tiempo = new Date();
    
        let day = tiempo.getDate(); 
        let month = tiempo.getMonth() + 1; 
        let year = tiempo.getFullYear();
        let hour = tiempo.getHours();
        let minute = tiempo.getMinutes();
        let second = tiempo.getSeconds();
    
let ampm = hour <=12 ? 'Am':'Pm';
hour=hour%12;
hour=hour ? hour : 12;




        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        day = day < 10 ? "0" + day : day; 
        month = month < 10 ? "0" + month : month; 
    
        let pantallaReloj1 = hour + ":" + minute + ":" + second + " "+ampm;
        let pantallaFecha = day + "/" + month + "/" + year;
    
    
        let Reloj1 = document.querySelector(".Reloj1");
        let Fecha = document.querySelector(".Fecha");
    
    
        Reloj1.innerHTML = pantallaReloj1;
        Reloj1, Fecha.innerHTML = pantallaFecha;
    }
    setInterval(calcularTiempo, 1000);
    calcularTiempo();

})