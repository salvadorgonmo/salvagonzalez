import React from "react";
import "./Card.scss";
import { LinkIcon } from "@heroicons/react/outline";

interface CardProps {
  title: string;
  startDate: string;
  endDate?: string;
  jobDescription: string;
  imageSrc: string;
  imageFullWidth?: boolean;
  companyUrl?: string;
}

export const Card = ({
  title,
  startDate,
  endDate,
  jobDescription,
  imageSrc,
  imageFullWidth = false,
  companyUrl,
}: CardProps) => {
  const handleRedirect = () => {
    window.open(companyUrl);
  };

  return (
    <div className="hover:cursor-pointer mr-10">
        <div className="slide slide-1 bg-white text-bold rounded-xl p-6 flex flex-col items-center justify-center">
          <img
            src={imageSrc}
            className={`${imageFullWidth ? "w-full" : "w-40 h-40"} `}
            alt="Job description"
          />
          <h2 className="mt-3 text-xl text-lato">{title}</h2>
        </div>
        <div className="text-montserrat bg-white shadow-2xl text-bold rounded-xl p-6 flex flex-col justify-around items-center text-center">
          <p className="p-4">
            {startDate} - {endDate || "Current"}
          </p>
          <p className="">{jobDescription}</p>
          {companyUrl && (
            <LinkIcon
              className="w-6 h-6 cursor-pointer text-blue-600 justify-self-end"
              onClick={handleRedirect}
            />
          )}
        </div>
    </div>
  );
};

export default Card;
