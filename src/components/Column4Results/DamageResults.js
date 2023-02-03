import React from "react";

class DamageResults extends React.Component{
    constructor() {
        super();
        this.state = {
            damageResults:['Damage Results', '计算结果'],
            expectation1:['Real', '实际伤害值'],
            expectation2:['Expect.(Crit.)', '会心平均期望值'],
            rawDamage:['Raw Damage', '物理伤害值'],
            rawPercentage:['Raw Percent.', '物理伤害占比'],
            elementDamage:['Element Damage', '属性伤害值'],
            elementPercentage:['Element Percent.', '属性伤害占比'],
            totalDamage:['Total Damage', '总伤害值']
        }
    }

    render() {
        if (this.props.criticalExpectation === 0 || this.props.criticalExpectation === 1) {
            return (
                <table className="ui compact table">
                    <thead>
                    <tr>
                        <th>{this.state.damageResults[this.props.languageVersion]}</th>
                        <th>{this.state.expectation1[this.props.languageVersion]}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.rawDamage[this.props.languageVersion]}</td>
                        <td><input value={this.props.rawDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.rawPercentage[this.props.languageVersion]}</td>
                        <td><input value={Math.round(100 * this.props.rawDamage / (this.props.rawDamage + this.props.elementDamage)) + '%'} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.elementDamage[this.props.languageVersion]}</td>
                        <td><input value={this.props.elementDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.elementPercentage[this.props.languageVersion]}</td>
                        <td><input value={Math.round(100 * this.props.elementDamage / (this.props.rawDamage + this.props.elementDamage)) + '%'} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.totalDamage[this.props.languageVersion]}</td>
                        <td><input value={this.props.rawDamage + this.props.elementDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    </tbody>
                </table>
            )
        } else {
            return (
                <table className="ui compact table">
                    <thead>
                    <tr>
                        <th>{this.state.damageResults[this.props.languageVersion]}</th>
                        <th>{this.state.expectation2[this.props.languageVersion]}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.rawDamage[this.props.languageVersion]}</td>
                        <td><input value={this.props.rawDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.rawPercentage[this.props.languageVersion]}</td>
                        <td><input value={Math.round(100 * this.props.rawDamage / (this.props.rawDamage + this.props.elementDamage)) + '%'} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.elementDamage[this.props.languageVersion]}</td>
                        <td><input value={this.props.elementDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.elementPercentage[this.props.languageVersion]}</td>
                        <td><input value={Math.round(100 * this.props.elementDamage / (this.props.rawDamage + this.props.elementDamage)) + '%'} size="5"/></td>
                    </tr>
                    <tr>
                        <td>{this.state.totalDamage[this.props.languageVersion]}</td>
                        <td><input value={this.props.rawDamage + this.props.elementDamage} style={{textAlign:'right'}} size="5"/></td>
                    </tr>
                    </tbody>
                </table>
            )
        }

    }
}

export default DamageResults;