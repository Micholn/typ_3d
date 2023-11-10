import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { projects } from "../constants";

interface Tag {
  name: string;
  color: string;
}

interface Project {
  index: number;
  name: string;
  description: string;
  image: string;
  source_code_link: string;
  tags: Tag[];
}

const ProjectCard: React.FC<Project> = ({ index, name, description, image, source_code_link, tags, }) => {
  const tiltOptions: { max: number; scale: number; speed: number } = {
    max: 45,
    scale: 1,
    speed: 450,
  };

  const tiltProps: { tilt: typeof tiltOptions; className: string } = {
    tilt: tiltOptions,
    className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",
  };

  return ( 
    <motion.div variants={fadeIn({direction: "up", type: "spring", delay: index * 0.5, duration: 0.75})}>
      <Tilt
         {...tiltProps}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={()=> window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"            
            >
              <img 
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>


        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>


        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=> (
            <p
               key={`${name}-${tag.name}`}
               className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
};

const Works: React.FC = ()=> {
  return(
    <div>
       <motion.div variants={textVariant(0.7)}>
         <p className={styles.sectionSubText} >My Work</p>
         <h2 className={styles.sectionHeadText}>Projects.</h2>
       </motion.div>

       <div className="w-full flex">
          <motion.p
            variants={fadeIn({direction: "", type: "", delay: 0.1, duration: 1})}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
          </motion.p>
       </div>


       <div className="mt-20 flex flex-wrap gap-7">
         {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
         ))}
       </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");