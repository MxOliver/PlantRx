import React, { Component } from 'react';
import PlantForm from './PlantForm';
import Result from './Result';
import '../app.css';

class PlantRx extends Component {
    render() {
        return (
            <div class="main">
            <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
            <h2>What is wrong with my plant?</h2>
            <Result />
            </div>
            <div className="col-md-4 offset-md-1">
            <h2>Describe your symptoms: </h2>
            <PlantForm />
            </div>
            </div>
            </div>
        )
    }
}

export default PlantRx;