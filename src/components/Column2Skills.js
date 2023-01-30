import React from "react";

class Column2Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attackSkills:{
                attackBoosts:[['attackBoosts'],[1,3],[1,6],[1,9],[1.05,7],[1.06,8],[1.08,9],[1.1,10]],
                agitator:[['agitator'],[1,4],[1,8],[1,12],[1,16],[1,20]],
                resentment:[['resentment'],[1,5],[1,10],[1,15],[1,20],[1,25]],
                adrenalineRush:[['adrenalineRush'],[1,10],[1,15],[1,30]],
                counterstrike:[['counterstrike'],[1,10],[1,15],[1,25]],
                peakPerformance:[['peakPerformance'],[1,5],[1,10],[1,20]],
                resuscitate:[['resuscitate'],[1,5],[1,10],[1,20]],
                dangoBooster:[['dangoBooster'],[1,6],[1,9],[1,12],[1,15]],
                dangoBulker:[['dangoBulker'],[1,10],[1,15],[1,15],[1,15]],
                dangoAdrenaline:[['dangoAdrenaline'],[1.3,0],[1.35,0],[1.35,0],[1.35,0]],
                derelictionBlue: [['derelictionBlue'],[1,25],[1,30],[1,35]],
                mailOfHellfireRed: [['mailOfHellfireRed'],[1,15],[1,25],[1,35]],
                burst:[['burst'],[1,8],[1,9],[1,10]],
                bloodlust:[['bloodlust'],[1,10],[1,15],[1,20]],
                coalescence:[['coalescence'],[1,12],[1,15],[1,18]],
                fortify:[['fortify'],[1.1,0],[1.2,0]],
                dragonHeart:[['dragonHeart'],[],[],[],[],[1.1,0]],
                heroics:[['heroics'],[],[],[],[],[1.3,0]],
            },
            elementSkills:{
                derelictionRed:[['derelictionRed'],[1,10],[1,15],[1,20]],
                mailOfHellfireBlue: [['mailOfHellfireBlue'],[1.05,0],[1.1,0],[1.2,0]],
                elementAttack:[['elementAttack'],[1,2],[1,3],[1.05,4],[1.1,4],[1.2,4]],
                kushalaTeostraBlessing:[['kushalaTeostraBlessing'],[1.05,0],[1.1,0]],
                stormsoul:[['stormsoul'],[1.05,0],[1.1,0],[1.15,0]],
                strife:[['strife'],[1.05,0],[1.1,0],[1.15,0]],
                burst: [['burst'],[1,5],[1,5],[1,5]],
                bloodlust:[['bloodlust'],[1,5],[1,7],[1,10]],
                coalescence:[['coalescence'],[1,2],[1,3],[1,4]],
            },
        }
    }

    handleSkills = (e) => {
        let skillLevel = e.target.value
        let skillName = undefined
        switch(e.target.parentNode.parentNode.firstChild.innerHTML) {
            case 'Attack Boosts': skillName = this.state.attackSkills.attackBoosts[0][0]; break;
            case 'Agitator': skillName = this.state.attackSkills.agitator[0][0]; break;
            case 'Resentment': skillName = this.state.attackSkills.resentment[0][0]; break;
            case 'Adrenaline Rush': skillName = this.state.attackSkills.adrenalineRush[0][0]; break;
            case 'Counterstrike': skillName = this.state.attackSkills.counterstrike[0][0]; break;
            case 'Peak Performance': skillName = this.state.attackSkills.peakPerformance[0][0]; break;
            case 'Resuscitate': skillName = this.state.attackSkills.resuscitate[0][0]; break;
            case 'Dango Booster': skillName = this.state.attackSkills.dangoBooster[0][0]; break;
            case 'Dango Bulker': skillName = this.state.attackSkills.dangoBulker[0][0]; break;
            case 'Dango Adrenaline': skillName = this.state.attackSkills.dangoAdrenaline[0][0]; break;
            case 'Fortify': skillName = this.state.attackSkills.fortify[0][0]; break;
            case 'Dragonheart': skillName = this.state.attackSkills.dragonHeart[0][0]; break;
            case 'Heroics': skillName = this.state.attackSkills.heroics[0][0]; break;

            case 'Dereliction (Blue)': skillName = this.state.attackSkills.derelictionBlue[0][0]; break;
            case 'Mail of Hellfire (Red)': skillName = this.state.attackSkills.mailOfHellfireRed[0][0]; break;
            case 'Dereliction (Red)': skillName = this.state.elementSkills.derelictionRed[0][0]; break;
            case 'Mail of Hellfire (Blue)': skillName = this.state.elementSkills.mailOfHellfireBlue[0][0]; break;
            case 'Element Attack': skillName = this.state.elementSkills.elementAttack[0][0]; break;
            case 'Kusha/Teo Blessing': skillName = this.state.elementSkills.kushalaTeostraBlessing[0][0]; break;
            case 'Stormsoul': skillName = this.state.elementSkills.stormsoul[0][0]; break;
            case 'Strife': skillName = this.state.elementSkills.strife[0][0]; break;
            case 'Burst': skillName = this.state.elementSkills.burst[0][0]; break;
            case 'Bloodlust': skillName = this.state.elementSkills.bloodlust[0][0]; break;
            case 'Coalescence': skillName = this.state.elementSkills.coalescence[0][0]; break;

        }
        if (skillName) {
            // handle Attack Column1
            if (Object.keys(this.state.attackSkills).includes(skillName)) {
                let attackMultiAdd = this.props.attackMultiAdd
                let skillEffect = this.state.attackSkills[skillName]
                // console.log('skillName:', skillName, 'skillEffect:',skillEffect, 'skillLevel:', skillLevel)
                let flag = true
                for (let i=0; i<attackMultiAdd.length; i++) {
                    if (attackMultiAdd[i][0] === skillName) {
                        if (skillLevel > 0) {
                            attackMultiAdd.splice(i,1, [skillName, skillEffect[skillLevel][0], skillEffect[skillLevel][1]])
                        } else {
                            attackMultiAdd.splice(i,1, [skillName, 1, 0])
                        }
                        flag = false
                    }
                }
                if (flag) {
                    attackMultiAdd.push([skillName, skillEffect[skillLevel][0], skillEffect[skillLevel][1]])
                }
                this.props.handleAttackMultiAddUpdate(attackMultiAdd)
            }
            // handle Element Column1
            if (Object.keys(this.state.elementSkills).includes(skillName)) {
                let elementMultiAdd = this.props.elementMultiAdd
                let skillEffect = this.state.elementSkills[skillName]
                let flag = true
                // console.log('skillName:', skillName, 'skillEffect:',skillEffect, 'skillLevel:', skillLevel)
                for (let i=0; i<elementMultiAdd.length; i++) {
                    if (elementMultiAdd[i][0] === skillName) {
                        if (skillLevel > 0) {
                            elementMultiAdd.splice(i,1, [skillName, skillEffect[skillLevel][0], skillEffect[skillLevel][1]])
                        } else {
                            elementMultiAdd.splice(i,1, [skillName, 1, 0])
                        }
                        flag = false
                    }
                }
                if (flag) {
                    elementMultiAdd.push([skillName, skillEffect[skillLevel][0], skillEffect[skillLevel][1]])
                }
                this.props.handleElementMultiAddUpdate(elementMultiAdd)
            }
        }
        this.props.handleFinalAttackElementUpdate()
    }

    render() {
        return (
            <div className="four wide column">
                <table onChange={this.handleSkills} className="ui compact table">
                    <thead><tr><th>Skills</th><th>Level</th></tr></thead>
                    <tbody id="skills">
                    <tr><td>Attack Boosts</td><td><input type="number" placeholder="0" step="1" min='0' max='7' size="6"/></td></tr>
                    <tr><td>Agitator</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Adrenaline Rush</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Counterstrike</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Peak Performance</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Resuscitate</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Dango Booster</td><td><input type="number" placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>Dango Bulker</td><td><input type="number" placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>Dango Adrenaline</td><td><input type="number" placeholder="0" step="1" min='0' max='4' size="6"/></td></tr>
                    <tr><td>Resentment</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Dereliction (Red)</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Dereliction (Blue)</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Mail of Hellfire (Red)</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Mail of Hellfire (Blue)</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Element Attack</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Kusha/Teo Blessing</td><td><input type="number" placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>Stormsoul</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Strife</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Burst</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Bloodlust</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Coalescence</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Fortify</td><td><input type="number" placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>Dragonheart</td><td><input type="number" placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Heroics</td><td><input type="number" placeholder="0" step="5" min='0' max='5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Column2Skills;