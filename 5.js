import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
/* 
Look at the code below. We have a variable called data and we want to set the data hits using React Hooks.
Please assume you will be making an API call to some URL which will return you an array of objects.
*/

async function fetchData(setData, errorHandler) {
    try {
        const response = await axios.get('some_url', {cancelToken: source.token});
        if(Array.isArray(response.data)) {
            setData({ hits: response.data})
        }
      } catch(e) {
        errorHandler(e);
      }
}

function App() {
  const [data, setData] = useState({hits: []});
  useEffect(() => {
    fetchData(setData, console.error);
    return () => {
        source.cancel('Operation canceled.');
    }
  }, [])
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;