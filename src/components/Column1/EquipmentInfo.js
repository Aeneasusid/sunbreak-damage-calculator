import React from "react";

class EquipmentInfo extends React.Component{
    constructor() {
        super();
        this.state = {
            equipmentInfo:['Equipment Info', '武器信息'],
            withMods:['Mod.', '改造强化后'],
            attack:['Attack', '攻击力'],
            element:['Element', '属性'],
            // purple:['Purple', '紫斩'],
            // white:['White', '白斩'],
            // blue:['Blue', '蓝斩'],
            // green:['Green', '绿斩'],
            // yellow:['Yellow', '黄斩'],
            // red:['Red', '红斩'],
            // sharpness:['Sharpness',''],
            // sharpnessPlus:['Sharpness+', ''],
            // extra:['Extra','额外斩位补正'],
        }
    }

    render() {
        if (this.props.weapon === 'Light Bow Gun' || this.props.weapon === 'Heavy Bow Gun') {
            return (
                <table className="ui compact table">
                    <thead>
                    <tr>
                        <th>{this.state.equipmentInfo[this.props.languageVersion]}</th>
                        <th>{this.state.withMods[this.props.languageVersion]}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.attack[this.props.languageVersion]}</td>
                        <td onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Attack" type="number" placeholder="330" step="1" min='50' max='435' size="6" /></td>
                    </tr>
                    </tbody>
                </table>
            )
        } else if (this.props.weapon === 'Bow') {
            return (
                <table className="ui compact table">
                    <thead>
                    <tr>
                        <th>{this.state.equipmentInfo[this.props.languageVersion]}</th>
                        <th>{this.state.withMods[this.props.languageVersion]}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.attack[this.props.languageVersion]}</td>
                        <td onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Attack" type="number" placeholder="330" step="1" min='50' max='435' size="6" /></td>
                    </tr>
                    <tr>
                        <td>Element</td>
                        <td onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Raw Attack" type="number" placeholder="0" step="1" min='0' max='150' size="6" /></td>
                    </tr>
                    </tbody>
                </table>
            )
        } else {
            return (
                <div>
                    <table className="ui compact table">
                        <thead>
                            <tr>
                                <th>{this.state.equipmentInfo[this.props.languageVersion]}</th>
                                <th>{this.state.withMods[this.props.languageVersion]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.attack[this.props.languageVersion]}</td>
                                <td onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Attack" type="number" placeholder="330" step="1" min='50' max='435' size="6" /></td>
                            </tr>
                            <tr>
                                <td>{this.state.element[this.props.languageVersion]}</td>
                                <td onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Raw Attack" type="number" placeholder="0" step="1" min='0' max='150' size="6" /></td>
                            </tr>
                            {/*<tr>*/}
                            {/*    <td>*/}
                            {/*        <select className="ui compact selection dropdown">*/}
                            {/*            <option value='Purple'>{this.state.purple[this.props.languageVersion]}</option>*/}
                            {/*            <option value='White'>{this.state.white[this.props.languageVersion]}</option>*/}
                            {/*            <option value='Blue'>{this.state.blue[this.props.languageVersion]}</option>*/}
                            {/*            <option value='Green'>{this.state.green[this.props.languageVersion]}</option>*/}
                            {/*            <option value='Yellow'>{this.state.yellow[this.props.languageVersion]}</option>*/}
                            {/*            <option value='Red'>{this.state.red[this.props.languageVersion]}</option>*/}
                            {/*        </select>*/}
                            {/*    </td>*/}
                            {/*    <td>{this.state.sharpness[this.props.languageVersion]}</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*    <td>*/}
                            {/*        <select className="ui compact selection dropdown">*/}
                            {/*            <option value=''>-------</option>*/}
                            {/*            <option value='Sharpness+'>{this.state.extra[this.props.languageVersion]}</option>*/}
                            {/*        </select>*/}
                            {/*    </td>*/}
                            {/*    <td>{this.state.sharpnessPlus[this.props.languageVersion]}</td>*/}
                            {/*</tr>*/}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default EquipmentInfo;