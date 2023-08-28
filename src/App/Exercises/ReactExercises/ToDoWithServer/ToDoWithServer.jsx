import './style.css';
import { useEffect, useState } from 'react';
import { ToDo } from './ToDo';
import { ToDoForm } from './ToDoForm';
import { requestHandler } from './helpers';


export const ToDoWithServer = () => {
  //Lista todosów
  const [data, setData] = useState([]);

  //stany dla ekranu głównego
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // stan dla formularza
  const [showForm, setShowForm] = useState(false);

  const getData = () => {
    setIsLoading(true);

    requestHandler('GET')
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setIsError(error);
      })
      .finally();

    // setIsError(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <div>Ładowanie...</div>
  }

  if (showForm) {
    return <ToDoForm />;
  }

  return (
    <div>
      <h2>ToDoWithServer</h2>
      {isError && <div>Coś poszło nie tak</div>}
      {!isError && (
        <div>
          {data.map((todo) => {
            const { id, title, note, author, createdAt } = todo;

            return (
              <ToDo
                key={id}
                id={id}
                title={title}
                note={note}
                author={author}
                createdAt={createdAt}
                doneDate={todo?.doneDate}
                isDone={todo?.isDone}
                getData={getData}

                setShowForm={setShowForm}
              />
            );
          })}
        </div>
      )}
      <button>Dodaj</button>
    </div>
  );
};

