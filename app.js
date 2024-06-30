/*
* Calculadora de intereses en plazos a 1 año y 6 meses
*/
alert('Selecciona un plazo de 1, 3, 5 o 10 años');
alert('Las tasas de interes son de: \n1 año 8% \n3 años 10% \n5 años 14% \n10 años 22%');

let rate;

const investing = (a, b) => (a * b).toFixed(2);


const interestRate = () => {
    for(;;) {
        let term = parseInt(prompt(`Selecciona: \n1 para 1 año \n2 para 3 años \n3 para 5 años \n4 para 10 años`));
        let quantity = parseInt(prompt(`Cuanto deseas invertir?`));
            
        if(isNaN(term) || isNaN(quantity)) {
            alert('Por favor ingresa valores válidos');
            continue;
        }

        if(term === 1){
            rate = 1.08;
            alert(`Tu inversión despues de 1 año seria de ${investing(rate,quantity)} pesos`);
            break;
        } else if(term === 2){
            rate = 1.10;
            alert(`Tu inversión despues de 2 años seria de ${investing(rate,quantity)} pesos`);
            break;
        } else if(term === 3){
            rate = 1.14;
            alert(`Tu inversión despues de 3 años seria de ${investing(rate,quantity)} pesos`);
            break;
        } else if(term === 4){
            rate = 1.22;
            alert(`Tu inversión despues de 4 años seria de ${investing(rate,quantity)} pesos`);
            break;
        } else {
            alert('Por favor selecciona una de las opciones');
        }  
    }
}
interestRate();