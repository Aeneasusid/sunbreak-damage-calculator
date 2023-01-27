import React from "react";

class HitZones extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ui column labeled input four wide column" >

                <table className="ui compact table">
                    <thead>
                    <tr><th>Physiology Hit Zone 1</th><th>(%)</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw</td><td><input type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td></tr>
                    <tr><td>Element</td><td><input type="number" placeholder="25" step="1" min='0' max='50' size="6"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Physiology Hit Zone 2</th><th>(%)</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw</td><td><input type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td></tr>
                    <tr><td>Element</td><td><input type="number" placeholder="25" step="1" min='0' max='50' size="6"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Physiology Hit Zone 3</th><th>(%)</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw</td><td><input type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td></tr>
                    <tr><td>Element</td><td><input type="number" placeholder="25" step="1" min='0' max='50' size="6"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Physiology Hit Zone 4</th><th>(%)</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Raw</td><td><input type="number" placeholder="45" step="1" min='0' max='100' size="6"/></td></tr>
                    <tr><td>Element</td><td><input type="number" placeholder="25" step="1" min='0' max='50' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HitZones;