import "./App.css";
import Artist from "./Components/Artist";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbum(terms) {
      let params = terms.join("+");
      console.log(params);
      const { data } = await axios.get(
        `https://itunes.apple.com/search?term=${params}&media=music&entity=album&limit=10`
      );
      setAlbums(data.results);
    }

    getAlbum(["selena", "gomez"]);
  }, []);

  return (
    <div className="App">{albums.length > 0 && <Artist albums={albums} />}</div>
  );
}

export default App;
