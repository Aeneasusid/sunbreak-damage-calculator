import React from "react";

class Column3Multipliers extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDamageMultipliersChange = () => {
        let rawDamageMulti = 1
        let elementDamageMulti = [1, 1, 1]
        let totalDamageMulti = 1
        let rawDamageElements = document.querySelectorAll('.raw-damage')
        let elementDamageElements = document.querySelectorAll('.element-damage')
        let totalDamageElements = document.querySelectorAll('.total-damage')
        //
        rawDamageElements.forEach(e => {if (e.value) {rawDamageMulti *= e.value}})
        elementDamageElements.forEach(e => {
            if (e.value) {
                if (e.id === 'Element Exploit') {
                    elementDamageMulti[1] *= e.value
                } else if (e.id === 'Ele. Exploit Rampage') {
                    elementDamageMulti[2] *= e.value
                } else {
                    elementDamageMulti[0] *= e.value
                }
            }
        })
        totalDamageElements.forEach(e => {if (e.value) {totalDamageMulti *= e.value}})
        //
        this.props.handleDamageMultipliersUpdate([rawDamageMulti, elementDamageMulti, totalDamageMulti])
    }

    render() {
        return (
            <div className="ui column labeled input four wide column" >
                <table className="ui compact table" onChange={this.handleDamageMultipliersChange}>
                    <thead><tr><th>Raw Damage </th><th>Multipliers</th></tr></thead>
                    <tbody>
                        <tr><td>Critical Firepower</td><td><input className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                        <tr><td>Dango</td><td><input className='raw-damage' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Others</td><td><input className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>Elemental Damage </th><th>Multipliers</th></tr></thead>
                    <tbody id='element damage multipliers'>
                        <tr><td>Element Exploit</td><td><input className='element-damage' id='Element Exploit' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Ele. Exploit Rampage</td><td><input className='element-damage' id='Ele. Exploit Rampage' type="number" placeholder="1" step="0.15" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Elemental Reload</td><td><input className='element-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        <tr><td>Others</td><td><input className='element-damage' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>Total Damage </th><th>Multipliers</th></tr></thead>
                    <tbody id='total damage multipliers'>
                        <tr><td>Rapid Fire Up</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                        <tr><td>Normal/Spread/Pierce Up</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                        <tr><td>Others 1</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.5' size="6"/></td></tr>
                        <tr><td>Others 2</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                        <tr><td>Others 3</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Column3Multipliers;