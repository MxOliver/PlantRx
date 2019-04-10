import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { solution: state.solution };
};

const ConnectedSolutions = ({ solution }) => (
    <ul className="list-group list-group-flush">
    {solution.slice(-1).map(el => (
        <li className="list-group-item" key={el.id}>
        {el.values}
        </li>
    ))}
    </ul>
);

const SolutionList = connect(mapStateToProps)(ConnectedSolutions);

export default SolutionList;