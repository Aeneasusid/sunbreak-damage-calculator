import React from "react";

class Column2Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attackSkills:{
                attackBoost:[['attackBoost'],[1,3],[1,6],[1,9],[1.05,7],[1.06,8],[1.08,9],[1.1,10]],
                longBarrelTuneUp:[['longBarrelTuneUp'],[1.05,0],[1.075,0]],
                resentment:[['resentment'],[1,5],[1,10],[1,15],[1,20],[1,25]],
                peakPerformance:[['peakPerformance'],[1,5],[1,10],[1,20]],
                resuscitate:[['resuscitate'],[1,5],[1,10],[1,20]],
                derelictionBlue: [['derelictionBlue'],[1,25],[1,30],[1,35]],
                burst: [['burst'],[1,8],[1,9],[1,10]],
            },
            elementSkills:{
                derelictionRed:[['derelictionRed'],[1,10],[1,15],[1,20]],
                burst: [['burst'],[1,5],[1,5],[1,5]],
                elementAttack:[['elementAttack'],[1,2],[1,3],[1.05,4],[1.1,4],[1.2,4]],
                kushalaTeostraBlessing:[['kushalaTeostraBlessing'],[1.05,0],[1.1,0]],
                strife:[['strife'],[1.05,0],[1.1,0],[1.15,0]],
            },
        }
    }

    handleSkills = (e) => {
        let skillLevel = e.target.value
        let skillName = undefined
        switch(e.target.parentNode.parentNode.firstChild.innerHTML) {
            case 'Attack Boosts': skillName = this.state.attackSkills.attackBoost[0][0]; break;
            case 'Long Barrel (Tune-up)': skillName = this.state.attackSkills.longBarrelTuneUp[0][0]; break;
            case 'Resentment': skillName = this.state.attackSkills.resentment[0][0]; break;
            case 'Peak Performance': skillName = this.state.attackSkills.peakPerformance[0][0]; break;
            case 'Resuscitate': skillName = this.state.attackSkills.resuscitate[0][0]; break;
            case 'Dereliction (Blue)': skillName = this.state.attackSkills.derelictionBlue[0][0]; break;
            case 'Dereliction (Red)': skillName = this.state.elementSkills.derelictionRed[0][0]; break;
            case 'Burst': skillName = this.state.elementSkills.burst[0][0]; break;
            case 'Element Attack': skillName = this.state.elementSkills.elementAttack[0][0]; break;
            case 'Kusha/Teo Blessing': skillName = this.state.elementSkills.kushalaTeostraBlessing[0][0]; break;
            case 'Strife': skillName = this.state.elementSkills.strife[0][0]; break;
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
                // console.log('skillName:', skillName, 'skillEffect:',skillEffect, 'skillLevel:', skillLevel)
                let flag = true
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
            <div className="ui column labeled input four wide column">
                <table onChange={this.handleSkills} className="ui compact table">
                    <thead><tr><th>Skills</th><th>Level</th></tr></thead>
                    <tbody id="skills">
                    <tr><td>Attack Boosts</td><td><input type="number" placeholder="0" step="1" min='0' max='7' size="6"/></td></tr>
                    <tr><td>Long Barrel (Tune-up)</td><td><input type="number" placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>Resentment</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Peak Performance</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Resuscitate</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Dereliction (Blue)</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Dereliction (Red)</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Burst</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Element Attack</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Kusha/Teo Blessing</td><td><input type="number" placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>Strife</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Column2Skills;