import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';

function Playlist(playlistName,playlistTracks,onRemove) {
  return <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  <TrackList lists={playlistTracks} onRemove={onRemove} isRemoval={true}/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>;
}

export default Playlist;
