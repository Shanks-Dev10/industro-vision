const values = [
    {
        num: "01.",
        title: "AI-Powered Insights",
        text: "Intelligent analysis of wagon load data to ensure balanced and accurate rail operations.",
    },
    {
        num: "02.",
        title: "Load Precision",
        text: "High-accuracy technology that measures wagon weight and detects load imbalance.",
    },
    {
        num: "03.",
        title: "Railway Safety",
        text: "Protecting rail infrastructure and operations through accurate load monitoring.",
    },
];

const OurCompany = () => {
    return (
        <section className="py-5 md:py-24 lg:py-24 bg-[#FFFF]">
            <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

                {/* Top labels */}

                <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
                    <span>Fueling progress powering the future</span>
                    <span>[ Why Choose Us ]</span>
                </div>

                {/* Title Row */}

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold flex items-end">
                        Our Company
                        <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
                    </h2>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>

                        {values.map((val, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-md rounded-tl-[50px] p-8 border border-gray-200"
                            >

                                {/* Top row */}
                                <div className="flex justify-between items-start mb-8">

                                    <span className="text-sm text-gray-400 font-semibold">
                                        {val.num}
                                    </span>

                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mb-6"></div>

                                {/* Content */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                                    <h3 className="text-2xl font-bold">
                                        {val.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {val.text}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                    <div className="grid md:grid-cols-2 gap-8">

                        {values.map((val, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-md rounded-tl-[50px] p-8 border border-gray-200"
                            >

                                {/* Top row */}
                                <div className="flex justify-between items-start mb-8">

                                    <span className="text-sm text-gray-400 font-semibold">
                                        {val.num}
                                    </span>

                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mb-6"></div>

                                {/* Content */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                                    <h3 className="text-2xl font-bold">
                                        {val.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {val.text}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurCompany;