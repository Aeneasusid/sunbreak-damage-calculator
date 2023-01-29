import React from "react";

class HitZone extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                <tr>
                    <th>Hit Zone</th>
                    <th>(%)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Raw</td>
                    <td><input onChange={e => this.props.handleRawHitZoneUpdate(e.target.value / 100)} type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td>
                </tr>
                <tr>
                    <td>Element</td>
                    <td><input onChange={e => this.props.handleElementHitZoneUpdate(e.target.value / 100)} type="number" placeholder="25" step="1" min='0' max='100' size="6"/></td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default HitZone;