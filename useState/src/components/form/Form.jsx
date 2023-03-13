import "./index.css";
import todoList from "../../mock/todo";
import { useState } from "react";
const Form = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = todoList.length + 1;
    const newTodoItem = { id: newId, todo: newTodo };
    console.log(newTodoItem);
    //con questo controllo riesco a capire che il cambio di stato vale anche se non c'è nessun input
    todoList.push(newTodoItem);
    setNewTodo("");
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
    console.log(setNewTodo);
    //con questo console.log si capiscè bene un altra l'atteggiamento del cambio stato, infatti viene aggiornato
    //ad ogni singolo input in console(senza premere add todo), mentre se ad esempio diamo l'ordine di aggiungere un todo quando
    //ancora non si è scritto nulla verrà semplicemente aggiunto un oggetto vuoto che non si vedrà a video poichè non va  a
    //cambiare lo stato di setNewTodo
  };
  return (
    //per andare semplicemente a mostrare l'array creato in mock
    // <div>
    //   {todoList.map((todo) => (
    //     <div key={todo.id}>{todo.todo}</div>
    //   ))}
    // </div>
    //qui invece per andare a creare il form e poi postare i nuovo dati
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Todo:</label>
        <input
          id="newTodo"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

export default Form;
