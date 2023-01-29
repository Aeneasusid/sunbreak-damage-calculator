import React from "react";

class AttackBoosts extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table onChange={this.props.handleAttackBoosts} className="ui compact table">
                <thead><tr><th>Attack Boosts</th><th>Number</th></tr></thead>
                <tbody>
                <tr><td>Power Charm&Talon</td><td><input className='atk-boost' type="number" placeholder="0" step="3" min='0' max='15' size="6"/></td></tr>
                <tr><td>Qurious Crafting</td><td><input className='atk-boost' type="number" placeholder="0" step="5" min='0' max='25' size="6"/></td></tr>
                <tr><td>Petalace</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                <tr><td>Dango</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                <tr><td>Others</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='-20' max='50' size="6"/></td></tr>
                </tbody>
            </table>
        )
    }
}

export default AttackBoosts;