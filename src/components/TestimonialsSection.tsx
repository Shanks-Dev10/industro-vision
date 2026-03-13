import engineersImg from "@/assets/engineers-discussing.webp";
import { Star, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialSection = () => {
  const testimonial = [
    {
      name: "Charles Clark",
      designation: "Assistant Project Manager",
      quotes:
        "“Their precision engineering and attention to detail have significantly improved our production line. We highly recommend them to any business.”",
    },
    {
      name: "Charles Clark",
      designation: "Assistant Project Manager",
      quotes:
        "“Their precision engineering and attention to detail have significantly improved our production line. We highly recommend them to any business.”",
    },
    {
      name: "Charles Clark",
      designation: "Assistant Project Manager",
      quotes:
        "“Their precision engineering and attention to detail have significantly improved our production line. We highly recommend them to any business.”",
    },
  ];

  return (
    <section className="py-5 md:py-24 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">
        {/* Top labels */}

        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
          <span>OUR HAPPY CLIENTS</span>
          <span>[ WHAT CLIENTS SAY ]</span>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-16 pt-5 items-center">
          {/* Left */}
          <div className="space-y-10">
            {/* Quote */}
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true, el: ".custom-pagination" }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
            >
              {testimonial.map((items, index) => (
                <SwiperSlide key={index} className="w-full flex flex-col gap-4">
                  <blockquote className="md:text-xl lg:text-3xl font-semibold">
                    {items.quotes}
                  </blockquote>

                  <div>
                    <p className="font-bold text-lg">{items.name}</p>
                    <p className="text-sm text-gray-500">{items.designation}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div className="custom-pagination mt-5 flex justify-center"></div> */}

            {/* Bottom row */}
            <div className="flex md:flex-row flex-col gap-6 items-center justify-between">
              {/* Rating */}
              <div className="flex items-center gap-2 bg-[#FBE87E] px-1 px-5 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-black text-black" />
                4.9 Rating From 12k+ Reviews
              </div>

              {/* Button */}
              <button className="flex items-center gap-3 font-semibold">
                View All Reviews
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FBE87E]">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-md rounded-tr-[50px] overflow-hidden">
            <img
              src={engineersImg}
              alt="Engineers discussing"
              className="w-full md:h-[450px] lg:h-[550px] h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
