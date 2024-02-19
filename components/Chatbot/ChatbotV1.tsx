import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import ChatBox from "./ChatBox";
import { useState } from "react";

const ChatbotV1 = () => {
  const [showChatBox, setShowChatBox] = useState(false)
  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 w-[60px] h-[60px] z-10">
      <input
        type="checkbox"
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 w-[60px] h-[60px] opacity-0 cursor-pointer peer/show z-10"
        checked={showChatBox}
        onChange={(e) => setShowChatBox(!showChatBox)}
      />
      <div
        className="bg-lighter w-[0px] h-[0px] collapse fixed bottom-20 right-16 md:bottom-28 md:right-28 rounded-t-2xl rounded-bl-2xl drop-shadow-xl 
        peer-checked/show:w-[290px] md:peer-checked/show:w-[350px] peer-checked/show:h-[400px] peer-checked/show:visible transition-all ease-in-out duration-300"
      >
        {showChatBox && <ChatBox />}
        
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
