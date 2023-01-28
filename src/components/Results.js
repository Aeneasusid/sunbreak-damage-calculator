import React from "react";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDamage:[],
        }
    }


    handleOnChangeRaw = e => this.props.handleRawHitZoneUpdate(e.target.value)
    handleOnChangeElement = e => this.props.handleElementHitZoneUpdate(e.target.value)

    render() {
        return (
            <div className="ui column labeled input six wide column" >
                <table className="ui compact table">
                    <thead>
                    <tr>
                        <th>F. Attack Power</th>
                        <th><input id="Final Attack Power" value={this.props.finalAttack} size="4" /></th>
                        <th>F. Element Value</th>
                        <th><input id="Final Element Value" value={this.props.finalElement} size="4" /></th>
                    </tr>
                    </thead>
                </table>
                <table className="ui compact table">
                    <thead>
                        <tr>
                            <th>Hit Zone 1</th>
                            <th>(%)</th>
                            <th>damage</th>
                            <th>Perc. (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Raw</td>
                            <td><input onChange={this.handleOnChangeRaw} type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td>
                            <td><input size="4"/></td>
                            <td><input size="4"/></td>
                        </tr>
                        <tr>
                            <td>Element</td>
                            <td><input onChange={this.handleOnChangeElement} type="number" placeholder="25" step="1" min='0' max='100' size="6"/></td>
                            <td><input value={this.props.elementDamage} size="4"/></td><td><input size="4"/></td></tr>
                        <tr><td>Total</td><td> </td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Results;