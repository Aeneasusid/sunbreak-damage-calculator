import React from "react";

class ItemBoosts extends React.Component{
    constructor() {
        super();
        this.state = {
            items:['Items', '道具'],
            boosts:['Boosts', '加攻数值'],
            petalace:['Petalace', '芳香花链'],
            powerCharmTalon:['Power Charm&Talon', '力之护符&爪'],
            mightSeed:['Might Seed', '怪力种子'],
            // demondrug:['Demondrug', '鬼人药'],
            megaDemondrug:['Mega Demondrug', '大鬼人药'],
            demonPowder:['Demon Powder', '鬼人粉尘'],
            others:['Others +/-', '其它 +/-'],
        }
    }

    render() {
        return (
            <table onChange={this.props.handleItemBoosts} className="ui compact table">
                <thead><tr><th>{this.state.items[this.props.languageVersion]}</th><th>{this.state.boosts[this.props.languageVersion]}</th></tr></thead>
                <tbody>
                <tr><td>{this.state.powerCharmTalon[this.props.languageVersion]}</td><td><input className='itemBoost' type="number" placeholder="0" step="15" min='0' max='15' size="6"/></td></tr>
                <tr><td>{this.state.petalace[this.props.languageVersion]}</td><td><input className='itemBoost' type="number" placeholder="0" step="1" min='0' max='20' size="6"/></td></tr>
                <tr><td>{this.state.mightSeed[this.props.languageVersion]}</td><td><input className='itemBoost' type="number" placeholder="0" step="10" min='0' max='10' size="6"/></td></tr>
                {/*<tr><td>{this.state.demondrug[this.props.languageVersion]}</td><td><input className='itemBoost' type="number" placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>*/}
                <tr><td>{this.state.megaDemondrug[this.props.languageVersion]}</td><td><input className='itemBoost' type="number" placeholder="0" step="7" min='0' max='7' size="6"/></td></tr>
                <tr><td>{this.state.demonPowder[this.props.languageVersion]}</td><td><input className='itemBoost' type="number" placeholder="0" step="10" min='0' max='10' size="6"/></td></tr>
                <tr><td>{this.state.others[this.props.languageVersion]}</td><td><input className='itemBoost' type="number" placeholder="0" step="1" min='-30' max='50' size="6"/></td></tr>
                </tbody>
            </table>
        )
    }
}

export default ItemBoosts;