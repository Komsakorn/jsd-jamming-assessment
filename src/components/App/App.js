import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import TrackList from '../TrackList/TrackList';

const defaultData =[
  {
    id: 0,
    name: 'defaultName',
    artist:'defaultArtist',
    album:'defaultAlbum',
    isRemoval:true,
  },
  {
    id: 1,
    name: 'defaultName2',
    artist:'defaultArtist2',
    album:'defaultAlbum2',
    isRemoval:false,
  },
  {
    id: 2,
    name: 'defaultName3',
    artist:'defaultArtisy3',
    album:'defaultAlbum3',
    isRemoval:false,
  },
  {
    id: 3,
    name: 'defaultName4',
    artist:'defaultArtist4',
    album:'defaultAlbum4',
    isRemoval:false,
  }
]

function App() {
  const [searchResults, setSearchResults] = useState(defaultData);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);
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
  return (
    <div>
  <h1>Spoti<span className="highlight">pie</span>!!!</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={searchResults} onAdd={addTrack}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onNameChange={updatePlaylistName} onRemove={removeTrack} />
    </div>
  </div>
</div>
  );
}

export default App;
