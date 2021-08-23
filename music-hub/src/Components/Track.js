function Track({ song }) {
  return (
    <div className="Track container">

      <div className="trackName">trackName</div>
      <div className="audio-player"><audio src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/f6/52/15f652d8-09cd-9f08-8f0e-76fdeeee0b00/mzaf_8062575223642339953.plus.aac.p.m4a" controls> I'm sorry. You're browser doesn't support HTML5 <code>audio</code>. </audio></div>
      {/* <div className="trackTime">trackTime</div> */}
    </div>

  );
}

export default Track;
