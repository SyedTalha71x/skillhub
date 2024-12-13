import { useState } from 'react';
import axios from 'axios';

const useAxios = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null); 

    try {
      const response = await axios({
        method,  
        url,
        data: body,  
      });

      setData(response.data);  
    } catch (err) {
      setError(err.response ? err.response.data : err.message);  
    } 
  };

  return { data, error, fetchData };
};

export default useAxios;
