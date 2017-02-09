import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

const NewPlaylistContainer = () => {



	// componentDidMount() {
	// 	axios.post(`/api/playlists`, { /** req.body contents go here! */ })
	// 		.then(res => res.data)
	// 		.then(result => {
	// 			console.log(result) // response json from the server!
	// 	});
	// }


	return (
		<div>
			<NewPlaylist />
		</div>
	);

};

export default NewPlaylistContainer;
