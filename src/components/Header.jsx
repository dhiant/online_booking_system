import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

const Header = () => {
  // const headerStyle = {

  // };
  return (
    <header className="bg-primary text-white w-full md:max-w-[1080px] mx-auto">
      <div className="flex flex-wrap items-center text-white justify-between py-2">
        <div>
          <h2 className="text-2xl font-bold text-white">Booking.com</h2>
        </div>
        <div className="flex gap-x-6 flex-wrap items-center text-base">
          <button className="font-bold p-4">NPR</button>
          <button>
            <img
              src="https://cf.bstatic.com/static/img/flags/new/48-squared/us/fa2b2a0e643c840152ba856a8bb081c7ded40efa.png"
              alt="USA flag"
              className="rounded-full w-6 h-6"
            />
          </button>
          <button>
            <BsQuestionCircle className="w-6 h-8" />
          </button>
          <button className=" border-white border-2 px-4 py-2 font-medium text-sm leading-none">
            List your Property
          </button>
          <button className="bg-white text-primaryLight px-4 py-2 leading-none text-sm">
            Register
          </button>
          <button className="bg-white text-primaryLight px-4 py-2 leading-none text-sm">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;