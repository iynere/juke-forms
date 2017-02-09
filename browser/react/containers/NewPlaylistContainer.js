import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			disabled: true
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(event) {
		const input = event.target.value;
		this.setState({
			inputValue: input.length < 17 ? input : input.slice(0, 16),
			disabled: !input.length
		});
	}
	
	onSubmit(event) {
		this.props.createNewPlaylist(this.state.inputValue);
		event.preventDefault();
		event.target.value = '';
		this.setState({
			inputValue: event.target.value,
			disabled: true
		});
	}

	render() {
		return (
			<div>
				<NewPlaylist
					onSubmit={this.onSubmit}
					handleChange={this.handleChange} 
					inputValue={this.state.inputValue}
					disabled={this.state.disabled}
				/>
			</div>
		);
	}
}
