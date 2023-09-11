import Image from "next/image";
import Heading2 from "../Headings/Heading2";
import Portal from "../Portal/Portal";
import Modal from "../Modal/Modal";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import TextInput from "../Input/TextInput";
import TextArea from "../Input/TextArea";
import SelectInput from "../Input/SelectInput";
import FilledButton from "../Buttons/FilledButton";
import { useState } from "react";
import Heading3 from "../Headings/Heading3";
import Heading4 from "../Headings/Heading4";

interface Props {}

const TalkToUsModal: React.FC<Props> = () => {
  const [showStepsVideoModal, setShowStepsVideoModal] = useState(false);

  return (
    <section className="bg-white py-10 px-12 rounded-xl" >
      <div className="mx-auto text-center">
        <Heading4>Talk to us and get your project moving!</Heading4>
      </div>

      <div className="w-full">
        <form action="" className="w-full">
          <div className="flex gap-4">
            <TextInput type="text" placeholder="Name" className="mb-8" />
            <TextInput type="text" placeholder="Email" className="mb-8" />
          </div>

          <TextArea placeholder="Project Description" className="mb-8" />
          <div className="flex gap-4">
            <SelectInput name="budget-size" className="mb-8">
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
            />
          </div>

          <FilledButton
            size="small"
            className="bg-secondary text-slate-100 uppercase w-full"
          >
            Book a call
          </FilledButton>
        </form>
      </div>
    </section>
  );
};

export default TalkToUsModal;
