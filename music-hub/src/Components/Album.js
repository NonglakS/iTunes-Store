import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { useState, useEffect } from "react";
import PlayListModal from './PlayListModal'
import fetchData from './../Utils'
function Album({ album }) {

  const [expand, setExpand] = useState(false)
  const [tracks, setTracks] = useState([]);

  async function showTrack() {
    setExpand(true);
    const songs = await fetchData.getSongs(album.collectionId);
    setTracks(songs)
  }



  return (
    <>
    <div className="Album container" >
      <img id="album-img" alt="album-img" src={album.artworkUrl100} />
      <div className="album-info container">
        <div className="album-name">{album.collectionName}</div>
        <div>{album.releaseDate.slice(0, 4)}</div>
        <IoMdArrowDropdownCircle className="expand" onClick={showTrack} />
      </div>
    </div>
      {expand && <PlayListModal tracks={tracks} setExpand={setExpand}/>}
      </>
  );
}

export default Album;
