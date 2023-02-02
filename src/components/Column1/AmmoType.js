import React from "react";

class AmmoType extends React.Component{
    constructor() {
        super();
        this.state = {
            ammoType:['Ammo Type', '弹药种类'],
            rapidFire:['Rapid Fire', '速射'],
            nonRapidFire:['Non Rapid Fire', '非速射'],
            pierceFireWaterIceThunder:['Pierce Fire/Wat./Ice/Thu.','贯穿火水冰雷属性弹'], pierceDragon:['Pierce Dragon','贯穿龙属性弹'],
            fireWaterIceThunder:['Fire/Water/Ice/Thunder', '火水冰雷属性弹'], dragon:['Dragon','龙属性弹'],
            pierce1:['Pierce 1', '贯穿弹1'], pierce2:['Pierce 2', '贯穿弹2'], pierce3:['Pierce 3', '贯穿弹3'],
            normal1:['Normal 1', '通常弹1'], normal2:['Normal 2', '通常弹2'], normal3:['Normal 3', '通常弹3'],
            spread1:['Spread 1', '散弹1'], spread2:['Spread 2', '散弹2'], spread3:['Spread 3', '散弹3'],
            shrapnel1:['Shrapnel 1', '放散弹1'], shrapnel2:['Shrapnel 2', '放散弹2'], shrapnel3:['Shrapnel 3', '放散弹3'],
        }
    }

    render() {
        if (this.props.weapon === 'Light Bow Gun' || this.props.weapon === 'Heavy Bow Gun') {
            return (
                <table className="ui compact table">
                    <thead>
                        <tr>
                            <th>{this.state.ammoType[this.props.languageVersion]}</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select className="ui compact selection dropdown" onChange={e => this.props.handleAmmoTypeChange(e.target.value)}>
                                    <option value="PierceFireWaterIceThunder">{this.state.pierceFireWaterIceThunder[this.props.languageVersion]}</option>
                                    <option value="Pierce Dragon">{this.state.pierceDragon[this.props.languageVersion]}</option>
                                    <option value="FireWaterIceThunder">{this.state.fireWaterIceThunder[this.props.languageVersion]}</option>
                                    <option value="Dragon">{this.state.dragon[this.props.languageVersion]}</option>
                                    <option value="Pierce 1">{this.state.pierce1[this.props.languageVersion]}</option>
                                    <option value="Pierce 2">{this.state.pierce2[this.props.languageVersion]}</option>
                                    <option value="Pierce 3">{this.state.pierce3[this.props.languageVersion]}</option>
                                    <option value="Normal 1">{this.state.normal1[this.props.languageVersion]}</option>
                                    <option value="Normal 2">{this.state.normal2[this.props.languageVersion]}</option>
                                    <option value="Normal 3">{this.state.normal3[this.props.languageVersion]}</option>
                                    <option value="Spread 1">{this.state.spread1[this.props.languageVersion]}</option>
                                    <option value="Spread 2">{this.state.spread2[this.props.languageVersion]}</option>
                                    <option value="Spread 3">{this.state.spread3[this.props.languageVersion]}</option>
                                    <option value="Shrapnel 1">{this.state.shrapnel1[this.props.languageVersion]}</option>
                                    <option value="Shrapnel 2">{this.state.shrapnel2[this.props.languageVersion]}</option>
                                    <option value="Shrapnel 3">{this.state.shrapnel3[this.props.languageVersion]}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select className="ui compact selection dropdown" onChange={e => this.props.handleRapidFireUpdate(e.target.value)}>
                                    <option value='Rapid Fire'>{this.state.rapidFire[this.props.languageVersion]}</option>
                                    <option value='Non Rapid Fire'>{this.state.nonRapidFire[this.props.languageVersion]}</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }
}

export default AmmoType;