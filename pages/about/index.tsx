
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

        <main>
          
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