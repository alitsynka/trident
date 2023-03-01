import React from "react";
import s from './Main.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper";
import img1 from './imgs/image4.png';
import img2 from './imgs/img.png';
import img3 from './imgs/img_1.png';
import img4 from './imgs/img_2.png';
import img5 from './imgs/image 14.png';
import "swiper/css";
import "swiper/css/navigation";
import {ReactComponent as Arrow} from "./imgs/Arrow.svg";

export const Main = () => {
    return(
        <div className={s.Wrapper}>
            <div className={s.Container}>
                {/*<>*/}
                <Swiper navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        loop={true}>
                    <SwiperSlide>
                        <img src={img1} className={s.Image}/>
                        <div className={s.Image2}>
                            <p>A place that is more than an office – a place where you can create work-life balance</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} className={s.Image}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} className={s.Image}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} className={s.Image}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} className={s.Image}/>
                    </SwiperSlide>
                </Swiper>
                    {/*</>*/}
                <div className={s.Button}>
                    <p>Read more</p>
                    <Arrow/>
                </div>
            </div>
        </div>
    )
}