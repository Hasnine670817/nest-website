// import image1 from '../assets/images/Figure-7.png';
// import image2 from '../assets/images/Figure-8.png';
// import image3 from '../assets/images/Figure-6.png';
// import image4 from '../assets/images/Figure-10.png';
// import image5 from '../assets/images/Figure-1.png';
// import image6 from '../assets/images/Figure-2.png';
// import image7 from '../assets/images/Figure-3.png';
// import image8 from '../assets/images/Figure-5.png';
// import image9 from '../assets/images/Figure-9.png';
// import image10 from '../assets/images/Figure-4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const FeaturedCategories = () => {

    // const slides = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]

    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('/Fruits.json')
            .then(res => res.json())
            .then(data => setFruits(data))
            .catch(error => console.error(error))
    }, []);


    const colors = [
        "#F2FCE4",
        "#FFFCEB",
        "#ECFFEC",
        "#FEEFEA",
        "#FFF3EB",
        "#FFF3FF",
        "#F2FCE4",
        "#FEEFEA",
        "#F2FCE4",
        "#FEEFEA",
        "#F9EAF2"
    ];

    return (
        <section className='pb-10'>
            <div className='container-custom'>
                <h2 className='text-xl lg:text-2xl 2xl:text-[32px] font-bold mb-3 2xl:mb-5'>Featured Categories</h2>

                <div className='relative'>

                    <div className="custom-prev absolute -top-[40px] right-[40px] sm:-left-[30px] xl:-left-[45px] sm:top-1/2 sm:-translate-y-1/2 z-10 cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F2F3F4] hover:bg-[#3BB77E] transition-all duration-300 text-center flex items-center justify-center">
                        <FaArrowLeft className="text-lg sm:text-xl text-[#7E7E7E] hover:text-white transition-all duration-300" />
                    </div>

                    <div className="custom-next absolute -top-[40px] right-0 sm:-right-[30px] xl:-right-[45px] sm:top-1/2 sm:-translate-y-1/2 z-10 cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F2F3F4] hover:bg-[#3BB77E] transition-all duration-300 text-center flex items-center justify-center">
                        <FaArrowRight className="text-lg sm:text-xl text-[#7E7E7E] hover:text-white transition-all duration-300" />
                    </div>

                    <Swiper
                        slidesPerView={10}
                        breakpoints={{
                            0: {   
                                slidesPerView: 2,
                            },
                            480: {   
                                slidesPerView: 3,
                            },
                            768: {   
                                slidesPerView: 4,
                            },
                            992: {  
                                slidesPerView: 6,
                            },
                            1200: {  
                                slidesPerView: 7,
                                spaceBetween: 20
                            },
                            1400: {  
                                slidesPerView: 8,
                                spaceBetween: 20
                            },
                            1600: {  
                                slidesPerView: 10,
                                spaceBetween: 20
                            },
                        }}
                        spaceBetween={10}
                        // navigation={true}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        speed={1000}
                        modules={[Autoplay, Navigation]}
                        className="categorySwiper !pb-2"
                    >
                        {
                            fruits.map((fruit, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className='text-center py-5 px-3 rounded-[10px] border border-[#F4F6FA] bg-[#F2FCE4]' style={{ backgroundColor: colors[idx % colors.length] }}>
                                        <img className='mx-auto' src={fruit?.image} alt={fruit?.title} />
                                        <h4 className='text-base font-bold'>{fruit?.name}</h4>
                                        <p className='text-base font-normal text-[#7E7E7E]'>{fruit?.items} items</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;