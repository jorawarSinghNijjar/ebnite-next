import Heading2 from "@/components/Headings/Heading2";
import SubHeading1 from "@/components/SubHeading/SubHeading2";
// import TwoColGrid from "@/components/TwoColGrid/TwoColGrid";
import { servicesCardList } from "@/data/servicesCard";
import { talkToUsCardList } from "@/data/talkToUsCard";
import Image from "next/image";
import { ReactElement, useState } from "react";

import SelectInput from "@/components/Input/SelectInput";
import TextArea from "@/components/Input/TextArea";
import TextInput from "@/components/Input/TextInput";
import Modal from "@/components/Modal/Modal";
import Portal from "@/components/Portal/Portal";
import TalkToUsModal from "@/components/TalkToUsModal";

import { useAppContext } from "@/context/AppContext";
import Head from "next/head";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import FilledButton from "./../components/Buttons/FilledButton";
import { NextPageWithLayout } from "./_app";

import Card from "@/components/Card/Card";
import Card2 from "@/components/Card/Card2";
import Footer from "@/components/Layout/Footer";
import NavbarHome from "@/components/Layout/NavbarHome";
import api from "@/lib/api";
import emailjs from "emailjs-com";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
require("dotenv").config();

const TwoColGrid = dynamic(() => import("@/components/TwoColGrid/TwoColGrid"), {
  ssr: false,
});

const getRandomIndexesOutOfArrLength = (
  requiredCount: number,
  arrayLength: number
) => {
  let indexes = [];
  let number = Math.floor(Math.random() * arrayLength);
  while (true) {
    let genNumber = Math.floor(Math.random() * arrayLength);
    // Avoid duplicate indexes
    if (genNumber !== number) {
      number = indexes.push(genNumber);
    }
    number = genNumber;

    if (indexes.length === requiredCount) return indexes;
  }
};

interface Props {
  caseStudies: CaseStudy[];
}

const Home: NextPageWithLayout<Props> = ({ caseStudies }: Props) => {
  const [showStepsVideoModal, setShowStepsVideoModal] = useState(false);
  const { showBookCallModal, setShowBookCallModal } = useAppContext();
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

  const renderCaseStudies = () => {
    const indexes = getRandomIndexesOutOfArrLength(2, caseStudies.length);
    console.log(indexes);
    return caseStudies
      .filter((caseStudy, index) => indexes.includes(index))
      .map(({ caseStudyId, productImage, heading, description }, index) => {
        return (
          <TwoColGrid
            key={index}
            caseStudyId={caseStudyId}
            category=""
            content={description}
            heading={heading}
            imageSrc={productImage}
            swapSides={index % 2 === 0}
          />
        );
      });
  };

  return (
    <>
      {/* Navigation */}

      {/* ---------------------------------------------Hero Section ----------------------------------*/}

      <video
        autoPlay
        loop
        muted
        id="hero-video"
        className="absolute -z-30 right-0 top-0 w-full h-full object-cover"
      >
        <source
          src="/static/videos/hero-video-hd.mp4"
          type="video/mp4"
        ></source>
      </video>
      {/* Video Overlay */}
      <div className="absolute -z-20 right-0 top-0 lg:h-screen w-screen bg-tertiary bg-opacity-40"></div>

      <section className="clear-both absolute z-10 max-w-full px-6 py-20 lg:px-20 lg:py-44 xl:py-48 h-full lg:h-screen left-0 top-0 flex flex-col justify-center bg-gradient-to-r from-primary lg:from-5% from-20% ">
        {/* Actual Content */}
        <div>
          <h1 className="text-slate-100 text-5xl lg:text-6xl 2xl:text-7xl w-full lg:w-2/3 mb-10">
            Custom Product & Software Development Focused On Your Success
          </h1>
          <FilledButton
            size="medium"
            className="bg-secondary text-slate-100 uppercase"
            onClick={() => setShowBookCallModal(true)}
          >
            Book a call
          </FilledButton>

          {showBookCallModal && (
            <Portal>
              <Modal
                show={showBookCallModal}
                onClose={() => setShowBookCallModal(false)}
                // width="80%"
                cancelInside
              >
                <TalkToUsModal />
              </Modal>
            </Portal>
          )}
        </div>
      </section>

      {/* ---------------------------------------------Services ----------------------------------*/}

      <section className="my-10 px-6 pt-10 lg:pt-36 lg:px-20">
        <div className="w-full lg:w-3/4 mx-auto text-center lg:mb-16 2xl:mb-32">
          <Heading2>Services</Heading2>
          <SubHeading1>
            We provide comprehensive services, covering all facets of your
            project, ensuring support at every stage
          </SubHeading1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {servicesCardList.map(({ imageSrc, title, description }, index) => (
            <Card
              key={index}
              imageSrc={imageSrc}
              title={title}
              description={description}
              className="items-center"
              textAlign="center"
              transition
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------Testimonials ----------------------------------*/}
      <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center max-w-full lg:max-w-1/2">
            <Image
              src="/static/images/client-testimonial.jpeg"
              alt="testimonial"
              width={700}
              height={300}
              className="max-w-full max-h-[400px] object-cover drop-shadow-2xl rounded-2xl "
            ></Image>
          </div>
          <div className="p-0">
            <Image
              className="mb-8"
              src="/static/images/quote-left.png"
              alt="quote-left"
              width={48}
              height={48}
            />
            <p className="font-normal text-2xl leading-relaxed mb-8 ">
              We&apos;re thrilled with Ebnite&apos;s work on the AMS project.
              Their dedication to our goals and professionalism set a new
              standard. Quality work, seamless user flow, and captivating
              designs have exceeded our expectations.
            </p>
            <p className="text-xl text-secondary mb-8">
              <span className="font-semibold">Jaspreet Singh</span> – Flour Mill
              , Owner
            </p>
            {/* <p className="text-5xl font-thin">COMPANY LOGO</p> */}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------Our Work ----------------------------------*/}
      <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
        <div className="w-full lg:w-3/4 mx-auto text-center lg:mb-16 2xl:mb-32">
          <Heading2>Our Work</Heading2>
          <SubHeading1>
            Since 2019, Ebnite helped many clients to reach their digital
            goals. Here are some success stories.
          </SubHeading1>
        </div>

        {renderCaseStudies()}
        {/* {caseStudies?.map(
          ({ caseStudyId, productImage, heading, description }, index, arr) => {
            // getRandomIndexesOutOfArrLength(2,arr.length));
            // const indexes = getRandomIndexesOutOfArrLength(2,arr.length));
              return (
                <TwoColGrid
                  key={index}
                  caseStudyId={caseStudyId}
                  category=""
                  content={description}
                  heading={heading}
                  imageSrc={productImage}
                  // swapSides={index }
                />

              );
            
          }
        )} */}

        {/* <TwoColGrid
          caseStudyId="1"
          imageSrc="/static/images/pages/home/works-4.png"
          category="DASHBOARD"
          heading="FitTrack Pro"
          content="Ebnite proudly presents its latest creation: a Responsive Fitness Dashboard App developed for a valued client. Designed with precision, this app effortlessly adapts to diverse devices, offering a consistent and user-friendly experience. Users can seamlessly monitor fitness progress, access personalized workouts, and gain health insights, all while ensuring data security through advanced encryption. Ebnite's innovation shines through in this dynamic solution, reflecting our commitment to excellence and client satisfaction."
        />
        <TwoColGrid
          caseStudyId="2"
          imageSrc="/static/images/pages/home/works-2.jpg"
          category="WEBSITE"
          heading="Immobiliaria"
          content="Developed by our team, this innovative Property Management App revolutionizes Immobiliaria's operations. Seamlessly monitor properties, tenant communication, and financial tasks across devices. Robust encryption ensures data security. Our dedication to excellence is evident in this app, streamlining real estate management for heightened efficiency and client satisfaction."
          swapSides
        /> */}
      </section>

      {/* ---------------------------------------------Let's talk ----------------------------------*/}
      <section className="relative pt-10 lg:pt-16 px-6 lg:px-20">
        <div className="w-full flex flex-row gap-12 flex-wrap justify-center lg:gap-8 lg:flex-nowrap lg:flex-row lg:justify-between">
          {talkToUsCardList.map(
            ({ imageSrc, title, description, buttonText }, index) => (
              <Card2
                key={index}
                imageSrc={imageSrc}
                title={title}
                description={description}
                buttonText={buttonText}
              />
            )
          )}
        </div>
      </section>

      {/* ---------------------------------------------Clients ----------------------------------*/}
      {/* <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
        <div className="w-full mx-auto text-center lg:w-3/4 ">
          <Heading2>Clients</Heading2>
          <SubHeading1>Great Companies make us grow every day.</SubHeading1>
        </div>

        <div className="max-w-full flex flex-row justify-between items-center gap-16 flex-wrap">
          {clientsLogoList.map(({ imageSrc, title }, index) => (
            <Image
              key={index}
              src={imageSrc}
              alt={title}
              width={250}
              height={200}
              className="mx-auto max-w-[100px] md:max-w-[200px] lg:max-w-[300px]"
            ></Image>
          ))}
        </div>
      </section> */}

      {/* ---------------------------------------------News ----------------------------------*/}
      {/* <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
        <div className="w-full mx-auto text-center lg:w-3/4 ">
          <Heading2>News</Heading2>
          <SubHeading1>Read the latest stories from our world.</SubHeading1>
        </div>
        <div
          className="grid grid-cols-[repeat(auto-fill,_minmax(320px,1fr))] gap-8 mb-16"
          id="masonry-grid"
        >
          {newsList.map(({ description, title, href }, index) => (
            <Card3
              key={index}
              title={title}
              description={description}
              href={href}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <OutlinedButton size="medium">See All News</OutlinedButton>
        </div>
      </section> */}

      {/* ---------------------------------------------Contact Us ----------------------------------*/}
      <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
        <div className="mx-auto text-left">
          <Heading2>Talk to us and get your project moving!</Heading2>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-16">
          <div className="w-full lg:w-1/2 font-medium text-black/[0.6] text-base leading-relaxed mb-8 ">
            <p className="text-base mb-8">
              This is exactly what will happen after you submit your form:
            </p>
            <div
              className="relative overflow-hidden max-w-full h-[200px] lg:max-w-[500px] lg:h-[300px] rounded-xl drop-shadow-2xl group mb-8"
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
                In Discovery Phase, we research, create, and meet weekly.
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
          <div className="w-full lg:w-1/2 md:pl-8">
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
                className="mb-8"
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
            </form>
          </div>
        </div>
      </section>
      {/* To Do */}
      {/* <ChatbotV1 /> */}
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>
          Ebnite - Empowering Businesses through Cutting-Edge Software
          Solutions!
        </title>
        <meta
          name="home"
          content="At Ebnite, we specialize in crafting cutting-edge Software-as-a-Service (SaaS) solutions that drive digital transformation and empower businesses to thrive in the modern digital landscape."
        />
      </Head>
      <div className="relative min-h-screen lg:h-screen w-screen">
        <NavbarHome />
      </div>
      <main className="xl:max-w-[1460px] xl:mx-auto">{page}</main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let caseStudies: CaseStudy[] | null = null;
  // Api call to fetch case study data by caseStudyId
  try {
    const res = await api.get("case-studies");
    caseStudies = res.data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      caseStudies,
    },
  };
};
