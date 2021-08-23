import Album from './Album'
function Artist() {
  return (
    <div className="Artist container">
      <header className="Artist-header">
        <img id="artist-img" alt="artist-img" src="https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/79/53/35/79533511-13b3-62c3-941d-bf87e21940f8/source/100x100bb.jpg"/>
        <h1>Artist Name</h1>
      </header>

      <Album />
      <Album />
    </div>
  );
}

export default Artist;
