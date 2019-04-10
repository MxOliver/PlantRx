import React, { Component } from "react";
import { connect } from "react-redux";
import { addSolution } from '../actions/index';
import symptomReducer from '../reducers/symptomReducer';

function mapDispatchToProps(dispatch){
    return {
        addSolution: solution => dispatch(addSolution(solution))
    };
}

class ConnectedSolution extends Component {
    constructor() {
        super();
        
        this.state = {
            results: [],
            solution: ''
        };

       /// this.handleOutput = this.handleOutput.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput() {
        symptomReducer.subscribe(() => {
            this.setState({
                results: symptomReducer.getSate().results
            });
        });
    }

    handleClick(e) {
        e.preventDefault();
        const { results } = this.state;
        console.log(this.state.results);
    }

    // handleOutput() {
    //     const dx = {
    //         'over watering': 'water less but more consistently',
    //         'dehydration': 'increase watering frequency + allow water to soak through soil completely',
    //         'lack of sunlight': 'move to a windowsill or into direct sunlight',
    //         'low humidity': 'move to less drafty room like the bathroom, mist plants',
    //         'nutrient deficiency': 'add organic matter to soil eg. compost, coffee, pine needles'
    //     }
    // }

    render() {
        const { solution } = this.state;
        const { results } = this.state;

        return (
            <button className="btn btn-primary" onClick={this.handleClick}>Click</button>
        );
    }

}

const Solution = connect(mapDispatchToProps)(ConnectedSolution);

export default Solution;
