import React from 'react'
import IntegratedBbaMbaHero from '../components/IntegratedBbaMba/IntegratedBbaMbaHero'
import IntegratedBbaMbaRecruters from '../components/IntegratedBbaMba/IntegratedBbaMbaRecruters'
// import IntegratedBbaMbaBanner from '../components/IntegratedBbaMba/IntegratedBbaMbaBanner'
// import IntegratedBbaMbaInovation from '../components/IntegratedBbaMba/IntegratedBbaMbaInovation'
import IntegratedBbaMbaReasons from '../components/IntegratedBbaMba/IntegratedBbaMbaReasons'
import IntegratedBbaMbaOfferings from '../components/IntegratedBbaMba/IntegratedBbaMbaOfferings'
import IntegratedBbaMbaBrochure from '../components/IntegratedBbaMba/IntegratedBbaMbaBrochure'
import IntegratedBbaMbaStuddying from '../components/IntegratedBbaMba/IntegratedBbaMbaStuddying'
import IntegratedBbaMbaTestimonials from '../components/IntegratedBbaMba/IntegratedBbaMbaTestimonials'
import IntegratedBbaMbaApply from '../components/IntegratedBbaMba/IntegratedBbaMbaApply'
import IntegratedBbaMbaOverview from '../components/IntegratedBbaMba/IntegratedBbaMbaOverview'
import IntegrateMesureRecruters from '../components/IntegratedBbaMba/IntegratedMesureRecruiters'
import IntegratedBbaMbaGallary from '../components/IntegratedBbaMba/IntegratedBbaMbaGallary'
import IntegratedBbaMbaFooter from '../components/IntegratedBbaMba/IntegatedBbaMbaFooter'
import IntegratedBbaMbaPointers from '../components/IntegratedBbaMba/IntegratedBbaMbaPointers'
import IntegratedBbaMbaPlacement from '../components/IntegratedBbaMba/IntegratedBbaMbaPlacement'
const IntegratedBbaMba  = () => {
  return (
    <div>
      <IntegratedBbaMbaHero/>
      <IntegratedBbaMbaPlacement/>
      <IntegratedBbaMbaRecruters/>
      <IntegratedBbaMbaOverview/> 
      <IntegratedBbaMbaPointers/> 
      <IntegratedBbaMbaReasons/>
      <IntegrateMesureRecruters/>
      <IntegratedBbaMbaOfferings/>
      <IntegratedBbaMbaBrochure/>
      <IntegratedBbaMbaStuddying/> 
      <IntegratedBbaMbaApply/>
      <IntegratedBbaMbaGallary/>
      <IntegratedBbaMbaTestimonials/>  
      <IntegratedBbaMbaFooter/>
    </div>
  )
}

export default IntegratedBbaMba 
