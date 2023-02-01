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
                        <th>{this.state.finalStatusValue[this.props.languageVersion]}</th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td>{this.state.attack[this.props.languageVersion]}</td>
                        <td><input id="Final Attack Power" value={this.props.finalAttack} style={{textAlign:'right'}} size="5" /></td>
                    </tr>
                    <tr>
                        <td>{this.state.element[this.props.languageVersion]}</td>
                        <td><input id="Final Element Value" value={this.props.finalElement} style={{textAlign:'right'}} size="5" /></td>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default FinalAttackElement;