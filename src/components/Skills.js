import React from "react";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attackMultiAdd: [],
            elementMultiAdd: [],
            attackBoosts:0,
            skills:[
                ['attackBoost', 'longBarrelTuneUp', 'resentment', 'peakPerformance', 'resuscitate', 'derelictionBlue','burst'],
                ['derelictionRed', 'burst', 'elementAttack', 'kushalaTeostraBlessing' ,'strife' ]
            ]
        }
    }

    handleAmmo = (e) => {
        console.log('e',e.target.value)
        let ammo = this.props.ammo
        let ammoValues = []
        for (let i=0; i<ammo.length; i++) {
            if (ammo[i][0] === e.target.value) {
                ammoValues = [ammo[i][1], ammo[i][2]]
            }
        }
    }

    handleInitialATK = () => {
        this.calculator()
    }

    handleBoosts = () => {
        let boosts = 0
        boosts += Number(document.getElementById('boost1').value)
        boosts += Number(document.getElementById('boost2').value)
        boosts += Number(document.getElementById('boost3').value)
        boosts += Number(document.getElementById('boost4').value)
        boosts += Number(document.getElementById('boost5').value)
        this.setState({attackBoosts: boosts})
        // console.log('000',this.state.attackBoosts)
        this.calculator()
    }

    skillsDetail = (skill, skillEffect, skillLevel) => {
        let attackMultiAdd = this.state.attackMultiAdd
        if (this.state.skills[0].includes(skill)) {
            let flag = true
            for (let i=0; i<attackMultiAdd.length; i++) {
                if (attackMultiAdd[i][0] === skill) {
                    if (skillLevel > 0) {
                        attackMultiAdd.splice(i,1, [skill, skillEffect[0], skillEffect[1]])
                    } else {
                        attackMultiAdd.splice(i,1, [skill, 1, 0])
                    }
                    flag = false
                }
            }
            if (flag) {
                attackMultiAdd.push([skill, skillEffect[0], skillEffect[1]])
            }
        }
        this.setState({attackMultiAdd: attackMultiAdd})
        //

    }

    handleSkills = (e) => { // this one has to be an arrow function!!!
        let skillEffects = undefined
        switch(e.target.parentNode.parentNode.firstChild.innerHTML) {
            case 'Attack Boosts': skillEffects = this.props.skills.attackBoost; break;
            case 'Long Barrel (Tune-up)': skillEffects = this.props.skills.longBarrelTuneUp; break;
            case 'Resentment': skillEffects = this.props.skills.resentment; break;
            case 'Peak Performance': skillEffects = this.props.skills.peakPerformance; break;
            case 'Resuscitate': skillEffects = this.props.skills.resuscitate; break;
            case 'Dereliction (Blue)': skillEffects = this.props.skills.derelictionBlue; break;
            case 'Dereliction (Red)': skillEffects = this.props.skills.derelictionRed; break;
            case 'Burst': skillEffects = this.props.skills.burst; break;
            case 'Element Attack': skillEffects = this.props.skills.elementAttack; break;
            case 'Kusha/Teo Blessing': skillEffects = this.props.skills.kushalaTeostraBlessing; break;
            case 'Strife': skillEffects = this.props.skills.strife; break;
        }
        if (skillEffects) {
            let skill = skillEffects[0][0]
            let skillLevel = e.target.value
            let skillEffect = skillEffects[skillLevel]
            console.log('skill:', skill, 'skillEffect:',skillEffect, 'skillLevel:', skillLevel)
            this.skillsDetail(skill, skillEffect, skillLevel)
        }
        this.calculator()
    }

    calculator = () => {
        let attackPower = document.getElementById('Weapon Raw Attack').valueAsNumber
        for (let x of this.state.attackMultiAdd) {
            attackPower *= x[1]
        }
        for (let x of this.state.attackMultiAdd) {
            attackPower += x[2]
        }
        console.log('cal',this.state.attackBoosts)
        attackPower = Math.floor(attackPower) + this.state.attackBoosts
        // console.log('update final attack power from son to father component:', attackPower)
        this.props.handleUpdate(attackPower)
    }

    render() {
        return (
            <div className="ui column labeled input four wide column" >
                <table onChange={this.handleAmmo} className="ui compact table">
                    <thead>
                        <tr>
                            <th>Ammo</th>
                            <th>
                                <div className="ui action input">
                                        <select className="ui compact selection dropdown">
                                            <option value="Element">Element</option>
                                            <option value="Pierce Element">Pierce Element</option>
                                            <option value="Pierce 2">Pierce 2</option>
                                            <option value="Normal 3">Normal 3</option>
                                        </select>
                                </div>
                            </th>
                        </tr>
                    </thead>
                </table>
                <table onChange={this.handleInitialATK} className="ui compact table">
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
                        <tr><td>Qurious Crafting</td><td><input id='boost2' type="number" placeholder="10" step="5" min='0' max='25' size="6"/></td></tr>
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