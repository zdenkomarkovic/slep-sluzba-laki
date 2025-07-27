import { FaViber } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Telefoni = () => {
  return (
    <div className={`fixed top-[50vh] right-4 z-50`}>
      <div className={`text-white z-20 flex flex-col gap-1`}>
        <a href="viber://contact?number=%2B381601800700" className=" ">
          <FaViber className="bg-purple-600  rounded-lg w-7 h-7 hover:scale-110 p-1 " />
        </a>
        <a href="https://wa.me/381601800700" className="">
          <BsWhatsapp className="bg-green-700  rounded-lg w-7 h-7 hover:scale-110 p-1 " />
        </a>
      </div>
    </div>
  );
};

export default Telefoni;
