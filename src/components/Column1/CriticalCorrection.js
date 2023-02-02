import React from "react";

class CriticalCorrection extends React.Component{
    constructor() {
        super();
        this.state = {
            level:['Level', '等级'],
            criticalExpect:['Critical Expect','期望会心率'],
            criticalCorrection:['Critical Correction', '会心补正'],
            criticalBoost:['Critical Boost', '超会心'],
            criticalElement:['Critical Element', '会心击[属性]']

        }
    }

    render() {
        return (
            <table className="ui compact table" onChange={e => this.props.handleCriticalChange(e)}>
                <thead>
                    <tr><th>{this.state.criticalExpect[this.props.languageVersion]}</th><th><input id='Critical Expect. (%)' type="number" placeholder="100" step="5" min='0' max='100' size="6"/></th></tr>
                    <tr><th>{this.state.criticalCorrection[this.props.languageVersion]}</th><th>{this.state.level[this.props.languageVersion]}</th></tr>
                </thead>
                <tbody>
                    <tr><td>{this.state.criticalBoost[this.props.languageVersion]}</td><td><input id='Critical Boost' type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.criticalElement[this.props.languageVersion]}</td><td><input id='Critical Element' type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                </tbody>
            </table>
        )
    }
}

export default CriticalCorrection;