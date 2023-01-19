import React from "react";

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ui column labeled input four wide column" >
                <table className="ui compact table">
                    <thead>
                        <tr><th>Weapon Raw Attack</th><th><input type="number" placeholder="330" size="6" /></th></tr>
                        <tr><th>Ele. Motion Value</th><th><input type="number" placeholder="22" size="6" /></th></tr>
                    </thead>
                    <thead>
                        <tr><th>Attack Power Boosts</th><th>Number</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Qurious Crafting</td><td><input type="number" placeholder="10" step="5" min='0' max='25' size="6"/></td></tr>
                        <tr><td>Power Charm&Talon</td><td><input type="number" placeholder="15" step="3" min='0' max='15' size="6"/></td></tr>
                        <tr><td>Petalace</td><td><input type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                        <tr><td>Dango</td><td><input type="number" placeholder="0" step="1" min='0' max='30' size="6"/></td></tr>
                        <tr><td>Others</td><td><input type="number" placeholder="0" step="1" min='-20' max='30' size="6"/></td></tr>
                    </tbody>
                </table>
                <table className="ui compact table">
                    <thead>
                        <tr><th>Skills</th><th>Level</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Attack Boosts</td><td><input type="number" placeholder="0" step="1" min='0' max='7' size="6"/></td></tr>
                        <tr><td>Long Barrel (Tune-up)</td><td><input type="number" placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                        <tr><td>Resentment</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                        <tr><td>Peak Performance</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                        <tr><td>Resuscitate</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                        <tr><td>Dereliction</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                        <tr><td>Burst</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                        <tr><td>Element Attack</td><td><input type="number" placeholder="0" step="1" min='0' max='5' size="6"/></td></tr>
                        <tr><td>Kusha/Teo Blessing</td><td><input type="number" placeholder="0" step="1" min='0' max='2' size="6"/></td></tr>
                        <tr><td>Strife</td><td><input type="number" placeholder="0" step="1" min='0' max='3' size="6"/></td></tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Skills;