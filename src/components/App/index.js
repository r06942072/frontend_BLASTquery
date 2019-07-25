import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchList
} from '../../actions/formAction';

import YourQuery from '../YourQuery';
import OurDb from '../OurDb';
import Program from '../Program';
import TimeTravel from '../TimeTravel';

class App extends Component {
	componentDidMount() {
		console.log('App componentDidMount');
		if (localStorage.getItem('reduxState') === null) {
			this.props.fetchList();
		}
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('App componentDidUpdate');
	}
	render() {
		console.log('App render');
		return (
			<div>
				<h1>YourQuery</h1>
				<YourQuery />
				<br />
				<p>----------------------------------------</p>
				<h1>OurDb</h1>
				<OurDb />
				<br />
				<p>----------------------------------------</p>
				<h1>Program</h1>
				<Program />
				<p>----------------------------------------</p>
				<h1>TimeTravel</h1>
				<TimeTravel />
				<p>----------------------------------------</p>
				<br />
			</div>
		);
	}
}
/*
App.propTypes = {
	allList: PropTypes.array.isRequired
}
*/
const mapStateToProps = (state) => ({
	allList: state.formState.allList
});

//bundle actionCreators together
const mapDispatchToProps = {
	fetchList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
We connect this react component App to redux store
We get both data and function by ```connect(data, function)```
It has this.props
*/