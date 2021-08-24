import {useState} from 'react';
import Utils from './../Utils'
function Track({ song }) {
  const [preview, setPreviewTag] = useState(false)

function setPreview (){
  setPreviewTag(true)
}

function showTime (){
  setPreviewTag(false)
}

  return (
    <>
    <div className="Track container" onMouseOver={setPreview}  onMouseLeave={showTime}>

      <div className="track-name">{song.trackName}</div>
      <div className="audio-player" ><audio src={song.previewUrl} type="audio/mpeg" controls controlslist="nodownload"> I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.</audio></div>
      {preview ?
        <div className="preview">preview</div>
      :  <div className="time">{Utils.convertToMin(song.trackTimeMillis)}</div>}
    </div>
    </>

  );
}

export default Track;
