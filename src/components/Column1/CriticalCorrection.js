import React from "react";

class CriticalCorrection extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="ui compact table" onChange={e => this.props.handleCriticalChange(e)}>
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