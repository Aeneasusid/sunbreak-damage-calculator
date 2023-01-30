import React from "react";

class EquipmentInfo extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                    <tr>
                        <th>Equipment Info</th>
                        <th>w/ Mods</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Attack</td>
                        <td onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Attack" type="number" placeholder="0" step="1" min='150' max='435' size="6" /></td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <td>Element Value</td>*/}
                    {/*    <td onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Raw Attack" type="number" placeholder="0" step="10" min='250' max='450' size="6" /></td>*/}
                    {/*</tr>*/}
                </tbody>
            </table>
        )
    }
}

export default EquipmentInfo;