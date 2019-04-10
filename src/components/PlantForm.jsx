import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addSymptoms } from "../actions/index";

function mapDispatchToProps(dispatch){
    return {
        addSymptoms: symptom => dispatch(addSymptoms(symptom))
    };
}

class ConnectedPlantForm extends Component {
    constructor() {
        super();

        this.state = {
            selectedSymptoms: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
           [e.target.id]: e.target.value 
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { selectedSymptoms } = this.state;
        const id = uuidv1();
        this.props.addSymptoms({ selectedSymptoms, id})
        this.setState({ selectedSymptoms: ''});
    }

    render() {
        const { selectedSymptoms } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label htmlFor="symptoms">Select one at a time, your results will appear on the left: </label>
            <select id="selectedSymptoms" value={selectedSymptoms} onChange={this.handleChange}>
                <option id="defaultVal" value="select a symptom">Select a symptom</option>
                <option id="selectedSymptoms" value="over watering">Wilted or droopy soft pliable leaves</option>
                <option id="selectedSymptoms" value="dehydration">Brown leaf tips or 'crispy' leaves</option>
                <option id="selectedSymptoms" value="low humidity">Brown streaks and loose leaves</option>
                <option id="selectedSymptoms" value="nutrient deficiency">Yellowing leaves or veins, darkening edges, stunted or misshapen new growth</option>
            </select>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        )
    }

}

const PlantForm = connect(null, mapDispatchToProps)(ConnectedPlantForm);

export default PlantForm;