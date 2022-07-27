// Vamos selecionar os ponteiros para dar o movimento de rotação dos ponteiros:
const secondHand = document.querySelector('.hand.second');
const minuteHand = document.querySelector('.hand.minute');
const hourHand = document.querySelector('.hand.hour');

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360)
 };
    
const setClock = () => {
    const currentDate = new Date();

// A partir da data temos que calcular os segundos e minutos dela:
    const secondPercentage = currentDate.getSeconds() / 60;
    const minutePercentage = currentDate.getMinutes() / 60;
    const hourPercentage = currentDate.getHours() / 12;

    setRotation(secondHand, secondPercentage);
    setRotation(minuteHand, minutePercentage);
    setRotation(hourHand, hourPercentage);
}
setClock();

setInterval(setClock, 1000);