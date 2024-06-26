import Image from "next/image";
import Heading2 from "../Headings/Heading2";
import Portal from "../Portal/Portal";
import Modal from "../Modal/Modal";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs"; //This is just the pop up modal.
import TextInput from "../Input/TextInput";
import TextArea from "../Input/TextArea";
import SelectInput from "../Input/SelectInput";
import FilledButton from "../Buttons/FilledButton";
import { useState } from "react";
import Heading3 from "../Headings/Heading3";
import Heading4 from "../Headings/Heading4";
import emailjs from "emailjs-com";
require("dotenv").config();
interface Props {}

const TalkToUsModal: React.FC<Props> = () => {
  console.log("EMAILJS_USER_ID:", process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
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
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "";
    console.log("Form submitted");
    console.log("Form data:", formData);
    //console.log("serviceId:", serviceId);
    //console.log("templateId:", templateId);
    //console.log("userId:", userId);
    console.log("EMAILJS_USER_ID:", process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
    console.log(
      "EMAILJS_SERVICE_ID:",
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    );
    console.log(
      "EMAILJS_TEMPLATE_ID:",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
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
    <section className="bg-white py-8 px-6 md:py-10 md:px-12 rounded-xl max-w-sm md:max-w-2xl max-h-[500px] 2xl:max-h-[600px]">
      <div className="mx-auto text-center">
        <Heading4>Talk to us and get your project moving!</Heading4>
      </div>

      <div className="w-full">
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col md:flex-row md:gap-6"
        >
          <div>
            <TextInput
              type="text"
              placeholder="Name"
              className="mb-4 md:mb-8"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextInput
              type="text"
              placeholder="Email"
              className="mb-4 md:mb-8"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextArea
              rows={3}
              placeholder=" What kind of project"
              className="mb-4 md:mb-8"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <SelectInput
              name="budget-size"
              className="mb-4 md:mb-8"
              value={formData.budget} // Add the 'value' attribute here
              onChange={handleSelectChange}
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
              className="mb-4 md:mb-8"
              name="source"
              value={formData.source}
              onChange={handleChange}
            />
            <FilledButton
              size="medium"
              className="bg-secondary text-slate-100 uppercase"
            >
              Book a call
            </FilledButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TalkToUsModal;
