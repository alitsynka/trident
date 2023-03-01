import React from "react";
import s from "./Footer.module.css";
import {ReactComponent as FaceBook} from "./imgs/facebook.svg";
import {ReactComponent as Inst} from "./imgs/inst.svg";
import {ReactComponent as Tg} from "./imgs/youtube.svg";
import Trident from "./imgs/Trident.png";
import {ReactComponent as Phone} from "./imgs/Phone.svg";
import {ReactComponent as Loc} from "./imgs/Loc.svg";
import {ReactComponent as Letter} from "./imgs/Border.svg";


export const Footer = () => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.Blocks}>
                    <div className={s.Block_1}>
                        <img src={Trident} alt=""/>
                        <div>
                            <Loc/>
                            <p>111A T. Shevchenko</p>
                        </div>
                        <div>
                            <Phone/>
                            <p>0054-6272444</p>
                        </div>
                        <div>
                            <Letter/>
                            <p>Info@mail.com</p>
                        </div>
                    </div>
                    <div className={s.Block_2}>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Galery</p>
                        <p>Interior</p>
                        <p>Contact</p>
                    </div>
                    <div className={s.Block_3}>
                        <p>Garden House</p>
                        <p>Garden Salon</p>
                        <p>Commercial Workspace</p>
                        <p>Lake House</p>
                        <p>Forest House</p>
                    </div>
                    <div className={s.Block_4}>
                        <p>Barn House</p>
                        <p>Style</p>
                        <p>Style</p>
                        <p>Style</p>
                        <p>Style</p>
                    </div>
                    <div className={s.IconsMob}>
                        <FaceBook/>
                        <Inst/>
                        <Tg/>
                    </div>
                </div>
                <div className={s.CopyRight}>
                    <div>
                        <p>© Trident 2023</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className={s.Icons}>
                        <FaceBook/>
                        <Inst/>
                        <Tg/>
                    </div>
                </div>
            </div>
        </div>
    )
}