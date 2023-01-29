import React from "react";
import Column1 from "./components/Column1";
import Column2Skills from "./components/Column2Skills";
import Column3Multipliers from "./components/Column3Multipliers";
import Column4Results from "./components/Column4Results";
import './App.css';

class App extends React.Component {
    state = {
        finalAttack:0,
        finalElement: 0,
        attackMultiAdd: [], // ['xxx skill',1,0],
        elementMultiAdd: [],
        attackBoosts:0,
        motionValue:16,
        elementValue: 40,
        rapidAmmoCorrection: [false, 0.7, 0.5],
        criticalCorrection: [1, 1, 1],// [expectation, boostMulti, elementMulti]
        damageMultipliers:[1,[1,1,1],1],// [raw, [ele,exploit,rampage], total]
        rawHitZone:0.45,
        elementHitZone:0.25,
        rawDamage:0,
        elementDamage:1,
    }

    // column 1
    handleFinalAttackElementUpdate = () => {
        // handle Attack Power
        let finalAttack = document.getElementById('Weapon Raw Attack').valueAsNumber
        for (let x of this.state.attackMultiAdd) {
            finalAttack *= x[1]
        }
        for (let x of this.state.attackMultiAdd) {
            finalAttack += x[2]
        }
        finalAttack = Math.floor(finalAttack + 0.1) + this.state.attackBoosts
        this.setState({finalAttack: finalAttack}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })

        // handle Element Value
        let finalElement = this.state.elementValue
        if  (finalElement > 0) {
            for (let x of this.state.elementMultiAdd) {
                finalElement *= x[1]
            }
            for (let x of this.state.elementMultiAdd) {
                finalElement += x[2]
            }
        }
        finalElement = Math.floor(finalElement + 0.1)
        this.setState({finalElement: finalElement}, () => {
            this.handleElementDamage()
        })
    }
    //
    handleMotionValueUpdate = motionValue => {
        this.setState({motionValue: motionValue}, () => {
            this.handleRawDamage()
        })
    }

    handleElementValueUpdate = elementValue => {
        this.setState({elementValue: elementValue}, () => {
            this.handleFinalAttackElementUpdate()
        })
    }
    //
    handleRapidFireUpdate = value => {
        this.setState({rapidAmmoCorrection:[value, 0.7, 0.5]}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }
    //
    handleRawHitZoneUpdate = rawHitZone => {
        this.setState({rawHitZone: rawHitZone}, () => {
            this.handleRawDamage()
        })
    }

    handleElementHitZoneUpdate = elementHitZone => {
        this.setState({elementHitZone: elementHitZone}, () => {
            this.handleElementDamage()
        })
    }
    //
    handleCriticalCorrectionUpdate = (expectation, boostMulti, elementMulti) => {
        this.setState({criticalCorrection:[expectation, boostMulti, elementMulti]}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }
    //
    handleAttackBoosts = () => {
        let attackBoosts = 0
        let atkBoosts  = document.querySelectorAll('.atk-boost')
        atkBoosts.forEach(e => attackBoosts +=  Number(e.value))
        this.setState({attackBoosts:attackBoosts}, () => {
            this.handleFinalAttackElementUpdate()
        })
    }

    // column 2
    handleAttackMultiAddUpdate = attackMultiAdd => {this.setState({attackMultiAdd: attackMultiAdd})}
    handleElementMultiAddUpdate = ElementMultiAdd => {this.setState({ElementMultiAdd: ElementMultiAdd})}

    // column 3
    handleDamageMultipliersUpdate = damageMultipliers => {
        this.setState({damageMultipliers:damageMultipliers}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }

    // column 4
    handleRawDamage = () => {
        let criticalExpectation = this.state.criticalCorrection[0]
        let criticalBoost = this.state.criticalCorrection[1]
        // motion value, atk, hitZone
        let rawDamage = this.state.motionValue
        rawDamage *= this.state.finalAttack
        rawDamage *= this.state.rawHitZone
        // damage multi.
        rawDamage *= this.state.damageMultipliers[0]
        rawDamage *= this.state.damageMultipliers[2]
        // rapid fire correction
        if (this.state.rapidAmmoCorrection[0] === 'Yes') {
            rawDamage *= this.state.rapidAmmoCorrection[2]
        }
        // critical correction
        rawDamage += rawDamage * (criticalBoost - 1) * criticalExpectation
        if (criticalExpectation === 0 || criticalExpectation === 1) {
            rawDamage = Math.round(rawDamage/100)
        } else {
            rawDamage = Math.round(rawDamage) / 100
        }
        //
        this.setState({rawDamage:rawDamage})
    }

    handleElementDamage = () => {
        let criticalExpectation = this.state.criticalCorrection[0]
        let criticalElement = this.state.criticalCorrection[2]
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
        if (this.state.rapidAmmoCorrection[0] === 'Yes') {
            elementDamage *= this.state.rapidAmmoCorrection[2]
        }
        // critical correction
        elementDamage += elementDamage * (criticalElement - 1) * criticalExpectation
        if (criticalExpectation === 0 || criticalExpectation === 1) {
            elementDamage = Math.round(elementDamage/100)
        } else {
            elementDamage = Math.round(elementDamage) / 100
        }
        // 1
        if (elementDamage === 0 && this.state.elementHitZone > 0) {
            elementDamage = 1
        }
        //
        this.setState({elementDamage:elementDamage})
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
            <div className="ui container">
                <h1 className="ui huge header center aligned purple">MH Rise: Sunbreak - LBG Damage Calculator</h1>
                <div className="ui grid">
                    <Column1
                        handleFinalAttackElementUpdate={this.handleFinalAttackElementUpdate}
                        handleMotionValueUpdate={this.handleMotionValueUpdate}
                        handleElementValueUpdate={this.handleElementValueUpdate}
                        handleRapidFireUpdate={this.handleRapidFireUpdate}
                        handleRawHitZoneUpdate={this.handleRawHitZoneUpdate}
                        handleElementHitZoneUpdate={this.handleElementHitZoneUpdate}
                        handleCriticalCorrectionUpdate={this.handleCriticalCorrectionUpdate}
                        handleAttackBoosts={this.handleAttackBoosts}
                    />
                    <Column2Skills
                        attackMultiAdd={this.state.attackMultiAdd}
                        elementMultiAdd={this.state.elementMultiAdd}
                        handleAttackMultiAddUpdate={this.handleAttackMultiAddUpdate}
                        handleElementMultiAddUpdate={this.handleElementMultiAddUpdate}
                        handleFinalAttackElementUpdate={this.handleFinalAttackElementUpdate}
                    />
                    <Column3Multipliers
                        handleDamageMultipliersUpdate={this.handleDamageMultipliersUpdate}
                    />
                    <Column4Results
                        finalAttack={this.state.finalAttack}
                        finalElement={this.state.finalElement}
                        rawDamage={this.state.rawDamage}
                        elementDamage={this.state.elementDamage}
                    />
                </div>
            </div>
        );
    }
}

export default App;
