import "./PlayListModal.css";
import Track from "./Track";
import { AiFillCloseCircle } from "react-icons/ai";
function PlayListModal({ tracks, setExpand }) {
  return (
    <div className="PlayListModal container">
      <div className="modal-content">
        <AiFillCloseCircle
          className="close-modal"
          onClick={() => setExpand(false)}
        />
        <header className="Album-header">
          {`${tracks[0].collectionName}'s play list`}
        </header>

        {tracks.slice(1, tracks.length).map((track) => {
          return <Track song={track} key={track.trackId} />;
        })}
      </div>
    </div>
  );
}

export default PlayListModal;
