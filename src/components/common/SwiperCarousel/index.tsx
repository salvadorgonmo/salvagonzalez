import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProfilePicJuan from '../../../assets/images/juan-itto.jpeg'
import ProfileAudelio from '../../../assets/images/audelio-lujan.jpeg'
import ProfileFelipe from '../../../assets/images/profileFelipe.jpeg'
import ProfileOmar from '../../../assets/images/omar-ramirez.jpeg'

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
          <figure className="md:flex bg-white rounded-xl p-8 md:p-0">
            <img className="w-28 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ProfilePicJuan} alt="" width="384" />
            <div className="pt-6 md:p-8 bg-white text-center md:text-left space-y-4">
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
          <figure className="md:flex  rounded-xl p-8 md:p-0">
              <img className="w-28 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ProfileAudelio} alt="" width="384" />
              <div className="pt-6 bg-white md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg paragraph font-medium text-2xl text-justify">
                    “I have the privilege to see how Salvador has been growing since his first job as a JR. He is a really good listener and a fast learner, even though now we don't work together I will love to do it again and I am happy to see that he continues growing to the big developer he is.”
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
        <SwiperSlide>
          <figure className="md:flex  rounded-xl p-8 md:p-0">
              <img className="w-28 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ProfileOmar} alt="" width="384" />
              <div className="pt-6 bg-white md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg paragraph font-medium text-2xl text-justify">
                    “Salvador is an amazing developer, we worked together on very challenging projects for more than a year. He not only took every challenge with a smile he also delivered results he was interested to learn more about other technologies. I can highly recommend Salvador, I am sure he will become one key player for your team.”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-blue-700 text-lato text-2xl">
                    Omar Ramírez Aguilar.
                  </div>
                  <div className="text-lato  dark:text-slate-500">
                    Tech Lead at Unosquare
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
