import React from "react";

class ItemBoosts extends React.Component{
    constructor() {
        super();
        this.state = {
            items:['Items', '道具'],
            // items:['Items', '道具'],
            // items:['Items', '道具'],
            // items:['Items', '道具'],
            // items:['Items', '道具'],
            // items:['Items', '道具'],
            // items:['Items', '道具'],
            // items:['Items', '道具'],
            // items:['Items', '道具'],
        }
    }

    render() {
        return (
            <table onChange={this.props.handleItemBoosts} className="ui compact table">
                <thead><tr><th>{this.state.items[this.props.languageVersion]}</th><th>Boosts</th></tr></thead>
                <tbody>
                <tr><td>Petalace</td><td><input className='itemBoost' type="number" placeholder="0" step="1" min='0' max='20' size="6"/></td></tr>
                <tr><td>Power Charm&Talon</td><td><input className='itemBoost' type="number" placeholder="0" step="15" min='0' max='15' size="6"/></td></tr>
                <tr><td>Might Seed</td><td><input className='itemBoost' type="number" placeholder="0" step="10" min='0' max='10' size="6"/></td></tr>
                {/*<tr><td>Demondrug</td><td><input className='itemBoost' type="number" placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>*/}
                <tr><td>Mega Demondrug</td><td><input className='itemBoost' type="number" placeholder="0" step="7" min='0' max='7' size="6"/></td></tr>
                <tr><td>Demon Powder</td><td><input className='itemBoost' type="number" placeholder="0" step="10" min='0' max='10' size="6"/></td></tr>
                <tr><td>Others</td><td><input className='itemBoost' type="number" placeholder="0" step="1" min='-11' max='40' size="6"/></td></tr>
                </tbody>
            </table>
        )
    }
}

export default ItemBoosts;