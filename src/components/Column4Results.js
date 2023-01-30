import React from "react";
import FinalAttackElement from "./Column4Results/FinalAttackElement";
import DamageResults from "./Column4Results/DamageResults";

class Column4Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="four wide column" >
                <FinalAttackElement
                    finalAttack={this.props.finalAttack}
                    finalElement={this.props.finalElement}
                />
                <DamageResults
                    rawDamage={this.props.rawDamage}
                    elementDamage={this.props.elementDamage}
                />
            </div>
        )
    }
}

export default Column4Results;