import { api_key } from "../hidden_variables";

export { apiData };

const fetchData = async () => {
    try {
      const response = await fetch(api_key);    
      if(!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      const apiData = await response.json();
      return apiData
    } catch(error) {
      alert(error);
    }
}
  
const apiData = await fetchData();