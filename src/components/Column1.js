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
                    languageVersion={this.props.languageVersion}
                    handleFinalAttackElementUpdate={this.props.handleFinalAttackElementUpdate}
                />
                <AmmoType
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