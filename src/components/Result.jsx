import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { symptoms: state.symptoms };
};

const ConnectedResult = ({ symptoms }) => (
    <ul className="list-group list-group-flush">
    {symptoms.map(el => (
        <li className="list-group-item" key={el.id}>
        {el.selectedSymptoms}
        </li>
    ))}
    </ul>
);

const Result = connect(mapStateToProps)(ConnectedResult);

export default Result;