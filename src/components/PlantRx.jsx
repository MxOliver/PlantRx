import React, { Component } from 'react';
import PlantForm from './PlantForm';
import Result from './Result';
import Solutions from './Solutions';
import SolutionList from './SolutionList';
import Logo from "../images/icons8-potted-plant-64.png";
import '../App.css';

class PlantRx extends Component {
    render() {
        return (
            <div className="App">
            <div className="header">
            <img src={Logo} alt="potted plant icon" width="64px"></img>
            <h1 className="logo-title">PlantRx</h1>
            </div>
            <div className="main">
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
            <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
            <h2> Recommended Solutions: </h2>
            <SolutionList />
            </div>
            <div className="col-md-4 offset-md-1">
            <Solutions />
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default PlantRx;