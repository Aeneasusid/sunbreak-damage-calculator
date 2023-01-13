import React from "react";
import AttackPower from "./components/AttackPower";
import ElementValue from "./components/ElementValue";
import './App.css';

class App extends React.Component {
    state = {
        skills:{
            attackPower:[[true],[1,1],[1,1],[1,1],[1.05,1],[1.06,1],[1.08,1],[1.1,10]],
            longBarrel:[[[true],[1.05,0],[1.075,0]],    [[false],[1.05,0],[1.075,0]]],
            elementAttack:[[false],[1,1],[1,1],[1,1],[1.05,1],[1.2,4]],
            burst:[[[true],[0,8],[0,9],[0,10]],    [[false],[0,5],[0,5],[0,5]],     [1]],
        },
    }

    render() {
        return (
            <div class="ui container">
                <h1 className="ui huge header center aligned purple">MH Rise: Sunbreak - Damage Calculator</h1>
                <div className="ui grid">
                    <AttackPower skills={this.state.skills} />
                    <ElementValue skills={this.state.skills} />
                </div>
            </div>
        );
    }
}

export default App;
