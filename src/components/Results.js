import React from "react";

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let finalAttackPower = this.props.sendValue
        return (
            <div className="ui column labeled input four wide column" >
                <table className="ui compact table">
                    <thead>
                    <tr><th>Final Attack Power</th><th>
                        <input id="Final Attack Power" value={this.props.sendValue} size="6" />

                    </th></tr>
                    <tr><th>Final Element Value</th><th>
                        <input id="Final Element Value" size="6" />
                    </th></tr>
                    </thead>
                </table>
                <table className="ui compact table">
                    <thead>
                    <tr><th>Hit Zone 1</th><th>Result</th><th>Percent.</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Ele. Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Total Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Hit Zone 2</th><th>Result</th><th>Percent.</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Ele. Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Total Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Hit Zone 3</th><th>Result</th><th>Percent.</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Ele. Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Total Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Hit Zone 4</th><th>Result</th><th>Percent.</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Ele. Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    <tr><td>Total Damage</td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Results;