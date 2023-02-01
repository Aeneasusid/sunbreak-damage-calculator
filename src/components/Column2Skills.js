import React from "react";

class Column2Skills extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="four wide column">
                <table onChange={e => this.props.handleSkills(e)} className="ui compact table">
                    <thead><tr><th>Skills</th><th>Level</th></tr></thead>
                    <tbody>
                    <tr><td>Attack Boosts</td><td><input type="number" id='attackBoosts' placeholder="0" step="1" min='0' max='7' size="6"/></td></tr>
                    <tr><td>Agitator</td><td><input type="number" id='agitator' placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Adrenaline Rush</td><td><input type="number" id='adrenalineRush' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Counterstrike</td><td><input type="number" id='counterstrike' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Peak Performance</td><td><input type="number" id='peakPerformance' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Resuscitate</td><td><input type="number" id='resuscitate' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Dango Booster</td><td><input type="number" id='dangoBooster' placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>Dango Bulker</td><td><input type="number" id='dangoBulker' placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>Dango Adrenaline</td><td><input type="number" id='dangoAdrenaline' placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>Resentment</td><td><input type="number" id='resentment' placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Dereliction (Red)</td><td><input type="number" id='derelictionRed' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Dereliction (Blue)</td><td><input type="number" id='derelictionBlue' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Mail of Hellfire (Red)</td><td><input type="number" id='mailOfHellfireRed' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Mail of Hellfire (Blue)</td><td><input type="number" id='mailOfHellfireBlue' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Element Attack</td><td><input type="number" id='elementAttack' placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Kusha/Teo Blessing</td><td><input type="number" id='kushalaTeostraBlessing' placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>Stormsoul</td><td><input type="number" id='stormsoul' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Strife</td><td><input type="number" id='strife' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Burst</td><td><input type="number" id='burst' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Bloodlust</td><td><input type="number" id='bloodlust' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Coalescence</td><td><input type="number" id='coalescence' placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Fortify</td><td><input type="number" id='fortify' placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>Dragonheart</td><td><input type="number" id='dragonheart' placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Heroics</td><td><input type="number" id='heroics' placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Column2Skills;