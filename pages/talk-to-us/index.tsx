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
import { useState } from 'react';
import { ReactElement } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function TalkToUs() {
    const [showStepsVideoModal, setShowStepsVideoModal] = useState(false);
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
          <form action="" className="w-full">
            <TextInput type="text" placeholder="Name" className="mb-8" />
            <TextInput type="text" placeholder="Email" className="mb-8" />
            <TextArea placeholder="Project Description" className="mb-8" />
            <SelectInput name="budget-size" className="mb-8">
              <option value="" disabled defaultValue={1}>
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
        <main className="mt-32 xl:max-w-[1460px] xl:mx-auto">{page}</main>
        <Footer />
      </>
    );
  };