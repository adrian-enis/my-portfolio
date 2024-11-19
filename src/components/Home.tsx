  import React from "react";
  import "../index.css"
  const Home = () => {
    return (
      <section className="flex flex-col justify-center items-center bg-slate-300  w-full mx-auto h-[100vh] ">
        <div className="animated-gradient"></div>
        <div className="absolute w-[100%] h-[100%] top-0 left-1">
          <svg
            className="bubble"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.6,-19.6C72.8,-6,51.9,18.4,26.7,36.6C1.6,54.9,-28,67,-46.7,55.5C-65.4,43.9,-73.3,8.8,-63.7,-10.9C-54.1,-30.5,-27.1,-34.7,2.1,-35.4C31.2,-36.1,62.4,-33.2,67.6,-19.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="bubble"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.5,-25.8C63.1,-5,72.4,21,63.4,36.7C54.4,52.4,27.2,57.7,5.5,54.5C-16.1,51.3,-32.3,39.6,-44.9,21.8C-57.5,4.1,-66.6,-19.8,-58.5,-37.4C-50.5,-55,-25.2,-66.3,-3.6,-64.2C18,-62.1,35.9,-46.6,49.5,-25.8Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="bubble"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.5,-28.6C68.5,-9.6,73.1,17.6,62.5,37.8C51.8,57.9,25.9,71,3.6,68.9C-18.6,66.7,-37.3,49.5,-49.1,28.7C-60.9,7.9,-65.9,-16.5,-56.5,-33.4C-47.2,-50.3,-23.6,-59.8,-1.2,-59.1C21.3,-58.4,42.6,-47.6,55.5,-28.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="bubble"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.6,-34.9C52.9,-15.9,45.4,3,35.4,15.2C25.3,27.3,12.7,32.7,-0.8,33.2C-14.3,33.7,-28.6,29.2,-34.2,19.7C-39.8,10.1,-36.6,-4.6,-29.5,-24.1C-22.3,-43.5,-11.2,-67.7,4.5,-70.3C20.1,-72.8,40.2,-53.8,46.6,-34.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="bubble"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.9,-37.6C74.6,-20.6,66.6,6.6,52.8,31.2C39,55.7,19.5,77.7,-2.5,79.1C-24.5,80.5,-49,61.5,-62.5,37C-76.1,12.6,-78.8,-17.2,-66.5,-35.7C-54.3,-54.1,-27.2,-61.3,0.2,-61.4C27.6,-61.5,55.1,-54.6,64.9,-37.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="z-10 text-center max-w-[90%]">
          <h1 className="font-bold text-6xl mb-2 md:text-8xl">Adrian Enis </h1>
          <h2 className="font-semibold text-4xl mb-2 md:text-6xl">
            Frontend Developer
          </h2>
          <div className="flex justify-center  text-lg gap-8 md:text-2xl  w-full mt-8">
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
              focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5
               py-4 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30
               me-2 mb-2"
            >
              <svg
                className="w-6 h-6 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Github
            </button>
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-7 h-7 me-2"
              >
                <path
                  fill="white"
                  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
                ></path>
              </svg>
              Sign in with Github
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default Home;
