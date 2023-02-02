import React from "react";

class Column3Multipliers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // lbg hbg
            melody:['Melody', '旋律强化'],
            multipliers:['Multipliers', '乘算值'],
            attackUp:['Attack Up', '旋律攻击强化'],
            powerDrum:['Power Drum', '强化太鼓'],
            elementalBoost:['Elemental Boost', '旋律属性强化'],
            rawDamage:['Raw Damage', '物理伤害类'],
            quickstepEvade:['Quickstep Evade', '垫步回避'],
            criticalFirepower:['Critical Firepower', '有效射击法'],
            dangoTemper:['Dango Temper 1.05+', '团子粗暴射击 1.05+'],
            dangoMarksman:['Dango Marksman', '团子射击术'],
            speciesExploit:['Species Exploit', '物种歧视珠'],
            sneakAttack:['Sneak Attack', '偷袭'],
            elementDamage:['Element Damage', '属性伤害类'],
            elementExploit:['Element Exploit 1.1+', '属性弱点特效 1.1+'],
            elementExploitRampage:['Ele. Exploit Rampage', '属性弱特（百龙珠）'],
            elementalReload:['Elemental Reload', '属性装填'],
            fanningManeuver:['Fanning Maneuver', '扇旋移动'],
            totalDamage:['Total Damage', '总伤害类'],
            rapidFireUp:['Rapid Fire Up', '速射强化'],
            normalSpreadPierceUp:['Normal/Spread/Pierce Up', '通常/扩散/贯通弹强化'],
            monsterInRage:['Monster In Rage', '怪物愤怒补正'],
            others1:['Others1', '其他1'],
            others2:['Others2', '其他2'],
            // hbg only
            chargedShot:['Charged Shot', '蓄力']
        }
    }



    render() {
        if (this.props.weapon === 'Light Bow Gun') {
            return (<div className="four wide column" >
                    <table className=" table ui compact">
                        <thead><tr><th>{this.state.melody[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody onChange={this.props.handleFinalAttackElementUpdate}>
                            <tr><td>{this.state.attackUp[this.props.languageVersion]}</td><td><input id='melodyAttackUp' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.elementalBoost[this.props.languageVersion]}</td><td><input id='melodyElementalBoost' className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        </tbody>
                    </table>
                    <table className="ui table compact" onChange={this.props.handleDamageMultipliersUpdate}>
                        <thead><tr><th>{this.state.rawDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody>
                            <tr><td>{this.state.criticalFirepower[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                            <tr><td>{this.state.quickstepEvade[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.dangoTemper[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.025" min='1' max='1.075' size="6"/></td></tr>
                            <tr><td>{this.state.dangoMarksman[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.speciesExploit[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.05' size="6"/></td></tr>
                            <tr><td>{this.state.sneakAttack[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                        </tbody>
                        <thead><tr><th>{this.state.elementDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody id='element damage multipliers'>
                            <tr><td>{this.state.elementExploit[this.props.languageVersion]}</td><td><input className='element-damage' id='Element Exploit' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                            <tr><td>{this.state.elementExploitRampage[this.props.languageVersion]}</td><td><input className='element-damage' id='Ele. Exploit Rampage' type="number" placeholder="1" step="0.15" min='1' max='1.15' size="6"/></td></tr>
                            <tr><td>{this.state.elementalReload[this.props.languageVersion]}</td><td><input className='element-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.fanningManeuver[this.props.languageVersion]}</td><td><input className='element-damage' id='fanningManeuver' onChange={this.props.handleFinalAttackElementUpdate} type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        </tbody>
                        <thead><tr><th>{this.state.totalDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody id='total damage multipliers'>
                            <tr><td>{this.state.rapidFireUp[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                            <tr><td>{this.state.normalSpreadPierceUp[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                            <tr><td>{this.state.monsterInRage[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.others1[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                            <tr><td>{this.state.others2[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                        </tbody>
                    </table>
                </div>)
        } else if (this.props.weapon === 'Heavy Bow Gun') {
            return (<div className="four wide column" >
                    <table className="ui compact table">
                        <thead><tr><th>{this.state.melody[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody onChange={this.props.handleFinalAttackElementUpdate}>
                            <tr><td>{this.state.attackUp[this.props.languageVersion]}</td><td><input id='melodyAttackUp' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.elementalBoost[this.props.languageVersion]}</td><td><input id='melodyElementalBoost' className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        </tbody>
                    </table>
                    <table className="ui compact table" onChange={this.props.handleDamageMultipliersUpdate}>
                        <thead><tr><th>{this.state.rawDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody>
                            <tr><td>{this.state.chargedShot[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.1" min='1' max='1.8' size="6"/></td></tr>
                            <tr><td>{this.state.dangoTemper[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.025" min='1' max='1.075' size="6"/></td></tr>
                            <tr><td>{this.state.dangoMarksman[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.speciesExploit[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.05' size="6"/></td></tr>
                            <tr><td>{this.state.sneakAttack[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                        </tbody>
                        <thead><tr><th>{this.state.elementDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody id='element damage multipliers'>
                            <tr><td>{this.state.elementExploit[this.props.languageVersion]}</td><td><input className='element-damage' id='Element Exploit' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                            <tr><td>{this.state.elementExploitRampage[this.props.languageVersion]}</td><td><input className='element-damage' id='Ele. Exploit Rampage' type="number" placeholder="1" step="0.15" min='1' max='1.15' size="6"/></td></tr>
                            <tr><td>{this.state.elementalReload[this.props.languageVersion]}</td><td><input className='element-damage' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                        {/*<tr><td>{this.state.fanningManeuver[this.props.languageVersion]}</td><td><input className='element-damage' id='fanningManeuver' onChange={this.props.handleFinalAttackElementUpdate} type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>*/}
                        </tbody>
                        <thead><tr><th>{this.state.totalDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                        <tbody id='total damage multipliers'>
                            <tr><td>{this.state.rapidFireUp[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                            <tr><td>{this.state.normalSpreadPierceUp[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                            <tr><td>{this.state.monsterInRage[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.1' size="6"/></td></tr>
                            <tr><td>{this.state.others1[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                            <tr><td>{this.state.others2[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                        </tbody>
                    </table>
                </div>)
        }

    }
}

export default Column3Multipliers;