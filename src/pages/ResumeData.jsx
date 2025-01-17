import linkedInimg from '../assets/icons8-linkedin-50.png';
import gitHubimg from '../assets/icons8-github-96.png';
import iiitlogo from '../assets/Final_Logo_IIITL.png';
import kvlogo from '../assets/kv.png';
import srilogo from '../assets/sr.jpg';
import c from '../assets/icons8-c-programming-96.png';
import cpp from '../assets/icons8-c++-96.png';
import java from '../assets/icons8-java-96.png';
import python from '../assets/icons8-python-96.png';
import bs from '../assets/icons8-bash-100.png';
import rct from '../assets/icons8-react-a-javascript-library-for-building-user-interfaces-96.png';
import mongo from '../assets/mongo.png';
import exp from '../assets/icons8-express-js-80.png';
import rdx from '../assets/icons8-redux-96.png';
import js from '../assets/icons8-javascript-96.png';
import htm from '../assets/icons8-html-96.png';
import css from '../assets/icons8-css-96.png';
import sq from '../assets/icons8-sql-64.png';
import gt from '../assets/icons8-git-96.png';
import vs from '../assets/icons8-vs-code-96.png';
import netlif from '../assets/netlify.png';
import heroku from '../assets/icons8-heroku-96.png';

import { Link } from 'react-router-dom';

const projData = [
    {
        name: 'Autonix',
        desc: ' A collaborative project aimed at simplifying the search for automobile spare parts and services. The platform offers a vast variety of options and ensures 24/7 availability, providing users with a seamless and convenient experience for their automotive needs.',
        tech: 'JavaScript, ReactJS, HTML , CSS, Tailwind CSS',
        code: 'https://github.com/lakshya-3804/AutonixRouting.git',
    },
    {
        name:'MERN-Auth',
        desc:'A full-stack web application built using the MERN stack to provide secure user authentication. The project allows users to sign up or log in and access their personal profiles, utilizing JWT-based session management and hashed passwords for enhanced security.',
        tech:'JavaScript, ReactJS, Tailwind CSS, ExpressJS, MongoDB, JWT, Redux',
        code:'https://github.com/lakshya-3804/MERNAuth.git',
    }
];
    


const dataObj = {


    'Profile': {
        content: 
        <div className="text-white flex flex-col h-[100%] w-[100%]">
            <p className="text-[12px] lg:text-[2rem] md:text-[1.4rem] mb-3">Name - Lakshya Prajapati</p>
            <p className="text-[12px] lg:text-[2rem] md:text-[1.4rem] mb-3">Email - lakshyaiffco.prajapati@gmail.com</p>
            <p className="text-[12px] lg:text-[1.7rem] md:text-[1.2rem] mb-3 text-[wheat]">
                I'm a Full Stack Web Developer and Competitive Programmer with a passion for building efficient applications and solving challenging problems.
            </p>
            <div className='flex gap-x-4 mt-auto'>
                <Link to="https://in.linkedin.com/in/lakshya-prajapati-877b22289" target='_blank'>
                    <img src={linkedInimg} className='w-8 sm:w-12'></img>
                </Link>
                <Link to="https://github.com/lakshya-3804" target='_blank'>
                    <img src={gitHubimg} className='w-8 sm:w-12'></img>
                </Link>
            </div>
        </div>
    },







    'Projects': {
        content:
        <div className='flex flex-col gap-y-6 text-gray-100'>
            {projData.map((item) => (
                <div>
                    <ul className='list-disc'>
                        <li>
                            <h3 className='text-[18px] md:text-[30px] font-bold mb-1' >{item.name} <a href={item.code} target='_blank' alt={item.name}>🔗</a> </h3>
                            <p className='text-[13px] md:text-[20px] mb-2 text-gray-300'>{item.desc}</p>
                            <p className='text-[15px] md:text-[22px]'>Tech Stack - {item.tech}</p>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    },






    'Achievements': {
        content:
        <div className='w-full h-full text-gray-200 lg:text-[18px] md:text-[15px] text-[13px]'>
            <h2 className='text-2xl md:text-4xl mb-3 font-bold' >Achievements</h2>
            <ul className='list-disc flex flex-col gap-y-2 pl-5'>
                <li>Pupil on CodeForces (max rating : 1325)  <a href='https://codeforces.com/profile/lakshya_3804'>🔗</a> </li>
                <li>3-star coder on CodeChef (max rating : 1671)  <a href='https://www.codechef.com/users/lakshya_3804'>🔗</a> </li>
                <li>Secured Global Rank 156 in Starters 145 Division 3 - CodeChef</li>
                <li>Secured Global Rank 562 in Starters 160 Division 3 - CodeChef</li>
                <li>Qualified Round-1 of Flipkart Grid 6.0 - Software Development track <a href='https://unstop.com/certificate-preview/904c0098-340b-475a-a8d1-6c564450a8d0'>🔗</a> </li>
                <li>Qualified for Round 2 in Hack-o-Fiesta '23</li>
                <li>My team secured 3rd rank in Fresher Cup Coding Contest in College , competing with 200+ students</li>
                <li>Made it to top 7% waitlist of AlgoUniversity Technology Fellowship Stage-2  <a href='https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/lakshya-prajapati.png'>🔗</a> </li>
            </ul>
        </div>
    },







    'Education': {
        content:
        <div className='h-full flex flex-col justify-around text-gray-200 lg:text-[17px] md:text-[15px] text-[13px] gap-y-4'>
            <h2 className='text-2xl md:text-4xl mb-3 font-bold' >Education</h2>
            <div className='flex gap-x-4 items-center'>
                <img src={iiitlogo} className='w-[60px] h-[50px] sm:w-[100px] sm:h-[90px] bg-white rounded-[5px]'></img>
                <div>
                    <h3>IIIT Lucknow</h3>
                    <p>BTech - Computer Science</p>
                    <p>2023-2027</p>
                </div>
            </div>
            <div className='flex gap-x-4 items-center'>
                <img src={kvlogo} className='w-[60px] h-[50px] sm:w-[100px] sm:h-[90px] rounded-[5px]'></img>
                <div>
                    <h3>Kendriya Vidyalaya IFFCO</h3>
                    <p>CBSE</p>
                    <p>Grade : XII-94%</p>
                    <p>2023-2027</p>
                </div>
            </div>
            <div className='flex gap-x-4 items-center'>
                <img src={srilogo} className='w-[60px] h-[50px] sm:w-[100px] sm:h-[90px] rounded-[5px]'></img>
                <div>
                    <h3>S.R.International Bareilly</h3>
                    <p>CBSE</p>
                    <p>Grade : X-95%</p>
                    <p>2023-2027</p>
                </div>
            </div>
        </div>
    },






    'Skills': {
        content:
        <div className='h-full flex flex-col justify-around text-gray-200 lg:text-[25px] md:text-[20px] text-[18px] gap-y-4'>
            <h2 className='text-2xl md:text-4xl mb-3 font-bold' >Skills</h2>
            <h3 className='font-bold underline'>Languages</h3>
            <div className='flex gap-x-4 items-center flex-wrap gap-y-2'>
                <img src={c} className='w-10 md:w-11 lg:w-12'></img>
                <img src={cpp} className='w-10 md:w-11 lg:w-12'></img>
                <img src={python} className='w-10 md:w-11 lg:w-12'></img>
                <img src={java} className='w-10 md:w-11 lg:w-12'></img>
                <img src={bs} className='w-10 md:w-11 lg:w-12'></img>
            </div>

            <h3 className='font-bold underline'>Coursework </h3>
            <div className='flex gap-x-6 items-center flex-wrap text-[15px] sm:text-[18px]'>
                <p>DSA</p>
                <p>DBMS</p>
                <p>OS</p>
                <p>OOPs</p>
            </div>

            <h3 className='font-bold underline'>Frameworks & Tech </h3>
            <div className='flex gap-x-4 items-center flex-wrap gap-y-2 content-start'>
                <img src={rct} className='w-10 md:w-11 lg:w-12'></img>
                <img src={mongo} className='w-10 md:w-11 lg:w-12'></img>
                <img src={exp} className='w-10 md:w-11 lg:w-12'></img>
                <img src={rdx} className='w-10 md:w-11 lg:w-12'></img>
                <img src={js} className='w-10 md:w-11 lg:w-12'></img>
                <img src={htm} className='w-10 md:w-11 lg:w-12'></img>
                <img src={css} className='w-10 md:w-11 lg:w-12'></img>
                <img src={sq} className='w-10 md:w-11 lg:w-12'></img>
            </div>

            <h3 className='font-bold underline'>Tools </h3>
            <div className='flex gap-x-4 items-center flex-wrap gap-y-2'>
                <img src={gt} className='w-10 md:w-11 lg:w-12'></img>
                <img src={gitHubimg} className='w-10 md:w-11 lg:w-12'></img>
                <img src={vs} className='w-10 md:w-11 lg:w-12'></img>
                <img src={netlif} className='w-10 md:w-11 lg:w-12'></img>
                <img src={heroku} className='w-10 md:w-11 lg:w-12'></img>
            </div>
            
        </div>
    }
};

export default dataObj;