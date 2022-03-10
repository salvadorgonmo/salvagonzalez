import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProfilePicJuan from '../../../assets/images/juan-itto.jpeg'
import ProfileAudelio from '../../../assets/images/audelio-lujan.jpeg'
import ProfileFelipe from '../../../assets/images/profileFelipe.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper p-10 card-width-carousel"
      >
        <SwiperSlide>
          <figure className="md:flex bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-20 h-20 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ProfilePicJuan} alt="" width="384" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg paragraph font-medium text-2xl text-justify">
                  “I had the privilege to co-work with Salvador when he still was an intern, we were working on several different projects 
                  with many challenges and he always was defiant to himself, learning, asking and working on new things, of course always giving the best from himself, really a valuable team member.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-blue-700 text-lato text-2xl">
                  Juan Pablo Itto Dominguez
                </div>
                <div className="text-lato  dark:text-slate-500">
                  Senior Software Engineer at Foundation Medicine
                </div>
              </figcaption>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="md:flex bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img className="w-24 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ProfileAudelio} alt="" width="384" />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg paragraph font-medium text-2xl text-justify">
                    “I had the privilege to co-work with Salvador when he still was an intern, we were working on several different projects 
                    with many challenges and he always was defiant to himself, learning, asking and working on new things, of course always giving the best from himself, really a valuable team member.”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-blue-700 text-lato text-2xl">
                    Audelio Lujan
                  </div>
                  <div className="text-lato  dark:text-slate-500">
                    Senior Software Engineer at Foundation Medicine
                  </div>
                </figcaption>
              </div>
            </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="md:flex bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img className="w-24 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ProfileFelipe} alt="" width="384" />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg paragraph font-medium text-2xl text-justify">
                    “I met Salvador when he was starting his development career, i had the opportunity to mentor him during his first 6 months, and after that he became a Jr developer and started his great career growth that hasn't stop yet. His learning skills are really good, one of the coworkers with best communication and supporting skills.”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-blue-700 text-lato text-2xl">
                    Felipe de Jesus Nevarez Perez
                  </div>
                  <div className="text-lato  dark:text-slate-500">
                    Engineering Manager at Tango
                  </div>
                </figcaption>
              </div>
            </figure>
        </SwiperSlide>  
      </Swiper>
    </>
  );
}

export default SwiperCarousel;
