import React from "react";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attackMultiAdd: [], // ['xxx skill',1,0],
            elementMultiAdd: [],
            elementValue:40,
            attackBoost:0,
            ammo:[
                ['4 Elements',16, 40],['4 Pierce Elements',10, 22],
                ['Pierce 2',7,0],['Pierce 3',9,0],
                ['Normal 2',22,0],['Normal 3',34,0],
                ['Spread 2',7,0],['Spread 3',10,0],
                ['Shrapnel 2',5,0],['Shrapnel 3',5,0],
            ],
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

    handleAmmoTypeChange = (e) => {
        let ammo = this.state.ammo
        let ammoValues = []
        for (let i=0; i<ammo.length; i++) {
            if (ammo[i][0] === e.target.value) {
                ammoValues = [ammo[i][1], ammo[i][2]]
            }
        }
        this.props.handleMotionValueUpdate(ammoValues[0])
        this.setState({elementValue: ammoValues[1]}, () => {
            this.handleCalculator()
        })
    }

    handleRapidFire = e => {this.props.handleRapidFireUpdate(e.target.value)}

    handleBoosts = () => {
        let attackBoost = 0
        let atkBoosts  = document.querySelectorAll('.atk-boost')
        atkBoosts.forEach(e => attackBoost +=  Number(e.value))
        this.setState({attackBoost:attackBoost}, () => {
            this.handleCalculator()
        })
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
            // handle Attack Skills
            if (Object.keys(this.state.attackSkills).includes(skillName)) {
                let attackMultiAdd = this.state.attackMultiAdd
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
                this.setState({attackMultiAdd: attackMultiAdd})
            }
            // handle Element Skills
            if (Object.keys(this.state.elementSkills).includes(skillName)) {
                let elementMultiAdd = this.state.elementMultiAdd
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
                this.setState({elementMultiAdd: elementMultiAdd})
            }
        }
        this.handleCalculator()
    }

    handleCalculator = () => {
        // handle Attack Power
        let attackPower = document.getElementById('Weapon Raw Attack').valueAsNumber
        for (let x of this.state.attackMultiAdd) {
            attackPower *= x[1]
        }
        for (let x of this.state.attackMultiAdd) {
            attackPower += x[2]
        }
        attackPower = Math.floor(attackPower + 0.1) + this.state.attackBoost
        this.props.handleAttackUpdate(attackPower)

        // handle Element Value
        let elementValue = this.state.elementValue
        if  (elementValue > 0) {
            for (let x of this.state.elementMultiAdd) {
                elementValue *= x[1]
            }
            for (let x of this.state.elementMultiAdd) {
                elementValue += x[2]
            }
        }
        elementValue = Math.floor(elementValue + 0.1)
        this.props.hanldeElementUpdate(elementValue)
    }

    render() {
        return (
            <div className="ui column labeled input five wide column">
                <table className="ui compact table">
                    <thead>
                    <tr>
                        <th>Weapon Raw Attack</th>
                        <th onChange={this.handleCalculator}><input id="Weapon Raw Attack" type="number" placeholder="330" step="10" min='250' max='450' size="6" /></th>
                    </tr>
                    </thead>
                </table>

                <table className="ui compact table">
                    <thead>
                        <tr>
                            <th>Ammo Type</th>
                            <th>
                                <div className="ui action input" >
                                    <select className="ui compact selection dropdown" onChange={this.handleAmmoTypeChange}>
                                        <option value="4 Elements">4 Elements</option>
                                        <option value="4 Pierce Elements">4 Pierce Elem.</option>
                                        <option value="Pierce 2">Pierce 2</option>
                                        <option value="Pierce 3">Pierce 3</option>
                                        <option value="Normal 2">Normal 2</option>
                                        <option value="Normal 3">Normal 3</option>
                                        <option value="Spread 2">Spread 2</option>
                                        <option value="Spread 3">Spread 3</option>
                                        <option value="Shrapnel 2">Shrapnel 2</option>
                                        <option value="Shrapnel 3">Shrapnel 3</option>
                                    </select>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>Rapid Fire</th>
                            <th>
                                <div className="ui action input">
                                    <select className="ui compact selection dropdown" onChange={this.handleRapidFire}>
                                        <option value='No'>No</option>
                                        <option value='Yes'>Yes</option>
                                    </select>
                                </div>
                            </th>
                        </tr>
                    </thead>
                </table>

                <table onChange={this.handleBoosts} className="ui compact table">
                    <thead><tr><th>Attack Boosts</th><th>Number</th></tr></thead>
                    <tbody>
                        <tr><td>Power Charm&Talon</td><td><input className='atk-boost' type="number" placeholder="15" step="3" min='0' max='15' size="6"/></td></tr>
                        <tr><td>Qurious Crafting</td><td><input className='atk-boost' type="number" placeholder="0" step="5" min='0' max='25' size="6"/></td></tr>
                        <tr><td>Petalace</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                        <tr><td>Dango</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                        <tr><td>Others</td><td><input className='atk-boost' type="number" placeholder="0" step="1" min='-20' max='30' size="6"/></td></tr>
                    </tbody>
                </table>

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

export default Skills;