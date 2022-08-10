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

import Jobs from './components/JobDescriptionInfo.json'
import FreelanceJobs from './components/FreelanceJobsInfo.json'

const items = [
  {
    imageSrc: JSLogo,
    primary: 'JavaScript',
    secondary: '4+ years.'
  },
  {
    imageSrc: TSLogo,
    primary: 'TypeScript',
    secondary: '2+ years.'
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
            <p id='description-card' className='mt-6 border-2 text-sm text-slate-900 rounded-lg p-3 text-lato'>
              I am a Software Development Engineer who loves to build web applications using JavaScript technologies, but also loves to learn new frameworks from different languages. I like to learn how to solve new algorithm problems by either watch a tutorial on a good platform, or reading algorithm problems and solutions in a book. 
            </p>
          </section>
        <div className='w-full mt-6 separator'/>
        <section className='flex flex-col mt-6'>
          <div className='flex'>
            <BriefcaseIcon className='text-blue-600 w-6 h-6 mr-4 mt-1'/>
            <h2 className='text-lato text-blue-600 text-xl mt-1'>
              EXPERIENCE
            </h2>
          </div>
          {Jobs.jobs.map(job => (
            <JobDescription
              dateRange={job.dateRange}
              locationText={job.locationText}
              companyName={job.companyName}
              positionName={job.positionName}
              jobDescription={job.jobDescription.join('\n')} />
          ))}

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
        <section className='flex flex-col '>
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
        <div className='w-full mt-20 separator'/>
        <section className='flex flex-col mt-6'>
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