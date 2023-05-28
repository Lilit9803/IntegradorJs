let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutPut);

let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearImput);

let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);

function resumen(evento) {
    evento.preventDefault();

    let ticketsQuantity = document.querySelector(".ticketsQuantity");

    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;
      
        switch (ticketsCategory.value){

            case "estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;

            }

            case "trainee": {
                    totalPayment = 200 * ticketsQuantity.value * 0.5;
                    break;
            }

            case "estudiante": {
                    totalPayment = 200 * ticketsQuantity.value * 0.85;
                 break;
            }
            
        }

        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;

        let ticketsBuy = document.querySelector(".ticketsBuy");
        ticketsBuy.addEventListener("click", ticketsSubmit);

    } else {
        document.querySelector(".ticketsQuantity").getElementsByClassName.border = "2px solid red";
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "Ingrese una cantidad válida";
    }
}