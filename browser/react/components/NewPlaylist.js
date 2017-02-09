import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class NewPlaylist extends Component {
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
		event.preventDefault();
		console.log(event.target.value);
		axios.post(`/api/playlists`, {
			name: event.target.value
		})
			.then(res => res.data)
			.then(result => {
				console.log(result) // response json from the server!
			})
			.then(() => {
				event.target.value = '';
				this.setState({
					inputValue: event.target.value,
					disabled: true
				});
			});
	}


	render() {
		return (
			<div className="well">
				<form className="form-horizontal" onSubmit={this.onSubmit}>
					<fieldset>
						<legend>New Playlist</legend>
						<div className="form-group">
							<label className="col-xs-2 control-label">Name</label>
							<div className="col-xs-10">
								<input
									className="form-control"
									placeholder="Enter playlist name"
									type="text"
									onChange={this.handleChange}
									value={this.state.inputValue}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-xs-10 col-xs-offset-2">
									<button type="submit" className="btn btn-success" disabled={this.state.disabled} >Create Playlist</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default NewPlaylist;
