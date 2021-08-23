function Album({ album }) {
  return (
    <div className="Album container">
      <img id="album-img" alt="album-img" src={album.artworkUrl100} />
      <div className="album-info container">
        <div className="album-name">{album.collectionName}</div>
        <div>{album.releaseDate.slice(0, 4)}</div>
      </div>
    </div>
  );
}

export default Album;
