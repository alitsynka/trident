import React from "react";
import s from "./SeoComponent.module.css";
import {ReactComponent as Arrow} from "./imgs/Arrow 1.svg";
import {ReactComponent as Pdf} from "./imgs/PDF.svg";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sw from "./Swiper.module.css";

export const SeoComponent = () => {
    return(
        <div className={s.Wrapper}>
            <div className={s.OrderCatalogWrapper}>
                <div className={s.ContainerCatalog}>
                    <h2>Order our catalogue for free</h2>
                    <p>Lorem ipsim dolor set amet lorem ipsim dolor set amet
                        lorem ipsim dolor set amet
                    </p>
                    <button>Order now
                        <Arrow className={s.Arrow}/>
                    </button>
                </div>
                <div className={s.Im}>
                    {/*<div className={s.Pdf}>*/}
                        <Pdf className={s.Pdf}/>
                    {/*</div>*/}
                </div>
            </div>
            {/*<div className={s.SliderContainer}>*/}
            {/*    <Swiper*/}
            {/*        cssMode={true}*/}
            {/*        // navigation={true}*/}
            {/*        pagination={true}*/}
            {/*        mousewheel={true}*/}
            {/*        keyboard={true}*/}
            {/*        modules={[Navigation, Pagination, Mousewheel, Keyboard]}*/}
            {/*        className={sw.MySwiper}*/}
            {/*        loop={true}*/}
            {/*    >*/}
            {/*        <SwiperSlide>Slide 1</SwiperSlide>*/}
            {/*        <SwiperSlide>Slide 2</SwiperSlide>*/}
            {/*        <SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*        <SwiperSlide>Slide 4</SwiperSlide>*/}
            {/*        <SwiperSlide>Slide 5</SwiperSlide>*/}
            {/*        <SwiperSlide>Slide 6</SwiperSlide>*/}
            {/*    </Swiper>*/}
            {/*</div>*/}

            <div className={s.SeoHeadLineWrapper}>
                <h2>Seo headline</h2>
                <h2>Seo headline</h2>
                <p className={s.LoremIpsum}>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an <br/>unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic <br/>
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more <br/> recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className={s.ReadMore}>Read more</p>
                {/*<div className={s.Line}></div>*/}
                <hr className={s.Line}/>
        </div>
        </div>
    )
}