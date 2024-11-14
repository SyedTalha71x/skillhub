/* eslint-disable no-unused-vars */
import React from "react";
import SkillHome from "./home/page";
import UpSkill from "./upskills/page";
import Learn from './learn/page'
import Evaluate from './evaluate/page'
import FAQS from './faqs/page'
import Experience from './experience/page'

const Page = () => {
  return (
    <>
      <div>
        <SkillHome />
      </div>
      <div>
        <UpSkill />
      </div>
      <div>
        <Learn />
      </div>
      <div>
        <Evaluate />
      </div>
      <div>
        <FAQS />
      </div>
      <div>
        <Experience />
      </div>
    </>
  );
};

export default Page;
