import Track from './Track'
function PlayListModal({tracks, setExpand}) {
  return (
    <div className="PlayListModal container">
      <div className="model-content">
      <header className="Album-header">When the sun goes down</header>
      <Track/>
      <button className="close-modal" onClick={()=>setExpand(false)}> close </button>
      </div>
    </div>
  );
}

export default PlayListModal;
