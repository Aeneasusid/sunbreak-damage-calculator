import React from "react";

class SharpnessCorrection extends React.Component{
    constructor() {
        super();
        this.state = {
            sharpnessCorrection:['Sharpness Correction','斩位补正'],
            purple:['Purple Sharpness', '紫斩'],
            white:['White Sharpness', '白斩'],
            blue:['Blue Sharpness', '蓝斩'],
            green:['Green Sharpness', '绿斩'],
            yellow:['Yellow Sharpness', '黄斩'],
            red:['Red Sharpness', '红斩'],
            extra:['Extra Sharpness Boost','额外斩位补正'],
            noExtra:['No Extra Sharp. Boost','无额外斩位补正'],
            chargedSlashLv0:['Charged Slash Lv0', '蓄力0段'],
            chargedSlashLv1:['Charged Slash Lv1', '蓄力1段'],
            chargedSlashLv2:['Charged Slash Lv2', '蓄力2段'],
            chargedSlashLv3:['Charged Slash Lv3', '蓄力3段'],
        }
    }

    render() {
        // if (this.props.weapon === 'Great Sword') {
        //
        // } else
        if (! (this.props.weapon === 'Light Bow Gun' || this.props.weapon === 'Heavy Bow Gun' || this.props.weapon === 'Bow')) {
            return (
                <table className="ui compact table">
                    <thead>
                        <tr>
                            <th>{this.state.sharpnessCorrection[this.props.languageVersion]}</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select className="ui compact selection dropdown">
                                    <option value='Purple'>{this.state.purple[this.props.languageVersion]}</option>
                                    <option value='White'>{this.state.white[this.props.languageVersion]}</option>
                                    <option value='Blue'>{this.state.blue[this.props.languageVersion]}</option>
                                    <option value='Green'>{this.state.green[this.props.languageVersion]}</option>
                                    <option value='Yellow'>{this.state.yellow[this.props.languageVersion]}</option>
                                    <option value='Red'>{this.state.red[this.props.languageVersion]}</option>
                                </select>
                            </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>
                                <select className="ui compact selection dropdown">
                                    <option value='Charged Slash Lv0'>{this.state.chargedSlashLv0[this.props.languageVersion]}</option>
                                    <option value='Charged Slash Lv1'>{this.state.chargedSlashLv1[this.props.languageVersion]}</option>
                                    <option value='Charged Slash Lv2'>{this.state.chargedSlashLv2[this.props.languageVersion]}</option>
                                    <option value='Charged Slash Lv3'>{this.state.chargedSlashLv3[this.props.languageVersion]}</option>
                                </select>
                            </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>
                                <select className="ui compact selection dropdown">
                                    <option value=''>{this.state.noExtra[this.props.languageVersion]}</option>
                                    <option value='Sharpness+'>{this.state.extra[this.props.languageVersion]}</option>
                                </select>
                            </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }
}

export default SharpnessCorrection;