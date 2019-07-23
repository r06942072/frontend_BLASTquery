import React, { Component } from 'react';
import FastaTextbox from './FastaTextbox/presentation'
import FastaUpload from './FastaUpload/presentation'

class YourQuery extends Component {
	constructor() {
		super();
		this.state = {
			windowWidth: 0,
			windowHeight: 0,
			fastaWidth: 0,
			fastaHeight: 0
		}
	}
	componentDidMount() {

	}
	/*
	componentDidUpdate(prevProps, prevState) {
	}
	*/
	render() {
		return (
			<div>
				<h1>YourQuery</h1>
				<p>Enter sequence below in FASTA format:</p>
				<FastaTextbox
					data={this.state}
				/>
				<p>Or load it from disk:</p>
				<FastaUpload
				/>
			</div>
		);
	}
}

export default YourQuery;