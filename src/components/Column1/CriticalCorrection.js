import React from "react";

class CriticalCorrection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            criticalBoost:[1.25, 1.3, 1.35, 1.4],
            criticalElement:[1, 1.05, 1.1, 1.15],
        }
    }

    handleCriticalChange = () => {
        let expectation = document.getElementById('Critical Expect. (%)').value / 100
        let boostLevel = document.getElementById('Critical Boost').value
        let elementLevel = document.getElementById('Critical Element').value
        //
        if (! boostLevel) {boostLevel = 0}
        if (! elementLevel) {elementLevel = 0}
        //
        let boostMulti = this.state.criticalBoost[boostLevel]
        let elementMulti = this.state.criticalElement[elementLevel]
        this.props.handleCriticalCorrectionUpdate(expectation, boostMulti, elementMulti)
    }

    render() {
        return (
            <table className="ui compact table" onChange={this.handleCriticalChange}>
                <thead>
                <tr><th>Critical Expect. (%)</th><th><input id='Critical Expect. (%)' type="number" placeholder="0" step="5" min='0' max='100' size="6"/></th></tr>
                <tr><th>Critical Correction</th><th>Level</th></tr>
                </thead>
                <tbody>
                <tr><td>Critical Boost</td><td><input id='Critical Boost' type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                <tr><td>Critical Element</td><td><input id='Critical Element' type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                </tbody>
            </table>
        )
    }
}

export default CriticalCorrection;