import './styles.css';


export const Exercise = () => {


  const fetchDataFast = () => new Promise(resolve => setTimeout(() => {
    resolve({
      id:
        1, time: 300
    })
  }, 300))
  const fetchDataLong = () => new Promise(resolve => setTimeout(() => {
    resolve({
      id:
        2, time: 700
    })
  }, 700))
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );


  //lepiej użyć tych poniżej niż pisać w kazym .catch & .then
  const resultLogger = (result) => console.log(result);
  const errorLogger = (error) => console.log(error);

  return (
    <div className="promise-wrapper">
      <h2>Promise Methods</h2>
      <button
        className="button-33"
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
          // .then((result) => console.log(result))
          // .catch((error) => console.warn(error))
        }
      >
        1. Promise.all without error
      </button>
      <button
        className="button-33"
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        2. Promise.all with error
      </button >
      <button
        className="button-33"
        onClick={() =>
          Promise.allSettled([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        3. Promise.allSettled without error
      </button>
      <button
        className="button-33"
        onClick={() =>
          Promise.allSettled([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        4. Promise.allSettled for all methods
      </button>
      <button
        className="button-33"
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        5. Promise.any without error
      </button>
      <button
        className="button-33"
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        6. Promise.any with error
      </button>
      <button
        className="button-33"
        onClick={() =>
          Promise.race([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        7. Promise.race with error {/*fastest result when all fulfilled*/}
      </button>
      <button
        className="button-33"
        onClick={() =>
          Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        8. Promise.race without error {/*no error because of resolved promise was faster*/}
      </button>
    </div >
  )
}

// TEGO GŁÓWNIE SIĘ UŻYWA 1. Promise.all dla fetchDataFast i fetchDataLong---
// 2. Promise.all dla fetchDataFast, fetchDataLong, oraz fetchDataError---
// 3. Promise.allSettled dla fetchDataFast, fetchDataLong---
// 4. Promise.allSettled dla fetchDataFast, fetchDataLong, oraz fetchDataError---
// 5. Promise.any dla fetchDataFast, fetchDataLong---
// 6. Promise.any dla fetchDataFast, fetchDataLong, oraz fetchDataError---
// 7. Promise.race dla fetchDataFast, fetchDataLong, oraz fetchDataError---
// 8. Promise.race dla fetchDataLong, oraz fetchDataError---
