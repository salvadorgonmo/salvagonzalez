import { StackLogoNames, TechStackLogo } from "./TechStackLogo";
import MedalLogo from "../../../assets/logos/medal.png";

interface JobDescriptionProps {
  dateRange: string;
  locationText: string;
  companyName: string;
  positionName: string;
  jobDescription: string;
  isCurrentJob?: boolean;
  responsibilities: Array<string>;
  achievements: Array<string>;
  stack: Array<string>;
}

export const JobDescription = ({
  companyName,
  isCurrentJob = false,
  responsibilities,
  achievements,
  stack,
  positionName,
}: JobDescriptionProps) => {
  return (
    <div className="max-w-xs mt-3 px-6 w-full">
      <div className=" col-span-3">
        <div className="flex items-center">
          <h3 className="text-lato text-md">{companyName}</h3>
          {isCurrentJob && (
            <div className="ml-2 bg-blue-200 text-lato text-blue-800 rounded-full px-2 text-xs font-semibold">
              Current job
            </div>
          )}
          {/* <div className='text-montserrat'>
            <p className='text-sm '>{dateRange}</p>
            <p className='text-xs'>{locationText}</p>
          </div> */}
        </div>

        <h4 className="text-lato text-sm">{positionName}</h4>
        <div className="text-lato mt-1">
          <p className="text-xs">Responsibilities:</p>

          <ul className="list-disc" style={{ fontSize: "10px" }}>
            {responsibilities.map((responsibility: string) => (
              <li>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="text-lato mt-2" style={{ fontSize: "10px" }}>
          <div className="flex">
            <p className="text-xs">Achievements:</p>

            <img
              alt=""
              className="ml-1"
              src={MedalLogo}
              style={{ height: "25px", width: "20px" }}
            />
          </div>

          <ul className="list-disc">
            {achievements.map((achievement: string) => (
              <li>{achievement}</li>
            ))}
          </ul>
        </div>
        <div
          className="text-lato flex items-center justify-start"
          style={{ fontSize: "10px" }}
        >
          <p>Stack: </p>
          {stack.map((item: string) => (
            <TechStackLogo
              logoName={item as StackLogoNames}
              showHelperText={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
