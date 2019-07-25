//TimeTravel
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Reset from './Reset/presentation'
import Submit from './Submit/presentation';

class TimeTravel extends Component {
    componentDidMount() {
    }
    _handleReset = () => {
        console.log('handleReset');
    }
    _handleSubmit = () => {
    }
    render() {
        return (
            <div>
                <Reset
                    handleReset={this._handleReset}
                />
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