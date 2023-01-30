import React from "react";

class AmmoType extends React.Component{
    constructor() {
        super();
        this.state = {
            ammo:[
                ['4 Elements',16, 40],['4 Pierce Elements',10, 22],
                ['Pierce 2',7,0],['Pierce 3',9,0],
                ['Normal 2',22,0],['Normal 3',34,0],
                ['Spread 2',7,0],['Spread 3',10,0],
                ['Shrapnel 2',5,0],['Shrapnel 3',5,0],
            ],
        }
    }

    handleAmmoTypeChange = (e) => {
        let ammo = this.state.ammo
        let ammoValues = []
        for (let i=0; i<ammo.length; i++) {
            if (ammo[i][0] === e.target.value) {
                ammoValues = [ammo[i][1], ammo[i][2]]
            }
        }
        this.props.handleMotionValueUpdate(ammoValues[0])
        this.props.handleElementValueUpdate(ammoValues[1])
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
                                <select className="ui compact selection dropdown" onChange={this.handleAmmoTypeChange}>
                                    <option value="4 Elements">4 Elements</option>
                                    <option value="4 Pierce Elements">4 Pierce Elem.</option>
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
                                <option value='No'>Not Rapid Fire</option>
                                <option value='Yes'>Rapid Fire</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default AmmoType;