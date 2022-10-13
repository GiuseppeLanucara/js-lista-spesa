/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
Buon lavoro a tutte e a tutti!!*/

const listaSpesa = ["mele", "banane", "latte", "pane"];
console.log(listaSpesa);

let i = 0
while (i < listaSpesa.length) {
    
    console.log (listaSpesa[i]);
    i++;

}
