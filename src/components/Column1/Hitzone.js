import React from "react";

class HitZone extends React.Component{
    constructor() {
        super();
        this.state = {
            hitZone:['Hit Zone', '肉质'],
            raw:['Raw','物理肉质'],
            element:['Element', '属性肉质']
        }
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                <tr>
                    <th>{this.state.hitZone[this.props.languageVersion]}</th>
                    <th>(%)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.state.raw[this.props.languageVersion]}</td>
                    <td><input onChange={e => this.props.handleRawHitZoneUpdate(e.target.value / 100)} type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td>
                </tr>
                <tr>
                    <td>{this.state.element[this.props.languageVersion]}</td>
                    <td><input onChange={e => this.props.handleElementHitZoneUpdate(e.target.value / 100)} type="number" placeholder="25" step="1" min='0' max='100' size="6"/></td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default HitZone;