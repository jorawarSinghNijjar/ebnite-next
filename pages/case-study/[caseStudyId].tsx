
import {useEffect, useState} from 'react'
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
import Article from '@/components/Article/Article';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PageData  {
  caseStudyId: string,
  labels:string[],
  heading: string,
  subHeading: string,
  productImage: string,
  article1:string,
  article2: string,
  testimonial:string,
  avatar:string,
  reviewer: string,
};

const CaseStudy: NextPageWithLayout = ({pageData}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const defaultPageData = {
  //   labels:[
  //     "Dashboard",
  //     "Fitness",
  //     "Cloud Storage"
  //   ],
  //   heading: "FitTrack Pro",
  //   subHeading: "A welcoming and diverse environment that fosters opportunities for personal growth",
  //   productImage: "/static/images/pages/case-study/product-1.png",
  //   article1: "fitTrackPro1",
  //   article2: "fitTrackPro2",
  //   testimonial:"Ebnite's FitTrack Pro transformed my fitness business, driving success and innovation.",
  //   avatar: "/static/images/pages/case-study/client-avatar.jpg",
  //   reviewer: "Ryan Reynolds, Managing Director of FitTrack Pro",
  // };

  const [showBookCallModal,setShowBookCallModal] = useState(false);
  // const [pageData,setPageData] = useState(defaultPageData);
  const router = useRouter();
  const { caseStudyId } = router.query;

  useEffect(() => {
    // Check if pageData is an empty array or has no elements
    if (!pageData || pageData.length === 0) {
      // Redirect to the home page on the client side
      router.push("/");
    }
  }, [pageData]);

  if(!pageData || pageData.length === 0) return null;
  
  return (
    <>
      <section className="w-full">
        <div
          className="w-full h-screen max-h-max md:max-h-[650px] relative"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #412728, #583432, #70423a, #875240, #9d6346, #af734a, #c0854e, #cf9852, #deae57, #eac65d, #f3de66, #f9f871)",
          }}
        >
          <div className="xl:max-w-[1460px] xl:mx-auto px-6 lg:px-20 xl:px-20 pt-40 lg:pt-60 relative z-10">
            <div className="flex justify-between flex-col md:flex-row">
              <div className="max-w-full md:max-w-[40%]">
                <div className="flex gap-2 flex-wrap mb-8 max-w-[300px]">
                  {pageData.labels.map((label:string) =>  <Tag label={label} key={label} />)}
                </div>

                <Heading3 className="text-white">{pageData.heading}</Heading3>
                <SubHeading2 className="text-white mb-2">
                 {pageData.subHeading}
                </SubHeading2>
              </div>
              <div className="max-w-full md:max-w-[50%]">
                <Image
                  src={pageData.productImage}
                  alt="testimonial"
                  width={1000}
                  height={700}
                  className="max-w-full max-h-[700px] object-cover  lg:-translate-y-20 lg:-translate-x-32"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-20 py-16 ">
        <div className="xl:max-w-[1460px] xl:mx-auto">
          <Article articleId={pageData.article1} />
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
            {pageData.testimonial}
          </Heading5>
        </div>
      </div>
      <div className="flex justify-center -translate-y-12 ">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Avatar imageSrc={pageData.avatar}></Avatar>
          </div>
          <p className="text-primary italic">
            {pageData.reviewer}
          </p>
        </div>
      </div>
      <section className="px-6 lg:px-20 py-16 ">
        <div className="xl:max-w-[1460px] xl:mx-auto">
        <Article articleId={pageData.article2} />
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {caseStudyId} = context.params as Params;
  console.log("context: ",caseStudyId)

  let pageData: PageData[] | null = null;
  
  // Api call to fetch case study data by caseStudyId
  try {
    const res = await fetch(`http://localhost:8080/api/case-studies/${caseStudyId}`)
    // const pageData: PageData[] = await res.json()
    pageData = await res.json();
    console.log("Hello------backend data - ",pageData)
    // const pageData = 1;
  } catch (error) {
    console.error(error)
  }
  
  return {
    props: {
      pageData,
    },
  }
}

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
