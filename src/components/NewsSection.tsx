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
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top small labels */}
        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-400 mb-6">
          <span>Explore additional insights from us</span>
          <span>[ Our Blog ]</span>
        </div>

        {/* Title + button */}
        <div className="flex items-center justify-between mb-14">

          <h2 className="text-7xl font-extrabold flex items-end gap-3">
            Latest news
            <span className="w-3 h-3 bg-[#FBE87E]"></span>
          </h2>

          <button className="flex items-center gap-3 bg-[#FBE87E] px-6 py-3 rounded-full font-semibold">
            View All Posts
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
              <ArrowRight size={16} />
            </span>
          </button>

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