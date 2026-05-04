// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: false,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: true,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2, 9, 40]
const shippingCost = 100
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!


/* 
  sommare il carrello per verificare se maggiore di 100
  se maggiore allora azzere il valore di shipping const
  altrimenti controllare se é ambassador 
  in caso applicare uno sconto di 30%
*/

let totalPrice=0
let newShippingCost=0

for(i=0;i<prices.length;i++) {
  totalPrice+=prices[i]
}


if (totalPrice>100) {
//newShippingCost=0    questa condizione non serve più perchè basta dichiararla =0 già all'inizio e qui non serve porre nessuna condizone, riveedi l'if in funzione di ciò per ridurre il codice!!!
} else if( utenteCheEffettuaLAcquisto.isAmbassador){ // non serve mettere la condizione === true perchè va a riprendere dirtettamente il valore dell'oggetto se è boolean
  newShippingCost = shippingCost-shippingCost*30/100
} else {
  newShippingCost= shippingCost
}


//console.log(newShippingCost)


const users=[]; //posso usare push anche sulle costanti array
 users.push(marco, paul, amy)

const premiumUsers=[]; 

for (i=0;i<users.length;i++){
  
  if (users[i].isAmbassador) { //anche qui la condizione non serve scriverla ===true perchè riprende il valore dell'oggetto
  //console.log(users[i].name + " " + users[i].lastName + " è un ambassador ")
  premiumUsers.push(users[i])
} else {
  //console.log(users[i].name + " " + users[i].lastName + " non è un ambassador ")
}}

//console.log([premiumUsers])





//extra personali
// mostra ogni numero di una matrice

const array1=[1,2,3];
const array2=[4,5,6];
const array3=[7,8,9];

const matrix=[array1,array2,array3];

for(i=0;i<matrix.length;i++){
  for(x=0;x<matrix[i].length;x++){
    //console.log(matrix[i][x])
  }
}


// 6. Trova il massimo: Dato un array, trova il numero più grande senza usare Math.max.

const list =[67,4,60,8,55,112,5];

let check=0


for(i=0;i<list.length;i++){
  if (list[i]>check){
    check=list[i]
  }
}

//console.log(check)

// reverse array
let reverseList=[]

for(i=(list.length-1);i>=0;i--) {
  reverseList.push(list[i])
}


//console.log(reverseList)


//somma numeri di un array con while

let u=0
let somma=0

while (list.length>u) {
      somma+=list[u]
      u++
}

console.log(somma)


//conta vocali

const string="tavolo"
let counter=0

for(i=0; i<(string.length-1);i++) {
}
if ((string[i]==="a") || (string[i]==="e") || (string[i]==="i") || (string[i]==="o") || (string[i]==="u")) {
   counter++
}

console.log(counter)