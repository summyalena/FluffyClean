import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageContent from '../comps/ImageContent'
import AboutContent from '../comps/aboutContent'
import Services from '../comps/services'
import Review from '../comps/review'
import Email from './email'
import Footer from '../comps/footer/footregister'
import { Md10K } from 'react-icons/md'




export default function Home(props) {
    
  return (
    <div className={styles.container}>
      <Head>
        <title>FluffyClean</title>
        <meta name="description" content="A laundry Web App" />
        <link rel="icon" href="/favicon.ico" />
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link
            rel="preload"
            href="/fonts/MuseoSans_300.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link
            href="/fonts/font.css"
            type="text/css"
            rel="stylesheet"
            media="screen,print"
          /> 
      </Head>
     <ImageContent/>
    <AboutContent/>
    <Services/>
    <Review/>
    <Email/>
    {/* <Login/> */}
    <Footer/>
    </div>
  )
}

