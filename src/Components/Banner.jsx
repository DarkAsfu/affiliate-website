import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
        };

        // Initial check
        handleResize();

        // Add event listener for resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
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
                navigation={!isMobile} // Disable navigation for mobile
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='md:grid grid-cols-2 items-center justify-between my-20 w-11/12 mx-auto'>
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
                <SwiperSlide>
                    <div className='md:grid grid-cols-2 items-center justify-between my-20 w-11/12 mx-auto'>
                        <div className='order-1 md:order-2'>
                            <img src="https://goaffs.com/images/main-slider/content-image-2.png" alt="Affiliate Program" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold my-6 text-white'>
                                The Most Trusted Affiliate Network
                            </h1>
                            <p className='text-lg font-semibold mb-6 text-white'>
                                GOAFFS is a leading affiliate network, with the highest paying offers of the entire world!.
                            </p>
                            <Button color='danger'>Become An Affiliate</Button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:grid grid-cols-2 items-center justify-between my-20 w-11/12 mx-auto'>
                        <div className='order-1 md:order-2'>
                            <img src="https://goaffs.com/images/main-slider/content-image-2.png" alt="Affiliate Program" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold my-6 text-white'>
                                Advertisers
                            </h1>
                            <p className='text-lg font-semibold mb-6 text-white'>
                                We can help you build your marketing campaign and increase your brand awareness.</p>
                            <Button color='danger'>Become An Affiliate</Button>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
