import Track from './Track'
import { AiFillCloseCircle } from 'react-icons/ai';
function PlayListModal({ tracks, setExpand }) {
  return (
    <div className="PlayListModal container">
      <div className="model-content">
      <AiFillCloseCircle className="close-modal" onClick={() => setExpand(false)} />
        <header className="Album-header">{`${tracks[0].collectionName}'s play list`}
         </header>


        {tracks.slice(1, tracks.length).map(track => {

          return <Track song={track} />

        })}


      </div>
    </div>
  );
}

export default PlayListModal;
