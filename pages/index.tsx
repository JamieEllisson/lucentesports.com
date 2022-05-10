/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Article } from '../typings'
import { sanityClient } from '../lib/sanity.server'
import { urlFor } from "../lib/sanity"
import Navbar from './components/Navbar'
import Link from 'next/link'
import Footer from './components/Footer'
import Script from 'next/script'


function Home({ articles }:Props) {
  const featured = articles.slice(0,1)
  const latest = articles.slice(1,7)
  
  return (
    <>
      <Head>
        <title>Lucent Esports</title>             
      </Head>
       
      <Navbar/>

      <main>
        <div className='index_grid'>
          <div className='main_content'>
            <section>
              <div className='heading_container'>
                <div className='pill'></div>
                <h3>Featured</h3>
              </div>          
              <div>
                {featured.map(post=>(
                  <Link key={post._id} href={`news/${post.slug.current}`} passHref>
                    <div className='featured_news'>
                      <img className='news_image' src={urlFor(post.mainImage).url()!} alt=''/>
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
            </section>
            <section>
              <div className='heading_container'>
                <div className='pill'></div>
                <h3>Latest News</h3>
              </div>
              <div className='grid'>
                {latest.map(post=>(
                    <Link key={post._id} href={`news/${post.slug.current}`} passHref>
                      <div className='latest_news'>
                        <img className='news_image' src={urlFor(post.mainImage).url()!} alt=''/>
                        <div className='latest_details'>
                          <h2>{post.title}</h2>
                          <h4>{new Date(post._createdAt).toLocaleDateString("en-US",{month: 'long',day: 'numeric',year: 'numeric'})}<span>{post.categories[0].title}</span></h4>
                      </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link href='#' passHref>
                <div className='see_more_container'>
                  <button className='see_more'><a className='btn_content'>See All News</a></button>
                </div>            
              </Link>          
            </section>
            <section>
              <div className='heading_container'>
                <div className='pill'></div>
                <h3>Our Teams</h3>
              </div>
              <div className='our_teams_container'>
                <img src='/img/leagueoflegends.webp' alt=''/>
                <img src='/img/csgo.webp' alt=''/>
                <img src='/img/fifa.webp' alt=''/>
              </div>
            </section>
            <section className='content_container'>
              <div className='heading_container'>
                <div className='pill'></div>
                <h3>Content, Anytime, Anywhere</h3>            
              </div>
              <p>We strive to provide high-quality, informative, and educational content. We want to show our journey as an organisation to you, the viewer. Whether this is through our Lucent Lundi&apos;s, our player communication videos, or through our podcasts!</p>
              <button className='see_more'>Content</button>
            </section> 
          </div>
          <div className='side_content'>
            <section>
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
            </section>
            <section>
              <div className='heading_container'>
                <div className='pill'></div>
                <h3>Socials</h3>            
              </div>
              
            </section>
            <section>
              <div className='heading_container'>
                <div className='pill'></div>
                <h3>Recent Matches</h3>            
              </div>
              <div className='matches'></div>
            </section>
            <section>
            <div className='heading_container'>
                <div className='pill'></div>
                <h3>Twitter Feed</h3>   
            </div>
           
            <a className="twitter-timeline" data-lang="en" data-height="1440" data-theme="dark" href="https://twitter.com/Lucent_Esports?ref_src=twsrc%5Etfw">Tweets by Lucent_Esports</a> 
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>           
            
            </section>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default Home

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

