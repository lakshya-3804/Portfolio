import React from "react";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="mt-20 min-h-[500px]">
      <div
        role="status"
        class="space-y-8 flex flex-wrap-reverse justify-center md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center md:justify-around md:w-[80%] m-auto md:flex-nowrap"
      >
        <div class="w-full ">
          <div class="text-center md:text-start">
            <h1 className="text-[40px] pb-15">
              Hi There!{" "}
              
            </h1>
          </div>
          <div class="text-center md:text-start">
            <h1 className="text-[40px] pb-15">
              I'm <strong>Lakshya Prajapati</strong>
            </h1>
          </div>

          <div class="my-3 text-center md:text-start">
            <p className="text-[22px]">
            I'm a Full Stack Web Developer and Competitive Programmer with a passion for building efficient applications and solving challenging problems.
            </p>
          </div>

          <div class="text-[40px] font-bold text-center md:text-start">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Competitive Programmer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div class="">
          <img
            className="rounded-[50%] border-[5px] border-[gray] w-[300px] md:w-[600px]"
            src="https://img.freepik.com/premium-photo/software-engineer-digital-avatar-generative-ai_934475-8997.jpg"
            alt="developer"
          />
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Home;
