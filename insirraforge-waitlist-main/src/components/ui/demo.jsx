import { HeroGeometric } from "./shape-landing-hero.jsx"
import { InsirraForgeFeatures } from "./insirraforge-features.jsx"
import { FeaturesSectionWithHoverEffects } from "./feature-section-with-hover-effects.jsx"
import { NavBarDemo } from "./navbar-demo.jsx"
import { AboutUsSection } from "./about-us-section.jsx"
import FeaturesDetail from "./features-detail.jsx"

function DemoHeroGeometric() {
    return (
        <>
            <NavBarDemo />
            <HeroGeometric 
                badge="INSIRRAFORGE"
                title1="Your Startup,"
                title2="Supercharged" />
            <FeaturesSectionWithHoverEffects />
            <FeaturesDetail />
            <AboutUsSection />
        </>
    )
}

export { DemoHeroGeometric }
