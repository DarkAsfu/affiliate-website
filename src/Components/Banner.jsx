import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@nextui-org/react';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='md:grid grid-cols-2 items-center w-11/12 md:w-9/12 mx-auto justify-between my-20'>
                        <div className='order-1 md:order-2'>
                            <img src="https://goaffs.com/images/main-slider/content-image-2.png" alt="Affiliate Program" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold my-6 text-white'>
                                Affiliates
                            </h1>
                            <p className='text-lg font-semibold mb-6 text-white'>
                                Make money with GOAFFS. High Payouts and Fast Payments. Exclusive offers.
                            </p>
                            <Button color='danger'>Become An Affiliate</Button>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
