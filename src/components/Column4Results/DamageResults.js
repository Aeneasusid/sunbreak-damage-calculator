import React from "react";

class DamageResults extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                <tr>
                    <th>Damage Results</th>
                    <th>Expect.</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Raw Damage</td>
                        <td><input value={this.props.rawDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    <tr>
                        <td>Raw Percent.</td>
                        <td><input value={Math.round(100 * this.props.rawDamage / (this.props.rawDamage + this.props.elementDamage)) + '%'} size="5"/></td>
                    </tr>
                    <tr>
                        <td>Element Damage</td>
                        <td><input value={this.props.elementDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    <tr>
                        <td>Element Percent.</td>
                        <td><input value={Math.round(100 * this.props.elementDamage / (this.props.rawDamage + this.props.elementDamage)) + '%'} size="5"/></td>
                    </tr>
                    <tr>
                        <td>Total Damage</td>
                        <td><input value={this.props.rawDamage + this.props.elementDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default DamageResults;