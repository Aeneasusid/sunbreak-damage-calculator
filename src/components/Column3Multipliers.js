import React from "react";

class Column3Multipliers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="four wide column" >
                <table className="ui compact table">
                    <thead><tr><th>Melody</th><th>Multipliers</th></tr></thead>
                    <tbody onChange={this.props.handleFinalAttackElementUpdate}>
                        <tr><td>Attack Up</td><td><input id='melodyAttackUp' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        <tr><td>Elemental Boost</td><td><input id='melodyElementalBoost' className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                    </tbody>
                </table>
                <table className="ui compact table" onChange={this.props.handleDamageMultipliersUpdate}>
                    <thead><tr><th>Raw Damage </th><th>Multipliers</th></tr></thead>
                    <tbody>
                        <tr><td>Quickstep Evade</td><td><input className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        <tr><td>Critical Firepower</td><td><input className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                        <tr><td>Dango Temper</td><td><input className='raw-damage' type="number" placeholder="1" step="0.01" min='1' max='1.08' size="6"/></td></tr>
                        <tr><td>Dango Marksman</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.1' size="6"/></td></tr>
                        <tr><td>Sneak Attack</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>Elemental Damage </th><th>Multipliers</th></tr></thead>
                    <tbody id='element damage multipliers'>
                        <tr><td>Element Exploit</td><td><input className='element-damage' id='Element Exploit' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Ele. Exploit Rampage</td><td><input className='element-damage' id='Ele. Exploit Rampage' type="number" placeholder="1" step="0.15" min='1' max='1.15' size="6"/></td></tr>
                        <tr><td>Elemental Reload</td><td><input className='element-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        <tr><td>Fanning Maneuver</td><td><input className='element-damage' id='fanningManeuver' onChange={this.props.handleFinalAttackElementUpdate} type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>Total Damage </th><th>Multipliers</th></tr></thead>
                    <tbody id='total damage multipliers'>
                        <tr><td>Rapid Fire Up</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                        <tr><td>Normal/Spread/Pierce Up</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                        <tr><td>Monster In Rage</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.1' size="6"/></td></tr>
                        <tr><td>Others 1</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                        <tr><td>Others 2</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Column3Multipliers;