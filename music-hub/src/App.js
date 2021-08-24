import "./App.css";
import Artist from "./Components/Artist";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState("selena gomez");
  const [searchTerm, setSearchTerm] = useState("");

  function search(e) {
    if (e.key === "Enter") {
      setArtist(searchTerm);
      document.querySelector("#search").value = "";
    } else {
      setSearchTerm(e.target.value);
    }
  }

  useEffect(() => {
    async function getAlbum(terms) {
      let params = terms.replaceAll(" ", "+");
      try {
        const { data } = await axios.get(
          `https://itunes.apple.com/search?term=${params}&media=music&entity=album&limit=20`
        );
        setAlbums(data.results);
      } catch (e) {
        console.log("cannot fetch data:", e);
      }
    }

    getAlbum(artist);
  }, [artist]);

  return (
    <div className="App">
      <input
        id="search"
        type="text"
        placeholder="Search.."
        onKeyPress={(e) => {
          search(e);
        }}
      />
      {albums.length > 0 && <Artist albums={albums} />}
    </div>
  );
}

export default App;
