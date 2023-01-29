import React from "react";
import WeaponRaws from "./Column1/Weapon Raws";
import AmmoType from "./Column1/AmmoType";
import HitZone from "./Column1/Hitzone";
import CriticalCorrection from "./Column1/CriticalCorrection";
import AttackBoosts from "./Column1/AttackBoosts";

class Column1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui column labeled input four wide column">
                <WeaponRaws handleFinalAttackElementUpdate={this.props.handleFinalAttackElementUpdate}/>
                <AmmoType
                    handleMotionValueUpdate={this.props.handleMotionValueUpdate}
                    handleElementValueUpdate={this.props.handleElementValueUpdate}
                    handleRapidFireUpdate={this.props.handleRapidFireUpdate}
                />
                <HitZone
                    handleRawHitZoneUpdate={this.props.handleRawHitZoneUpdate}
                    handleElementHitZoneUpdate={this.props.handleElementHitZoneUpdate}
                />
                <CriticalCorrection handleCriticalCorrectionUpdate={this.props.handleCriticalCorrectionUpdate}/>
                <AttackBoosts handleAttackBoosts={this.props.handleAttackBoosts}/>
            </div>
        )
    }
}

export default Column1;