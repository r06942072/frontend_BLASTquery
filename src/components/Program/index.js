//Program
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Program extends Component {
    componentDidMount() {
    }
    /*
    //Program section
	_renderProgram = (res) => {
		let Program;
		switch (res) {
			case 1:
				Program = <FastaTextbox />;
				break;
			case 2:
				Program = <FastaUpload />;
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			default:
				Program = <FastaTextbox />;
		}
		return Program;
    }
    */
    render() {
        return (
            <div>
                <p>*.....</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
	searchbarText: state.formState.searchbarText,
	allList: state.formState.allList
});

//bundle actionCreators together
const mapDispatchToProps = {
	fetchList,
	setList,
	setSearchbar
};

export default connect(mapStateToProps, mapDispatchToProps)(Program);