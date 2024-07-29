import { addizione } from "./calcolatrice/addizione";
import { sottrazione } from "./calcolatrice/sottrazione";
import { moltiplicazione } from "./calcolatrice/moltiplicazione";
import { divisione } from "./calcolatrice/divisione"; 
import { potenza } from "./calcolatrice/potenza";

const testCalcolatrice = () => {
    
    console.log( addizione(5, 3)); 
    console.log( sottrazione(5, 3)); 
    console.log( moltiplicazione(5, 3)); 
    console.log( divisione(6, 3)); 
    console.log( potenza(5, 3)); 

    try {
        console.log( divisione(5, 0)); 
    } catch (error) {
        console.error("Errore nella divisione:", error.message);
    }
};