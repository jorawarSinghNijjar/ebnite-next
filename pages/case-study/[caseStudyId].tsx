
import {useState} from 'react'
import Avatar from "@/components/Avatar";
import FilledButton from "@/components/Buttons/FilledButton";
import Heading3 from "@/components/Headings/Heading3";
import Heading5 from "@/components/Headings/Heading5";
import SubHeading2 from "@/components/SubHeading/SubHeading2";
import Tag from "@/components/Tag";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Portal from '@/components/Portal/Portal';
import Modal from '@/components/Modal/Modal';
import TalkToUsModal from '@/components/TalkToUsModal';

const CaseStudy: NextPageWithLayout = () => {
  const [showBookCallModal,setShowBookCallModal] = useState(false);
  const router = useRouter();
  const { caseStudyId } = router.query;
  return (
    <>
      <section className="w-full">
        <div
          className="w-full max-h-[500px] md:max-h-[650px] relative"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #412728, #583432, #70423a, #875240, #9d6346, #af734a, #c0854e, #cf9852, #deae57, #eac65d, #f3de66, #f9f871)",
          }}
        >
          <div className="xl:max-w-[1460px] xl:mx-auto px-6 lg:px-20 xl:px-20 relative z-10">
            <div className="flex md:justify-between flex-col items-center md:items-start gap-2 md:flex-row">
              <div className="w-[40%]">
                <div className="flex gap-2 flex-wrap mb-4 lg:mb-8 max-w-[300px]">
                  <Tag label="Dashboard" />
                  <Tag label="Fitness" />
                  <Tag label="Cloud Storage" />
                </div>

                <Heading3 className="text-white">FitTrack Pro</Heading3>
                <SubHeading2 className="text-white mb-2">
                  A welcoming and diverse environment that fosters opportunities
                  for personal growth.
                </SubHeading2>
              </div>
              <div className="w-[50%]">
                <Image
                  src="/static/images/pages/case-study/product-1.png"
                  alt="testimonial"
                  width={1000}
                  height={700}
                  className="max-w-full h-full lg:object-cover -scale-x-100"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-20 py-16 ">
        <div className="xl:max-w-[1460px] xl:mx-auto">
          <article className="prose lg:prose-xl mx-auto">
            <h2>Introducing FitTrack Pro</h2>
            <p>
              We are thrilled to introduce FitTrack Pro, a cutting-edge
              Responsive Fitness Dashboard App meticulously developed by Ebnite
              for our esteemed client. FitTrack Pro isn&apos;t just another
              fitness app; it&apos;s a revolution in fitness tracking and
              personal wellness management. This application has been
              painstakingly designed to provide a seamless user experience
              across a wide range of devices, ensuring that users can
              effortlessly monitor their fitness progress, access personalized
              workout plans, and gain invaluable health insights. Our unwavering
              commitment to data security is reflected in the advanced
              encryption measures we&apos;ve implemented, ensuring that user
              information remains private and protected.
            </p>

            <h2>Powered by Modern Technology</h2>
            <p>
              FitTrack Pro leverages the power of modern technology, combining
              React, MongoDB, AWS, Firebase, and Node.js to create a robust and
              feature-rich fitness application that stands out in the crowded
              fitness app market.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Multi-Platform Adaptability:</strong> FitTrack Pro
                excels in offering a seamless and exceptional user experience
                across iOS, Android, and web platforms.
              </li>
              <li>
                <strong>Enhanced Data Privacy & Security:</strong> We take data
                security seriously, implementing state-of-the-art encryption and
                security measures to protect user data and ensure compliance
                with industry standards.
              </li>
              <li>
                <strong>Personalized Fitness Plans:</strong> FitTrack Pro
                introduces a dynamic workout recommendation engine, crafting
                fitness plans tailored to individual goals and progress
                tracking.
              </li>
              <li>
                <strong>Real-Time Health Metrics:</strong> Users gain instant
                access to real-time fitness metrics, empowering them to monitor
                their progress and make informed decisions on their health
                journey.
              </li>
              <li>
                <strong>User Engagement Features:</strong> FitTrack Pro boosts
                motivation through social sharing, achievement badges, and
                exciting challenges, keeping users engaged and committed to
                their fitness goals.
              </li>
              <li>
                <strong>Seamless Third-Party Integrations:</strong> FitTrack Pro
                seamlessly integrates with popular fitness equipment and
                services, allowing users to effortlessly sync their data for a
                comprehensive fitness experience.
              </li>
              <li>
                <strong>Client Collaboration:</strong> Our partnership with the
                client was built on collaboration, ensuring their vision was not
                only realized but exceeded in every aspect of the application.
              </li>
              <li>
                <strong>Scalability and Peak Performance:</strong> FitTrack
                Pro&apos;s architecture has been meticulously engineered to
                handle increased user loads and facilitate future expansion,
                maintaining high performance during peak usage.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> We value user feedback
                and have implemented a robust feedback mechanism to collect
                suggestions, enabling ongoing enhancements and feature additions
                for an ever-evolving fitness experience.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <div
        className="relative w-full h-[350px] md:h-[250px]"
      >
         <Image
            src="/static/images/pages/case-study/hero.jpg"
            alt="services"
            width={2560}
            height={250}
            className="absolute -z-20 w-screen h-[350px] md:h-[250px] object-cover"
          />

        <div className="xl:max-w-[1460px] xl:mx-auto px-6 lg:px-20 h-full flex justify-start items-center">
          <Heading5 className="text-white">
            &quot;Ebnite&apos;s FitTrack Pro transformed my fitness business,
            driving success and innovation.&quot;
          </Heading5>
        </div>
      </div>
      <div className="flex justify-center -translate-y-12 ">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Avatar imageSrc="/static/images/pages/case-study/client-avatar.jpg"></Avatar>
          </div>
          <p className="text-primary italic">
            Ryan Reynolds, Managing Director of FitTrack Pro
          </p>
        </div>
      </div>
      <section className="px-6 lg:px-20 py-16 ">
        <div className="xl:max-w-[1460px] xl:mx-auto">
          <article className="prose lg:prose-xl mx-auto">
            <h2>About Our Visionary Client</h2>
            <p>
              FitTrack Pro was developed for a visionary client who recognized
              the need for a fitness dashboard that caters to diverse user
              needs. With FitTrack Pro, users can seamlessly monitor their
              fitness progress, access personalized workouts, and gain health
              insights, all within one user-friendly platform.
            </p>

            <h2>Our Journey to FitTrack Pro</h2>
            <p>
              Our journey to create FitTrack Pro was marked by dedication and
              innovation. We meticulously crafted a responsive fitness dashboard
              that adapts effortlessly to various devices, setting new standards
              in user experience and fitness tracking.
            </p>

            <h2>Delivering Excellence</h2>
            <p>
              FitTrack Pro was delivered to our client on time and within
              budget. This state-of-the-art fitness dashboard automates a wide
              range of fitness operations, including tracking fitness progress,
              generating personalized workout plans, and providing real-time
              health metrics. FitTrack Pro simplifies fitness journeys while
              offering unparalleled flexibility and configurability.
            </p>

            <h2>Impactful Results</h2>
            <p>
              FitTrack Pro has made a profound impact in the fitness industry,
              thanks to its competitive edge over existing solutions. Our
              commitment to clear communication with our client throughout the
              development process ensured that they fully understood the
              strengths and capabilities of FitTrack Pro, enabling them to
              market the product with confidence.
              <br />
              <br />
              FitTrack Pro has been embraced across various fitness industries,
              eliminating the need for additional software development and
              resulting in substantial cost savings for both our client and
              their users. The positive reception has led to valuable user
              suggestions for further enhancing the fitness experience, which we
              are actively pursuing.
              <br />
              <br />
              FitTrack Pro&apos;s efficiency in simplifying fitness journeys has
              opened doors to future business opportunities, showcasing
              Ebnite&apos;s dedication to excellence and client satisfaction.
            </p>
          </article>
        </div>
      </section>
      <div
        className="w-full relative"
      >
        <div className="flex flex-col justify-center items-center gap-6 py-32">
          <Heading3 className="text-tertiary text-center">Want a project that matches these criteria?</Heading3>
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
      </div>
    </>
  );
};

export default CaseStudy;

CaseStudy.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <main className="">{page}</main>
      <Footer />
    </>
  );
};
