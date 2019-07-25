//OurDb
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setList
} from '../../actions/formAction';

import Searchbar from "./Searchbar/presentation";
import OrganismList from "./OrganismList/presentation";
import OrganismDetail from "./OrganismDetail/presentation";

class OurDb extends Component {
    constructor(props) {
        super(props); //this.props is now meaningful
        this.state = {
            searchbarText: ""
        }
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState) {
    }
    _handleSearchbarChange = (event) => {
        this.setState({
            searchbarText: event.target.value
        });
    }
    _handleCheckboxAll = (event) => {
        let newList = this.props.allList;
        newList.forEach((res) => {
            res.isChecked = event.target.checked
        });
        this.props.setList(newList);
        this.forceUpdate();
    }
    _handleCheckboxChange = (event) => {
        let newList = this.props.allList;
        newList.forEach((res) => {
            if (res.fullName === event.target.name) {
                res.isChecked = event.target.checked;
            }
        });
        this.props.setList(newList);
        this.forceUpdate();
    }
	_isRenderAll = () => {
		const searchbarText = this.state.searchbarText;
		return (searchbarText === '') ? true : false;
	}
    _renderShowList = () => {
        //depend on searchbarText
        const allList = this.props.allList;
        const searchbarText = this.state.searchbarText;
        if (searchbarText === '') {
            return allList;
        }
        else {
            const newList =
                allList.filter(
                    (res) => {
                        if (res.fullName.toLowerCase().includes(
                            searchbarText.toLowerCase())) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                );
            const notFound = { "id": 404, "fullName": "Not found!!!" }
            return (newList.length !== 0) ? newList : [notFound];
        }
    }
    render() {
        return (
            <div>
                <Searchbar
                    handleSearchbarChange={this._handleSearchbarChange}
                />
                <OrganismList
                    handleCheckboxAll={this._handleCheckboxAll}
                    handleCheckboxChange={this._handleCheckboxChange}
                    isRenderAll={this._isRenderAll()}
                    showList={this._renderShowList()}
                />
                <OrganismDetail
                    data={this.state}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    allList: state.formState.allList
});

//bundle actionCreators together
const mapDispatchToProps = {
    setList
};

export default connect(mapStateToProps, mapDispatchToProps)(OurDb);