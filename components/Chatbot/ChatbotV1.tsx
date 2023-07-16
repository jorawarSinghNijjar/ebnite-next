import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import ChatBox from "./ChatBox";

const ChatbotV1 = () => {
  return (
    <div className="fixed bottom-10 right-10 w-[60px] h-[60px]">
      <input
        type="checkbox"
        className="fixed bottom-10 right-10 w-[60px] h-[60px] opacity-0 cursor-pointer peer/show z-10"
      />
      <div
        className="bg-lighter w-[0px] h-[0px] collapse fixed bottom-28 right-28 rounded-t-2xl rounded-bl-2xl drop-shadow-xl 
       peer-checked/show:w-[350px] peer-checked/show:h-[400px]  peer-checked/show:visible transition-all ease-in-out duration-500"
      >
        <ChatBox />
      </div>
      {/* <div className="block peer-checked/show:hidden">
        <Image
          src="/static/images/live-chat.png"
          alt="live-chat"
          width={70}
          height={70}
        />
      </div> */}
      <div className="fixed scale-100  peer-checked/show:scale-0 transition-transform duration-500 ease-in-out text-[60px] text-chatbot -z-10">
        <BsFillChatRightDotsFill />
      </div>
      <div className="fixed scale-0  peer-checked/show:scale-100 transition-transform duration-500 ease-in-out text-[60px] text-chatbot -z-10">
        <MdCancel />
      </div>
    </div>
  );
};

export default ChatbotV1;
