import React, { useRef, Component } from 'react'
import './Resume.scss'
import { BriefcaseIcon, AcademicCapIcon, LightBulbIcon, CollectionIcon, DownloadIcon } from '@heroicons/react/outline'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ReactLogo from '../../assets/logos/react.png'
import JSLogo from '../../assets/logos/JS_logo.png'
import TSLogo from '../../assets/logos/ts.png'
import NodeLogo from '../../assets/logos/node.jpg'
import KotlinLogo from '../../assets/logos/kotlin.png'
import JavaLogo from '../../assets/logos/java.png'
import NextJSLogo from '../../assets/logos/nextjs.svg'
import GraphQLLogo from '../../assets/logos/graphql.png'
import { JobDescription } from './components/JobDescription'
import { Avatar } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import { useReactToPrint } from 'react-to-print';

const items = [
  {
    imageSrc: JSLogo,
    primary: 'JavaScript',
    secondary: '4+ years.'
  },
  {
    imageSrc: TSLogo,
    primary: 'TypeScript',
    secondary: '4+ years.'
  },
  {
    imageSrc: ReactLogo,
    primary: 'React',
    secondary: '4+ years.'
  },
  {
    imageSrc: NodeLogo,
    primary: 'Express JS',
    secondary: '2+ years.'
  },
  {
    imageSrc: NextJSLogo,
    primary: 'Next JS',
    secondary: '1+ years'
  },
  {
    imageSrc: JavaLogo,
    primary: 'Java',
    secondary: '1+ years'
  },
  {
    imageSrc: KotlinLogo,
    primary: 'Kotlin',
    secondary: '1+ years'
  },
  {
    imageSrc: GraphQLLogo,
    primary: 'GraphQL',
    secondary: '1+ years'
  }
]

class ResumeComponent extends Component  {

  render() {
    return (
      <div className='resume-container w-full h-full bg-white flex'>
        <section className=' flex flex-col  w-full h-full ml-10 mr-10 mt-10 mb-10'>
          <section id='information-container' className='flex justify-between w-full'>
            <div className='flex flex-col'>
              <h1 className='text-2xl text-lato'>
                <b>Salvador Gonzalez Montes </b>
              </h1>
              <h2 className='text-lg text-lato'>
                Software Development Engineer
              </h2>
            </div>
            <div>
              <p className='text-lato'>
                Guadalajara, Jalisco. México.
              </p>
              <p className='text-lato'>
                Email: salvadorgonmo@gmail.com
              </p>
              <div className='mr-4 flex items-center'>
                <a rel='noreferrer' target='_blank' href='https://github.com/salvadorgonmo'>
                  <GitHubIcon className='cursor-pointer hover:text-blue-600 transition-hover'/>
                </a>
                <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/salvadorgonmo'>
                  <LinkedInIcon className='ml-4 cursor-pointer hover:text-blue-600 transition-hover' />
                </a>
                <a rel='noreferrer' target='_blank' href='https://twitter.com/salgonmo'>
                  <TwitterIcon className='ml-4 cursor-pointer hover:text-blue-600 transition-hover' />
                </a>
                <a rel='noreferrer' target='_blank' href='https://www.facebook.com/salvador.gonzalez.77377'>
                  <FacebookIcon className='ml-4 cursor-pointer hover:text-blue-600 transition-hover' />
                </a>
              </div>
              <div className='flex text-lato mt-4'>
                <LanguageIcon className='mr-2' />
                <p className='mr-2'>Personal website: </p>
                <a className='text-blue-600 hover:text-blue-800' rel='noreferrer' target='_blank' href='https://salvadorgonmo.dev'>
                  www.salvadorgonmo.dev
                </a>
              </div>
            </div>
          </section>
          <div className='w-full mt-6 separator'/>
          <section>
            <div id='description-card' className='mt-6 border-2 text-sm rounded-lg p-3 text-montserrat'>
              I am a Software Development Engineer who loves to build web applications using JavaScript technologies, but also loves to learn new frameworks from different languages. I like to learn how to solve new algorithm problems by either watch a tutorial on a good platform, or reading algorithm problems and solutions in a book. 
            </div>
          </section>
        <div className='w-full mt-6 separator'/>
        <section className='flex flex-col mt-6'>
          <div className='flex'>
            <BriefcaseIcon className='text-blue-600 w-6 h-6 mr-4 mt-1'/>
            <h2 className='text-lato text-blue-600 text-xl mt-1'>
              EXPERIENCE
            </h2>
          </div>
          <JobDescription 
            dateRange='Nov. 2019 - Present'
            locationText='Guadalajara, Jalisco. México' 
            companyName='Luxoft - DXC'
            positionName='Software Development Engineer II at Expedia'
            jobDescription='I’ve been being working with Luxoft for a while, within a great project Expedia.
            The initial work was a migration for an old stack with JSP as the main core of the
            Expedia pages, to a new progressive web application with React, TypeScript and
            Java/Kotlin. Here I’ve contributed in creation of microservices using Kotlin, and
            crafting the new homepage UI across different Expedia sites in the world.
            Worked with a11y, localization and best code practices.
            Recognized as a Core Approver member team for the main domain application
            across different Expedia brands.'/>
          <JobDescription 
            dateRange='Sept. 2017 – Nov. 2019'
            locationText='Guadalajara, Jalisco. México' 
            companyName='Unosquare'
            positionName='Intern - Software Development Engineer I at Foundation Medicine Inc.'
            jobDescription='I started my professional career with Unosquare. I joined the company as an Intern to start developing software for helping physicians and patients defeat cancer diseases in Foundation Medicine Inc. When the internship has finished, Unosquare and Foundation Medicine offered me a full time employee position to continue working with them. I was involved developing web and mobile application focused on JavaScript technologies such as Express.js, React and React Native.'/>
        </section>
        <div className='w-full mt-6 separator'/>
        <section className='flex flex-col mt-14 mb-6'>
          <div className='flex'>
            <AcademicCapIcon className='text-blue-600 w-6 h-6 mr-4 mt-1'/>
            <h2 className='text-lato text-blue-600 text-xl mt-1'>
              EDUCATION
            </h2>
          </div>
          <div>
            <h2 className='text-lato text-lg'>
              Instituto Tecnológico Superior de Huetamo.
            </h2>
            <h3 className='text-lato text-sm'>
              Bachelor's degree of Computer Systems Engineer.
            </h3>
            <h4 className='text-montserrat text-sm'>
              Quality and Software Innovation speciality.
            </h4>
          </div>
        </section>
        <div className='w-full mt-14 separator'/>
        <section className='flex flex-col mt-6'>
          <div className='flex'>
            <LightBulbIcon className='text-blue-600 w-6 h-6 mr-4 mt-1'/>
            <h2 className='text-lato text-blue-600 text-xl mt-1'>
              SKILLS
            </h2>
          </div>
          <div className=''>
            <List className='grid grid-cols-2'>
  
              {items.map(item => (
                <div>
                <ListItem className=''>
                            <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'white' }}>
                  <img src={item.imageSrc} />
                </Avatar>
              </ListItemAvatar>
                  <ListItemText primary={item.primary} secondary={item.secondary} />
                </ListItem>
                </div>
  
              ))}
            </List>
          </div>
        </section>
        <div className='w-full mt-6 separator'/>
        <section className='flex flex-col mt-6'>
          <div className='flex'>
            <CollectionIcon className='text-blue-600 w-6 h-6 mr-4 mt-1'/>
            <h2 className='text-lato text-blue-600 text-xl mt-1'>
              FREELANCE PROJECTS
            </h2>
          </div>
          <JobDescription 
            dateRange='July 2021 - November 2021'
            locationText='Guadalajara, Jalisco. México' 
            companyName='Clan del Emprendedor.'
            positionName='Frontend Developer'
            jobDescription='Clan Del Emprendedor is an admin application to help users and admins of the product manage their accounts and request changes across the money they want to invest for trading. It is build with React and Ruby.'/>
       
          <JobDescription 
            dateRange='November, 2020 - February, 2021'
            locationText='Guadalajara, Jalisco. México' 
            companyName='Trendzyla.'
            positionName='FullStack Software Developer'
            jobDescription='Trendzyla is a Mexican social network that offers the early published news about different topics, based on artists, music, posts as well as for technology items that are in trends. I joined the team to help build the whole application from scratch, which involved build the architecture for the UI and for the backend with the help of the team. We used React and Express with node.'/>
       
          <JobDescription 
            dateRange='January, 2018 - August, 2018'
            locationText='Guadalajara, Jalisco. México' 
            companyName='HealthTree Foundation.'
            positionName='Junior Frontend Developer.'
            jobDescription='HealthTree Foundation is a Foundation company that helps accelerate the research of the Myloma disease as well as for get a cure. I joined the company to help build new components in the UI as well as for migrating old existing components to a brand new shape with functional components. The code quality was not good, there were too many bad practices around the application so we needed to re-build almost the whole application from scratch to use good practices such as the DRY (do not repeat yourself) principle as well as for reusability of components.'/>
         </section>
        </section>
      </div>
    )
  }
}

export const Resume = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div className='flex flex-col mb-10'>
      <div className='flex hover:text-blue-600 cursor-pointer transition-hover p-2 self-end' onClick={handlePrint}>
        <h4 className='text-lato text-sm' >
            Download CV as PDF
        </h4>
        <DownloadIcon className='h-6 w-6' />
      </div>
      <ResumeComponent ref={componentRef} />

    </div>
  )
}

export default Resume