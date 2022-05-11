import { GetStaticProps } from "next"
import { sanityClient } from "../../lib/sanity.server"
import { Article } from "../../typings"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function article() {
  return (
    <>
      <Navbar/>

      <main>
        <article>
          This is the article!
        </article>
      </main>

      <Footer/>
    </>
  )
}

export default article

interface Props{
  article: Article;
}

export const getStaticPaths = async () => {

  const query = `*[_type == "post"] {
    _id,
    slug {
    current
  }
  }`;
  
  const article = await sanityClient.fetch(query);

  const paths = article.map((article : Article)=>({
    params: {
      slug : article.slug.current
    }
  }))

  return{
    paths,
    fallback : "blocking",
  };  

};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
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
   longtitle,
   mainImage,
   slug,
   body
  }`;

  const article = await sanityClient.fetch(query, { slug: params?.slug });

  if (!article){
    return{
      notFound : true
    }
  }

  return{
    props: {
      article,
    },
    revalidate: 3600,
  }
}