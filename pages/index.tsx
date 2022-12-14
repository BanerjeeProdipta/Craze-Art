/* eslint-disable react/no-array-index-key */
import dynamic from 'next/dynamic'
import MotionSectionReveal from '../components/ui/MotionSectionReveal'

const LazyHome = dynamic(() => import('../components/landing/Home'), { ssr: false })
const LazySponsored = dynamic(() => import('../components/landing/Sponsored'), { ssr: false })
const LazyAboutUs = dynamic(() => import('../components/landing/AboutUs'), { ssr: false })
const LazyCollection = dynamic(() => import('../components/landing/Collection'), { ssr: false })
const LazyFeaturedArts = dynamic(() => import('../components/landing/FeaturedArts'), { ssr: false })
const LazyTopCreator = dynamic(() => import('../components/landing/TopCreator'), { ssr: false })
const LazyFAQ = dynamic(() => import('../components/landing/FAQ'), { ssr: false })
const LazyCallToAction = dynamic(() => import('../components/landing/CallToAction'), { ssr: false })

const LandingComponents = [LazyHome,
  LazySponsored,
  LazyAboutUs,
  LazyCollection,
  LazyFeaturedArts,
  LazyTopCreator,
  LazyFAQ,
  LazyCallToAction,
]

function Landing() {
  return (
    <div className="space-y-20 lg:space-y-32">
      {LandingComponents.map((Component, index) => (
        <MotionSectionReveal key={index}>
          <Component />
        </MotionSectionReveal>
      ))}

    </div>
  )
}
export default Landing
