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
                        <th>Final Status</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td><input id="Final Attack Power" value={this.props.finalAttack} style={{textAlign:'right'}} size="5" /></td>
                    </tr>
                    <tr>
                        <td>Element</td>
                        <td><input id="Final Element Value" value={this.props.finalElement} style={{textAlign:'right'}} size="5" /></td>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default FinalAttackElement;