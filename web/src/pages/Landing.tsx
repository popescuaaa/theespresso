import React from "react";

const Landing = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="sticky top-0 z-50">
          <div>
            <div className="w-full bg-black  opacity-90 h-20 flex justify-between ">
              <div className="w-full lg:w-30/6 xl:w-full  h-full flex items-center px-4 ">
                <img
                  className="rounded-lg w-32"
                  src="https://i.ibb.co/tQqTvrz/unipod.png"
                  alt="addify logo"
                />
              </div>

              <div className="w-full  h-full flex justify-end items-center">
                <a href="https://twitter.com/sahilnetic">
                  <button className="relative w-7 h-7 mr-2 focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
                    <svg
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                </a>
                &nbsp;
              </div>
            </div>
          </div>
        </div>

        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Download Now
                <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
              </h2>

              <a
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-rose-500 rounded-lg hover:opacity-75"
                href="https://twitter.com/sahilnetic"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </a>
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

        <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
          Lorem Ipsum Yojo
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">
          <div className="border border-2 shadow-lg rounded-lg py-20">
            Workspace 1
          </div>
          <div className="border border-2 shadow-lg rounded-lg py-20">
            Workspace 2
          </div>
          <div className="border border-2 shadow-lg rounded-lg py-20">
            Workspace 3
          </div>
          <div className="border border-2 shadow-lg rounded-lg py-20">
            Workspace 3
          </div>
          <div className="border border-2 shadow-lg rounded-lg py-20">
            Workspace 5
          </div>
          <div className="border border-2 shadow-lg rounded-lg py-20">
            Workspace 6
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
