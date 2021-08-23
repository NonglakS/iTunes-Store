import "./App.css";
import Artist from "./Components/Artist";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState("selena gomez");
  const [searchTerm, setSearchTerm] = useState("")

  function search (e){
    console.log(e.target)
    if(e.key === "Enter"){
      setArtist(searchTerm);
      document.querySelector("#search input").value="";

    } else {
      setSearchTerm(e.target.value);
    }
  }

  useEffect(() => {
    async function getAlbum(terms) {
      let params = terms.replace(" ", "+");
      console.log(params);
      const { data } = await axios.get(
        `https://itunes.apple.com/search?term=${params}&media=music&entity=album&limit=200`
      );
      setAlbums(data.results);
    }

    getAlbum(artist);
  }, [artist]);

  return (
    <div className="App">
      <div id="search">
      <input type="text" placeholder="Search.." onKeyPress={(e)=>{search(e)}}/>
      </div>
      {albums.length > 0 && <Artist albums={albums} />}</div>
  );
}

export default App;
