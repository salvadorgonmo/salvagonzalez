import React, { useRef, Component } from "react";
import "./Resume.scss";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  LightBulbIcon,
  DownloadIcon,
} from "@heroicons/react/outline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ReactLogo from "../../assets/logos/react.png";
import JSLogo from "../../assets/logos/JS_logo.png";
import TSLogo from "../../assets/logos/ts.png";
import NodeLogo from "../../assets/logos/node.jpg";
import KotlinLogo from "../../assets/logos/kotlin.png";
import JavaLogo from "../../assets/logos/java.png";
import TailwindLogo from "../../assets/logos/TailwindLogo.png";
import NextJSLogo from "../../assets/logos/nextjs.svg";
import GraphQLLogo from "../../assets/logos/graphql.png";
import { JobDescription } from "./components/JobDescription";
import { Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useReactToPrint } from "react-to-print";
import "./styles.css";

import Jobs from "./components/JobDescriptionInfo.json";

const items = [
  {
    imageSrc: JSLogo,
    primary: "JavaScript",
    secondary: "6+ years.",
  },
  {
    imageSrc: ReactLogo,
    primary: "React",
    secondary: "6+ years.",
  },
  {
    imageSrc: TSLogo,
    primary: "TypeScript",
    secondary: "4+ years.",
  },
  {
    imageSrc: NodeLogo,
    primary: "Express JS",
    secondary: "4+ years.",
  },
  {
    imageSrc: GraphQLLogo,
    primary: "GraphQL",
    secondary: "3+ years",
  },
];

class ResumeComponent extends Component {
  render() {
    return (
      <div className="resume-container w-full h-full bg-white flex">
        <section className=" flex flex-col  w-full h-full ml-10 mr-10 mt-10 mb-10">
          <section
            id="information-container"
            className="flex justify-between w-full"
          >
            <div className="flex flex-col w-full">
              <h1 className="text-lg text-lato">
                <b>Salvador Gonzalez Montes </b>
              </h1>
              <h2 className="text-lg text-lato">Frontend Engineer</h2>
              <h3 className="text-sm text-lato">JavaScript Enthusiast</h3>
            </div>
            <div className="w-full">
              <div className="flex w-full justify-between">
                <p className="text-lato">Morelia, Michoacán. México.</p>
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/salvadorgonmo"
                  >
                    <GitHubIcon className="cursor-pointer hover:text-blue-600 transition-hover" />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/salvadorgonmo"
                  >
                    <LinkedInIcon className="ml-4 cursor-pointer hover:text-blue-600 transition-hover" />
                  </a>
                </div>
              </div>

              <a href="mailto:salvadorgonmo@gmail.com" className="text-lato">
                Email: salvadorgonmo@gmail.com
              </a>

              {/* <div className='flex text-lato mt-4'>
                <LanguageIcon className='mr-2' />
                <p className='mr-2'>Personal website: </p>
                <a className='text-blue-600 hover:text-blue-800' rel='noreferrer' target='_blank' href='https://salvadorgonmo.dev'>
                  www.salvadorgonmo.dev
                </a>
              </div> */}
            </div>
          </section>
          <div className="w-full mt-4 separator" />
          <section className="flex flex-col ">
            <div className="flex">
              <LightBulbIcon className="text-blue-600 w-6 h-6 mr-4 mt-1" />
              <h2 className="text-lato text-blue-600 text-lg">Tech Stack</h2>
            </div>
            <div>
              <List className="grid grid-cols-5">
                {items.map((item) => (
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            bgcolor: "white",
                            height: "25px",
                            width: "25px",
                          }}
                        >
                          <img src={item.imageSrc} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.primary}
                        secondary={item.secondary}
                      />
                    </ListItem>
                  </div>
                ))}
              </List>
            </div>
          </section>
          <div className="w-full separator" />
          <section className="flex flex-col">
            <div className="flex">
              <BriefcaseIcon className="text-blue-600 w-6 h-6 mr-4 mt-1" />
              <h2 className="text-lato text-blue-600 text-lg mt-1">
                Experience
              </h2>
            </div>
            <div className="grid grid-cols-2">
              {Jobs.jobs.map((job) => (
                <JobDescription
                  dateRange={job.dateRange}
                  locationText={job.locationText}
                  isCurrentJob={job.companyName === "Eden Medical"}
                  companyName={job.companyName}
                  positionName={job.positionName}
                  responsibilities={job.responsibilities}
                  achievements={job.achievements}
                  stack={job.stack}
                  jobDescription={job.jobDescription.join("\n")}
                />
              ))}
            </div>
          </section>
          <div className="w-full mt-8 separator" />
          <section className="flex flex-col mt-4">
            <div className="flex">
              <AcademicCapIcon className="text-blue-600 w-6 h-6 mr-4 mt-1" />
              <h2 className="text-lato text-blue-600 text-lg mt-1">
                Education
              </h2>
            </div>
            <div>
              <h2 className="text-lato text-md">
                Instituto Tecnológico Superior de Huetamo.
              </h2>
              <h3 className="text-lato text-xs">
                Bachelor's degree of Computer Systems Engineer.
              </h3>
              <h4 className="text-montserrat text-xs">
                Quality and Software Innovation speciality.
              </h4>
            </div>
          </section>
          {/* <div className='w-full mt-20 separator'/> */}
          {/* <section className='flex flex-col mt-6'>
          <div className='flex'>
            <CollectionIcon className='text-blue-600 w-6 h-6 mr-4 mt-1'/>
            <h2 className='text-lato text-blue-600 text-xl'>
              FREELANCE PROJECTS
            </h2>
          </div>
          {FreelanceJobs.jobs.map(job => (
            <JobDescription
              dateRange={job.dateRange}
              locationText={job.locationText}
              companyName={job.companyName}
              positionName={job.positionName}
              jobDescription={job.jobDescription.join('\n')} />
          ))}
         </section> */}
        </section>
      </div>
    );
  }
}

export const Resume = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="flex flex-col mb-10">
      <div
        className="flex hover:text-blue-600 cursor-pointer transition-hover p-2 self-end"
        onClick={handlePrint}
      >
        <h4 className="text-lato text-sm">Download CV as PDF</h4>
        <DownloadIcon className="h-6 w-6" />
      </div>
      <ResumeComponent ref={componentRef} />
    </div>
  );
};

export default Resume;
