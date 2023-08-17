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

  return (
    <div>
      <h2>Promise Methods</h2>
      <button
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong()])
            .then((values) => {
              console.log(values);
            })
            .catch((error) => console.log(error))
        }
      >
        1. Promise.all without error
      </button>
      <button
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then((values) => {
              console.log(values);
            })
            .catch((error) => console.log(error))
        }
      >
        2. Promise.all with error
      </button>
      <button
        onClick={() => {
          Promise.allSettled([fetchDataFast(), fetchDataLong()])
            .then((results) => {
              console.log(results);
            })
            .catch((error) => console.log(error));
        }}
      >
        3. Promise.allSettled without error
      </button>
      <button
        onClick={() => {
          Promise.allSettled([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then((results) => {
              console.log(results);
            })
            .catch((error) => console.log(error));
        }}
      >
        4. Promise.allSettled for all methods
      </button>
      <button
        onClick={() => {
          Promise.any([fetchDataFast(), fetchDataLong()])
            .then((value) => {
              console.log(value);
            })
            .catch((error) => console.log(error));
        }}
      >
        5. Promise.any without error
      </button>
      <button
        onClick={() => {
          Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then((value) => {
              console.log(value);
            })
            .catch((errors) => console.log(errors));
        }}
      >
        6. Promise.any with error
      </button>
    </div>
  )
}

// TEGO GŁÓWNIE SIĘ UŻYWA 1. Promise.all dla fetchDataFast i fetchDataLong---
// 2. Promise.all dla fetchDataFast, fetchDataLong, oraz fetchDataError---
// 3. Promise.allSettled dla fetchDataFast, fetchDataLong---
// 4. Promise.allSettled dla fetchDataFast, fetchDataLong, oraz fetchDataError---
// 5. Promise.any dla fetchDataFast, fetchDataLong---
// 6. Promise.any dla fetchDataFast, fetchDataLong, oraz fetchDataError---
// 7. Promise.race dla fetchDataFast, fetchDataLong, oraz fetchDataError
// 8. Promise.race dla fetchDataLong, oraz fetchDataError

