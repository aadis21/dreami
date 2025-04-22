import React, { useEffect } from 'react'
import Herosection from './components/Herosection';
// import Header from '../Global/Header/Header';
// import Form from '../Global/Form/form';
import Herosecond from './components/Herosecond';
import Projects from './components/Projects';
import Download from './components/Download';
import Webinar from './components/Webinar';
import Career from './components/Career';
import FAQSection from './components/fnq';
import Courses from './components/Coursescards';
//import { Features } from './components/Feature';


import ComparisonTable from './components/ComparisonTable';
import Verify from '../About/components/Verify';


export default function Landing() {

  return (
    <>
      <Herosection />
      <Herosecond />
      <Projects />
      {/* <Download /> */}
      <Verify />
      <Webinar />
      <Courses />
      <div data-aos='fade-up'>
        <ComparisonTable />
      </div>
      <Career />
      <FAQSection />



      {/* <ComparisonTable/> */}

    </>
  )
}
