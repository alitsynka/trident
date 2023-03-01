import React from "react";
import s from "./Modular.module.css";
import {ReactComponent as Logo} from "./imgs/Vector.svg";
import {ReactComponent as Arrow} from "./imgs/Arrow.svg";


export const ModularHousing = () => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.Promo}>
                    <div className={s.Hidden}></div>
                    <div className={s.BlockInviting}>
                        <div className={s.InBlockInviting}>
                            <p>Trident – we love inviting interiors too!</p>
                            <p>Our architects have prepared some stunning
                                ready-made interior designs...check them out...</p>
                        </div>
                    </div>
                    <div className={s.AbsoluteBlocks}>
                        <div className={s.Visible}></div>
                        <div className={s.ReadMore}>
                            <p>Read more
                                <span><Arrow/></span>
                            </p></div>
                    </div>
                </div>
                <div className={s.SecContainer}>
                    <div className={s.Common1}>
                        <p>Trident Modular Housing produce and
                            assemble modular houses that are
                            very high quality and they can be used
                            as temporary as well as permanent
                            residence.
                        </p>
                        <div className={s.Blocks}>
                            <div className={s.Blocks_1}>
                                <div className={s.Block}>
                                    <Logo className={s.Logo}/>
                                    <div className={s.Content}>
                                        <p>QUALITY</p>
                                        <p>A quality flexible modular housing
                                            solutionset and they can be used as temporary
                                            as well as permanent residence.
                                        </p>
                                    </div>
                                </div>
                                <div className={s.Block}>
                                    <Logo className={s.Logo}/>
                                    <div className={s.Content}>
                                        <p>DESIGN</p>
                                        <p>Bespoke, contemporary design capabilities with customization.
                                            And they can be
                                            used as temporary as well as permanent residence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={s.Blocks_2}>
                                <div className={s.Block}>
                                    <Logo className={s.Logo}/>
                                    <div className={s.Content}>
                                        <p>PRICE</p>
                                        <p>Low price and quick assembly.Housing solutionset
                                            and they can be used as
                                            temporary as well as permanent residence.</p>
                                    </div>
                                </div>
                                <div className={s.Block}>
                                    <Logo className={s.Logo}/>
                                    <div className={s.Content}>
                                        <p>CHOICE</p>
                                        <p>You can choose from our standard range of products. And they
                                            can be used as temporary as well as permanent residence.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Ph}>
                    </div>
                </div>

            </div>
        </div>
    )
}
