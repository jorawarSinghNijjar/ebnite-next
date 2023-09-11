import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import Image from "next/image";
import Heading6 from "@/components/Headings/Heading6";
import Heading4 from "@/components/Headings/Heading4";
import SubHeading2 from "@/components/SubHeading/SubHeading2";

const CaseStudy: NextPageWithLayout = () => {
  const router = useRouter();
  const { caseStudyId } = router.query;
  return (
    <>
      <section className="w-full">
        <div
          className="w-full h-screen md:max-h-[650px] relative"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #412728, #583432, #70423a, #875240, #9d6346, #af734a, #c0854e, #cf9852, #deae57, #eac65d, #f3de66, #f9f871)",
          }}
        >
          {/* <Image
            src="/static/images/pages/case-study/hero.jpg"
            alt="services"
            width={2560}
            height={750}
            className="absolute -z-20 w-screen h-screen md:max-h-[650px] object-cover object-top"
          /> */}

          <div className="xl:max-w-[1460px] xl:mx-auto px-6 lg:px-20 pt-40 lg:pt-60 relative z-10">
            <div className="flex">
              <div className="max-w-[50%]">
                <Heading4 className="text-white">FitTrack Pro</Heading4>
                <SubHeading2 className="text-white">
                  A welcoming and diverse environment that fosters opportunities
                  for personal growth.
                </SubHeading2>
              </div>
              <div className="max-w-[50%]">
                <Image
                  src="/static/images/pages/case-study/product-1.png"
                  alt="testimonial"
                  width={1000}
                  height={700}
                  className="max-w-full max-h-[700px] object-cover -scale-x-100 -translate-y-20 -translate-x-32"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
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
