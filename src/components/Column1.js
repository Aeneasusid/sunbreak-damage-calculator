import React from "react";
import EquipmentInfo from "./Column1/EquipmentInfo";
import AmmoType from "./Column1/AmmoType";
import HitZone from "./Column1/Hitzone";
import CriticalCorrection from "./Column1/CriticalCorrection";
import Items from "./Column1/Items";

class Column1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="four wide column">
            {/*<div className="ColumnMQ">*/}
                <EquipmentInfo handleFinalAttackElementUpdate={this.props.handleFinalAttackElementUpdate}/>
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
                <Items handleAttackBoosts={this.props.handleAttackBoosts}/>
            </div>
        )
    }
}

export default Column1;