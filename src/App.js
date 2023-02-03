import React from "react";
import Menu from "./components/Menu";
import Column1 from "./components/Column1";
import Column2Skills from "./components/Column2Skills";
import Column3Multipliers from "./components/Column3Multipliers";
import Column4Results from "./components/Column4Results";
import './App.css';

class App extends React.Component {
    state = {
        languageVersion:0, //['English','简体中文','']
        weapon:'Light Bow Gun',
        // column 1
        ammo:{
                'FireWaterIceThunder':[16,40], 'PierceFireWaterIceThunder':[10,22], 'Dragon':[48,80], 'Pierce Dragon':[20,44],
                'Pierce 1':[7,0], 'Pierce 2':[7,0], 'Pierce 3':[9,0],
                'Normal 1':[16,0],'Normal 2':[22,0], 'Normal 3':[34,0],
                'Spread 1':[7,0], 'Spread 2':[7,0], 'Spread 3':[10,0],
                'Shrapnel 1':[6,0], 'Shrapnel 2':[5,0],'Shrapnel 3':[5,0],
        },
        ammoValues: [10, 22],// [motionValue, elementValue]
        rapidAmmoCorrection: ['Rapid Fire', 0.7, 0.5],
        rawHitZone:0,
        elementHitZone:0,
        criticalCorrection: [1, 0 ,0],// [expectation %, boostLevel, elementLevel]
        itemBoosts:0,
        // Column 2
        attackSkills: {
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
            dragonheart:[['dragonheart'],[],[],[],[],[1.1,0]],
            heroics:[['heroics'],[],[],[],[],[1.3,0]],
        },
        elementSkills: {
            derelictionRed:[['derelictionRed'],[1,10],[1,15],[1,20]],
            mailOfHellfireBlue: [['mailOfHellfireBlue'],[1.05,0],[1.1,0],[1.2,0]],
            elementAttack:[['elementAttack'],[1,2],[1,3],[1.05,4],[1.1,4],[1.2,4]],
            kushalaTeostraBlessing:[['kushalaTeostraBlessing'],[1.05,0],[1.1,0]],
            stormsoul:[['stormsoul'],[1.05,0],[1.1,0],[1.15,0]],
            strife:[['strife'],[1.05,0],[1.1,0],[1.15,0]],
            burst: [['burst'],[1,6],[1,7],[1,8]],
            bloodlust:[['bloodlust'],[1,5],[1,7],[1,10]],
            coalescence:[['coalescence'],[1,2],[1,3],[1,4]],
        },
        attackMultiAdd: [], // ['xxx skill',1,0],
        elementMultiAdd: [],
        // Column 3
        finalAtkEleMultipliers:[1,1],
        damageMultipliers:[1,[1,1,1],1],// [raw, [ele,e. exploit,e. e. rampage], total]
        // Column 4
        finalAttack:0,
        finalElement: 0,
        rawDamage:0,
        elementDamage:0,
    }

    // Menu
    handleWeapon = (e) => {
        this.setState({weapon: e.target.id})
        document.querySelectorAll('.item').forEach(ele => {
            if (ele.classList.contains('active')) {ele.classList.remove('active')}
        })
        e.target.classList.add('active')
    }
    handleLanguageVersion = (language) => {
        switch (language) {
            case 'English': this.setState({languageVersion: 0});break;
            case '简体中文': this.setState({languageVersion: 1});break;
        }
    }

    // column 1
    handleFinalAttackElementUpdate = () => {
        let finalAttack = document.getElementById('Weapon Attack').valueAsNumber
        let finalElement = this.state.ammoValues[1]
        let [attackMultis, attackAdds, elementMultis, elementAdds] = [1, 0, 1, 0]
        for (let x of this.state.attackMultiAdd) {
            attackMultis *= x[1]
            attackAdds += x[2]
        }
        for (let x of this.state.elementMultiAdd) {
            elementMultis *= x[1]
            elementAdds += x[2]
        }
        // handle this Game float missing in multiple
        if (attackMultis === 1.05) {
            if (finalAttack >= 300) {
                finalAttack *= 0.9998
            } else {
                finalAttack *= 0.9981
            }
        }
        // handle Attack Power
        finalAttack *= attackMultis
        // final multipliers-atk
        finalAttack *= this.state.finalAtkEleMultipliers[0]
        finalAttack += attackAdds
        finalAttack += this.state.itemBoosts
        // round specially
        finalAttack = Math.floor(finalAttack + 0.1)
        this.setState({finalAttack: finalAttack}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
        // handle Element Value
        if  (finalElement > 0) {
            finalElement *= elementMultis
            // final multipliers-ele
            finalElement *= this.state.finalAtkEleMultipliers[1]
            finalElement += elementAdds
        }
        // round specially
        finalElement = Math.floor(finalElement + 0.1)
        this.setState({finalElement: finalElement}, () => {
            this.handleElementDamage()
        })
    }

    handleAmmoTypeChange = (ammoType) => {
        this.setState({ammoValues: this.state.ammo[ammoType]}, () => {
            this.handleRawDamage()
            this.handleFinalAttackElementUpdate()
        })
    }

    handleRapidFireUpdate = value => {
        this.setState({rapidAmmoCorrection:[value, 0.7, 0.5]}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }
    //
    handleRawHitZoneUpdate = rawHitZone => {this.setState({rawHitZone: rawHitZone}, () => {this.handleRawDamage()})}
    handleElementHitZoneUpdate = elementHitZone => {this.setState({elementHitZone: elementHitZone}, () => {this.handleElementDamage()})}

    //
    handleCriticalChange = (e) => {
        let expectation  = this.state.criticalCorrection[0]
        let boostLevel = this.state.criticalCorrection[1]
        let elementLevel  = this.state.criticalCorrection[2]
        switch(e.target.id) {
            case 'Critical Expect. (%)': expectation = e.target.value / 100;break;
            case 'Critical Boost': boostLevel = Number(e.target.value);break;
            case 'Critical Element': elementLevel = Number(e.target.value);break;
        }
        this.setState({criticalCorrection:[expectation, boostLevel, elementLevel]}, () => {
            this.handleRawDamage()
            this.handleElementDamage()
        })
    }

    handleItemBoosts = () => {
        let attackBoosts = 0
        let atkBoosts  = document.querySelectorAll('.itemBoost')
        atkBoosts.forEach(e => attackBoosts +=  Number(e.value))
        this.setState({itemBoosts:attackBoosts}, () => {
            this.handleFinalAttackElementUpdate()
        })
    }

    // column 2
    handleSkills = (e) => {
        let [skillName, skillLevel] = [e.target.id, e.target.value]
        // handle Attack
        if (Object.keys(this.state.attackSkills).includes(skillName)) {
            let attackMultiAdd = this.state.attackMultiAdd
            let skillEffect = this.state.attackSkills[skillName]
            let flag = true
            // console.log('skillName:', skillName, 'skillEffect:',skillEffect, 'skillLevel:', skillLevel)
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
            if (flag && skillLevel > 0) {
                attackMultiAdd.push([skillName, skillEffect[skillLevel][0], skillEffect[skillLevel][1]])
            } else if (flag && skillLevel === 0) {
                attackMultiAdd.push([skillName, 1, 0])
            }
            this.setState({attackMultiAdd: attackMultiAdd}, () => {
                this.handleFinalAttackElementUpdate()
            })
        }
        // handle Element
        if (Object.keys(this.state.elementSkills).includes(skillName)) {
            let elementMultiAdd = this.state.elementMultiAdd
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
            if (flag && skillLevel > 0) {
                elementMultiAdd.push([skillName, skillEffect[skillLevel][0], skillEffect[skillLevel][1]])
            } else if (flag && skillLevel === 0) {
                elementMultiAdd.push([skillName, 1, 0])
            }
            this.setState({elementMultiAdd: elementMultiAdd}, () => {
                this.handleFinalAttackElementUpdate()
            })
        }
    }

    // column 3
    handleFinalAtkEleMultipliersUpdate = () => {
        let [finalAtkMulti, finalEleMulti] = [1, 1]
        let atkMultiElements = document.querySelectorAll('.final-atk-multi')
        let eleMultiElements = document.querySelectorAll('.final-ele-multi')
        atkMultiElements.forEach(e => {if (e.value) {finalAtkMulti *= e.value}})
        eleMultiElements.forEach(e => {if (e.value) {finalEleMulti *= e.value}})
        this.setState({finalAtkEleMultipliers:[finalAtkMulti, finalEleMulti]}, () => {
            this.handleFinalAttackElementUpdate()
        })
    }

    handleDamageMultipliersUpdate = () => {
        let rawDamageMulti = 1
        let elementDamageMulti = [1, 1, 1]
        let totalDamageMulti = 1
        let rawDamageElements = document.querySelectorAll('.raw-damage')
        let elementDamageElements = document.querySelectorAll('.element-damage')
        let totalDamageElements = document.querySelectorAll('.total-damage')
        //
        rawDamageElements.forEach(e => {if (e.value) {rawDamageMulti *= e.value}})
        elementDamageElements.forEach(e => {
            if (e.value) {
                if (e.id === 'Element Exploit') {
                    elementDamageMulti[1] *= e.value
                } else if (e.id === 'Ele. Exploit Rampage') {
                    elementDamageMulti[2] *= e.value
                } else {
                    elementDamageMulti[0] *= e.value
                }
            }
        })
        totalDamageElements.forEach(e => {if (e.value) {totalDamageMulti *= e.value}})
        //
        this.setState({damageMultipliers:[rawDamageMulti, elementDamageMulti, totalDamageMulti]}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }

    // column 4
    handleRawDamage = () => {
        let criticalExpectation = this.state.criticalCorrection[0]
        let criticalBoost = 1.25 + 0.05 * this.state.criticalCorrection[1]
        // motion value, atk, hitZone
        let rawDamage = this.state.finalAttack
        rawDamage *= this.state.ammoValues[0]
        rawDamage *= this.state.rawHitZone
        // damage multi.
        rawDamage *= this.state.damageMultipliers[0]
        rawDamage *= this.state.damageMultipliers[2]
        // rapid fire correction
        if (this.state.rapidAmmoCorrection[0] === 'Rapid Fire') {
            rawDamage *= this.state.rapidAmmoCorrection[1]
        }
        // critical correction
        rawDamage += rawDamage * (criticalBoost - 1) * criticalExpectation
        rawDamage = Math.round(rawDamage/100)
        //
        this.setState({rawDamage:rawDamage})
    }

    handleElementDamage = () => {
        let criticalExpectation = this.state.criticalCorrection[0]
        let criticalElement = 1 + 0.05 * this.state.criticalCorrection[2]
        // ev, atk, hitZone
        let elementDamage = this.state.finalElement
        elementDamage *= this.state.finalAttack
        elementDamage *= this.state.elementHitZone
        // ele-damage multi.
        elementDamage *= this.state.damageMultipliers[1][0]
        if (this.state.elementHitZone >= 0.20) {elementDamage *= this.state.damageMultipliers[1][1]}
        if (this.state.elementHitZone >= 0.25) {elementDamage *= this.state.damageMultipliers[1][2]}
        // total-damage multi.
        elementDamage *= this.state.damageMultipliers[2]
        // rapid fire correction
        if (this.state.rapidAmmoCorrection[0] === 'Rapid Fire') {
            elementDamage *= this.state.rapidAmmoCorrection[2]
        }
        // critical correction
        elementDamage += elementDamage * (criticalElement - 1) * criticalExpectation
        elementDamage = Math.round(elementDamage/100)
        // sometimes still 1 point ele damage
        if (elementDamage > 0 && elementDamage < 0.5) {
            elementDamage = 1
        }
        //
        this.setState({elementDamage:elementDamage})
    }

    // set default values here
    componentDidMount = () => {
        document.getElementById('Weapon Attack').value = '330'
        this.setState({rawHitZone: 0.45})
        this.setState({elementHitZone: 0.25})
        this.setState({criticalCorrection: [1, 0, 0]})
        this.setState({languageVersion: 0})
        //
        this.handleFinalAttackElementUpdate()
        // use geoLocation to set language
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) =>{
                let longitude = position.coords.longitude
                if (position.coords.longitude > 73.6 && position.coords.longitude < 135.5) {
                    this.setState({languageVersion: 1})
                } else {
                    this.setState({languageVersion: 0})
                }
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('multi add:',this.state.attackMultiAdd, this.state.elementMultiAdd)
        // console.log('final atk in Column4Results:',this.state.finalAttack)
        // console.log('final ele. in Column4Results:',this.state.finalElement)
        // console.log('Motion Value in Column4Results:', this.state.motionValue)
        // console.log('Critical Correction:',this.state.criticalCorrection)
        // console.log('Damage Multips:',this.state.damageMultipliers)
        // console.log('HitZones:',this.state.rawHitZone, this.state.elementHitZone)
        // console.log('RF:', this.state.rapidAmmoCorrection[0])
    }

    render() {
        return (
            <div>
                <Menu
                    languageVersion={this.state.languageVersion}
                    handleLanguageVersion={this.handleLanguageVersion}
                    handleWeapon={this.handleWeapon}
                />
                <div className="ui container grid">
                    <Column1
                        weapon={this.state.weapon}
                        languageVersion={this.state.languageVersion}
                        handleFinalAttackElementUpdate={this.handleFinalAttackElementUpdate}
                        handleAmmoTypeChange={this.handleAmmoTypeChange}
                        handleRapidFireUpdate={this.handleRapidFireUpdate}
                        handleRawHitZoneUpdate={this.handleRawHitZoneUpdate}
                        handleElementHitZoneUpdate={this.handleElementHitZoneUpdate}
                        handleCriticalChange={this.handleCriticalChange}
                        handleItemBoosts={this.handleItemBoosts}
                    />
                    <Column2Skills
                        languageVersion={this.state.languageVersion}
                        handleSkills={this.handleSkills}
                    />
                    <Column3Multipliers
                        weapon={this.state.weapon}
                        languageVersion={this.state.languageVersion}
                        handleFinalAtkEleMultipliersUpdate={this.handleFinalAtkEleMultipliersUpdate}
                        handleDamageMultipliersUpdate={this.handleDamageMultipliersUpdate}
                    />
                    <Column4Results
                        languageVersion={this.state.languageVersion}
                        finalAttack={this.state.finalAttack}
                        finalElement={this.state.finalElement}
                        rawDamage={this.state.rawDamage}
                        elementDamage={this.state.elementDamage}
                        criticalExpectation={this.state.criticalCorrection[0]}
                    />
                </div>
            </div>

        )
    }
}

export default App;
