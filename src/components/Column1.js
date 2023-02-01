import React from "react";
import EquipmentInfo from "./Column1/EquipmentInfo";
import AmmoType from "./Column1/AmmoType";
import HitZone from "./Column1/Hitzone";
import CriticalCorrection from "./Column1/CriticalCorrection";
import ItemBoosts from "./Column1/ItemBoosts";

class Column1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="four wide column">
                <EquipmentInfo
                    handleFinalAttackElementUpdate={this.props.handleFinalAttackElementUpdate}
                />
                <AmmoType
                    handleAmmoTypeChange={this.props.handleAmmoTypeChange}
                    handleRapidFireUpdate={this.props.handleRapidFireUpdate}
                />
                <HitZone
                    handleRawHitZoneUpdate={this.props.handleRawHitZoneUpdate}
                    handleElementHitZoneUpdate={this.props.handleElementHitZoneUpdate}
                />
                <CriticalCorrection
                    handleCriticalChange={this.props.handleCriticalChange}
                />
                <ItemBoosts
                    handleItemBoosts={this.props.handleItemBoosts}
                />
            </div>
        )
    }
}

export default Column1;