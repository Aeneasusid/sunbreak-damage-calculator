import React from "react";
import Skills from "./components/Skills";
import Multipliers from "./components/Multipliers";
import Results from "./components/Results";
import './App.css';

class App extends React.Component {
    state = {
        finalAttack:0,
        finalElement: 0,
        motionValue:0,
        criticalCorrection: [1, 1, 1],// [expectation, boostMulti, elementMulti]
        damageMultipliers:[1,1],
        rawHitZone:0.45,
        elementHitZone:0.25,
        rawDamage:1,
        elementDamage:1,
        ammo:[
            ['4 Elements',16, 40],['4 Pierce Elements',10, 22],['Pierce 2',7,0],['Pierce 3',9,0],['Normal 2',22,0],['Normal 3',34,0],
            ['Spread 2',7,0],['Spread 3',10,0],['Shrapnel 2',5,0],['Shrapnel 3',5,0],
        ],
        attackSkills:{
            attackBoost:[['attackBoost'],[1,3],[1,6],[1,9],[1.05,7],[1.06,8],[1.08,9],[1.1,10]],
            longBarrelTuneUp:[['longBarrelTuneUp'],[1.05,0],[1.075,0]],
            resentment:[['resentment'],[1,5],[1,10],[1,15],[1,20],[1,25]],
            peakPerformance:[['peakPerformance'],[1,5],[1,10],[1,20]],
            resuscitate:[['resuscitate'],[1,5],[1,10],[1,20]],
            derelictionBlue: [['dereliction'],[1,25],[1,30],[1,35]],
            burst: [['burst'],[1,8],[1,9],[1,10]],
        },
        elementSkills:{
            derelictionRed:[['dereliction'],[1,10],[1,15],[1,20]],
            burst: [['burst'],[1,5],[1,5],[1,5]],
            elementAttack:[['elementAttack'],[1,2],[1,3],[1.05,4],[1.1,4],[1.2,4]],
            kushalaTeostraBlessing:[['kushalaTeostraBlessing'],[1.05,0],[1.1,0]],
            strife:[['strife'],[1.05,0],[1.1,0],[1.15,0]],
        },
    }

    handleAttackUpdate = finalAttack => this.setState({finalAttack: finalAttack})
    handleElementUpdate = finalElement => this.setState({finalElement: finalElement})
    handleMotionValueUpdate = motionValue => this.setState({motionValue: motionValue})
    handleCriticalCorrectionUpdate = (expectation, boostMulti, elementMulti) => this.setState({criticalCorrection:[expectation, boostMulti, elementMulti]})
    handleDamageMultipliersUpdate = damageMultipliers => this.setState({damageMultipliers:damageMultipliers})
    handleRawHitZoneUpdate = (rawHitZone) => this.setState({rawHitZone: rawHitZone})
    handleElementHitZoneUpdate = elementHitZone => this.setState({elementHitZone: elementHitZone})

    handleElementDamage = () => {
        let criticalExpectation = this.props.criticalCorrection[0]
        let criticalElement = this.props.criticalCorrection[2]
        let elementDamage = this.props.finalElement
        let elementHitZone = this.state.elementHitZone
        //
        elementDamage *= this.props.finalAttack
        elementDamage *= this.state.elementHitZone
        elementDamage *= this.props.damageMultipliers[1]
        //

        // critical correction
        elementDamage += elementDamage * (criticalElement - 1) * criticalExpectation
        if (criticalExpectation === 0 || criticalExpectation === 1) {
            elementDamage = Math.round(elementDamage/100)
        } else {
            elementDamage = Math.round(elementDamage) / 100
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
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui huge header center aligned purple">MH Rise: Sunbreak - LBG Damage Calculator</h1>
                <div className="ui grid">
                    <Skills
                        ammo={this.state.ammo}
                        attackSkills={this.state.attackSkills}
                        elementSkills={this.state.elementSkills}
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
