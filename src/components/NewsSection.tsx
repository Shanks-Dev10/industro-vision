import blogNuclear from "@/assets/blog-nuclear.webp";
import blogDatacenter from "@/assets/blog-datacenter.webp";
import blogAutomation from "@/assets/blog-automation.webp";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Metallurgy unveiled: Science behind stronger materials",
    category: "Uncategorized",
    date: "October 4, 2025",
    image: blogNuclear,
  },
  {
    title: "Data Center Cooling: How to Scale with Pace and Stability",
    category: "Social Media",
    date: "September 26, 2025",
    image: blogDatacenter,
  },
  {
    title: "Unlock Growth with Industrial Aftermarket Services",
    category: "Company Insights",
    date: "October 4, 2025",
    image: blogAutomation,
  },
];

const NewsSection = () => {
  return (
    <section className="py-5 md:py-24 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

        {/* Top small labels */}

        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
          <span>Explore additional insights from us</span>
          <span>[ Our Blog ]</span>
        </div>

        {/* Title + button */}

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
            Latest news
            <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
          </h2>

          <div className="flex justify-start md:justify-end items-center">
            <button className="flex items-center justify-end w-fit gap-3 bg-[#FBE87E] px-3 md:px-6 lg:px-6 py-3 rounded-full font-semibold hover:bg-[#0B2B3F] hover:text-white">
              View All Posts
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B2B3F] hover:bg-[#FBE87E] text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">

              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">

                <span className="bg-[#FBE87E] text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <span className="text-sm text-gray-500">
                  {post.date}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-xl font-bold leading-snug group-hover:text-gray-700 transition">
                {post.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NewsSection;