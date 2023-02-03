import React from "react";
import FinalAttackElement from "./Column4Results/FinalAttackElement";
import DamageResults from "./Column4Results/DamageResults";
import InfoBoard from "./Column4Results/InfoBoard";

class Column4Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sixteen wide mobile eight wide tablet four wide computer column" >
                <FinalAttackElement
                    languageVersion={this.props.languageVersion}
                    finalAttack={this.props.finalAttack}
                    finalElement={this.props.finalElement}
                />
                <DamageResults
                    languageVersion={this.props.languageVersion}
                    rawDamage={this.props.rawDamage}
                    elementDamage={this.props.elementDamage}
                    criticalExpectation={this.props.criticalExpectation}
                />
                <InfoBoard  languageVersion={this.props.languageVersion}/>
            </div>
        )
    }
}

export default Column4Results;