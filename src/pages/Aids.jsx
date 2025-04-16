import React from 'react';
import AidsHero from '../components/Aids/AidsHero';
import AidsPointers from '../components/Aids/AidsPointers';
import AidsInovation from '../components/Aids/AidsInovation'
import AidsOverview from '../components/Aids/AidsOverview'
import AidsReasons from '../components/Aids/AidsReasons';
import AidsStudying from '../components/Aids/AidsStudying'
import AidsPlacement from '.././components/Aids/AidsPlacement'
import AidsBrochure from '../components/Aids/AidsBrochure'
import AidsOfferings from "../components/Aids/AidsOfferings"
// import AidsHighlights from '../components/Aids/AidsHighlights'
import AidsBanner from '../components/Aids/AidsBanner';
import AidsApply from '../components/Aids/AidsApply'
import AidsAdmisionCon from '../components/Aids/AidsAdmisionCon'
import AidsTestimonials from '../components/Aids/AidsTestimonials'
import AutoChatbot from '../components/AutoChatbot'
import AidsRecruiters from '../components/Aids/AidsRecruiters'
import AidsFooter from '../components/Aids/AidsFooter';
function Aids() {
  return (
    <div>
      <AidsHero />  
      <AidsPlacement/>
      <AidsRecruiters/>
      <AidsBanner/>
      <AidsInovation/>
      <AidsReasons/>
      <AidsOfferings/>
      <AidsBrochure /> 
      <AidsPointers />
      <AidsStudying/>
      {/* <AidsOverview/> */}
      
      
      {/* <AidsHighlights/> */}
      <AidsTestimonials />
      <AidsApply/>
      <AidsAdmisionCon/>
      <AutoChatbot />
      <AidsFooter/>
    </div>
  );
}

export default Aids;
