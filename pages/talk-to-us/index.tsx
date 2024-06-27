import FilledButton from "@/components/Buttons/FilledButton";
import Heading2 from "@/components/Headings/Heading2";
import SelectInput from "@/components/Input/SelectInput";
import TextArea from "@/components/Input/TextArea";
import TextInput from "@/components/Input/TextInput";
import Modal from "@/components/Modal/Modal";
import Portal from "@/components/Portal/Portal";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import { useState } from "react";
import { ReactElement } from "react";
import Navbar from "@/components/Layout/Navbar"; //talk to us page
import Footer from "@/components/Layout/Footer";
import emailjs from "emailjs-com";
import React, { ChangeEvent } from "react";
require("dotenv").config();
function TalkToUs() {
  const [showStepsVideoModal, setShowStepsVideoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    source: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name}, New value: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, budget: e.target.value });
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
    const userId = process.env.REACT_APP_EMAILJS_USER_ID ?? "";
    console.log("Form submitted");
    console.log("Form data:", formData);
    //console.log("serviceId:", serviceId);
    //console.log("templateId:", templateId);
    //console.log("userId:", userId);
    console.log("EMAILJS_USER_ID:", process.env.REACT_APP_EMAILJS_USER_ID);
    console.log(
      "EMAILJS_SERVICE_ID:",
      process.env.REACT_APP_EMAILJS_SERVICE_ID
    );
    console.log(
      "EMAILJS_TEMPLATE_ID:",
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    );

    try {
      if (
        formData.name.trim() === "" ||
        formData.email.trim() === "" ||
        formData.message.trim() === "" ||
        formData.budget.trim() === "" ||
        formData.source.trim() === ""
      ) {
        alert("Please fill out all the fields before submitting the form.");
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
      );
      setFormData({
        name: "",
        email: "",
        message: "",
        budget: "",
        source: "",
      });
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };
  return (
    <section className="relative pt-10 px-6 lg:px-20">
      <div className="mx-auto text-left">
        <Heading2>Talk to us and get your project moving!</Heading2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-16">
        <div className="w-full lg:w-1/2 font-medium text-black/[0.6] text-base leading-relaxed mb-8 ">
          <p className="text-base mb-8">
            This is exactly what will happen after you submit your form:
          </p>
          <div
            className="relative overflow-hidden max-w-[300px] h-[200px] lg:max-w-[500px] lg:h-[300px] rounded-xl drop-shadow-2xl group mb-8"
            onClick={() => setShowStepsVideoModal(true)}
          >
            <Image
              src="/static/images/pages/home/process.jpg"
              alt="testimonial"
              fill
              object-fit="cover"
              // width={500}
              // height={300}
              className="absolute transition ease-in-out duration-700 group-hover:scale-125"
            ></Image>
            {showStepsVideoModal && (
              <Portal>
                <Modal
                  show={showStepsVideoModal}
                  onClose={() => setShowStepsVideoModal(false)}
                  width="50%"
                >
                  <video
                    autoPlay
                    controls
                    id="submit-form-video"
                    className="w-full h-full"
                  >
                    <source
                      src="/static/videos/after-submit-form.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                  {/* <iframe width="320" height="500" src="https://biteable.com/watch/embed/3988067/eecdb400a275260e5747c2e9f8ee49df?autoplay=true" allowFullScreen allow="autoplay"
                  className="w-full min-h-[500px] overflow-hidden border-none"
                  ></iframe> */}
                </Modal>
              </Portal>
            )}

            <div className="absolute bg-tertiary w-full h-full opacity-25 cursor-pointer"></div>
            <AiFillPlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-primary cursor-pointer" />
          </div>

          <ul>
            <li className="mb-4 flex">
              <BsArrowReturnRight className="text-2xl mr-4" />
              In Discovery Phase, we research,create, and meet weekly.
            </li>
            <li className="mb-4 flex">
              <BsArrowReturnRight className="text-2xl mr-4" />
              Coding begins, encompassing front-end, back-end, and CMS.
            </li>
            <li className="mb-4 flex">
              <BsArrowReturnRight className="text-2xl mr-4" />
              Launch day ensures final fixes, delivering a fully functional,
              stunning website.
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8">
          <form onSubmit={handleFormSubmit} className="w-full">
            <TextInput
              type="text"
              placeholder="Name"
              className="mb-8"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextInput
              type="text"
              placeholder="Email"
              className="mb-8"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextArea
              placeholder=" What kind of project"
              className="mb-8"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <SelectInput
              name="budget-size"
              className="mb-8"
              value={formData.budget} // Add the 'value' attribute here
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            >
              <option value="" disabled selected>
                Budget Size
              </option>
              <option value="lt-5k">Less than 5k</option>
              <option value="5k-10k">5k - 10k</option>
              <option value="10k-20k">10k - 20k</option>
              <option value="20k+">20k +</option>
            </SelectInput>
            <TextInput
              type="text"
              placeholder="How did you hear about us?"
              className="mb-8"
              name="source"
              value={formData.source}
              onChange={(e) =>
                setFormData({ ...formData, source: e.target.value })
              }
            />
            <FilledButton
              size="medium"
              className="bg-secondary text-slate-100 uppercase"
            >
              Book a call
            </FilledButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TalkToUs;

TalkToUs.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <main className="mt-44 xl:max-w-[1460px] xl:mx-auto">{page}</main>
      <Footer />
    </>
  );
};
