import React from 'react'

interface JobDescriptionProps {
  dateRange: string;
  locationText: string;
  companyName: string;
  positionName: string;
  jobDescription: string;
}

export const JobDescription = ({
  dateRange,
  locationText,
  companyName,
  positionName,
  jobDescription
}: JobDescriptionProps) => {
  return (
    <div className='grid grid-cols-4 mb-14 mt-6'>
      <div className='text-montserrat'>
        <p className='text-md '>{dateRange}</p>
        <p className='text-xs'>{locationText}</p>
      </div>
      <div className='ml-4 col-span-3'>
          <h3 className='text-lato text-xl'>
            {companyName}
          </h3>
          <h4 className='text-lato text-lg'>
            {positionName}
          </h4>
          <p className='text-montserrat text-md'>{jobDescription}</p>
      </div>
    </div>
  )
}

export default JobDescription
