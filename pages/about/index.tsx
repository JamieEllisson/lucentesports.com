
import Head from 'next/head'
import Image from 'next/image'
import { Article } from '../../typings'
import { sanityClient } from '../../lib/sanity.server'
import { urlFor } from "../../lib/sanity"
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'


function about({ articles }:Props) {
  const featured = articles.slice(0,1)
  const latest = articles.slice(1,7)
  return (
    <>
        <Head>
            <title>Lucent Esports | about</title>            
        </Head>

        <Navbar/>

        <main className='index_grid'>
          <section id='featured'>
            <div className='heading_container'><div className='pill'></div><h3>Featured</h3></div>
            {featured.map(post=>(
              <Link key={post._id} href={`news/${post.slug.current}`} passHref>
                <div className='news_link'>
                  <Image className='news_image' src={urlFor(post.mainImage).url()!} alt='new image' layout='intrinsic' objectFit='cover' width={1920} height={1080}/>
                  <div className='news_details_container'>
                    <h2>{post.title}</h2>
                    <h4>{new Date(post._createdAt).toLocaleDateString("en-US",{month: 'long',day: 'numeric',year: 'numeric'})}<span className='dot'></span>{post.categories[0].title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </section>
          <section id='matches'>
            <div className='heading_container'><div className='pill'></div><h3>Recent Matches</h3></div>
            <div className='matches_container'>
              <div className='match'><h4>Match</h4></div>
              <div className='match'><h4>Match</h4></div>
              <div className='match'><h4>Match</h4></div>
              <div className='match'><h4>Match</h4></div>
            </div>
          </section>
          <section id='socials'>
            <div id='social_heading' className='heading_container'><div className='pill'></div><h3>Socials</h3></div>
            <div className='socials_container'>
              <ul className='socials_list'>
                <a href="#" className="social_icon" title="LinkedIn"><svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg></a>
                <a href="#" className="social_icon" title="Twitter"><svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg></a>
                <a href="#" className="social_icon" title="Instagram"><svg viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg></a>
                <a href="#" className="social_icon" title="YouTube"><svg viewBox="0 0 512 512"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"/></svg></a>
                <a href='#' className='social_icon_discord' title='Discord'><svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/></svg></a>
              </ul>
            </div>
          </section>
          <section id='latest'>
            <div className='heading_container'><div className='pill'></div><h3>Latest News</h3></div>
            <div className='latest_grid'>
              {latest.map(post=>(
                <Link key={post._id} href={`news/${post.slug.current}`} passHref>
                  <div className='news_link'>
                    <Image className='news_image' src={urlFor(post.mainImage).url()!} alt='new image' layout='intrinsic' objectFit='cover' width={1920} height={1080}/>
                    <div className='news_details_container'>
                      <h2>{post.title}</h2>
                      <h4>{new Date(post._createdAt).toLocaleDateString("en-US",{month: 'long',day: 'numeric',year: 'numeric'})}<span className='dot-small'></span>{post.categories[0].title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href='/news' passHref>
              <div className='more_news_container'><button className='see_more_btn'>See All News</button></div>
            </Link>
          </section>
          <section id='twitch'>
            <div className='heading_container'><div className='pill'></div><h3>Live Stream</h3></div>
            <div className='twitch_container'>
              <iframe
                src="https://player.twitch.tv/?channel=lucentesports&parent=lucentesports.netlify.app&muted=true"
                height="100%"
                width="100%"
                allowFullScreen>
              </iframe>
            </div>
          </section>
          <section id='twitter'>
            <div id='social_heading' className='heading_container'><div className='pill'></div><h3>Twitter Feed</h3></div>
            <div className='twitter_container'>
              <a className="twitter-timeline" data-lang="en"  data-theme="dark" href="https://twitter.com/Lucent_Esports?ref_src=twsrc%5Etfw"></a> 
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
          </section>
        </main>

        <Footer/>
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