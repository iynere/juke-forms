import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	handleChange(event) {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({inputValue: event.target.value});
	}
	
	onSubmit(event) {
		event.preventDefault();
		console.log(this.state.inputValue);
	}
	
	render() {	
		return (
			<div>
				<NewPlaylist
					handleChange={this.handleChange}
					onSubmit={this.onSubmit}
				/>
			</div>
			);
	}
}
