import React from "react";

class Menu extends React.Component{
    constructor() {
        super();
        this.state = {
            title:['MH Rise: Sunbreak - Damage Calculator', '怪物猎人崛起：曙光 - 伤害计算器'],
            lightBowGun:['Light Bow Gun','轻弩'],
            heavyBowGun:['Heavy Bow Gun','重弩'],
            bow:['Bow','弓'],
            greatSword:['Great Sword','大剑'],
            longSword:['Long Sword','太刀'],
            swordAndShield:['Sword & Shield','片手剑'],
            dualBlades:['Dual Blades','双刀'],
            hammer:['Hammer','大锤'],
            huntingHorn:['Hunting Horn','狩猎笛'],
            switchAxe:['Switch Axe','斩斧'],
            chargeBlade:['Charge Blade','盾斧'],
            insectGlaive:['Insect Glaive','虫棍'],
            lance:['Lance','长枪'],
            gunLance:['Gun Lance','铳枪'],
        }
    }

    render() {
        return (
            <div>
                <h1 className="ui large header center aligned purple" style={{transform:'translateY(30%)'}}>{this.state.title[this.props.languageVersion]}</h1>
                <div className="ui tabular menu">
                    <div className="ui left menu">
                        <select className="ui selection dropdown" onChange={e => this.props.handleLanguageVersion(e.target.value)}>
                            <option value="简体中文">简体中文</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                    <div className="ui left menu">
                        <select className="ui selection dropdown" onChange={e => this.props.handleWeapon(e.target.value)}>
                            <option value="Light Bow Gun">{this.state.lightBowGun[this.props.languageVersion]}</option>
                            <option value="Heavy Bow Gun">{this.state.heavyBowGun[this.props.languageVersion]}</option>
                            <option value="Bow">{this.state.bow[this.props.languageVersion]}</option>
                            <option value="Great Sword">{this.state.greatSword[this.props.languageVersion]}</option>
                            <option value="Long Sword">{this.state.longSword[this.props.languageVersion]}</option>
                            <option value="Sword & Shield">{this.state.swordAndShield[this.props.languageVersion]}</option>
                            <option value="Dual Blades">{this.state.dualBlades[this.props.languageVersion]}</option>
                            <option value="Hammer">{this.state.hammer[this.props.languageVersion]}</option>
                            <option value="Hunting Horn">{this.state.huntingHorn[this.props.languageVersion]}</option>
                            <option value="Switch Axe">{this.state.switchAxe[this.props.languageVersion]}</option>
                            <option value="Charge Blade">{this.state.chargeBlade[this.props.languageVersion]}</option>
                            <option value="Insect Glaive">{this.state.insectGlaive[this.props.languageVersion]}</option>
                            <option value="Lance">{this.state.lance[this.props.languageVersion]}</option>
                            <option value="Gun Lance">{this.state.gunLance[this.props.languageVersion]}</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;