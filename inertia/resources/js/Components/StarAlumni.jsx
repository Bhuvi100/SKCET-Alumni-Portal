import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


const StarAlumni = () => {
  return (
    <>
        <div class="max-w-lg mx-auto text-center">
            <h1 className={" mt-16 mb-8 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center"}>
                Notable
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300" >
                Alumni
            </span>
            <div className=""></div>
            </h1>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            360: {
                slidesPerView: 1,
                spaceBetween:30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween:50
            },
        }}
        modules={[Autoplay, Pagination, Navigation]}
       className="text-white"
      >
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/1.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">P.Praveena</h2>
                        <p class="description">CSE (2000 - 2004 Batch)</p>
                        <p class="description">Quality Assurance Manager, Amazon</p>
                        <p class="description">Banglore.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/2.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">Makesh G</h2>
                        <p class="description">IT (2000 - 2004 Batch)</p>
                        <p class="description">Founder & CEO Crayon Digital Reach Pvt.Ltd</p>
                        <p class="description">Chennai</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/3.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">S.Priyadarshini,IAS</h2>
                        <p class="description">EEE (2005 - 2009 Batch)</p>
                        <p class="description">Asst. Magistrate & Asst. Colllector, Office of District Magistrate</p>
                        <p class="description">Kolkata</p>                    
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/4.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">Priyadarshini R</h2>
                        <p class="description">EEE (2002-2006 Batch)</p>
                        <p class="description">Senior Verification Engineer,Intel India Corporation.</p>
                        <p class="description">Banglore</p>    
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/5.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">S.Sakthish</h2>
                        <p class="description">Mech (2003-2007 Batch)</p>
                        <p class="description">Research Engineer, Electrification R&D, Ford Motor Company</p>
                        <p class="description">USA</p>    
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/6.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">Narendran Govindarajan</h2>
                        <p class="description">MCT (2000-2004 Batch)</p>
                        <p class="description">Senior Project Manager, Robert Bosch Engineering and Business Solutions Pvt.Ltd</p>
                        <p class="description">Coimbatore</p>    
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/7.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">Vishnu Jegan </h2>
                        <p class="description">CIVIL (2012-2016 Batch)</p>
                        <p class="description">Administration Officer, New India Assurance</p>
                        <p class="description">Mumbai</p>    
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
                <div class="image-content">
                <span class="overlay"></span>
                    <div class="card-image">
                        <img src="/assets/Alumni-Images/8.jpg" alt="" class="card-img"/>
                    </div>
                </div>
                    <div class="card-content">
                        <h2 class="name">Nisha Mani</h2>
                        <p class="description">MBA (2009-2011 Batch)</p>
                        <p class="description">Scientist/Engineer, Vikram Sarabhai Space Centre, ISRO</p>
                        <p class="description">Trivandrum</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default StarAlumni
