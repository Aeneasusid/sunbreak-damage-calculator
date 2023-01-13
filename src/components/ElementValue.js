import React from "react";

class ElementValue extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui column labeled input four wide column" >
                <table className="ui compact table">
                    <thead>
                    <tr><th>Raw Attack Power</th><th><input type="number" placeholder="330" step="10" min='150' max='450' size="8" /></th></tr>
                    </thead>
                </table>
                <table className="ui compact table">
                    <thead>
                    <tr><th>Attack Power Boosts</th><th>Number</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Qurious Crafting</td><td><input type="number" placeholder="10" step="5" min='0' max='25' size="6"/></td></tr>
                    <tr><td>Power Charm&Talon</td><td><input type="number" placeholder="15" step="3" min='0' max='15' size="6"/></td></tr>
                    <tr><td>Petalace Boost</td><td><input type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                    <tr><td>Dango Boosts</td><td><input type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                    <tr><td>Other Boosts 1</td><td><input type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                    <tr><td>Other Boosts 2</td><td><input type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                    <tr><td>Rectify</td><td><input type="number" placeholder="0" step="1" min='-20' max='30' size="6"/></td></tr>
                    </tbody>
                </table>
                <table className="ui compact table">
                    <thead>
                    <tr><th>Attack Boost Skills</th><th>Level</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>Attack Boost</td><td><input type="number" placeholder="0" step="1" min='0' max='7' size="6"/></td></tr>
                    <tr><td>Resentment</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                    <tr><td>Long Barrel</td><td><input type="number" placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                    <tr><td>Peak Performance</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Bloodlust</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    <tr><td>Burst</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>

                    </tbody>
                </table>
                <table className="ui compact table">
                    <thead>
                    <tr><th>Final Element Value</th><th><input  size="8" /></th></tr>
                    </thead>
                </table>
            </div>

        )
    }
}

export default ElementValue;