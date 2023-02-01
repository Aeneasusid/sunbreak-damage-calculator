import React from "react";

class FinalAttackElement extends React.Component{
    constructor() {
        super();
        this.state = {
            finalStatusValue:['Final Status Value', '最终面板数值'],
            attack:['Attack','攻击力'],
            element:['Element','属性值'],
        }
    }

    render() {
        return (
            <table className="ui compact table">
                <thead>
                    <tr>
                        <th>{this.state.finalStatusValue[1]}</th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td><input id="Final Attack Power" value={this.props.finalAttack} style={{textAlign:'right'}} size="5" /></td>
                    </tr>
                    <tr>
                        <td>Element</td>
                        <td><input id="Final Element Value" value={this.props.finalElement} style={{textAlign:'right'}} size="5" /></td>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default FinalAttackElement;