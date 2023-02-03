import React from "react";

class EquipmentInfo extends React.Component{
    constructor() {
        super();
        this.state = {
            equipmentInfo:['Weapon Infos', '武器'],
            withMods:['After Mod&Qurio', '改造强化后数值'],
            attack:['Attack', '攻击力'],
            element:['Element', '属性'],
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
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default EquipmentInfo;