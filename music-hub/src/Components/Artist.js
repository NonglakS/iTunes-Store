import Album from './Album'
function Artist({ albums }) {
  return (
    <div className="Artist container">
      <header className="Artist-header">
        <img id="artist-img" alt="artist-img" src={albums[0].artworkUrl100} />
        <h1>{albums[0].artistName}</h1>
      </header>

      {albums.map(data => {
        return <Album album={data} />
      })}

    </div>
  );
}

export default Artist;
