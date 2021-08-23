import Album from './Album'
function Artist() {
  return (
    <div className="Artist container">
      <header className="Artist-header">
        <h1>Artist Name</h1>
      </header>

      <Album />
      <Album />
    </div>
  );
}

export default Artist;
