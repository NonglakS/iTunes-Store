import "./Album.css";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";
import PlayListModal from "./PlayListModal";
import Utils from "./../Utils";

function Album({ album }) {
  const [expand, setExpand] = useState(false);
  const [tracks, setTracks] = useState([]);

  async function showTrack() {
    if (tracks.length === 0) {
      const songs = await Utils.getSongs(album.collectionId);
      setTracks(songs);
    }
    setExpand(true);
  }

  return (
    <>
      <div className="Album container">
        <img id="album-img" alt="album-img" src={album.artworkUrl100} />
        <div className="album-info container">
          <div className="album-name">{album.collectionName}</div>
          <div>{album.releaseDate.slice(0, 4)}</div>
        </div>
        <IoMdArrowDropdownCircle
          className="expand"
          size={20}
          onClick={showTrack}
        />
      </div>
      {expand && <PlayListModal tracks={tracks} setExpand={setExpand} />}
    </>
  );
}

export default Album;
