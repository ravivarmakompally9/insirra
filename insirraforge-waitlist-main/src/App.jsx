import React from 'react'
import { NavBarDemo } from './components/ui/navbar-demo.jsx'
import { HeroGeometric } from './components/ui/shape-landing-hero.jsx'
import { FeaturesSectionWithHoverEffects } from './components/ui/feature-section-with-hover-effects.jsx'
import FeaturesDetail from './components/ui/features-detail.jsx'
import { AboutUsSection } from './components/ui/about-us-section.jsx'
import { WaitlistForm } from './components/ui/waitlist-form.jsx'
import { SparklesPreview } from './components/ui/demo.tsx'

function App() {
  console.log('App component is rendering')
  
  return (
    <div className="min-h-screen">
      <NavBarDemo />
      <HeroGeometric 
        badge="INSIRRAFORGE"
        title1="Your Startup,"
        title2="Supercharged" 
      />
      <FeaturesSectionWithHoverEffects />
      <FeaturesDetail />
      <AboutUsSection />
      <div id="waitlist">
      <WaitlistForm />
      </div>
      <SparklesPreview />
    </div>
  )
}

export default App
