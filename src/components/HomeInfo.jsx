import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-2'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Fatoma Hersi</span>
        👋
        <br />
        A Software Engineering student looking for an internship!
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='neo-brutalism-blue text-white py-2 px-4 mx-2 text-center rounded-md shadow-md'>
        <p className='sm:text-lg text-sm mb-4'>
          Passionate about coding, problem-solving, and real-world impact!
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn text-xs px-1.5 py-0.5'>
          More about me
          <img src={arrow} alt='arrow' className='w-2.5 h-2.5 object-contain ml-0.5' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='neo-brutalism-blue text-white py-2 px-4 mx-2 text-center rounded-md shadow-md'>
        <p className='sm:text-lg text-sm mb-4'>
          I've built several projects and I'm always learning and improving.
        </p>
        <Link to='/projects' className='neo-brutalism-white neo-btn text-xs px-1.5 py-0.5'>
          See my portofolio
          <img src={arrow} alt='arrow' className='w-2.5 h-2.5 object-contain ml-0.5' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='neo-brutalism-blue text-white py-2 px-4 mx-2 text-center rounded-md shadow-md'>
        <p className='sm:text-lg text-sm mb-4'>
          Let's connect — I'm open to internship opportunities!
        </p>
        <Link to='/contact' className='neo-brutalism-white neo-btn text-xs px-1.5 py-0.5'>
            Get in touch
        <img src={arrow} alt='arrow' className='w-2.5 h-2.5 object-contain ml-0.5' />
        </Link>

      </div>
    );
  }

  return null;
};

export default HomeInfo;
