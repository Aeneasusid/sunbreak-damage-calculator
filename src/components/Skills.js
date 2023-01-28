import React from "react";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // xxxMultiAdd:['xxx skill',1,0],
            attackMultiAdd: [],
            elementMultiAdd: [],
            elementValue:0,
            attackBoost:0,
        }
    }

    handleAmmo = (e) => {
        let ammo = this.props.ammo
        let ammoValues = []
        for (let i=0; i<ammo.length; i++) {
            if (ammo[i][0] === e.target.value) {
                ammoValues = [ammo[i][1], ammo[i][2]]
            }
        }
        // console.log('ammoValues:', ammoValues)
        this.props.handleMotionValueUpdate(ammoValues[0])
        this.setState({elementValue: ammoValues[1]}, () => {
            this.handleCalculator()
        })
    }

    handleBoosts = () => {
        let boosts = 0
        boosts += Number(document.getElementById('boost1').value)
        boosts += Number(document.getElementById('boost2').value)
        boosts += Number(document.getElementById('boost3').value)
        boosts += Number(document.getElementById('boost4').value)
        boosts += Number(document.getElementById('boost5').value)
        this.setState({attackBoost:boosts}, () => {
            this.handleCalculator()
        })
    }

    handleSkills = (e) => {
        let skillLevel = e.target.value
        let skillName = undefined
        switch(e.target.parentNode.parentNode.firstChild.innerHTML) {
            case 'Attack Boosts': skillName = this.props.attackSkills.attackBoost[0][0]; break;
            case 'Long Barrel (Tune-up)': skillName = this.props.attackSkills.longBarrelTuneUp[0][0]; break;
            case 'Resentment': skillName = this.props.attackSkills.resentment[0][0]; break;
            case 'Peak Performance': skillName = this.props.attackSkills.peakPerformance[0][0]; break;
            case 'Resuscitate': skillName = this.props.attackSkills.resuscitate[0][0]; break;
            case 'Dereliction (Blue)': skillName = this.props.attackSkills.derelictionBlue[0][0]; break;
            case 'Dereliction (Red)': skillName = this.props.elementSkills.derelictionRed[0][0]; break;
            case 'Burst': skillName = this.props.elementSkills.burst[0][0]; break;
            case 'Element Attack': skillName = this.props.elementSkills.elementAttack[0][0]; break;
            case 'Kusha/Teo Blessing': skillName = this.props.elementSkills.kushalaTeostraBlessing[0][0]; break;
            case 'Strife': skillName = this.props.elementSkills.strife[0][0]; break;
        }
        if (skillName) {
            // handle Attack Skills
            if (Object.keys(this.props.attackSkills).includes(skillName)) {
                let attackMultiAdd = this.state.attackMultiAdd
                let skillEffect = this.props.attackSkills[skillName]
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
            if (Object.keys(this.props.elementSkills).includes(skillName)) {
                let elementMultiAdd = this.state.elementMultiAdd
                let skillEffect = this.props.elementSkills[skillName]
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
            <div className="ui column labeled input five wide column" >
                <table onChange={this.handleAmmo} className="ui compact table">
                    <thead>
                        <tr>
                            <th>Ammo Type</th>
                            <th>
                                <div className="ui action input">
                                        <select className="ui compact selection dropdown">
                                            <option value=""> </option>
                                            <option value="4 Elements">4 Elements</option>
                                            <option value="4 Pierce Elements">4 Pierce Elements</option>
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
                    </thead>
                </table>

                <table onChange={this.handleCalculator} className="ui compact table">
                    <thead>
                    <tr>
                        <th>Weapon Raw Attack</th>
                        <th><input id="Weapon Raw Attack" type="number" placeholder="330" step="10" min='250' max='450' size="6" /></th>
                    </tr>
                    </thead>
                </table>

                <table onChange={this.handleBoosts} className="ui compact table">
                    <thead><tr><th>Attack Boosts</th><th>Number</th></tr></thead>
                    <tbody>
                        <tr><td>Power Charm&Talon</td><td><input id='boost1' type="number" placeholder="15" step="3" min='0' max='15' size="6"/></td></tr>
                        <tr><td>Qurious Crafting</td><td><input id='boost2' type="number" placeholder="0" step="5" min='0' max='25' size="6"/></td></tr>
                        <tr><td>Petalace</td><td><input id='boost3' type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                        <tr><td>Dango</td><td><input id='boost4' type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                        <tr><td>Others</td><td><input id='boost5' type="number" placeholder="0" step="1" min='-20' max='30' size="6"/></td></tr>
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