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

