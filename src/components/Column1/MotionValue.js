import React from "react";

class MotionValue extends React.Component{
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        if (! (this.props.weapon === 'Light Bow Gun' || this.props.weapon === 'Heavy Bow Gun')) {
            return (
                <table className="ui compact table">
                    <thead>
                        <tr>
                            <th>Motion Value</th>
                            <th><input id="Motion Value" type="number" placeholder="0" step="1" min='0' max='290' size="6" /></th>
                        </tr>
                    </thead>
                </table>
            )
        }
    }
}

export default MotionValue;