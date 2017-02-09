import React, {Component} from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({inputValue: event.target.value});
	}
	
	render() {
		const inputValue = this.state.inputValue.toLowerCase();
		const filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().includes(inputValue));
		
		return (
			<div>
				<FilterInput handleChange={this.handleChange} />
				<Artists artists={filteredArtists} />
			</div>
		);
	}
}
