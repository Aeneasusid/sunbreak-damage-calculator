import React from "react";

class Multipliers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui column labeled input four wide column" >
                <table className="ui compact table">
                    <thead>
                    <tr><th>Critical Correction</th><th>Level</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Critical Boost</td><td><input type="number" placeholder="1.25" step="0.05" min='1.25' max='1.4' size="6"/></td></tr>
                    <tr><td>Critical Element</td><td><input type="number" placeholder="1" step="0.05" min='1' max='1.15' size="6"/></td></tr>
                    <tr><td>Expectation (%)</td><td><input type="number" placeholder="100" step="10" min='0' max='100' size="6"/></td></tr>
                    </tbody>
                </table>
                <table className="ui compact table">
                    <thead>
                    <tr><th>Raw Damage </th><th>Multipliers</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Critical Firepower</td><td><input type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                    <tr><td>Dango</td><td><input type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                    <tr><td>Others</td><td><input type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Elemental Damage </th><th>Multipliers</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Elemental Reload</td><td><input type="number" placeholder="1.1" step="0.1" min='1' max='1.1' size="6"/></td></tr>
                    <tr><td>Element Exploit</td><td><input type="number" placeholder="1.1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                    <tr><td>Ele. Exploit Rampage</td><td><input type="number" placeholder="1" step="0.15" min='1' max='1.15' size="6"/></td></tr>
                    <tr><td>Others</td><td><input type="number" placeholder="1" step="0.025" min='1' max='1.15' size="6"/></td></tr>
                    </tbody>
                    <thead>
                    <tr><th>Total Damage </th><th>Multipliers</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>RapidFireUp</td><td><input type="number" placeholder="1" step="0.1" min='1' max='1.3' size="6"/></td></tr>
                    <tr><td>Others 1</td><td><input type="number" placeholder="1" step="0.05" min='1' max='1.5' size="6"/></td></tr>
                    <tr><td>Others 2</td><td><input type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                    <tr><td>Others 3</td><td><input type="number" placeholder="1" step="0.1" min='1' max='1.5' size="6"/></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Multipliers;