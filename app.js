/*const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        } else if(i % 3 === 0){
            console.log('fizz');
        } else if(i % 5 === 0){
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();
*/

/*
* Calculadora de intereses en plazos a 1 año y 6 meses
*/
alert('Selecciona un plazo de 1, 3, 5 o 10 años');
alert('Las tasas de interes son de: \n1 año 8% \n3 años 10% \n5 años 14% \n10 años 22%');
let term = parseInt(prompt(`Selecciona: \n1 para 1 año \n2 para 3 años \n3 para 5 años \n4 para 10 años`));
let quantity = parseInt
(prompt(`Cuanto deseas invertir?`));
let rate;

const investing = (a, b) => {
    return a * b;
}


const interestRate = () => {
    if(term === 1){
        rate = 1.08;
        alert(`Tu inversión despues de 1 año seria de ${investing(rate,quantity)} pesos`);
        console.log(term);
    } else if(term === 2){
        rate = 1.10;
        alert(`Tu inversión despues de 2 años seria de ${investing(rate,quantity)} pesos`);
        console.log(term);
    } else if(term === 3){
        rate = 1.14;
        alert(`Tu inversión despues de 3 años seria de ${investing(rate,quantity)} pesos`);
        console.log(term);
    } else if(term === 4){
        rate = 1.22;
        alert(`Tu inversión despues de 4 años seria de ${investing(rate,quantity)} pesos`);
        console.log(term);
    } else {
        console.log('Por favor selecciona una de las opciones');
        investTerm();
    }  
}
interestRate();

// const investTerm = () => {
//     if(plazo === 1){
//         console.log(plazo);
//     } else if(plazo === 2){
//         console.log(plazo);
//     } else if(plazo === 3){
//         console.log(plazo);
//     } else if(plazo === 4){
//         console.log(plazo);
//     } else {
//         console.log('Por favor selecciona una de las opciones');
//         investTerm();
//     }  
// }
// investTerm();
// console.log(investing(rate, quantity));
