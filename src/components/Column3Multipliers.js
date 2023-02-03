import React from "react";
import MultiplierLBG from "./Column3Multipliers/MultiplierLBG";
import MultiplierHBG from "./Column3Multipliers/MultiplierHBG";
import MultiplierGS from "./Column3Multipliers/MultiplierGS";

class Column3Multipliers extends React.Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.weapon === 'Light Bow Gun') {
            return (
                    <MultiplierLBG
                        weapon={this.props.weapon}
                        languageVersion={this.props.languageVersion}
                        handleFinalAtkEleMultipliersUpdate={this.props.handleFinalAtkEleMultipliersUpdate}
                        handleDamageMultipliersUpdate={this.props.handleDamageMultipliersUpdate}
                    />
            )
        } else if (this.props.weapon === 'Heavy Bow Gun') {
            return (
                    <MultiplierHBG
                        weapon={this.props.weapon}
                        languageVersion={this.props.languageVersion}
                        handleFinalAtkEleMultipliersUpdate={this.props.handleFinalAtkEleMultipliersUpdate}
                        handleDamageMultipliersUpdate={this.props.handleDamageMultipliersUpdate}
                    />
            )
        } else if (this.props.weapon === 'Great Sword') {
            return (
                <MultiplierGS
                    weapon={this.props.weapon}
                    languageVersion={this.props.languageVersion}
                    handleFinalAtkEleMultipliersUpdate={this.props.handleFinalAtkEleMultipliersUpdate}
                    handleDamageMultipliersUpdate={this.props.handleDamageMultipliersUpdate}
                />
            )
        }
    }
}

export default Column3Multipliers;