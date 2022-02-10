import React from 'react'
import './Portfolio.scss'
import { Card } from '../../components/common/Card'
import ExpediaLogo from '../../assets/logos/expedia-group.jpeg'
import FoundationMedicineLogo from '../../assets/logos/foundation-medicine.png'
import UnosquareLogo from '../../assets/logos/unosquare-logo.png'
import HealthTree from '../../assets/logos/health-tree.jpeg'
import LuxoftLogo from '../../assets/logos/luxoft.png'

export const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className='slidein'>
        <h1 className='mb-6 mt-4 text-3xl text-lato text-center'>
          Some of the projects that I had/have the pleasure to work with.
        </h1>
        <div className='flex justify-around card-container flex-wrap'>
          <Card
            title='Expedia Group'
            startDate='November, 2019'
            jobDescription='Embedded Software Development Engineer II'
            imageSrc={ExpediaLogo}
            companyUrl='https://www.expedia.com' />
          <Card
            title='Foundation Medicine'
            startDate='September, 2017'
            endDate='November, 2019'
            jobDescription='Software Engineer'
            imageSrc={FoundationMedicineLogo}
            companyUrl='https://www.foundationmedicine.com' />
          <Card
            title='Luxoft'
            startDate='November, 2019'
            jobDescription='Regular/Middle Software Engineer'
            imageSrc={LuxoftLogo}
            companyUrl='https://www.luxoft.com' />
          <Card
            title='Unosquare'
            startDate='Septmeber, 2017'
            endDate='November, 2019'
            jobDescription='Intern - Jr. Software Engineer'
            imageSrc={UnosquareLogo}
            companyUrl='https://www.unosquare.com' />
          <Card
            title='Health Tree'
            startDate='January, 2018'
            endDate='August, 2018'
            jobDescription='Part-time Jr. Frontend Developer'
            imageSrc={HealthTree}
            imageFullWidth
            companyUrl='https://www.healthtree.org' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio