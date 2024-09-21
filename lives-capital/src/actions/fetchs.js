import axios from 'axios'


export const fetchBack = async (name) => {
  const {data} = await axios.get('http://localhost:5005/address');
  console.log(data);

  return data
}