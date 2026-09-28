import engineersImg from "@/assets/engineers-discussing.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialSection = () => {
  const reviews = [
    {
      quote:
        "Excellent service and reliable. The team was professional responsive and delivered quality work.",
      name: "Swetha C",
      image: engineersImg,
    },
    {
      quote:
        "Thank you for your service and support... Looking forward to work with you",
      name: "Pooja Murugesan",
      image: engineersImg,
    },
    {
      quote:
        "Very good to work with Railmet OCLS . Everybody worked well and met our expectations.",
      name: "Megana",
      image: engineersImg,
    },
    {
      quote:
        "We recently worked with Railmet Technologies, and the overall experience was really good. The team was knowledgeable, explained everything clearly, and completed the installation on time.",
      name: "Vishnu Priya",
      image: engineersImg,
    },
  ];

  return (
    <section className="py-5 md:py-24 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">
        {/* Top labels */}

        <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-7">
          <h3 className="text-[#009999] text-[16px] font-semibold uppercase">
            OUR HAPPY CLIENTS
          </h3>

          <h4 className="text-[#009999] text-[16px] font-semibold uppercase animate-none md:animate-bounce">
            [ WHAT CLIENTS SAY ]
          </h4>
        </div>

        {/* Layout */}
        <section className="py-20 px-6 bg-[#f7f8fa]">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#009999] mb-3">
                Client Reviews
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold text-[#111827] tracking-tight">
                What Our Clients Say
              </h2>

              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                Trusted by clients who value quality, precision and reliable
                engineering solutions.
              </p>
            </div>

            {/* Swiper */}
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: false,
                }}
                navigation={{
                  prevEl: ".review-prev",
                  nextEl: ".review-next",
                }}
                className="reviews-swiper "
              >
                {reviews.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="
                    relative
                    bg-white
                    rounded-[28px]
                    border
                    border-gray-100
                    shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                    px-7
                    py-8
                    md:px-12
                    md:py-12
                  "
                    >
                      {/* Quote Icon */}
                      <div
                        className="
                      absolute
                      top-7
                      right-7
                      md:top-10
                      md:right-10
                      w-12
                      h-12
                      rounded-full
                      bg-[#009999]/10
                      flex
                      items-center
                      justify-center
                    "
                      >
                        <Quote size={22} className="text-[#009999]" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-7">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={17}
                            className="fill-[#fbbf24] text-[#fbbf24]"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <blockquote
                        className="
                      text-[#111827]
                      text-xl
                      md:text-2xl
                      font-medium
                      max-w-3xl
                    "
                      >
                        “{item.quote}”
                      </blockquote>

                      {/* Client */}
                      <div className="flex items-center gap-4 mt-10">
                        {/* Avatar */}
                        <div
                          className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#009999]
                        text-white
                        flex
                        items-center
                        justify-center
                        font-semibold
                        text-lg
                      "
                        >
                          {item.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-[#111827]">
                            {item.name}
                          </p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-3 mt-2">
                <button
                  className="
                review-prev
                w-11
                h-11
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-[#009999]
                hover:text-white
                hover:border-[#009999]
                transition-all
                duration-300
              "
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  className="
                review-next
                w-11
                h-11
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-[#009999]
                hover:text-white
                hover:border-[#009999]
                transition-all
                duration-300
              "
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TestimonialSection;
