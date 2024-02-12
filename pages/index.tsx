import Heading2 from "@/components/Headings/Heading2";
import SubHeading1 from "@/components/SubHeading/SubHeading2";
import TwoColGrid from "@/components/TwoColGrid/TwoColGrid";
import { servicesCardList } from "@/data/servicesCard";
import { talkToUsCardList } from "@/data/talkToUsCard";
import Image from "next/image";
import { ReactElement, useState } from "react";

import SelectInput from "@/components/Input/SelectInput";
import TextArea from "@/components/Input/TextArea";
import TextInput from "@/components/Input/TextInput";
import emailjs from "emailjs-com";
import Modal from "@/components/Modal/Modal";
import Portal from "@/components/Portal/Portal";
import TalkToUsModal from "@/components/TalkToUsModal";
import Card from "@/components/card/Card";
import Card2 from "@/components/card/Card2";
import Footer from "@/components/layout/Footer";
import NavbarHome from "@/components/layout/NavbarHome";
import { useAppContext } from "@/context/AppContext";
import Head from "next/head";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import FilledButton from "./../components/Buttons/FilledButton";
import { NextPageWithLayout } from "./_app";
import AppContext, { useAppContext } from "@/context/AppContext";

const Home: NextPageWithLayout = () => {
  const [showStepsVideoModal, setShowStepsVideoModal] = useState(false);
  // const [showBookCallModal, setShowBookCallModal] = useState(false);
  const {showBookCallModal, setShowBookCallModal} = useAppContext();
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
                width="45%"
                cancelInside
              >
                <TalkToUsModal />
              </Modal>
            </Portal>
          )}
        </div>
      </section>

      {/* ---------------------------------------------Services ----------------------------------*/}

      <section className="my-10 px-6 pt-10 lg:pt-32 lg:px-20">
        <div className="w-full lg:w-3/4 mx-auto text-center lg:mb-32">
          <Heading2>Services</Heading2>
          <SubHeading1>
            We can help you bring your product to life - whether its a Minimum
            Viable Product, UX/UI Services or help to scale your company.
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
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex items-center justify-center max-w-full lg:max-w-1/2">
            <Image
              src="/static/images/client-testimonial.jpg"
              alt="testimonial"
              width={700}
              height={300}
              className="rounded-2xl max-w-full drop-shadow-2xl"
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
              We are very happy to work with Ebnite. The collaboration goes far
              beyond a standard IT service: with Ebnite we have a sparring
              partner that challenges us in our product decisions and is truly
              passionate about the results developed. The level of
              professionalism and dedication is exceptional in this industry and
              we are eager to strengthen our collaboration in the future.
            </p>
            <p className="text-xl text-secondary mb-8">
              <span className="font-semibold">Carmine Tullio</span> – Univeris,
              CEO
            </p>
            {/* <p className="text-5xl font-thin">COMPANY LOGO</p> */}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------Our Work ----------------------------------*/}
      <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
        <div className="w-full lg:w-3/4 mx-auto text-center lg:mb-32">
          <Heading2>Our Work</Heading2>
          <SubHeading1>
            We can help you bring your product to life - whether it&#39;s a
            Minimum Viable Product, UX/UI Services or help to scale your
            company.
          </SubHeading1>
        </div>
        <TwoColGrid
          imageSrc="/static/images/pages/home/works-4.png"
          category="DASHBOARD"
          heading="FitTrack Pro"
          content="Ebnite proudly presents its latest creation: a Responsive Fitness Dashboard App developed for a valued client. Designed with precision, this app effortlessly adapts to diverse devices, offering a consistent and user-friendly experience. Users can seamlessly monitor fitness progress, access personalized workouts, and gain health insights, all while ensuring data security through advanced encryption. Ebnite's innovation shines through in this dynamic solution, reflecting our commitment to excellence and client satisfaction."
        />
        <TwoColGrid
          imageSrc="/static/images/pages/home/works-2.jpg"
          category="WEBSITE"
          heading="Immobiliaria"
          content="Developed by our team, this innovative Property Management App revolutionizes Immobiliaria's operations. Seamlessly monitor properties, tenant communication, and financial tasks across devices. Robust encryption ensures data security. Our dedication to excellence is evident in this app, streamlining real estate management for heightened efficiency and client satisfaction."
          swapSides
        />
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
