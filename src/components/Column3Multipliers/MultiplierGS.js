import React from "react";

class MultiplierGS extends React.Component {
    constructor() {
        super();
        this.state = {
            //
            attack:['Attack', '攻击'],
            element:['Element', '属性'],
            multipliers:['Multipliers', '乘算值'],
            //
            powerSheath:['Power Sheath', '强化纳刀'],
            offensiveGuard:['Offensive Guard', '攻击守势'],
            powerDrum:['Power Drum', '强化太鼓'],
            melodyAttackUp:['Melody Attack Up', '旋律攻击强化'],
            melodyElementalBoost:['Melody Ele. Boost', '旋律属性强化'],
            //
            rawDamage:['Raw Damage', '物理伤害类'],
            speciesExploit:['Species Exploit', '物种歧视珠'],
            sneakAttack:['Sneak Attack', '偷袭'],
            //
            elementDamage:['Element Damage', '属性伤害类'],
            elementExploit:['Element Exploit 1.1+', '属性弱点特效 1.1+'],
            elementExploitRampage:['Ele. Exploit Rampage', '属性弱特百龙珠'],
            //
            totalDamage:['Total Damage', '总伤害类'],
            sleepingAilment:['Sleeping Ailment', '眠斩'],
            monsterInRage:['Monster In Rage', '怪物愤怒补正'],
            others:['Others', '其它'],
        }
    }

    render() {
        return (
            <div className="sixteen wide mobile eight wide tablet four wide computer column" >
                <table className=" table ui compact">
                    <thead><tr><th>{this.state.attack[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                    <tbody onChange={this.props.handleFinalAtkEleMultipliersUpdate}>
                    <tr><td>{this.state.offensiveGuard[this.props.languageVersion]}</td><td><input className='final-atk-multi' type="number" placeholder="1" step="0.05" min='1' max='1.15' size="6"/></td></tr>
                    <tr><td>{this.state.powerSheath[this.props.languageVersion]}</td><td><input className='final-atk-multi' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                    <tr><td>{this.state.powerDrum[this.props.languageVersion]}</td><td><input className='final-atk-multi' type="number" placeholder="1" step="0.05" min='1' max='1.05' size="6"/></td></tr>
                    <tr><td>{this.state.melodyAttackUp[this.props.languageVersion]}</td><td><input className='final-atk-multi' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>{this.state.element[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                    <tbody onChange={this.props.handleFinalAtkEleMultipliersUpdate}>
                    <tr><td>{this.state.melodyElementalBoost[this.props.languageVersion]}</td><td><input className='final-ele-multi' type="number" placeholder="1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                    </tbody>
                </table>
                <table className="ui table compact" onChange={this.props.handleDamageMultipliersUpdate}>
                    <thead><tr><th>{this.state.rawDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                    <tbody>
                    <tr><td>{this.state.speciesExploit[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.05' size="6"/></td></tr>
                    <tr><td>{this.state.sneakAttack[this.props.languageVersion]}</td><td><input className='raw-damage' type="number" placeholder="1" step="0.05" min='1' max='1.2' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>{this.state.elementDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                    <tbody>
                    <tr><td>{this.state.elementExploit[this.props.languageVersion]}</td><td><input className='element-damage' id='Element Exploit' type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                    <tr><td>{this.state.elementExploitRampage[this.props.languageVersion]}</td><td><input className='element-damage' id='Ele. Exploit Rampage' type="number" placeholder="1" step="0.15" min='1' max='1.15' size="6"/></td></tr>
                    </tbody>
                    <thead><tr><th>{this.state.totalDamage[this.props.languageVersion]}</th><th>{this.state.multipliers[this.props.languageVersion]}</th></tr></thead>
                    <tbody>
                    <tr><td>{this.state.sleepingAilment[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="1" min='1' max='2' size="6"/></td></tr>
                    <tr><td>{this.state.monsterInRage[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.1' size="6"/></td></tr>
                    <tr><td>{this.state.others[this.props.languageVersion]}</td><td><input className='total-damage' type="number" placeholder="1" step="0.05" min='1' max='1.5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MultiplierGS;