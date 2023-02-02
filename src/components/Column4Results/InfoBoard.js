import React from "react";

class Column4Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manual:['Manual','使用说明'],
            manual1:['左上角可切换为中文', 'You can Switch to English on left-up corner'],
            manual2:['Burst is set as after 5 hits effects', '连击技能效果设置为5次攻击后效果'],
            manual3:['There might be deviation within 2 (rarely), due to the float-rounding error', '由于浮点误差，计算结果误差在两点内，大多数时候无误差'],
            //
            updateInfo:['Update Information:', '更新进度:'],
            updateInfo1:['so far LBG and HBG are available, contact me if you find any errors & suggestions', '目前仅轻弩重弩可用，有建议/问题/错漏可直接联系我'],
        }
    }

    render() {
        return (
            <ul className="ui list">
                <li>{this.state.manual[this.props.languageVersion]}
                    <ul>
                        <li>{this.state.manual1[this.props.languageVersion]}</li>
                        <li>{this.state.manual2[this.props.languageVersion]}</li>
                        <li>{this.state.manual3[this.props.languageVersion]}</li>
                    </ul>
                </li>
                <ul> </ul>
                <ul> </ul>
                <ul> </ul>
                <ul> </ul>
                <ul> </ul>
                <li>{this.state.updateInfo[this.props.languageVersion]}
                    <ul>
                        <li>{this.state.updateInfo1[this.props.languageVersion]}</li>
                    </ul>
                </li>
            </ul>
        )
    }
}

export default Column4Results;