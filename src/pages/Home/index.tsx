import React, { useState } from "react";
import { Menu } from "../../components/common/Menu";
import { Card } from "../../components/common/Card";
import { Paper } from "@mui/material";
import MyProfilePicture from "../../assets/images/profile_pic.jpg";
import { useStyles } from "./styles";
import Logo from "../../logo.svg";
import ReactLogo from "../../assets/logos/react.png";
import JSLogo from "../../assets/logos/JS_logo.png";
import TSLogo from "../../assets/logos/ts.png";
import ITSHLogo from "../../assets/logos/ITSH.png";
import NodeLogo from "../../assets/logos/node.jpg";
import KotlinLogo from "../../assets/logos/kotlin.png";
import JavaLogo from "../../assets/logos/java.png";
import NextJSLogo from "../../assets/logos/nextjs.svg";
import GraphQLLogo from "../../assets/logos/graphql.png";
import { FolderList } from "../../components/common/List";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SwiperCarousel } from "../../components/common/SwiperCarousel";

import "./Home.scss";

const experiencedTechnologyItems = [
  {
    imageSrc: JSLogo,
    primary: "JavaScript",
    secondary: "6+ years.",
  },
  {
    imageSrc: TSLogo,
    primary: "TypeScript",
    secondary: "4+ years.",
  },
  {
    imageSrc: ReactLogo,
    primary: "React",
    secondary: "6+ years.",
  },
  {
    imageSrc: NodeLogo,
    primary: "Express JS",
    secondary: "4+ years.",
  },
  {
    imageSrc: NextJSLogo,
    primary: "Next JS",
    secondary: "1+ years",
  },
];

const learningTechItems = [
  {
    imageSrc: JavaLogo,
    primary: "Java",
    secondary: "Backend microservices - Algorithms & Data structures",
  },
  {
    imageSrc: KotlinLogo,
    primary: "Kotlin",
    secondary: "Kotlin for API microservices.",
  },
  {
    imageSrc: GraphQLLogo,
    primary: "GraphQL",
    secondary: "GraphQL to ease connection between APIs and UIs.",
  },
];

export const Home = () => {
  const styles = useStyles();
  const [showMore, setShowMore] = useState(false);
  const [slideClass, setSlideClass] = useState("");
  const [expandClass, setExpandClass] = useState("");

  const handleShowMore = () => {
    if (showMore) {
      setSlideClass("slideout");
      setExpandClass("collapse");
      removeAnimation();
    } else {
      addAnimation();
      setSlideClass("slidein");
      setExpandClass("expand");
    }
    setShowMore(!showMore);
  };

  const addAnimation = () => {
    const element = document.getElementById("collapsible-content");
    element!.style.display = "block";
    element!.style.maxHeight = element?.scrollHeight + "px";

    setTimeout(() => {
      console.log("scrolling now");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  const removeAnimation = () => {
    const element = document.getElementById("collapsible-content");
    element!.style.maxHeight = "";
  };

  return (
    <div className="home-container w-full">
      <div className="inner-container slidein flex flex-col justify-around h-full">
        <div className="img-container items-center flex flex-col sm:flex-row sm:justify-center">
          <img
            src={MyProfilePicture}
            alt="Profile img"
            className="home-profile-picture"
          />
          <div className="w-full job-description-container self-center flex flex-col items-center">
            <h1 className="mt-2 text-2xl sm:text-3xl text-lato">
              Hello, I am Salvador Gonzalez!
            </h1>
            <h3 className="mt-3 text-lato text-lg text-center sm:text-xl">
              A passionate Software Engineer that loves JavaScript technologies.
            </h3>
            <div className="flex items-center justify-center sm:justify-start">
              <img src={Logo} className="w-20 h-20" />
              <img src={JSLogo} className="w-12 h-12" />
              <img src={TSLogo} className="ml-4 w-12 h-12" />
            </div>
          </div>
        </div>
        {/* <div className='cards-container'>
        <Paper
          sx={{ backgroundColor: '#2b6777', padding: '10px',borderRadius: '20px', color: 'white' }}
          className={styles.paper} 
          elevation={10}
        >
               <p>
        Welcome to my site!
        Here you will find everything about my professional career.

        Feel free to take a road trip and look around the whole web page.
      </p>
        </Paper>
      </div> */}

        <div className="m-10 flex flex-col items-center">
          <h1 className="mb-4 text-2xl sm:text-4xl text-lato text-center">
            Welcome to my personal space.
          </h1>
          <h2 className="text-xl sm:text-2xl text-lato text-center">
            Here you can find details about my professional career, and more.
          </h2>
        </div>

        <div className="mt-6 flex flex-col items-center ">
          {!showMore && (
            <>
              <p className="mb-3 text-lato">More about myself...</p>
              <ChevronDownIcon
                className="bg-white cursor-pointer rounded-full border animate-bounce w-9 h-9 shadow-xl text-blue-700"
                onClick={handleShowMore}
              />
            </>
          )}
        </div>

        <div id="collapsible-content" className="collapse">
          <div
            className={`flex ${slideClass}  flex-wrap justify-center lg:flex-nowrap lg:justify-between`}
          >
            <div className="bg-white shadow-lg p-10 rounded-xl lg:mr-10 card-width">
              <h1 className="mb-4 text-2xl text-center"> About me </h1>

              <p className="text-justify text-montserrat">
                I am Software Engineer that likes to do a bunch of things;
                either for technical as well as for personal hobbies. Let me
                first talk about technical ones.
              </p>

              <p className="mt-4 text-justify text-montserrat">
                I like to read books and watch tutorials about new things, like
                new ways of doing the same sort of stuff; from transforming an
                array of strings with cool methods to apply new hooks that can
                lead to a better performance in a web application. I prefer to
                read books because I enjoy having them in a collection (a
                personal taste), like the "You don't know JS" book series from
                Kyle Simpson, which is my favorite one.
              </p>
            </div>

            <div className="flex flex-col p-10 items-center shadow-lg bg-white p-10 rounded-xl mt-10 lg:mt-0 card-width">
              <h1 className="mb-1 text-2xl text-center">
                Professional Education
              </h1>
              <h2 className="mb-1 text-center text-l text-lato">
                Instituto Tecnologico Superior de Huetamo
              </h2>
              <h3 className="mb-4 text-center text-sm text-lato">
                Huetamo de Nuñez, Michoacan, Mexico.
              </h3>
              <img src={ITSHLogo} className=" w-20 h-20" />
              <h3 className="mb-1 text-center">2013 - 2018</h3>

              <p className="text-justify text-montserrat">
                I studied the Computer Systems Engineering career over 5 years,
                with an specialization of "Innovation and Software Quality".
              </p>
            </div>
          </div>

          <div
            className={`flex lg:justify-between ${slideClass} mb-10 flex-wrap justify-center lg:flex-nowrap`}
          >
            <div className="bg-white shadow-lg p-10 rounded-xl mt-10 lg:mr-10 card-width">
              <h1 className="text-2xl text-center">
                Technologies that I have worked with.
              </h1>

              <p className="mt-4 text-justify text-montserrat">
                I have had the opportunity to work with a different set of
                languages and technologies across my professional career.
              </p>

              <p className="mt-4 text-justify text-montserrat">
                Here is the list of my most experienced (and favorite) ones.
              </p>

              <FolderList items={experiencedTechnologyItems} />
            </div>
            <div className="bg-white shadow-lg p-10 rounded-xl mt-10 card-width flex flex-col">
              <h1 className="text-2xl text-center">
                Technologies that I am currently learning.
              </h1>

              <p className="mt-4 text-l text-montserrat text-center">
                "The only way to learn a new programming language is by writing
                programs in it."
              </p>

              <FolderList items={learningTechItems} />
            </div>
          </div>

          <h2 className="mb-1 text-3xl text-lato text-center">
            What my colleagues says about me.
          </h2>
          <h3 className="mb-10 text-xl text-lato text-center">
            (Recommendations taken from my LinkedIn)
          </h3>

          <div>
            <SwiperCarousel />
          </div>

          <div className="mt-20 mb-20 flex flex-col">
            <p className="sm:text-xl md:text-2xl paragraph text-center">
              “Programming is not about what you know, it is about what you can
              figure out.”
            </p>
            <p className="sm:text-xl md:text-2xl paragraph text-center">
              - Chris Pine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
