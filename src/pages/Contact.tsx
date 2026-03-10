import { useState } from "react";
import aboutHeroImg from "@/assets/about-hero.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // here you can send data to API
    alert("Message submitted!");
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt="Industrial factory"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm text-primary-foreground/60">
              <a href="/" className="hover:text-secondary transition-colors">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-secondary">Contact Us</span>
            </p>

            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-6xl">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col gap-12 ">
          {/* Top heading */}
          <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-7">
            <h3 className="text-[#8C8C8C] text-[14px] font-medium uppercase">
              Let's Talk About Next Adventure
            </h3>

            <h4 className="text-[#8C8C8C] text-[14px] font-medium uppercase">
              [ get in touch ]
            </h4>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left text */}
            <div className="pr-[10px] pt-3 flex flex-col gap-10 my-2">
              <div>
                <h3 className="text-black text-xl lg:text-4xl font-semibold leading-tight">
                  Feel free to reach out for collaborations or just to say
                  hello!
                </h3>
              </div>

              <div className="flex flex-col gap-7 my-2">
                <div>
                  <p className="text-[#8C8C8C] text-[14px] font-medium ">
                    How Can We Help?
                  </p>
                  <a
                    href="tel:919003253007"
                    target="_blank"
                    className="text-black font-medium underline underline-offset-[5px]"
                  >
                    +91 90032 53007
                  </a>
                </div>
                <div>
                  <p className="text-[#8C8C8C] text-[14px] font-medium ">
                    Email us
                  </p>
                  <a
                    className="text-black font-medium "
                    href="mailto:railmetdm@gmail.com"
                    target="_blank"
                  >
                    railmetdm@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[#8C8C8C] text-[14px] font-medium ">
                    Visit us
                  </p>
                  <p className="text-black font-medium ">
                    1st floor 12th, Avenue, Corporate office 20/1,
                    <br /> Vaigai Colony, Ashok Nagar, Chennai, Tamil Nadu
                    600083
                  </p>
                </div>
                <div>
                  <p className="text-[#8C8C8C] text-[14px] font-medium ">
                    Working time (Mon – Fri)
                  </p>
                  <p className="text-black font-medium ">09:00 am – 05:00pm</p>
                </div>
              </div>
              {/* <div>
                <div className="grid grid-cols-2 py-5 ">
                  <div>
                    <p className="text-[#8C8C8C] text-[14px] font-medium ">
                      How Can We Help?
                    </p>
                    <a
                      href="tel:919003253007"
                      target="_blank"
                      className="text-black font-medium underline underline-offset-[5px]"
                    >
                      +91 90032 53007
                    </a>
                  </div>
                  <div>
                    <p className="text-[#8C8C8C] text-[14px] font-medium ">
                      Visit us
                    </p>
                    <p className="text-black font-medium ">
                      1st floor 12th, Avenue, <br /> Corporate office 20/1,{" "}
                      <br /> Vaigai Colony, Ashok Nagar, <br /> Chennai, Tamil
                      Nadu 600083
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 py-5">
                  <div>
                    <p className="text-[#8C8C8C] text-[14px] font-medium ">
                      Email us
                    </p>
                    <a
                      className="text-black font-medium "
                      href="mailto:railmetdm@gmail.com"
                      target="_blank"
                    >
                      railmetdm@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[#8C8C8C] text-[14px] font-medium ">
                      Working time (Mon – Fri)
                    </p>
                    <p className="text-black font-medium ">
                      09:00 am – 05:00pm
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Form */}
            <div className="lg:p-10 p-5 border border-[#DCE0E3] rounded-2xl">
              <h3 className="text-xl lg:text-4xl font-semibold mb-6">
                Leave a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name*"
                  required
                  className="py-3 mb-6 text-sm lg:text-lg w-full outline-none border-b border-[#DCE0E3]"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email*"
                  required
                  className="py-3 mb-6 text-sm lg:text-lg w-full outline-none border-b border-[#DCE0E3]"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone*"
                  required
                  className="py-3 mb-6 text-sm lg:text-lg w-full outline-none border-b border-[#DCE0E3]"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="py-3 mb-6 text-sm lg:text-lg w-full outline-none border-b border-[#DCE0E3]"
                />

                <button
                  type="submit"
                  className="text-sm font-semibold py-3 px-8 rounded-full bg-[#FBE87E] hover:bg-yellow-300 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-screen-xl mx-auto pb-24 px-4 lg:px-0">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14961.623583430777!2d80.20002790961729!3d13.023714553345368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672aca3b1a91%3A0x2532a78faa274768!2sSenlogic%20Automation%20Private%20Limited%2C%20Chennai!5e1!3m2!1sen!2sin!4v1773144886758!5m2!1sen!2sin"
            className="border-0 w-full h-[500px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
