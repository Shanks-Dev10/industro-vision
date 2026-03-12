import weldingImg from "@/assets/h2_img-1.webp";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-full mx-auto px-6">

                {/* Top Small Labels */}
                <div className="flex justify-between text-xs uppercase tracking-widest text-gray-400 mb-6">
                    <span>Fueling progress powering the future</span>
                    <span>[ OUR STORY ]</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-6xl font-extrabold text-black mb-14 flex items-end gap-1 border-b-[1px] p-5">
                    Who we are
                    <span className="w-4 h-4 bg-[#FBE87E] inline-block"></span>
                </h2>
                {/* Layout */}
                <div className="grid lg:grid-cols-[1fr_1.2fr_1fr] gap-12 items-start">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl lg:text-4xl font-bold leading-snug text-gray-900 mb-8">
                            Pushing the boundaries of technology and manufacturing to build a
                            stronger, smarter tomorrow
                        </h3>

                        <button className="flex items-center gap-4 bg-[#FBE87E] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                            Discover More
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <ArrowRight size={16} />
                            </span>
                        </button>
                    </div>

                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl rounded-tr-[90px] h-full">
                        <img
                            src={weldingImg}
                            alt="Welding"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Card */}
                    <div className="bg-[#0F2F45] text-white rounded-2xl rounded-tr-[90px] p-10  relative h-full flex flex-col justify-between">

                        <div>
                            <p className="text-[#FBE87E] text-sm font-semibold mb-4">
                                Technology-centered
                            </p>

                            <h3 className="text-3xl font-bold mb-6 leading-snug">
                                Global leaders in industrial automation
                            </h3>

                            <div className="border-t border-white/20 mb-6"></div>

                            <p className="text-sm text-white/80 leading-relaxed">
                                Explore cutting-edge solutions tailored for excellence in
                                manufacturing. At your company, we fuse innovative technology
                                with industry expertise.
                            </p>
                        </div>

                        <button className="flex items-center gap-3 font-semibold">
                            View Projects
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
                                <ArrowRight size={16} />
                            </span>
                        </button>

                    </div>

                </div>
                </div>
        </section>
    );
};

export default WhoWeAre;