import axios from 'axios';

const createHelper = async (data) =>{
    const endpoint = 'http://localhost:3001/activities';
    try {
        const response = await axios.post(endpoint, data);
        alert(response.data.message);
      } catch (error) {
        alert(error.response.data.error);
      }
};

export default createHelper;