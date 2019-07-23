//Program
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Program extends Component {
    componentDidMount() {
    }
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