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
            <div className="four wide column" >
                <FinalAttackElement
                    languageVersion={this.props.languageVersion}
                    finalAttack={this.props.finalAttack}
                    finalElement={this.props.finalElement}
                />
                <DamageResults
                    languageVersion={this.props.languageVersion}
                    rawDamage={this.props.rawDamage}
                    elementDamage={this.props.elementDamage}
                />
                <InfoBoard  languageVersion={this.props.languageVersion}/>
            </div>
        )
    }
}

export default Column4Results;