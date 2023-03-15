import "./index.css";
import todoList from "../../mock/todo";
import { useState } from "react";
const Form = () => {
  const [newTodo, setNewTodo] = useState("");

  //per rimpiazzare il metodo push per aggiungere il nuovo item, vado a crearmi uno stato che
  //richiama la todoList come stato di base e che quando viene richiamata aggiunge l'oggetto
  const [todos, setTodos] = useState(todoList);

  const handleSubmit = (event) => {
    event.preventDefault();

    //questa riga di codice la commento poichè devo sostituire il riferimento di partenza per il
    //conteggio , altrimenti funzionerebbe solo con l'aggiunta del primo elemnto (poi non aggiungiù più id)
    //perchè non riconosce todos
    // const newId = todoList.length +1
    const newId = todos.length + 1;
    const newTodoItem = { id: newId, todo: newTodo };
    console.log(newTodoItem);
    //con questo controllo riesco a capire che il cambio di stato vale anche se non c'è nessun input
    // todoList.push(newTodoItem);
    setTodos((prev) => [...prev, newTodoItem]);
    // setNewTodo("");
  };

  const handleCancellami = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleItemClick = (id) => {
    handleCancellami(id);
  };

  const handleSort = () => {
    setTodos((prevTodos) =>
      [...prevTodos].sort((a, b) => a.todo.localeCompare(b.todo))
    );
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
    <div className="component">
      <form className="form" onSubmit={handleSubmit}>
        <label>New Todo:</label>
        <input
          placeholder="scrivi qui la tua todo"
          id="newTodo"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={handleSort} className="sort">
        Sort Alphabetically
      </button>
      {todos.map((todo) => (
        <div
          className="todo"
          key={todo.id}
          onClick={() => handleItemClick(todo.id)}
        >
          {todo.todo}

          <button onClick={() => handleCancellami(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Form;

//  {todoList.map((todo) => (
