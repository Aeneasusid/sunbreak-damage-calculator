import React from "react";

class FinalAttackElement extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                <tr>
                    <th>Final Attack Power</th>
                    <th><input id="Final Attack Power" value={this.props.finalAttack} size="4" /></th>
                </tr>
                <tr>
                    <th>Final Element Value</th>
                    <th><input id="Final Element Value" value={this.props.finalElement} size="4" /></th>
                </tr>
                </thead>
            </table>
        )
    }
}

export default FinalAttackElement;