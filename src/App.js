import React from "react";
import Skills from "./components/Skills";
import Multipliers from "./components/Multipliers";
import HitZones from "./components/HitZones";
import Results from "./components/Results";
import './App.css';

class App extends React.Component {
    state = {
        finalAttack:0,
        finalElement: 0,
        ammo:[['Element',16, 40],['Pierce Element',10, 22],['Pierce 2',7,0],['Normal 3',34,0],],
        skills:{
            attackBoost:[['attackBoost'],[1,3],[1,6],[1,9],[1.05,7],[1.06,8],[1.08,9],[1.1,10]],
            longBarrelTuneUp:[['longBarrelTuneUp'],[1.05,0],[1.075,0]],
            resentment:[['resentment'],[1,5],[1,10],[1,15],[1,20],[1,25]],
            peakPerformance:[['peakPerformance'],[1,5],[1,10],[1,20]],
            resuscitate:[['resuscitate'],[1,5],[1,10],[1,20]],
            derelictionBlue: [['dereliction'],[0,25],[0,30],[0,35]],
            derelictionRed:[['dereliction'],[0,10],[0,15],[0,20]],
            burst:[
                [['burst'],[0,8],[0,9],[0,10]],
                [['burst'],[0,5],[0,5],[0,5]],
                ['']],
            elementAttack:[['elementAttack'],[1,1],[1,1],[1,1],[1.05,1],[1.2,4]],
            kushalaTeostraBlessing:[['kushalaTeostraBlessing'],[1.05,0],[1.1,0]],
            strife:[['strife'],[1.05,0],[1.1,0],[1.15,0]],
            // bloodlust:[],
            // coalescene:[],
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

    handleUpdate = (finalAttack) => {
        // console.log('update finalAttack in father-component, then to another son' )
        this.setState({finalAttack: finalAttack})
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.finalAttackPower()
    // }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui huge header center aligned purple">MH Rise: Sunbreak - Damage Calculator</h1>
                <div className="ui grid">
                    <Skills
                        // finalAttack={this.state.finalAttack}
                        // finalElement={this.state.finalElement}
                        ammos={this.state.ammo}
                        skills={this.state.skills}
                        handleUpdate={this.handleUpdate}    />
                    <Multipliers  />
                    <HitZones />
                    <Results
                        sendValue={this.state.finalAttack}
                    />
                </div>
            </div>
        );
    }
}

export default App;
