import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import AppContainer from './containers/AppContainer';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NewPlaylistContainer from './containers/NewPlaylistContainer';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <Route path ="/new-playlist" component={NewPlaylistContainer} />
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);

// need to use this for node_modules/musicmetadata/lib.index.js, b/c some albums don't have album art:

// function cleanupPicture (picture) {
//   var newFormat
//   if (picture && picture.format) {
//     var split = picture.format.toLowerCase().split('/')
//     newFormat = (split.length > 1) ? split[1] : split[0]
//     if (newFormat === 'jpeg') newFormat = 'jpg'
//     return { format: newFormat, data: picture.data }
//   } else if (picture) {
//     newFormat = 'jpg'
//     return { format: newFormat, data: picture.data }
//   }
//   return { format: newFormat, data: null }
// }

// & need to take return statement out of node_modules/musicmetadata/lib/id3v1.js:

// if (header !== 'TAG') {
//   return done(new Error('Could not find metadata header'))
// }
