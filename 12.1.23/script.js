// Eseguire sull'array riportato sotto:

// - un metodo forEach che stampi in console.log i soli ID di ogni singolo elemento
// - un metodo map che memorizzi in una variabile tutti gli userId di ogni singolo elemento e quindi richiamarli con un console.log a parte
// - un metodo filter che stampi in console.log i soli ID di ogni singolo elemento i cui valori siano maggiori o uguali a 4

import { todos } from "./mock.js";

// console.log(todos);
// ho fatto console log per controllare che fosse stata importata correttamente l'array

// primo punto
// todos.forEach((obj) => console.log(obj.id));

// secondo punto
// const userIds = todos.map((todo) => todo.userId);
// console.log(userIds);

// terzo punto

const filteredid = todos.filter((todo) => todo.id >= 4);
console.log(filteredid);

//non riesco a capire perchè mi da un array vuota, forse non interpreta bene il numero 4 la funzione che ho scritto ?
