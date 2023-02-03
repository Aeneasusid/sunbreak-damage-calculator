import React from "react";

class Menu extends React.Component{
    constructor() {
        super();
        this.state = {
            title:['MH Rise: Sunbreak - Damage Calculator', '怪物猎人崛起：曙光 - 伤害计算器'],
            lightBowGun:['LBG','轻弩'],
            heavyBowGun:['HBG','重弩'],
            bow:['Bow','弓'],
            greatSword:['GS','大剑'],
            longSword:['LS','太刀'],
            swordAndShield:['SnS','片手剑'],
            dualBlades:['DB','双刀'],
            hammer:['Ham','大锤'],
            huntingHorn:['HH','狩猎笛'],
            lance:['Lance','长枪'],
            gunLance:['GL','铳枪'],
            switchAxe:['SA','斩斧'],
            chargeBlade:['CB','盾斧'],
            insectGlaive:['IG','虫棍'],
        }
    }

    render() {
        return (
            // <div>
            //     <h1 className="ui large header center aligned purple" style={{transform:'translateY(30%)'}}>{this.state.title[this.props.languageVersion]}</h1>
            //     <div className="ui tabular menu">
            //         <div className="ui left menu">
            //             <select className="ui selection dropdown" onChange={e => this.props.handleWeapon(e.target.value)}>
            //                 <option value="Light Bow Gun">{this.state.lightBowGun[this.props.languageVersion]}</option>
            //                 <option value="Heavy Bow Gun">{this.state.heavyBowGun[this.props.languageVersion]}</option>
            //                 <option value="Bow">{this.state.bow[this.props.languageVersion]}</option>
            //                 <option value="Great Sword">{this.state.greatSword[this.props.languageVersion]}</option>
            //                 <option value="Long Sword">{this.state.longSword[this.props.languageVersion]}</option>
            //                 <option value="Sword & Shield">{this.state.swordAndShield[this.props.languageVersion]}</option>
            //                 <option value="Dual Blades">{this.state.dualBlades[this.props.languageVersion]}</option>
            //                 <option value="Hammer">{this.state.hammer[this.props.languageVersion]}</option>
            //                 <option value="Hunting Horn">{this.state.huntingHorn[this.props.languageVersion]}</option>
            //                 <option value="Lance">{this.state.lance[this.props.languageVersion]}</option>
            //                 <option value="Gun Lance">{this.state.gunLance[this.props.languageVersion]}</option>
            //                 <option value="Switch Axe">{this.state.switchAxe[this.props.languageVersion]}</option>
            //                 <option value="Charge Blade">{this.state.chargeBlade[this.props.languageVersion]}</option>
            //                 <option value="Insect Glaive">{this.state.insectGlaive[this.props.languageVersion]}</option>
            //             </select>
            //         </div>
            //         <div className="ui right menu">
            //             <select className="ui selection dropdown" onChange={e => this.props.handleLanguageVersion(e.target.value)}>
            //                 <option value="">Language语言</option>
            //                 <option value="简体中文">简体中文</option>
            //                 <option value="English">English</option>
            //             </select>
            //         </div>
            //     </div>
            // </div>
            <div style={{margin:'0 0 10px 0'}}>
                <h1 className="ui large header center aligned purple" style={{transform:'translateY(30%)'}}>{this.state.title[this.props.languageVersion]}</h1>
                <div className="ui tabular menu" onClick={e => this.props.handleWeapon(e)}>
                    <a className="active item" id="Light Bow Gun">{this.state.lightBowGun[this.props.languageVersion]}</a>
                    <a className="item" id="Heavy Bow Gun">{this.state.heavyBowGun[this.props.languageVersion]}</a>
                    <a className="item" id="Bow">{this.state.bow[this.props.languageVersion]}</a>
                    <a className="item" id="Great Sword">{this.state.greatSword[this.props.languageVersion]}</a>
                    <a className="item" id="Long Sword">{this.state.longSword[this.props.languageVersion]}</a>
                    <a className="item" id="Sword And Shield">{this.state.swordAndShield[this.props.languageVersion]}</a>
                    <a className="item" id="Dual Blades">{this.state.dualBlades[this.props.languageVersion]}</a>
                    <a className="item" id="Hammer">{this.state.hammer[this.props.languageVersion]}</a>
                    <a className="item" id="Hunting Horn">{this.state.huntingHorn[this.props.languageVersion]}</a>
                    <a className="item" id="Lance">{this.state.lance[this.props.languageVersion]}</a>
                    <a className="item" id="Gun Lance">{this.state.gunLance[this.props.languageVersion]}</a>
                    <a className="item" id="Switch Axe">{this.state.switchAxe[this.props.languageVersion]}</a>
                    <a className="item" id="Charge Blade">{this.state.chargeBlade[this.props.languageVersion]}</a>
                    <a className="item" id="Insect Glaive">{this.state.insectGlaive[this.props.languageVersion]}</a>
                    <select className="ui selection dropdown right menu" onChange={e => this.props.handleLanguageVersion(e.target.value)}  onClick={e => e.stopPropagation()}>
                        <option value="">Language语言</option>
                        <option value="简体中文">简体中文</option>
                        <option value="English">English</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Menu;