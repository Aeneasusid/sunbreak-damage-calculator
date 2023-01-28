import React from "react";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawHitZone:0.45,
            elementHitZone:0.25,
            rawDamage:1,
            elementDamage:1,
            totalDamage:[],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('ele. HitZone:',this.state.elementHitZone)
        // console.log('Damage Multips:',this.props.damageMultipliers)
        // console.log('Critical Correction 11111:',this.props.criticalCorrection)
        // console.log('Motion Value in Results:', this.props.motionValue)
        // console.log('final atk in Results:',this.props.finalAttack)
        // console.log('final ele. in Results:',this.props.finalElement)
    }

    handleElementDamage = () => {
        let criticalExpectation = this.props.criticalCorrection[0]
        let criticalElement = this.props.criticalCorrection[2]
        let elementDamage = this.props.finalElement
        let elementHitZone = this.state.elementHitZone
        //
        elementDamage *= this.props.finalAttack
        elementDamage *= this.state.elementHitZone
        elementDamage *= this.props.damageMultipliers[1]
        //

        // critical correction
        console.log('Critical Correction:',this.props.criticalCorrection)
        elementDamage += elementDamage * (criticalElement - 1) * criticalExpectation
        if (criticalExpectation === 0 || criticalExpectation === 1) {
            elementDamage = Math.round(elementDamage/100)
        } else {
            elementDamage = Math.round(elementDamage) / 100
        }
        //
        this.setState({elementDamage:elementDamage})
    }

    handleRawHitZone = e => this.state.rawHitZone = e.target.value / 100
    handleElementHitZone = e => {
        this.setState({elementHitZone: e.target.value / 100}, () => {
            this.handleElementDamage()
        })
    }

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
                            <td><input onChange={this.handleRawHitZone} type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td>
                            <td><input size="4"/></td>
                            <td><input size="4"/></td>
                        </tr>
                        <tr>
                            <td>Element</td>
                            <td><input onChange={this.handleElementHitZone} type="number" placeholder="25" step="1" min='0' max='100' size="6"/></td>
                            <td><input value={this.state.elementDamage} size="4"/></td><td><input size="4"/></td></tr>
                        <tr><td>Total</td><td> </td><td><input size="4"/></td><td><input size="4"/></td></tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Results;