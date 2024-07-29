import { addizione } from "./calcolatrice/addizione.js";
import { sottrazione } from "./calcolatrice/sottrazione.js";
import { moltiplicazione } from "./calcolatrice/moltiplicazione.js";
import { divisione } from "./calcolatrice/divisione.js"; 
import { potenza } from "./calcolatrice/potenza.js";

const testCalcolatrice = () => {
    
    console.log("addizione", addizione(5, 3)); 
    console.log("sottrazione", sottrazione(5, 3)); 
    console.log("moltiplicazione", moltiplicazione(5, 3)); 
    console.log("divisione", divisione(6, 3)); 
    console.log("potenza", potenza(5, 3)); 

    try {
        console.log( divisione(5, 0)); 
    } catch (error) {
        console.error("Errore nella divisione:", error.message);
    }
};
testCalcolatrice();