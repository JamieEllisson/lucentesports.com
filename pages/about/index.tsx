import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Article } from '../../typings'
import { sanityClient } from '../../lib/sanity.server'
import { urlFor } from "../../lib/sanity"
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'
import Script from 'next/script'

function about({ articles }:Props) {
  const featured = articles.slice(0,1)
  const latest = articles.slice(1,7)
  return (
    <>
        <Head>
            <title>Lucent Esports | about</title>            
        </Head>

        <Navbar/>

        <main>
          <div className='about_grid'>
            <div id='first'>
              <div className='heading_container'>
                  <div className='pill'></div>
                  <h3>Featured</h3>
              </div>          
                <div>
                  {featured.map(post=>(
                    <Link key={post._id} href={`news/${post.slug.current}`} passHref>
                      <div className='featured_news'>
                        <Image src={urlFor(post.mainImage).url()!} alt='' layout='intrinsic' width={1920} height={1080} objectFit='cover'/>                        
                        <div className='featured_details'>
                          <h2>{post.title}</h2>
                          <div>
                            <h4>{new Date(post._createdAt).toLocaleDateString("en-US",{month: 'long',day: 'numeric',year: 'numeric'})}</h4>
                            <h4>{post.categories[0].title}</h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>   

            </div>
            <div className='recent_matches'>              
                <div className='heading_container'>
                    <div className='pill'></div>
                    <h3>Recent Matches</h3>                  
                </div>            
                <div className='rows'>
                  <div>Match 1</div>
                  <div>Match 2</div>
                  <div>Match 3</div>
                </div> 
            </div>                              
            
            <div id='third'>
            <div className='heading_container'>
                  <div className='pill'></div>
                  <h3>Socials</h3>
              </div> 
            </div>    

            
             <div id='fourth'>
            <div className='heading_container'>
                  <div className='pill'></div>
                  <h3>Latest News</h3>
              </div> 
              
                <div className='grid'>
                {latest.map(post=>(
                      <Link key={post._id} href={`news/${post.slug.current}`} passHref>
                        <div className='latest_news'>
                          <Image src={urlFor(post.mainImage).url()!} alt='' layout='intrinsic' width={1920} height={1080} objectFit='cover' loading='lazy'/>
                          <div className='latest_details'>
                            <h2>{post.title}</h2>
                            <h4>{new Date(post._createdAt).toLocaleDateString("en-US",{month: 'long',day: 'numeric',year: 'numeric'})}<span>{post.categories[0].title}</span></h4>
                        </div>
                        </div>
                      </Link>
                    ))}
                  </div>
              </div>
             
             <div id='twitch-player'>      
            <div className='heading_container'>
                  <div className='pill'></div>
                  <h3>Live Stream</h3>
              </div> 
              <div className='twitch'>
                <iframe
                    
                    src="https://player.twitch.tv/?channel=lucentesports&parent=lucentesports.netlify.app&muted=true"
                    height="100%"
                    width="100%"
                    allowFullScreen>
                  </iframe>
                  </div>
            </div>
            <div id='sixth'>
            <div className='heading_container'>
                  <div className='pill'></div>
                  <h3>Twitter Feed</h3>
              </div> 
              <a className="twitter-timeline" data-lang="en" data-height="100%" data-theme="dark" href="https://twitter.com/Lucent_Esports?ref_src=twsrc%5Etfw">Tweets by Lucent_Esports</a> 
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>           
            </div>
          </div>
        </main>
    </>
  )
}

export default about

interface Props{
  articles: [Article];
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title,
    }, 
    publishedAt,
    longtitle,
    mainImage,
    slug
  }`;

  const articles = await sanityClient.fetch(query);

  return{
    props: {
      articles,
    }
  }

};