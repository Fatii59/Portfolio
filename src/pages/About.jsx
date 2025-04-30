import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Fatoma Hersi
        </span>{" "}
        👋
      </h1>

      <div className='mt-4 flex flex-col gap-2 text-slate-500 text-m leading-relaxed max-w-2xl'>
        <p>
          Software engineering student based in Aarhus, currently looking for an internship
          in Aarhus or Copenhagen. I enjoy learning by building and love turning ideas into
          real, working code with others.
        </p>
      </div>

      <div className='py-10 flex flex-col mt-1 pb-2'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-12 w-full flex flex-wrap justify-center gap-10'>
          {skills.map((skill) => (
            <div className='block-container w-16 h-16' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-2/5 h-2/5 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-4 flex flex-col gap-2 text-slate-500 text-m max-w-2xl'>
          <p>
            I’ve been helping others learn as a teaching assistant and tutor at my school—
            it's taught me a lot and pushed me to grow. Here’s a quick look at what I’ve
            been up to:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.title}-${experience.date}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-base font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-sm'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-4 list-disc ml-5 space-y-1'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
