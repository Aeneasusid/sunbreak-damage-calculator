import React from "react";
import EquipmentInfo from "./Column1/EquipmentInfo";
import AmmoType from "./Column1/AmmoType";
import HitZone from "./Column1/Hitzone";
import CriticalCorrection from "./Column1/CriticalCorrection";
import ItemBoosts from "./Column1/ItemBoosts";
import MotionValue from "./Column1/MotionValue";
import SharpnessCorrection from "./Column1/SharpnessCorrection";

class Column1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sixteen wide mobile eight wide tablet four wide computer column">
                <EquipmentInfo
                    weapon={this.props.weapon}
                    languageVersion={this.props.languageVersion}
                    handleFinalAttackElementUpdate={this.props.handleFinalAttackElementUpdate}
                />
                <SharpnessCorrection
                    weapon={this.props.weapon}
                    languageVersion={this.props.languageVersion}
                />
                <AmmoType
                    weapon={this.props.weapon}
                    languageVersion={this.props.languageVersion}
                    handleAmmoTypeChange={this.props.handleAmmoTypeChange}
                    handleRapidFireUpdate={this.props.handleRapidFireUpdate}
                />
                <MotionValue
                    weapon={this.props.weapon}
                    languageVersion={this.props.languageVersion}
                    handleAmmoTypeChange={this.props.handleAmmoTypeChange}
                    handleRapidFireUpdate={this.props.handleRapidFireUpdate}
                />
                <HitZone
                    languageVersion={this.props.languageVersion}
                    handleRawHitZoneUpdate={this.props.handleRawHitZoneUpdate}
                    handleElementHitZoneUpdate={this.props.handleElementHitZoneUpdate}
                />
                <CriticalCorrection
                    languageVersion={this.props.languageVersion}
                    handleCriticalChange={this.props.handleCriticalChange}
                />
                <ItemBoosts
                    languageVersion={this.props.languageVersion}
                    handleItemBoosts={this.props.handleItemBoosts}
                />
            </div>
        )
    }
}

export default Column1;