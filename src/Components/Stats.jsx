const Stats = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-danger">

                <dl
                    className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
                >
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">Total Sales</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">$4.8m</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">Official Addons</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">24</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">Total Addons</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">86</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-[#f4f4f4]">Downloads</dt>

                        <dd className="text-4xl font-extrabold text-[#fff] md:text-5xl">86k</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Stats;