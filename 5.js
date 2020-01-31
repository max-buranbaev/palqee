import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* 
Look at the code below. We have a variable called data and we want to set the data hits using React Hooks.
Please assume you will be making an API call to some URL which will return you an array of objects.
*/

function App() {
  const [data, setData] = useState({hits: []});
  useEffect(async () => {
      try {
        const response = axios.get('some_url');
        if(Array.isArray(response.data)) {
            setData({ hits: response.data})
        }
      } catch(e) {
        errorHandler(e);
      }
  })
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