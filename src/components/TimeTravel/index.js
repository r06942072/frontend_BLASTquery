//TimeTravel
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Submit from "./Submit/presentation";

class TimeTravel extends Component {
    componentDidMount() {
    }
    _handleSubmit = () => {
    }
    render() {
        return (
            <div>
                <Submit
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({  
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeTravel);