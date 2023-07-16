import { FaUserCircle } from "react-icons/fa";

const ChatBox = () => {
  return (
    <div className="w-full h-full px-5 pt-8">
      <div className="">
        <div className="flex">
          <FaUserCircle className="text-4xl text-tertiary min-w-[40px]" />
          <div className="relative bg-light p-2 text-sm mt-8 rounded-b-lg rounded-tr-lg">
            Proident ex laborum exercitation anim eiusmod Lorem minim excepteur
            sint non do dolore.
            <div className="text-xs absolute -bottom-5">1 min ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
