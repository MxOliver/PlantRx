import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../actions/index';

function mapDispatchToProps(dispatch){
    return {
        resetApp: (str) => dispatch(resetApp(str))
    };
}

class ConnectedResetButton extends Component {
    constructor() {
        super();

        this.handleReset = this.handleReset.bind(this);
    }

    handleReset() {
        this.props.resetApp('app reset');
    }

    render() {
        return (
            <button type="button" className="btn btn-danger" onClick={this.handleReset}>Reset</button>
        )
    }
}

const ResetButton = connect(null, mapDispatchToProps)(ConnectedResetButton);

export default ResetButton;