import axios from 'axios'

const fetchData = {
  getSongs: async function (id){
  const res = await axios.get(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  return res.data.results;
  },
}



export default fetchData;