import React from "react";
import Roboto from "../../../assets/logos/robot.png";
import Rocket from "../../../assets/logos/rocket.png";

export const ComingSoon = () => {
  return (
    <div>
      <div className="mb-10 slidein text-3xl text-lato text-center">
        Coming soon
      </div>
      <div className="flex slidein">
        <img src={Roboto} className="w-40 h-40" />
        <img src={Rocket} className="w-40 h-40" />
      </div>
    </div>
  );
};

export default ComingSoon;
