import React from "react";

class Column2Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            skill:['Skill', '技能'],
            level:['Level', '等级'],
            attackBoost:['Attack Boost', '攻击'],
            agitator:['Agitator', '挑战者'],
            adrenalineRush:['Adrenaline Rush', '巧击'],
            counterStrike:['Counterstrike', '逆袭'],
            peakPerformance:['Peak Performance', '无伤'],
            resuscitate:['Resuscitate', '死里逃生'],
            dangoBooster:['Dango Booster', '团子短期催眠术'],
            dangoBullker:['Dango Bullker', '团子健身术'],
            dangoAdrenaline:['Dango Adrenaline', '团子火场怪力'],
            resentment:['Resentment', '怨恨'],
            derelictionRed:['Dereliction Red', '伏魔耗命（红书）'],
            derelictionBlue:['Dereliction Blue', '伏魔耗命（蓝书）'],
            mailOfHellfireRed:['Mail Of HellfireRed', '夜铠修罗（红书）'],
            mailOfHellfireBlue:['Mail Of HellfireBlue', '夜铠修罗（蓝书）'],
            elementsAttack:['Elements Attack', '属性攻击强化'],
            kushaTeoBlessing:['Kusha/Teo Blessing', '钢/炎恩惠'],
            stormsoul:['Stormsoul', '风雷合一'],
            strife:['Strife', '奋斗'],
            burst:['Burst', '连击'],
            bloodlust:['Bloodlust', '狂龙症'],
            coalescence:['Coalescence', '因祸得福'],
            fortify:['Fortify', '不屈'],
            dragonheart:['Dragonheart', '龙气活性'],
            heroics:['Heroics', '技能'],
        }
    }

    render() {
        return (
            <div className="four wide column">
                <table onChange={e => this.props.handleSkills(e)} className="ui compact table">
                    <thead><tr><th>{this.state.skill[this.props.languageVersion]}</th><th>{this.state.level[this.props.languageVersion]}</th></tr></thead>
                    <tbody>
                    <tr><td>{this.state.attackBoost[this.props.languageVersion]}</td><td><input type="number" id='attackBoosts' placeholder="0" step="1" min='0' max='7' size="6"/></td></tr>
                    <tr><td>{this.state.agitator[this.props.languageVersion]}</td><td><input type="number" id='agitator' placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>{this.state.adrenalineRush[this.props.languageVersion]}</td><td><input type="number" id='adrenalineRush' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.counterStrike[this.props.languageVersion]}</td><td><input type="number" id='counterstrike' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.peakPerformance[this.props.languageVersion]}</td><td><input type="number" id='peakPerformance' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.resuscitate[this.props.languageVersion]}</td><td><input type="number" id='resuscitate' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.dangoBooster[this.props.languageVersion]}</td><td><input type="number" id='dangoBooster' placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>{this.state.dangoBullker[this.props.languageVersion]}</td><td><input type="number" id='dangoBulker' placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>{this.state.dangoAdrenaline[this.props.languageVersion]}</td><td><input type="number" id='dangoAdrenaline' placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>{this.state.resentment[this.props.languageVersion]}</td><td><input type="number" id='resentment' placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>{this.state.derelictionRed[this.props.languageVersion]}</td><td><input type="number" id='derelictionRed' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.derelictionBlue[this.props.languageVersion]}</td><td><input type="number" id='derelictionBlue' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.mailOfHellfireRed[this.props.languageVersion]}</td><td><input type="number" id='mailOfHellfireRed' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.mailOfHellfireBlue[this.props.languageVersion]}</td><td><input type="number" id='mailOfHellfireBlue' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.elementsAttack[this.props.languageVersion]}</td><td><input type="number" id='elementAttack' placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>{this.state.kushaTeoBlessing[this.props.languageVersion]}</td><td><input type="number" id='kushalaTeostraBlessing' placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>{this.state.stormsoul[this.props.languageVersion]}</td><td><input type="number" id='stormsoul' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.strife[this.props.languageVersion]}</td><td><input type="number" id='strife' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.burst[this.props.languageVersion]}</td><td><input type="number" id='burst' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.bloodlust[this.props.languageVersion]}</td><td><input type="number" id='bloodlust' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.coalescence[this.props.languageVersion]}</td><td><input type="number" id='coalescence' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>{this.state.fortify[this.props.languageVersion]}</td><td><input type="number" id='fortify' placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>{this.state.dragonheart[this.props.languageVersion]}</td><td><input type="number" id='dragonheart' placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>
                    <tr><td>{this.state.heroics[this.props.languageVersion]}</td><td><input type="number" id='heroics' placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Column2Skills;