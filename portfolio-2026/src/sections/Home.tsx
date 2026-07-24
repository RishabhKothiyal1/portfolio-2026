import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Certificates from '../components/Certificates/Certificates'
import Projects from '../components/Projects/Projects'
import Blogs from '../components/Blogs/Blogs'

export default function Home({ showLoader }: { showLoader: boolean }) {
  return (
    <>
      <Hero showLoader={showLoader} />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Blogs />
    </>
  )
}