const Stats = () => {
    return (
        <div>
            <div className="bg-danger my-10">

                <dl
                    className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
                >
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">Affiliate</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">40+</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">Advertiser</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">24+</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">Active Offers</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">86+</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">GLORIOUS YEARS</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">2+</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Stats;