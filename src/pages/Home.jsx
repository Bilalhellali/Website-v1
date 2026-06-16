import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/siteConfig'
import Hero from '../components/sections/Hero'
import FeaturedDestinations from '../components/sections/FeaturedDestinations'
import WhyUs from '../components/sections/WhyUs'
import Testimonials from '../components/sections/Testimonials'
import CTABanner from '../components/sections/CTABanner'

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} - {siteConfig.tagline}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
      </Helmet>
      <Hero />
      <FeaturedDestinations />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}

export default Home
