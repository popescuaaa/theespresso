import React from "react";
import Logo from "../assets/icons/Logo";
import { NavLink } from "react-router-dom";

const Landing = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="sticky top-0 z-50">
          <div>
            <div className="w-full bg-black  opacity-90 h-20 flex justify-between ">
              <div className="w-full lg:w-30/6 xl:w-full  h-full flex items-center px-4">
                <h1 className="text-lg text-white mr-5">Palm tree planner</h1>
                <div className="text-white hover:rotate-45">
                  <Logo w={10} h={10} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto border-1 border-sky-500">
              <NavLink to={"/dashboard"}>
                <h2 className="text-4xl font-bold sm:text-5xl">
                  Go to the app
                </h2>
              </NavLink>
            </div>
          </div>

          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" />
          </div>
        </aside>

        <div className="grid  place-items-center sm:mt-20">
          <img
            className="sm:w-96 w-48"
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
