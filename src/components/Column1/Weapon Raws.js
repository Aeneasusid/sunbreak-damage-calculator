import React from "react";

class WeaponRaws extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                <tr>
                    <th>Weapon Raw Attack</th>
                    <th onChange={this.props.handleFinalAttackElementUpdate}><input id="Weapon Raw Attack" type="number" placeholder="0" step="10" min='250' max='450' size="6" /></th>
                </tr>
                </thead>
            </table>
        )
    }
}

export default WeaponRaws;