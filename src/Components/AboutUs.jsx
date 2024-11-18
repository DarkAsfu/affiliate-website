import { Button } from '@nextui-org/react';

const AboutUs = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <h1 className='text-white text-4xl font-bold text-center mb-10'>About <span className='text-[#f31260]'>Us</span></h1>
            <section className="overflow-hidden sm:grid sm:grid-cols-2 gap-10">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full object-cover sm:h-full"
                />
                <div className="mt-6">
                    <div className="mx-auto">
                        <h2 className="text-2xl font-bold text-[#f3f3f3] md:text-3xl">
                        WELCOME TO OUR WORLD – WE WILL MAKE YOU STRONGER!
                        </h2>

                        <p className="text-[#f2f2f2] mt-4 md:block">
                        GOAFFS is an international affiliate network with the most profitable conditions for our partners. We are trusted by thousands of partners, because we work honestly and decently. Our team stands out with openness, a systematic approach, and continuous improvements in all areas. We are the network that helps affiliates and advertisers mutually beneficial to cooperate. We will provide you numerous advertising materials, statistics, technical support, a lot of other services and will do our best to make your earnings rise.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <Button color='danger' size='lg'
                            >
                                Get Started 
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;