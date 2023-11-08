import { BallCanvas } from "./canvas";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

interface Technology {
  icon: string;
  name: string;
}

const Tech: React.FC =()=> {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology: Technology) => (
          <div className="w-28 h-28" key={technology.name}>
             <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");