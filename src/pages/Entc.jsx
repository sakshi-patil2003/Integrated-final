import React from 'react'
import EntcHero from '../components/Entc/EntcHero'  // Import the EntcHero component
import EntcApply from '../components/Entc/EntcApply'
import EntcBrochure from '../components/Entc/EntcBrochure'
import EntcPointers from '../components/Entc/EntcPointers'
import EntcOfferings from '../components/Entc/EntcOfferings'
import EntcStudying from '../components/Entc/EntcStudying'
import EntcTestimonials from '../components/Entc/EntcTestimonials'
import EntcInovation from "../components/Entc/EntcInovation"
import EntcReasons from "../components/Entc/EntcReasons"
import EntcPlacement from '../components/Entc/EntcPlacement'
import EntcRecruiters from '../components/Entc/EntcRecruiters'
import EntcAdmission from '../components/Entc/EntcAdmission'
import EntcFooter from '../components/Entc/EntcFooter'


function Entc() {
  return (
    <div>
        <EntcHero /> 
        <EntcPlacement/>
        <EntcRecruiters/>
        <EntcAdmission/> 
        <EntcPointers />  
        <EntcInovation/>
        <EntcStudying />
        {/* <EntcOverview/> */}
        <EntcReasons/>
        <EntcOfferings /> 
        <EntcBrochure />
        {/* <EntcHighlights/> */}
        <EntcTestimonials />
        <EntcApply />
        <EntcFooter/>
    </div>
  )
}

export default Entc