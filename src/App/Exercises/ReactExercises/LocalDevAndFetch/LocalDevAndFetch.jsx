
import { useState } from 'react';
import './style.css';

export const LocalDevAndFetch = () => {
  const [todo, setTodo] = useState([]);
  const handleToDoClick = () => {
    getToDoFromLocalServer();

  };

  async function getToDoFromLocalServer() {
    const serverData = await fetch('http://localhost:3333/api/todo');
    const toDoJson = await serverData.json();
    setTodo(toDoJson);
  }

  console.log(todo);

  return (
    <div>
      <h2>LocalDevAndFetch</h2>
      <button onClick={() => handleToDoClick()}> DOWNLOAD DATA</button>

      {todo.map((object) => {
        <div>
          <p>id:{object.id}</p>
          <p>title:{object.title}</p>
          <p>createdAt:{object.createdAt}</p>
        </div>
      })}

    </div>
  );
}

