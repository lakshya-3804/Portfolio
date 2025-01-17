import React from "react";

const About = () => {
  return (
    <div className="mt-20 min-h-[500px]">
      <div
        role="status"
        class="space-y-8 flex flex-wrap-reverse justify-center md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-start md:justify-around md:w-[80%] m-auto md:flex-nowrap"
      >
        <div class="w-full bg-gray-900 text-gray-400 p-6 rounded-[30px] mx-5 text-[13px] ">

          <div class="text-start">
            <h1 className="md:text-[30px] pb-15">Hi There! 👋</h1>
          </div>

          <div class="text-start space-y-5">
            <h1 className="pb-15 md:text-[20px]">
              I’m a Frontend and Backend Developer and a passionate Competitive
              Programmer, constantly striving to build innovative solutions and
              tackle complex challenges.
            </h1>

            <h2 className=" pb-15 md:text-[18px] flex flex-col space-y-8">
              <div>
                <p className="text-[17px] md:text-[25px] font-bold">What I Do:</p>
                <ul className="list-disc">
                  <li>
                    <strong>Frontend Development:</strong> Creating dynamic and
                    responsive user interfaces with <strong>ReactJS</strong>.
                  </li>
                  <li>
                    <strong>Backend Development:</strong> Building robust APIs and
                    managing databases using <strong>ExpressJS</strong> and{" "}
                    <strong>MongoDB</strong>.
                  </li>
                </ul>
              </div>

              <div>
              <p className="text-[17px] md:text-[25px] font-bold ">Competitive Programming:</p>
              <ul className="list-disc">
                <li>
                  Actively participate on platforms like{" "}
                  <strong>Codeforces</strong> and <strong>CodeChef</strong>.
                </li>
                <li>
                  Achieved a <strong>commendable rating</strong>, reflecting my
                  problem-solving skills and persistence.
                </li>
              </ul>
              </div>

              <div>
              <p className="text-[17px] md:text-[25px] font-bold">Hobbies & Interests:</p>
              <ul className="list-disc">
                <li>
                  <strong>Music:</strong> Exploring new genres and revisiting
                  classics.
                </li>
                <li>
                  <strong>Sports:</strong> Engaging in team games and activities
                  that inspire collaboration and strategy.
                </li>
              </ul>
              </div>

              <p>
                I’m driven by curiosity, a love for coding, and the desire to
                continuously improve. Let’s collaborate to create impactful
                digital experiences!
              </p>
            </h2>

          </div>
        </div>
        <div class="">
          <img
            className="rounded-[50%] border-[5px] border-[gray] w-[300px] md:w-[600px] mb-10"
            src="https://img.freepik.com/premium-photo/software-engineer-digital-avatar-generative-ai_934475-8997.jpg"
            alt="developer"
          />
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default About;
