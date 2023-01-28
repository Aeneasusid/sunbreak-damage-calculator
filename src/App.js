import React from "react";
import Skills from "./components/Skills";
import Multipliers from "./components/Multipliers";
import Results from "./components/Results";
import './App.css';

class App extends React.Component {
    state = {
        finalAttack:0,
        finalElement: 0,
        motionValue:16,
        rapidAmmoCorrection: [false, 0.7, 0.5],
        criticalCorrection: [1, 1, 1],// [expectation, boostMulti, elementMulti]
        damageMultipliers:[1,[1,1,1],1],// [raw, [ele,exploit,rampage], total]
        rawHitZone:0.45,
        elementHitZone:0.25,
        rawDamage:0,
        elementDamage:1,
    }

    handleAttackUpdate = finalAttack => {
        this.setState({finalAttack: finalAttack}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }

    handleElementUpdate = finalElement => {
        this.setState({finalElement: finalElement}, () => {
            this.handleElementDamage()
        })
    }

    handleMotionValueUpdate = motionValue => {
        this.setState({motionValue: motionValue}, () => {
            this.handleRawDamage()
        })
    }

    handleRapidFireUpdate = value => {
        this.setState({rapidAmmoCorrection:[value, 0.7, 0.5]}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }

    handleCriticalCorrectionUpdate = (expectation, boostMulti, elementMulti) => {
        this.setState({criticalCorrection:[expectation, boostMulti, elementMulti]}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }

    handleDamageMultipliersUpdate = damageMultipliers => {
        this.setState({damageMultipliers:damageMultipliers}, () => {
            this.handleElementDamage()
            this.handleRawDamage()
        })
    }

    handleRawHitZoneUpdate = (rawHitZone) => {
        this.setState({rawHitZone: rawHitZone}, () => {
            this.handleRawDamage()
        })
    }

    handleElementHitZoneUpdate = elementHitZone => {
        this.setState({elementHitZone: elementHitZone}, () => {
            this.handleElementDamage()
        })
    }

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
        // console.log('final atk in Results:',this.state.finalAttack)
        // console.log('final ele. in Results:',this.state.finalElement)
        // console.log('Motion Value in Results:', this.state.motionValue)
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
                    <Skills
                        handleRapidFireUpdate={this.handleRapidFireUpdate}
                        handleAttackUpdate={this.handleAttackUpdate}
                        hanldeElementUpdate={this.handleElementUpdate}
                        handleMotionValueUpdate={this.handleMotionValueUpdate}
                    />
                    <Multipliers
                        handleCriticalCorrectionUpdate={this.handleCriticalCorrectionUpdate}
                        handleDamageMultipliersUpdate={this.handleDamageMultipliersUpdate}
                    />
                    <Results
                        finalAttack={this.state.finalAttack}
                        finalElement={this.state.finalElement}
                        rawDamage={this.state.rawDamage}
                        elementDamage={this.state.elementDamage}
                        handleRawHitZoneUpdate={this.handleRawHitZoneUpdate}
                        handleElementHitZoneUpdate={this.handleElementHitZoneUpdate}
                    />
                </div>
            </div>
        );
    }
}

export default App;
