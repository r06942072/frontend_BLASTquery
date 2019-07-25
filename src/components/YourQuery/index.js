import React, { Component } from 'react';
import { connect } from 'react-redux';

import FastaTextbox from './FastaTextbox/presentation'
import FastaUpload from './FastaUpload/presentation'

class YourQuery extends Component {
	constructor() {
		super();
		this.state = {
			windowWidth: 0,
			windowHeight: 0
		}
	}
	componentDidMount() {
		console.log('YourQuery componentDidMount');
		this.setState({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		});
	}
	/*
	componentDidUpdate(prevProps, prevState) {
	}
	*/
	_handleUpload = (res) => {
		console.log('File Upload');
		//res is a file
		//console.log(file);
		//const reader = new FileReader();
		//let formData = new FormData();
		//tbd
	}
	render() {
		return (
			<div>
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