import React from "react";
import s from "./Header.module.css";
import {ReactComponent as Group} from "./imgs/Group.svg";
import {ReactComponent as Vector} from "./imgs/Vector.svg";
import {ReactComponent as Burger} from "./imgs/Burger.svg";

export const Header = () => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                    <Group className={s.Logo}/>
                    <div className={s.Menu}>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Gallery</p>
                        <p>
                            Styles
                            <Vector className={s.Vector}/>
                        </p>
                        <p>Interior</p>
                        <p>Contact</p>
                    </div>
                <Burger className={s.Burger}/>

                <div className={s.Catalogue}>
                    <p><span>ORDER</span> CATALOGUE</p>
                </div>
            </div>

        </div>
    )
}