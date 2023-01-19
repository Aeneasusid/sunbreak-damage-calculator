import React from "react";
import Skills from "./components/Skills";
import Multipliers from "./components/Multipliers";
import Hitzone from "./components/Hitzone";
import Results from "./components/Results";
import './App.css';

class App extends React.Component {
    state = {
        finalAttackPower:0,
        skills:{
            attackBoost:[[true],[1,3],[1,6],[1,9],[1.05,7],[1.06,8],[1.08,9],[1.1,10]],
            longBarrelTuneUp:[[['LBG'],[1.05,0],[1.075,0]],    [['HBG'],[1.05,0],[1.075,0]]],
            resentment:[[true],[1,5],[1,10],[1,15],[1,20],[1,25]],
            peakPerformance:[[true],[1,5],[1,10],[1,20]],
            resuscitate:[[true],[1,5],[1,10],[1,20]],
            dereliction:[[[true],[0,25],[0,30],[0,35]],[[false],[0,10],[0,15],[0,20]]],
            burst:[[[true],[0,8],[0,9],[0,10]],    [[false],[0,5],[0,5],[0,5]],     [1]],
            elementAttack:[[false],[1,1],[1,1],[1,1],[1.05,1],[1.2,4]],
            kushalaTeostraBlessing:[[false],[1.05,0],[1.1,0]],
            strife:[[false],[1.05,0],[1.1,0],[1.15,0]],
            bloodlust:[],
            coalescene:[],
        },
        damageMultiplier: {
            criticalFirepower:[['raw'],[1, 1.1, 1.2, 1.3]],
            elementReload:[['element'],[1, 1.1]],
            elementExploit:[['element'], [1, 1.1, 1.125, 1.15]],
            elementExploitRampage:[['element'], [1, 1.15]],
            rapidFireUp:[['total'], [1, 1.05, 1.1, 1.2]],
            ammoArrowBoost:[['total'], [1, 1.05, 1.1, 1.2]],
        },
        criticalCorrection: {
            criticalElement:[[20], [1, 1.05, 1.1, 1.15]],
            criticalBoost:[[45], [1.25, 1.3, 1.35, 1.4]],
        }
    }

    finalAttackPower(event) {
        let finalAttackPower = event.target.value
        console.log('ap000000000:', finalAttackPower)
        this.setState({finalAttackPower :finalAttackPower})
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.finalAttackPower()
    // }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui huge header center aligned purple">MH Rise: Sunbreak - Damage Calculator</h1>
                <div className="ui grid">
                    <Skills onChange={this.finalAttackPower} finalAttackPower={this.state.finalAttackPower} />
                    <Multipliers  />
                    <Hitzone />
                    <Results />
                </div>
            </div>
        );
    }
}

export default App;
