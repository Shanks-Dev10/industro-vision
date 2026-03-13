import { Check } from "lucide-react";

const values = [
    {
        num: "01.",
        title: "Company Profile",
        text1: "Senlogic Automation Private Limited a professionally managed company, engaged in the weighing Automation Activities Incorporated in February 2002. A trusted name engaged in the weighing Automation Activities. The company offers a complete range of products for core sectors such as Rail In-motion Weighing Systems, Rail Static Weighing System and On Board Weighing Solution for Earth moving equipments also providing complete weighing solution for steel plants, Cement plants, Power plants etc and other weighing automation from design through implementation to operation and customized product development.",
        text2: "Senlogic with many years of field experience has enabled us to develop rugged, simpler yet most accurate weighing and monitoring system for various industries. Our products are being developed in such a manner that can continuously perform even in tough environmental condition without a loss of accuracy. Senlogic provides customized solution for the individual customer requirements with our Custom - build products. Our system can be integrated with most industry standard communication protocol and data format across the plant, warehouse and logging system to provide valuable trade information, general monitoring and quality control. We work with a outlook that “bring positive changes in every step” to get best cost effective product and solution to the vast customer need."
    },
    {
        num: "02.",
        title1: "Vision",
        text1: "To provide innovative weighing solution for technically challenged applications for core sectors",
        title2: "Mission",
        mission: [
            'To be recognized as innovative global solution provider',
            'The products to reach and benefit all sector of the people in the society',
            'To supply the products with ZERO DEFECTS'
        ],
        icon: <Check size={18} />
    },

    {
        num: "03.",
        title: "Values",
        valuetext: [
            'Providing concept to commissioning service',
            'Providing trouble free products',
            'Providing best customer support',
            'Providing Products to match customer voice',
            'Providing State of the Art Technology solutions'
        ],
        icon: <Check size={18} />
    }

];

const OurCompany = () => {
    return (
        <section className="py-5 md:py-24 lg:py-24 bg-[#FFFF]">
            <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

                {/* Top labels */}

                <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
                    <span>Fueling progress powering the future</span>
                    <span>[ Our Company ]</span>
                </div>

                {/* Title Row */}

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold flex items-end">
                        OUR COMPANY
                        <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
                    </h2>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-white rounded-md rounded-tl-[50px] p-8 border border-gray-200">

                            {/* Top row */}
                            <div className="flex justify-between items-start mb-8">

                                <span className="text-sm text-gray-400 font-semibold">
                                    {values[0].num}
                                </span>

                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 mb-6"></div>

                            {/* Content */}
                            <div className="flex flex-col gap-5">

                                <h3 className="text-xl font-bold">
                                    {values[0].title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                    {values[0].text1}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                    {values[0].text2}
                                </p>

                            </div>

                        </div>


                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-md rounded-tl-[50px] p-8 border border-gray-200">

                            {/* Top row */}
                            <div className="flex justify-between items-start mb-8">

                                <span className="text-sm text-gray-400 font-semibold">
                                    {values[1].num}
                                </span>

                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 mb-6"></div>

                            {/* Content */}
                            <div className="flex flex-col gap-5">
                                <div>
                                    <h3 className="text-xl font-bold">
                                        {values[1].title1}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {values[1].text1}
                                    </p>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-xl font-bold">
                                        {values[1].title2}
                                    </h3>
                                    {values[1].mission.map((mission, index) => (
                                        <div key={index} className="flex items-start gap-3 py-1">
                                            <span className="mt-1 text-green-600">
                                                {values[1].icon}
                                            </span>

                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {mission}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div
                            className="bg-white rounded-md rounded-tl-[50px] p-8 border border-gray-200"
                        >

                            {/* Top row */}
                            <div className="flex justify-between items-start mb-8">

                                <span className="text-sm text-gray-400 font-semibold">
                                    {values[2].num}
                                </span>

                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 mb-6"></div>

                            {/* Content */}
                            <div className="flex flex-col gap-5">

                                <h3 className="text-xl font-bold">
                                    {values[2].title}
                                </h3>

                                <div className="text-sm text-gray-600 leading-relaxed">
                                    {values[2].valuetext.map((valuetext, index) => (
                                        <div key={index} className="flex items-start gap-3 py-1">

                                            <span className="mt-1 text-green-600">
                                                {values[2].icon}
                                            </span>

                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {valuetext}
                                            </p>

                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurCompany;