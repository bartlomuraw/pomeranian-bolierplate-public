// Zadanie:
// dodajmy diva na napis
// napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm
// resolved :)". Użyć async/await. Użyć useState do zapisania odp z promisa.

import { useEffect, useState } from 'react';

export const Exercise = () => {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 1000);
    });
  };

  const fetchDataAsync = async () => {
    const res = await fetchData();
    setMessage(res);
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  // useEffect(() => {
  //   fetchData().then((res) => setMessage(res));
  // }, []);

  return <div>{message}</div>;
};



// import { useEffect, useState } from 'react';

// export const AsyncAwaitExercise = () => {
//   const [message, setMessage] = useState(null);

//   useEffect(() => {
//     const getMessage = () => {
//       return new Promise((resolve, reject) => {
//         if (Math.random() > 0.5) {
//           resolve('Promise fullfield ;)');
//         } else {
//           reject('Promise rejected ;c');
//         }
//       });
//     };

//     async function resolvePromise() {
//       try {
//         const result = await getMessage();
//         console.log(result);
//         setMessage(result);
//       } catch (error) {
//         console.log(error);
//         setMessage(error);
//       } finally {
//         console.log('Promise resolved');
//       }
//     }

//     resolvePromise();
//   }, []);

//   return (
//     <div>
//       Message: <h1> {message}</h1>
//     </div>
//   );
// };
