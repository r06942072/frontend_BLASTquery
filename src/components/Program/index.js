//Program
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	setProgram
} from '../../actions/formAction';

import ChooseProgram from './ChooseProgram/presentation';
import OptionBlastn from './OptionBlastn/presentation';
import OptionTblastn from './OptionTblastn/presentation';

class Program extends Component {
	componentDidMount() {
	}
	_handleRadioButton = (res) => {
		this.props.setProgram(res.target.value);
	}
	_handleProgram = (res) => {
		console.log(res.target.value);
	}
	//Program section
	_renderProgram = (res) => {
		let Program;
		switch (res) {
			case 'blastn':
				Program = <OptionBlastn handleProgram={this._handleProgram}/>;
				break;
			case 'tblastn':
				Program = <OptionTblastn handleProgram={this._handleProgram}/>;
				break;
			case 'tblastx':
				break;
			case 'blastp':
				break;
			case 'blastx':
				break;
			default:
				Program = <OptionBlastn />;
		}
		return Program;
	}
	render() {
		return (
			<div>
				<ChooseProgram
					handleRadioButton={this._handleRadioButton}
				/>
				{this._renderProgram(this.props.whichProgram)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	allList: state.formState.allList,
	whichProgram: state.formState.whichProgram
});

//bundle actionCreators together
const mapDispatchToProps = {
	setProgram
};

export default connect(mapStateToProps, mapDispatchToProps)(Program);