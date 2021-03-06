import "./Artist.css";
import Album from "./Album";

function Artist({ albums }) {
  return (
    <div className="Artist container">
      <header className="Artist-header">
        <div id="artist-img">
          <img alt="artist-img" src={albums[0].artworkUrl100} />
        </div>
        <h1 className="artist-name">{albums[0].artistName}</h1>
      </header>
      {albums.map((data) => {
        return <Album album={data} key={data.collectionId} />;
      })}
    </div>
  );
}

export default Artist;
