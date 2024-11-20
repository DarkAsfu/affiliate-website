import { FaChartPie, FaChartLine, FaChartBar, FaSearch, FaCogs, FaCloud } from "react-icons/fa";
const Features = () => {

    const features = [
        {
            title: "Advance Smartlink",
            description: "Single url for all top offers, our smartlink system redirection base on the country and device OS for best convert.",
            icon: <FaChartPie className="text-[50px] bg-danger p-2 rounded-full"/>,
            link: "content-marketing.html"
        },
        {
            title: "High Converting Offers",
            description: "By hand selected offers for our affiliate makes good profits and happy.",
            icon: <FaChartLine className="text-[50px] bg-danger p-2 rounded-full"/>,
            link: "content-marketing.html"
        },
        {
            title: "Real-Time Stats",
            description: "How much have you earned? We know that! Our tracking system enables affiliates to monitor the traffic flow, transactions and conversion in real time.",
            icon: <FaChartBar className="text-[50px] bg-danger p-2 rounded-full"/>,
            link: "content-marketing.html"
        },
        {
            title: "Smart Tracking Platform",
            description: "Easy-to-use custom tracking platform specially created to suit the needs of an our partners.",
            icon: <FaSearch className="text-[50px] bg-danger p-2 rounded-full"/>,
            link: "content-marketing.html"
        },
        {
            title: "Weekly Payments",
            description: "Flexible terms: Weekly / Biweekly / Monthly.",
            icon: <FaCogs className="text-[50px] bg-danger p-2 rounded-full"/>,
            link: "content-marketing.html"
        },
        {
            title: "24/7 Technical Support",
            description: "Our team cares about given service quality and for sure about your traffic so there is no any reason to worry about it.",
            icon: <FaCloud className="text-[50px] bg-danger p-2 rounded-full"/>,
            link: "content-marketing.html"
        }
    ];
    return (
        <div>
            <section className="text-white">
                <div className="">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Features</h2>

                        <p className="mt-4 text-danger">
                            Why DO Business With Us?
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((f, idx) => <a key={idx}
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                href="#"
                            >
                                {f.icon}
    
                                <h2 className="mt-4 text-xl font-bold text-white">{f.title}</h2>
    
                                <p className="mt-1 text-sm text-gray-300">
                                    {f.description}
                                </p>
                            </a>)
                        }
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;