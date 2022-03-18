import React, { useState,useEffect  } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import TrackList from '../TrackList/TrackList';
import Spotify from '../../utils/Spotify.js';

const defaultData =[
  {
    id: 0,
    name: 'defaultName',
    artist:'defaultArtist',
    album:'defaultAlbum',
    uri:111,
  },
  {
    id: 1,
    name: 'defaultName2',
    artist:'defaultArtist2',
    album:'defaultAlbum2',
    uri:222,
  },
  {
    id: 2,
    name: 'defaultName3',
    artist:'defaultArtisy3',
    album:'defaultAlbum3',
    uri:333,
  },
  {
    id: 3,
    name: 'defaultName4',
    artist:'defaultArtist4',
    album:'defaultAlbum4',
    uri:444,
  }
]

function App() {
  const [searchResults, setSearchResults] = useState(defaultData);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
useEffect(()=>{
Spotify.getAccessToken();},[]);

  const addTrack = (track) =>{
if(playlistTracks.find((prevTrack) => prevTrack.id === track.id)){
  return setPlaylistTracks([...playlistTracks, track]);
}
  }
const removeTrack = (track) =>{
  setPlaylistTracks(playlistTracks.filter((prevTrack)=>prevTrack.id !== track.id));
}
const updatePlaylistName = (name) => {
  setPlaylistName(name);
}
const savePlaylist = () => {
const trackURIs = playlistTracks.map((track) => track.uri);
Spotify.savePlaylist(playlistName,trackURIs).then(() => {
setPlaylistTracks([]);
setPlaylistName('New Playlist');
});
}
const search = (searchTerm) => {
  Spotify.search(searchTerm).then((tracks) => {
  setSearchResults(tracks)
  });
}
  return (
    <div>
  <h1>Spoti<span className="highlight">pie</span>!!!</h1>
  <div className="App">
    <SearchBar onSearch={search}/>
    <div className="App-playlist">
      <SearchResults searchResults={searchResults} onAdd={addTrack}/>
      <Playlist 
      playlistName={playlistName} 
      playlistTracks={playlistTracks} 
      onNameChange={updatePlaylistName} 
      onRemove={removeTrack} 
      onSave ={savePlaylist}/>
    </div>
  </div>
</div>
  );
}

export default App;
