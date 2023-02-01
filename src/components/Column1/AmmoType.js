import React from "react";

class AmmoType extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                    <tr>
                        <th>Ammo Type</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="ui action input" >
                                <select className="ui compact selection dropdown" onChange={e => this.props.handleAmmoTypeChange(e.target.value)}>
                                    <option value="4 Pierce Elements">4 Pierce Elements</option>
                                    <option value="4 Elements">4 Elements</option>
                                    <option value="Pierce 2">Pierce 2</option>
                                    <option value="Pierce 3">Pierce 3</option>
                                    <option value="Normal 2">Normal 2</option>
                                    <option value="Normal 3">Normal 3</option>
                                    <option value="Spread 2">Spread 2</option>
                                    <option value="Spread 3">Spread 3</option>
                                    <option value="Shrapnel 2">Shrapnel 2</option>
                                    <option value="Shrapnel 3">Shrapnel 3</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select className="ui compact selection dropdown" onChange={e => this.props.handleRapidFireUpdate(e.target.value)}>
                                <option value='Rapid Fire'>Rapid Fire</option>
                                <option value='Non Rapid Fire'>Non Rapid Fire</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default AmmoType;