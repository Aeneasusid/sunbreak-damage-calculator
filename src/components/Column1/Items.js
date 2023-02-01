import React from "react";

class Items extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table onChange={this.props.handleAttackBoosts} className="ui compact table">
                <thead><tr><th>Items</th><th>Boosts</th></tr></thead>
                <tbody>
                <tr><td>Petalace</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='0' max='20' size="6"/></td></tr>
                <tr><td>Power Charm&Talon</td><td><input className='atk-boost' type="number" placeholder="0" step="15" min='0' max='15' size="6"/></td></tr>
                <tr><td>Might Seed</td><td><input className='atk-boost' type="number" placeholder="0" step="10" min='0' max='10' size="6"/></td></tr>
                <tr><td>Demondrug</td><td><input className='atk-boost' type="number" placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>
                <tr><td>Mega Demondrug</td><td><input className='atk-boost' type="number" placeholder="0" step="7" min='0' max='7' size="6"/></td></tr>
                <tr><td>Demon Powder</td><td><input className='atk-boost' type="number" placeholder="0" step="10" min='0' max='10' size="6"/></td></tr>
                <tr><td>Others</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='-11' max='30' size="6"/></td></tr>
                </tbody>
            </table>
        )
    }
}

export default Items;