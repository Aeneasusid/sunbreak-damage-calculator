import React from "react";

class Multipliers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            criticalBoost:[1.25, 1.3, 1.35, 1.4],
            criticalElement:[1, 1.05, 1.1, 1.15],
        }
    }

    handleCriticalChange = () => {
        let expectation = document.getElementById('Expectation (%)').value / 100
        if (! expectation) {expectation = 1}

        let boostLevel = document.getElementById('Critical Boost').value
        if (! boostLevel) {boostLevel = 0}
        let boostMulti = this.state.criticalBoost[boostLevel]

        let elementLevel = document.getElementById('Critical Element').value
        if (! elementLevel) {elementLevel = 0}
        let elementMulti = this.state.criticalElement[elementLevel]

        this.props.handleCriticalCorrectionUpdate(expectation, boostMulti, elementMulti)
    }

    handleDamageMultipliersChange = () => {
        let rawMultipliers = 1
        let elementMultipliers = 1
        //
        if (document.getElementById('raw1').value) {rawMultipliers *= document.getElementById('raw1').value}
        if (document.getElementById('raw2').value) {rawMultipliers *= document.getElementById('raw2').value}
        if (document.getElementById('raw3').value) {rawMultipliers *= document.getElementById('raw3').value}
        //
        if (document.getElementById('ele1').value) {elementMultipliers *= document.getElementById('ele1').value}
        if (document.getElementById('ele2').value) {elementMultipliers *= document.getElementById('ele2').value}
        if (document.getElementById('ele3').value) {elementMultipliers *= document.getElementById('ele3').value}
        if (document.getElementById('ele4').value) {elementMultipliers *= document.getElementById('ele4').value}
        //
        if (document.getElementById('total1').value) {
            rawMultipliers *= document.getElementById('total1').value
            elementMultipliers *= document.getElementById('total1').value
        }
        if (document.getElementById('total2').value) {
            rawMultipliers *= document.getElementById('total2').value
            elementMultipliers *= document.getElementById('total2').value
        }
        if (document.getElementById('total3').value) {
            rawMultipliers *= document.getElementById('total3').value
            elementMultipliers *= document.getElementById('total3').value
        }
        if (document.getElementById('total4').value) {
            rawMultipliers *= document.getElementById('total4').value
            elementMultipliers *= document.getElementById('total4').value
        }
        //
        let damageMultipliers = [rawMultipliers, elementMultipliers]
        this.props.handleDamageMultipliersUpdate(damageMultipliers)
    }

    render() {
        return (
            <div className="ui column labeled input five wide column" >
                <table className="ui compact table" onChange={this.handleCriticalChange}>
                    <thead><tr><th>Critical Correction</th><th>Level</th></tr></thead>
                    <tbody>
                        <tr><td>Critical Boost</td><td><input id='Critical Boost' type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                        <tr><td>Critical Element</td><td><input id='Critical Element' type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                        <tr><td>Expectation (%)</td><td><input id='Expectation (%)' type="number" placeholder="100" step="10" min='0' max='100' size="6"/></td></tr>
                    </tbody>
                </table>
                <table className="ui compact table" onChange={this.handleDamageMultipliersChange}>
                    <thead><tr><th>Raw Damage </th><th>Multipliers</th></tr></thead>
                    <tbody>
                        <tr><td>Critical Firepower</td><td><input id='raw1' type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                        <tr><td>Dango</td><td><input id='raw2' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Others</td><td><input id='raw3' type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>Elemental Damage </th><th>Multipliers</th></tr></thead>
                    <tbody id='element damage multipliers'>
                        <tr><td>Elemental Reload</td><td><input id='ele1' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        <tr><td>Element Exploit</td><td><input id='ele2' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Ele. Exploit Rampage</td><td><input id='ele3' type="number" placeholder="1" step="0.15" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Others</td><td><input id='ele4' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>Total Damage </th><th>Multipliers</th></tr></thead>
                    <tbody id='total damage multipliers'>
                        <tr><td>Rapid Fire Up</td><td><input id='total1' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                        <tr><td>Others 1</td><td><input id='total2' type="number" placeholder="1" step="0.05" min='1' max='1.5' size="6"/></td></tr>
                        <tr><td>Others 2</td><td><input id='total3' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                        <tr><td>Others 3</td><td><input id='total4' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Multipliers;