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
        // damageMultiplier: {
        //     criticalFirepower:[['raw'],[1, 1.1, 1.2, 1.3]],
        //     elementReload:[['element'],[1, 1.1]],
        //     elementExploit:[['element'], [1, 1.1, 1.125, 1.15]],
        //     elementExploitRampage:[['element'], [1, 1.15]],
        //     rapidFireUp:[['total'], [1, 1.05, 1.1, 1.2]],
        //     ammoArrowBoost:[['total'], [1, 1.05, 1.1, 1.2]],
        // },
    }

    handleAttackUpdate = finalAttack => this.setState({finalAttack: finalAttack})
    handleElementUpdate = finalElement => this.setState({finalElement: finalElement})
    handleMotionValueUpdate = motionValue => this.setState({motionValue: motionValue})
    handleCriticalCorrectionUpdate = (expectation, boostMulti, elementMulti) => this.setState({criticalCorrection:[expectation, boostMulti, elementMulti]})
    handleDamageMultipliersUpdate = (damageMultipliers) => this.setState({damageMultipliers:damageMultipliers})







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
                        motionValue={this.state.motionValue}
                        finalAttack={this.state.finalAttack}
                        finalElement={this.state.finalElement}
                        criticalCorrection={this.state.criticalCorrection}
                        damageMultipliers={this.state.damageMultipliers}
                    />
                </div>
            </div>
        );
    }
}

export default App;
