import React, { Component } from "react";
import { connect } from "react-redux";
import { addSolution } from '../actions/index';
import { lexicon } from '../constants/lexicon';
import uuidv1 from "uuid";

function mapStateToProps(state) {
    return {
        symptoms: state.symptoms
    }
}

function mapDispatchToProps(dispatch){
    return {
        addSolution: solution => dispatch(addSolution(solution))
    };
}

class ConnectedSolutions extends Component {
    constructor() {
        super();

        this.fetchSolutions = this.fetchSolutions.bind(this);
    }

    fetchSolutions() {
        for(let value of Object.values(this.props.symptoms)){
            const key = value.selectedSymptoms;  
            let values = lexicon[key];
            let id = uuidv1();
            this.props.addSolution({ values, id });
        }
    }

    render() {
        return(
            <button 
                className="btn btn-primary" 
                onClick={this.fetchSolutions}>
                FetchSolutions
                </button>
        )
    }
}

const SolutionSelect = connect(mapStateToProps, mapDispatchToProps)(ConnectedSolutions);

export default SolutionSelect;