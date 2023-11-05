import Head from 'next/head'
import MainHome from "../components/homes"
import SEOHead from "../components/SEO/seo"
export default function Home() {
  return (
    <>
      <SEOHead title="Home Page" description="home description"  url="/"  />
      <MainHome/>
    </>
  )
}
