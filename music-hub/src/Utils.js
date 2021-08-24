import axios from 'axios'

const Utils = {
  getSongs: async function (id){
  const res = await axios.get(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  return res.data.results;
  },

  convertToMin: function(millis){
    var mins = Math.floor(millis / 60000);
    var secs = ((millis % 60000) / 1000).toFixed(0);
    return mins + ":" + (secs < 10 ? `0${secs}` : secs);
  }
}



export default Utils;